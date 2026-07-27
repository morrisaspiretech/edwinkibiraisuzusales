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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCrspXlsx = parseCrspXlsx;
exports.syncCrspToDatabase = syncCrspToDatabase;
const xlsx = __importStar(require("xlsx"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function parseCrspXlsx(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    // Porting the header-finding logic from legacy inspect_xlsx.js
    let headerRowIndex = -1;
    let headers = [];
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (row.some(cell => String(cell).toLowerCase().includes('make'))) {
            headerRowIndex = i;
            headers = row.map(h => String(h).toLowerCase().trim());
            break;
        }
    }
    if (headerRowIndex === -1) {
        throw new Error("Could not find CRSP header row with 'Make'");
    }
    const result = [];
    const findIndex = (search) => headers.findIndex(h => h.includes(search));
    const indices = {
        make: findIndex('make'),
        model: findIndex('model'),
        trim: findIndex('trim'),
        engine: findIndex('engine'),
        year: findIndex('year'),
        price: findIndex('crsp') || findIndex('price')
    };
    for (let i = headerRowIndex + 1; i < data.length; i++) {
        const row = data[i];
        if (!row[indices.make])
            continue;
        const crspEntry = {
            make: String(row[indices.make]),
            model: String(row[indices.model] || ''),
            trim: String(row[indices.trim] || ''),
            engineCc: parseInt(String(row[indices.engine]).replace(/[^0-9]/g, '')) || 0,
            year: parseInt(String(row[indices.year])) || 2025,
            crspPrice: parseFloat(String(row[indices.price]).replace(/[^0-9.]/g, '')) || 0
        };
        result.push(crspEntry);
    }
    console.log(`Parsed ${result.length} vehicles from CRSP list.`);
    return result;
}
async function syncCrspToDatabase(entries) {
    // Batch upsert logic for Supabase/Prisma
    console.log("Starting CRSP sync to database...");
    // Implementation note: In production, use transaction or bulk insert
    for (const entry of entries) {
        await prisma.crspValue.create({
            data: {
                make: entry.make,
                model: entry.model,
                trim: entry.trim,
                engineCc: entry.engineCc,
                year: entry.year,
                crspPrice: entry.crspPrice,
            }
        });
    }
    console.log("Sync complete.");
}
