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
  features?: string[];
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD' | 'COMING_SOON';
  condition: 'FOREIGN' | 'LOCAL';
  images: VehicleImage[];
  createdAt: string;
}
