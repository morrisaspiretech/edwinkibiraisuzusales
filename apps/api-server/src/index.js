"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("database");
dotenv_1.default.config();
const prisma = new database_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Get all vehicles with advanced filtering
app.get('/api/vehicles', async (req, res) => {
    try {
        const { make, model, minPrice, maxPrice, year, bodyType, fuelType, status } = req.query;
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
        const { make } = req.query;
        const where = {};
        if (make)
            where.make = make;
        const models = await prisma.cRSPModel.findMany({
            where,
            select: {
                make: true,
                model: true,
                bodyType: true,
                fuelType: true,
                engineCC: true,
                referencePrice: true
            }
        });
        res.json(models);
    }
    catch (error) {
        console.error('Error fetching CRSP data:', error);
        res.status(500).json({ error: 'Failed to fetch CRSP data' });
    }
});
app.listen(PORT, () => {
    console.log(`🚀 Aspire Motors API Server running on http://localhost:${PORT}`);
});
