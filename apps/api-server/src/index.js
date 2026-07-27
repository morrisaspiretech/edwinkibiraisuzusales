"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const multer_1 = __importDefault(require("multer"));
const supabase_js_1 = require("@supabase/supabase-js");
const database_1 = require("database");
dotenv_1.default.config();
const prisma = new database_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Supabase admin client (uses service_role key to bypass RLS)
const supabaseAdmin = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
// Multer for handling file uploads (in-memory)
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Root route for health check
app.get('/', (req, res) => {
    res.json({
        status: 'online',
        message: 'Aspire Motors API Server is running',
        endpoints: ['/api/vehicles', '/api/sourcing', '/api/leads']
    });
});
// Get all vehicles with advanced filtering
app.get('/api/vehicles', async (req, res) => {
    try {
        const { make, model, minPrice, maxPrice, year, bodyType, fuelType, category, status } = req.query;
        const where = {};
        if (make)
            where.make = { contains: make };
        if (model)
            where.model = { contains: model };
        if (year)
            where.year = parseInt(year);
        if (bodyType)
            where.bodyType = bodyType;
        if (fuelType)
            where.fuelType = fuelType;
        if (category)
            where.category = category;
        if (status)
            where.status = status;
        if (minPrice || maxPrice) {
            where.price = {};
            if (minPrice)
                where.price.gte = parseFloat(minPrice);
            if (maxPrice)
                where.price.lte = parseFloat(maxPrice);
        }
        const vehicles = await prisma.vehicle.findMany({
            where,
            include: {
                images: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(vehicles);
    }
    catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
});
// Get a single vehicle by ID
app.get('/api/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await prisma.vehicle.findUnique({
            where: { id },
            include: {
                images: true
            }
        });
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }
        res.json(vehicle);
    }
    catch (error) {
        console.error('Error fetching vehicle details:', error);
        res.status(500).json({ error: 'Failed to fetch vehicle details' });
    }
});
// Get KRA CRSP models for search suggestions
app.get('/api/crsp', async (req, res) => {
    try {
        const { make, search } = req.query;
        const where = {};
        if (make)
            where.make = make;
        if (search) {
            where.OR = [
                { make: { contains: search, mode: 'insensitive' } },
                { model: { contains: search, mode: 'insensitive' } }
            ];
        }
        const models = await prisma.cRSPModel.findMany({
            where,
            select: {
                make: true,
                model: true,
                bodyType: true,
                fuelType: true,
                engineCC: true,
                referencePrice: true
            },
            orderBy: [{ make: 'asc' }, { model: 'asc' }]
        });
        res.json(models);
    }
    catch (error) {
        console.error('Error fetching CRSP data:', error);
        res.status(500).json({ error: 'Failed to fetch CRSP data' });
    }
});
// Seed CRSP data from real KRA July 2025 dataset (admin)
app.post('/api/admin/seed-crsp', async (req, res) => {
    try {
        const fs = await Promise.resolve().then(() => __importStar(require('fs')));
        const path = await Promise.resolve().then(() => __importStar(require('path')));
        // Try multiple paths to find the seed file
        const candidates = [
            path.join(__dirname, '../../packages/kra-crsp-data/crsp-mock.json'),
            path.join(process.cwd(), 'packages/kra-crsp-data/crsp-mock.json'),
            path.join(process.cwd(), '../../packages/kra-crsp-data/crsp-mock.json'),
        ];
        let finalPath = '';
        for (const p of candidates) {
            if (fs.existsSync(p)) {
                finalPath = p;
                break;
            }
        }
        if (!finalPath) {
            return res.status(404).json({ error: 'Seed file not found. Searched: ' + candidates.join(', ') });
        }
        const crspData = JSON.parse(fs.readFileSync(finalPath, 'utf8'));
        console.log(`Seeding ${crspData.length} KRA CRSP models (batch)...`);
        // Batch approach: clear existing + bulk insert (much faster for 4000+ records)
        await prisma.cRSPModel.deleteMany({});
        // Prisma createMany has a limit, so chunk into batches of 500
        const BATCH_SIZE = 500;
        let inserted = 0;
        for (let i = 0; i < crspData.length; i += BATCH_SIZE) {
            const batch = crspData.slice(i, i + BATCH_SIZE);
            await prisma.cRSPModel.createMany({ data: batch, skipDuplicates: true });
            inserted += batch.length;
        }
        console.log(`Seed complete: ${inserted} models inserted.`);
        res.json({
            message: `Successfully seeded ${inserted} KRA CRSP models (July 2025)`,
            count: inserted,
            source: 'KRA Vehicle CRSP July 2025'
        });
    }
    catch (error) {
        console.error('Error seeding CRSP data:', error);
        res.status(500).json({ error: 'Failed to seed CRSP data', details: error instanceof Error ? error.message : String(error) });
    }
});
// --- File Upload Route ---
app.post('/api/admin/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }
        const fileName = `${Date.now()}-${file.originalname}`;
        const { data, error } = await supabaseAdmin.storage
            .from('vehicles')
            .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: false
        });
        if (error) {
            console.error('Supabase upload error:', error);
            return res.status(500).json({ error: 'Failed to upload file', details: error.message });
        }
        const { data: { publicUrl } } = supabaseAdmin.storage
            .from('vehicles')
            .getPublicUrl(fileName);
        res.json({ url: publicUrl });
    }
    catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});
