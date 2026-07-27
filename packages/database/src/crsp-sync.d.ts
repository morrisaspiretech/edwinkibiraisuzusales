export declare function parseCrspXlsx(filePath: string): Promise<{
    make: string;
    model: string;
    trim: string;
    engineCc: number;
    year: number;
    crspPrice: number;
}[]>;
export declare function syncCrspToDatabase(entries: any[]): Promise<void>;
