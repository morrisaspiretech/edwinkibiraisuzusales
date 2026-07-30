export interface VehicleImage {
  id: string;
  url: string;
  isHero?: boolean;
  isPrimary?: boolean;
  orderIndex?: number;
  position?: number;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  fuelType?: string;
  engineCC?: number;
  transmission?: string;
  bodyType?: string;
  mileage?: number;
  color?: string;
  driveType?: string;
  description?: string;
  category?: string;
  features?: string[];
  status: 'AVAILABLE' | 'PENDING' | 'SOLD' | 'COMING_SOON';
  condition: 'NEW' | 'USED' | 'REFURBISHED' | 'FOREIGN' | 'LOCAL';
  images: VehicleImage[];
  createdAt: string;
  location?: string;
}