// --- Admin Routes ---
// Create new vehicle
app.post('/api/admin/vehicles', async (req, res) => {
    try {
        const { make, model, year, price, mileage, fuelType, engineCC, transmission, bodyType, color, driveType, description, features, images, category, status } = req.body;
        const vehicle = await prisma.vehicle.create({
            data: {
                make: make || "Unknown",
                model: model || "Unknown",
                year: parseInt(year) || new Date().getFullYear(),
                price: parseFloat(price) || 0,
                mileage: mileage ? parseInt(mileage) : 0,
                fuelType: fuelType || "",
                engineCC: engineCC ? parseInt(engineCC) : 0,
                transmission: transmission || "",
                bodyType: bodyType || "",
                color: color || null,
                driveType: driveType || null,
                description: description || null,
                features: Array.isArray(features) ? features : [],
                category: category || 'CAR',
                status: status || 'AVAILABLE',
                images: {
                    create: (images || []).map((img) => ({
                        url: img.url,
                        isPrimary: img.isPrimary
                    }))
                }
            },
            include: {
                images: true
            }
        });
        res.status(201).json(vehicle);
    }
    catch (error) {
        console.error('Error creating vehicle:', error);
        res.status(500).json({ error: 'Failed to create vehicle', details: error instanceof Error ? error.message : String(error) });
    }
});
// Update existing vehicle
app.put('/api/admin/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { make, model, year, price, mileage, fuelType, engineCC, transmission, bodyType, color, driveType, description, features, images, category, status } = req.body;
        // Delete existing images to replace them
        await prisma.vehicleImage.deleteMany({
            where: { vehicleId: id }
        });
        const vehicle = await prisma.vehicle.update({
            where: { id },
            data: {
                make: make || "Unknown",
                model: model || "Unknown",
                year: parseInt(year) || new Date().getFullYear(),
                price: parseFloat(price) || 0,
                mileage: mileage ? parseInt(mileage) : 0,
                fuelType: fuelType || "",
                engineCC: engineCC ? parseInt(engineCC) : 0,
                transmission: transmission || "",
                bodyType: bodyType || "",
                color: color || null,
                driveType: driveType || null,
                description: description || null,
                features: Array.isArray(features) ? features : [],
                category: category || 'CAR',
                status: status || 'AVAILABLE',
                images: {
                    create: (images || []).map((img) => ({
                        url: img.url,
                        isPrimary: img.isPrimary
                    }))
                }
            },
            include: {
                images: true
            }
        });
        res.json(vehicle);
    }
    catch (error) {
        console.error('Error updating vehicle:', error);
        res.status(500).json({ error: 'Failed to update vehicle', details: error instanceof Error ? error.message : String(error) });
    }
});
// Delete vehicle
app.delete('/api/admin/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Delete images first due to relation
        await prisma.vehicleImage.deleteMany({
            where: { vehicleId: id }
        });
        await prisma.vehicle.delete({
            where: { id }
        });
        res.status(204).send();
    }
    catch (error) {
        console.error('Error deleting vehicle:', error);
        res.status(500).json({ error: 'Failed to delete vehicle' });
    }
});
// --- Lead Routes ---
// Create a new lead (public)
app.post('/api/leads', async (req, res) => {
    try {
        const { name, email, phone, message, vehicleId } = req.body;
        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                message,
                vehicleId
            }
        });
        res.status(201).json(lead);
    }
    catch (error) {
        console.error('Error creating lead:', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
});
// Get all leads (admin)
app.get('/api/admin/leads', async (req, res) => {
    try {
        const leads = await prisma.lead.findMany({
            include: {
                vehicle: {
                    select: {
                        make: true,
                        model: true,
                        year: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(leads);
    }
    catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});
// Update lead status (admin)
app.put('/api/admin/leads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const lead = await prisma.lead.update({
            where: { id },
            data: { status }
        });
        res.json(lead);
    }
    catch (error) {
        console.error('Error updating lead status:', error);
        res.status(500).json({ error: 'Failed to update lead status' });
    }
});
// --- Sourcing Request Routes ---
// Create a new sourcing request (public)
app.post('/api/sourcing', async (req, res) => {
    try {
        const { name, email, phone, category, make, model, fuelType, yearMin, budgetMax, message } = req.body;
        const request = await prisma.sourcingRequest.create({
            data: {
                name,
                email,
                phone,
                category,
                make,
                model,
                fuelType,
                yearMin: yearMin ? parseInt(yearMin) : null,
                budgetMax: budgetMax ? parseFloat(budgetMax) : null,
                message
            }
        });
        res.status(201).json(request);
    }
    catch (error) {
        console.error('Error creating sourcing request:', error);
        res.status(500).json({ error: 'Failed to submit sourcing request' });
    }
});
// Get all sourcing requests (admin)
app.get('/api/admin/sourcing', async (req, res) => {
    try {
        const requests = await prisma.sourcingRequest.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(requests);
    }
    catch (error) {
        console.error('Error fetching sourcing requests:', error);
        res.status(500).json({ error: 'Failed to fetch sourcing requests' });
    }
});
// Update sourcing request status (admin)
app.put('/api/admin/sourcing/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const request = await prisma.sourcingRequest.update({
            where: { id },
            data: { status }
        });
        res.json(request);
    }
    catch (error) {
        console.error('Error updating sourcing request:', error);
        res.status(500).json({ error: 'Failed to update sourcing request' });
    }
});
const port = typeof PORT === 'string' ? parseInt(PORT) : PORT;
app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Aspire Motors API Server running on http://127.0.0.1:${port}`);
});
