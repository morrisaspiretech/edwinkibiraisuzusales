import * as xlsx from 'xlsx';
import { PrismaClient } from '@repo/database';

const prisma = new PrismaClient();

export async function parseCrspXlsx(filePath: string) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: any[][] = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    // Porting the header-finding logic from legacy inspect_xlsx.js
    let headerRowIndex = -1;
    let headers: string[] = [];

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
    const findIndex = (search: string) => headers.findIndex(h => h.includes(search));

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
        if (!row[indices.make]) continue;

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

export async function syncCrspToDatabase(entries: any[]) {
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
