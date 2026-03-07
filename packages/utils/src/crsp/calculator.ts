export interface TaxCalculationParams {
  originalCrsp: number;
  engineCapacityCc: number;
  yearOfManufacture: number;
  isCommercial: boolean;
  currentYear?: number;
}

export interface TaxCalculationResult {
  depreciatedCrsp: number;
  importDuty: number;
  exciseDuty: number;
  idf: number;
  rdl: number;
  vat: number;
  totalTaxes: number;
  estimatedTotal: number;
  depreciationRate: number;
}

export function getDepreciationRate(yearOfManufacture: number, currentYear: number = 2026): number {
  const age = currentYear - yearOfManufacture;
  if (age <= 0) return 0.0;
  if (age === 1) return 0.05;
  if (age === 2) return 0.20;
  if (age === 3) return 0.35;
  if (age === 4) return 0.50;
  if (age === 5) return 0.60;
  if (age >= 6) return 0.65;
  return 0.65;
}

export function calculateTaxes({
  originalCrsp,
  engineCapacityCc,
  yearOfManufacture,
  isCommercial,
  currentYear = 2026
}: TaxCalculationParams): TaxCalculationResult {
  const rules = {
    IMPORT_DUTY_RATE: 0.35, // Updated from 0.25 based on user's 35% requirement
    EXCISE_DUTY_BASE: 0.20,
    EXCISE_DUTY_HIGH: 0.30,
    IDF_RATE: 0.025, // Updated from 0.035 based on user's 2.5% requirement
    RDL_RATE: 0.02,
    VAT_RATE: 0.16
  };

  const depreciationRate = getDepreciationRate(yearOfManufacture, currentYear);
  const depreciatedCrsp = originalCrsp * (1 - depreciationRate);

  const importDuty = depreciatedCrsp * rules.IMPORT_DUTY_RATE;

  let exciseDuty = 0;
  if (!isCommercial) {
    const exciseRate = engineCapacityCc > 1500 ? rules.EXCISE_DUTY_HIGH : rules.EXCISE_DUTY_BASE;
    exciseDuty = (depreciatedCrsp + importDuty) * exciseRate;
  }

  const idf = depreciatedCrsp * rules.IDF_RATE;
  const rdl = depreciatedCrsp * rules.RDL_RATE;

  const vat = (depreciatedCrsp + importDuty + exciseDuty + idf + rdl) * rules.VAT_RATE;
  
  const totalTaxes = importDuty + exciseDuty + idf + rdl + vat;
  const estimatedTotal = depreciatedCrsp + totalTaxes;

  return {
    depreciatedCrsp,
    importDuty,
    exciseDuty,
    idf,
    rdl,
    vat,
    totalTaxes,
    estimatedTotal,
    depreciationRate
  };
}
