export interface CRSPModel {
  make: string;
  model: string;
  bodyType: string;
  fuelType: string;
  engineCC: number;
  referencePrice: number;
}

export interface VehicleImage {
  id: string;
  url: string;
  isPrimary: boolean;
  position: number;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  fuelType: string;
  engineCC: number;
  transmission: string;
  bodyType: string;
  mileage: number;
  color?: string;
  driveType?: string;
  description?: string;
  category: "CAR" | "BIKE";
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD' | 'COMING_SOON';
  images: VehicleImage[];
  createdAt: string;
}
