export interface VehicleVariant {
  model: string;
  displacement: string;
  payload: string;
  drive: string;
  chassisPrice: string;
  withBodyPrice: string;
  gvm?: string;
  power?: string;
}

export interface VehicleSpec {
  id: string;
  category: string;
  title: string;
  description: string;
  heroImage: string;
  gallery: string[];
  presentationVideo?: {
    url: string;
    title: string;
    description: string;
  };
  quickSpecs: {
    engine: string;
    transmission: string;
    power: string;
    fuel: string;
  };
  detailedSpecs: {
    engine: {
      type: string;
      displacement: string;
      maxPower: string;
      maxTorque: string;
      fuelSystem: string;
    };
    dimensions: {
      length: string;
      width: string;
      height: string;
      wheelbase: string;
      groundClearance: string;
    };
    chassis: {
      suspensionFront: string;
      suspensionRear: string;
      brakes: string;
      steering: string;
    };
    capacities: {
      fuelTank: string;
      seating: string;
      gvm: string;
    };
  };
  features: string[];
  variants?: VehicleVariant[];
}

export const VEHICLES_DATA: Record<string, VehicleSpec> = {

  // ══════════════════════════════════════════
  //  SUVs
  // ══════════════════════════════════════════

  "mu-x-1900cc": {
    id: "mu-x-1900cc",
    category: "SUVs",
    title: "Isuzu MU-X LS-U 1900cc",
    description: "The Isuzu mu-X 1.9L is a refined 7-seater SUV that delivers excellent fuel efficiency without compromising on capability. Powered by the advanced 1.9L RZ4E turbo-diesel engine, it is ideal for families who want a comfortable, modern SUV that handles both city roads and weekend adventures with confidence.",
    heroImage: "/vehicles/mu-x-1900cc-gallery/1.jpeg",
    gallery: [
      "/vehicles/mu-x-1900cc-gallery/1.jpeg",
      "/vehicles/mu-x-1900cc-gallery/2.jpeg",
      "/vehicles/mu-x-1900cc-gallery/3.jpeg",
    ],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Automatic",
      power: "110 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "RZ4E-TC, 4-Cylinder, In-Line, DOHC, Intercooled Turbo",
        displacement: "1,898 cc",
        maxPower: "110 kW (150 PS) @ 3,600 rpm",
        maxTorque: "350 Nm @ 1,800 – 2,600 rpm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "4,850 mm",
        width: "1,870 mm",
        height: "1,825 mm",
        wheelbase: "2,855 mm",
        groundClearance: "235 mm",
      },
      chassis: {
        suspensionFront: "Independent Double-Wishbone, Coil Springs, Gas Shock Absorbers, Stabiliser Bar",
        suspensionRear: "Multi-Link Coil Suspension, Gas Shock Absorbers, Stabiliser Bar",
        brakes: "Front & Rear Ventilated Disc Brakes with ABS, EBD & BA",
        steering: "Electric Power Steering (EPS)",
      },
      capacities: {
        fuelTank: "80 Litres",
        seating: "7 Seats",
        gvm: "2,700 kg",
      },
    },
    features: [
      "9-inch Touchscreen Infotainment with Apple CarPlay & Android Auto",
      "Rear Parking Camera & Sensors",
      "Bi-LED Projector Headlights",
      "18-inch Alloy Wheels",
      "Terrain Command 4WD System (2H / 4H / 4L)",
      "Hill Descent Control",
      "Electronic Stability Control (ESC)",
      "Dual-Zone Automatic Climate Control",
      "6 Airbags",
      "Keyless Entry & Push-Button Start",
    ],
  },

  "mu-x-3000cc": {
    id: "mu-x-3000cc",
    category: "SUVs",
    title: "Isuzu MU-X LS-T 3000cc",
    description: "The flagship Isuzu mu-X 3.0L LS-T is the ultimate 7-seater SUV, blending commanding off-road capability with genuine premium luxury. Powered by the legendary 3.0L 4JJ3-TCX turbo-diesel and paired with a 6-speed automatic, it features advanced driver assistance systems, premium leather seating, and full 4WD capability for any terrain.",
    heroImage: "/vehicles/mu-x-3000cc-gallery/1.jpeg",
    gallery: [
      "/vehicles/mu-x-3000cc-gallery/1.jpeg",
      "/vehicles/mu-x-3000cc-gallery/2.jpeg",
      "/vehicles/mu-x-3000cc-gallery/3.jpeg",
      "/vehicles/mu-x-3000cc-gallery/4.jpeg",
      "/vehicles/mu-x-3000cc-gallery/5.jpeg",
      "/vehicles/mu-x-3000cc-gallery/6.jpeg",
      "/vehicles/mu-x-3000cc-gallery/7.jpeg",
      "/vehicles/mu-x-3000cc-gallery/8.jpeg",
      "/vehicles/mu-x-3000cc-gallery/9.jpeg",
      "/vehicles/mu-x-3000cc-gallery/10.jpeg",
      "/vehicles/mu-x-3000cc-gallery/11.jpeg",
      "/vehicles/mu-x-3000cc-gallery/12.jpeg",
      "/vehicles/mu-x-3000cc-gallery/13.jpeg",
      "/vehicles/mu-x-3000cc-gallery/14.jpeg",
      "/vehicles/mu-x-3000cc-gallery/15.jpeg",
    ],
    quickSpecs: {
      engine: "3.0L Turbo Diesel",
      transmission: "6-Speed Automatic",
      power: "140 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4JJ3-TCX, 4-Cylinder, In-Line, DOHC, Intercooled VGS Turbo",
        displacement: "2,999 cc",
        maxPower: "140 kW (190 PS) @ 3,600 rpm",
        maxTorque: "450 Nm @ 1,600 – 2,600 rpm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "4,850 mm",
        width: "1,870 mm",
        height: "1,825 mm",
        wheelbase: "2,855 mm",
        groundClearance: "235 mm",
      },
      chassis: {
        suspensionFront: "Independent Double-Wishbone, Coil Springs, Gas Shock Absorbers, Stabiliser Bar",
        suspensionRear: "Multi-Link Coil Suspension, Gas Shock Absorbers, Stabiliser Bar",
        brakes: "Front & Rear Ventilated Disc Brakes with ABS, EBD & BA",
        steering: "Electric Power Steering (EPS)",
      },
      capacities: {
        fuelTank: "80 Litres",
        seating: "7 Seats",
        gvm: "2,800 kg",
      },
    },
    features: [
      "Advanced Driver Assistance Systems (ADAS) — Lane Departure Warning, Blind Spot Monitoring",
      "Adaptive Cruise Control",
      "9-inch Infotainment with Apple CarPlay & Android Auto",
      "Premium Leather-Appointed Seats with Power Adjustment",
      "Power Tailgate",
      "360° Surround View Camera",
      "Dual-Zone Automatic Climate Control",
      "Terrain Command 4WD (2H / 4H / 4L)",
      "Hill Descent Control & Hill Start Assist",
      "8 Airbags",
      "Wireless Phone Charging",
      "Ambient Interior Lighting",
    ],
  },

  // ══════════════════════════════════════════
  //  Pickups
  // ══════════════════════════════════════════

  "tfr87-4x2": {
    id: "tfr87-4x2",
    category: "Pickups",
    title: "TFR 87 Single Cab 4×2",
    description: "The Isuzu TFR 87 4×2 Single Cab is built for serious commercial work. Powered by the 1.9L RZ4E Turbodiesel engine and paired with a 6-speed manual gearbox, it delivers outstanding fuel economy and reliability.",
    heroImage: "/vehicles/grouped/batch1/2.jpeg",
    gallery: ['/vehicles/grouped/batch1/2.jpeg', '/vehicles/grouped/batch1/4.jpeg', '/vehicles/grouped/batch1/6.jpeg', '/vehicles/grouped/batch1/1.jpeg', '/vehicles/grouped/batch1/3.jpeg', '/vehicles/grouped/batch1/5.jpeg'],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "110 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "RZ4E-TC, 4-Cylinder, In-Line, DOHC, Intercooled Turbo",
        displacement: "1,898 cc",
        maxPower: "110 kW (150 PS) @ 3,600 rpm",
        maxTorque: "350 Nm @ 1,800 – 2,600 rpm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "5,295 mm",
        width: "1,865 mm",
        height: "1,785 mm",
        wheelbase: "3,095 mm",
        groundClearance: "240 mm",
      },
      chassis: {
        suspensionFront: "Independent Double-Wishbone, Torsion Bar Springs",
        suspensionRear: "Rigid Axle, Semi-Elliptic Leaf Springs",
        brakes: "Front Ventilated Disc, Rear Drum with ABS",
        steering: "Power Assist",
      },
      capacities: {
        fuelTank: "76 Litres",
        seating: "2 Seats",
        gvm: "3,020 kg",
      },
    },
    features: [
      "Payload capacity up to 1,225 kg",
      "High-strength ladder frame chassis",
      "Ksh 3,890,000",
      "Vinyl cabin floor for easy cleaning",
      "Power steering & Air conditioning",
    ],
  },

  "tfs87-4x4-manual": {
    id: "tfs87-4x4-manual",
    category: "Pickups",
    title: "TFS 87 Single Cab 4×4 (Manual)",
    description: "The Isuzu TFS 87 4×4 Single Cab combines rugged off-road capability with the productivity of a full-size single cab. Manual transmission.",
    heroImage: "/vehicles/tfs87-single-1.jpg",
    gallery: [
      "/vehicles/tfs87-single-1.jpg",
      "/vehicles/tfs87-single-2.jpg",
      "/vehicles/tfs87-single-3.jpg",
      "/vehicles/tfs87-single-4.jpg",
      "/vehicles/tfs87-single-5.jpg"
    ],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "110 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "RZ4E-TC, 4-Cylinder, In-Line, DOHC, Intercooled Turbo",
        displacement: "1,898 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "350 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: { length: "5,295 mm", width: "1,865 mm", height: "1,785 mm", wheelbase: "3,095 mm", groundClearance: "240 mm" },
      chassis: { suspensionFront: "Independent Double-Wishbone", suspensionRear: "Rigid Axle", brakes: "Disc/Drum with ABS", steering: "Power Assist" },
      capacities: { fuelTank: "76 Litres", seating: "2 Seats", gvm: "3,020 kg" },
    },
    features: ["Ksh 4,390,000", "Shift-on-the-Fly 4WD", "Payload capacity up to 1,225 kg", "Air conditioning"],
  },

  "tfs87-4x4-auto": {
    id: "tfs87-4x4-auto",
    category: "Pickups",
    title: "TFS 87 Single Cab 4×4 (Automatic)",
    description: "The Isuzu TFS 87 4×4 Single Cab Automatic. Rugged off-road capability with the convenience of an automatic transmission.",
    heroImage: "/vehicles/tfs87-single-1.jpg",
    gallery: [
      "/vehicles/tfs87-single-1.jpg",
      "/vehicles/tfs87-single-2.jpg",
      "/vehicles/tfs87-single-3.jpg",
      "/vehicles/tfs87-single-4.jpg",
      "/vehicles/tfs87-single-5.jpg"
    ],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Automatic",
      power: "110 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: { type: "RZ4E-TC, 4-Cylinder", displacement: "1,898 cc", maxPower: "110 kW", maxTorque: "350 Nm", fuelSystem: "Common Rail" },
      dimensions: { length: "5,295 mm", width: "1,865 mm", height: "1,785 mm", wheelbase: "3,095 mm", groundClearance: "240 mm" },
      chassis: { suspensionFront: "Double-Wishbone", suspensionRear: "Rigid Axle", brakes: "Disc/Drum", steering: "Power Assist" },
      capacities: { fuelTank: "76 Litres", seating: "2 Seats", gvm: "3,020 kg" },
    },
    features: ["Ksh 4,600,000", "6-Speed Automatic Transmission", "Shift-on-the-Fly 4WD", "Air conditioning"],
  },

  "tfs87-double-manual": {
    id: "tfs87-double-manual",
    category: "Pickups",
    title: "TFS 87 Double Cab 1900cc (Manual)",
    description: "The D-Max Double Cab 1.9L Manual. Bridges work and lifestyle perfectly.",
    heroImage: "/vehicles/grouped/batch3/3.jpeg",
    gallery: ['/vehicles/grouped/batch3/3.jpeg', '/vehicles/grouped/batch3/1.jpeg', '/vehicles/grouped/batch3/2.jpeg', '/vehicles/grouped/batch3/4.jpeg', '/vehicles/grouped/batch3/5.jpeg', '/vehicles/grouped/batch3/6.jpeg', '/vehicles/grouped/batch3/7.jpeg', '/vehicles/grouped/batch3/8.jpeg', '/vehicles/grouped/batch3/9.jpeg', '/vehicles/grouped/batch3/10.jpeg', '/vehicles/grouped/batch3/11.jpeg', '/vehicles/grouped/batch3/12.jpeg', '/vehicles/grouped/batch3/13.jpeg', '/vehicles/grouped/batch3/14.jpeg', '/vehicles/grouped/batch3/15.jpeg', '/vehicles/grouped/batch3/16.jpeg', '/vehicles/grouped/batch3/17.jpeg', '/vehicles/grouped/batch3/18.jpeg', '/vehicles/grouped/batch3/19.jpeg', '/vehicles/grouped/batch3/20.jpeg', '/vehicles/grouped/batch3/21.jpeg', '/vehicles/grouped/batch3/22.jpeg', '/vehicles/grouped/batch3/23.jpeg', '/vehicles/grouped/batch3/24.jpeg', '/vehicles/grouped/batch3/25.jpeg', '/vehicles/grouped/batch3/26.jpeg', '/vehicles/grouped/batch3/27.jpeg', '/vehicles/grouped/batch3/28.jpeg'],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "110 kW",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: { type: "RZ4E-TC", displacement: "1,898 cc", maxPower: "110 kW", maxTorque: "350 Nm", fuelSystem: "Common Rail" },
      dimensions: { length: "5,295 mm", width: "1,865 mm", height: "1,790 mm", wheelbase: "3,095 mm", groundClearance: "240 mm" },
      chassis: { suspensionFront: "Double-Wishbone", suspensionRear: "Rigid Axle", brakes: "Disc/Drum", steering: "Power Assist" },
      capacities: { fuelTank: "76 Litres", seating: "5 Seats", gvm: "3,100 kg" },
    },
    features: ["Seating for 5", "Shift-on-the-fly 4WD", "Touchscreen Infotainment", "Reversing Camera"],
  },

  "tfs87-double-auto": {
    id: "tfs87-double-auto",
    category: "Pickups",
    title: "TFS 87 Double Cab 1900cc (Automatic)",
    description: "The D-Max Double Cab 1.9L Automatic. The ultimate all-rounder for the modern Kenyan.",
    heroImage: "/vehicles/grouped/batch4/3.jpeg",
    gallery: ['/vehicles/grouped/batch4/3.jpeg', '/vehicles/grouped/batch4/5.jpeg', '/vehicles/grouped/batch4/1.jpeg', '/vehicles/grouped/batch4/2.jpeg', '/vehicles/grouped/batch4/4.jpeg', '/vehicles/grouped/batch4/6.jpeg', '/vehicles/grouped/batch4/7.jpeg', '/vehicles/grouped/batch4/8.jpeg', '/vehicles/grouped/batch4/9.jpeg', '/vehicles/grouped/batch4/10.jpeg', '/vehicles/grouped/batch4/11.jpeg', '/vehicles/grouped/batch4/12.jpeg', '/vehicles/grouped/batch4/13.jpeg', '/vehicles/grouped/batch4/14.jpeg', '/vehicles/grouped/batch4/15.jpeg', '/vehicles/grouped/batch4/16.jpeg'],
    quickSpecs: {
      engine: "1.9L Turbo Diesel",
      transmission: "6-Speed Automatic",
      power: "110 kW",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: { type: "RZ4E-TC", displacement: "1,898 cc", maxPower: "110 kW", maxTorque: "350 Nm", fuelSystem: "Common Rail" },
      dimensions: { length: "5,295 mm", width: "1,865 mm", height: "1,790 mm", wheelbase: "3,095 mm", groundClearance: "240 mm" },
      chassis: { suspensionFront: "Double-Wishbone", suspensionRear: "Rigid Axle", brakes: "Disc/Drum", steering: "Power Assist" },
      capacities: { fuelTank: "76 Litres", seating: "5 Seats", gvm: "3,100 kg" },
    },
    features: ["Seating for 5", "6-Speed Automatic", "Shift-on-the-fly 4WD", "Touchscreen Infotainment", "Reversing Camera"],
  },

  "tfs40-double-auto": {
    id: "tfs40-double-auto",
    category: "Pickups",
    title: "TFS 40 Double Cab Automatic",
    description: "The Isuzu TFS 40 Double Cab Automatic is a premium 4×4 pickup built for those who demand the best. Featuring an aggressive sport-tuned exterior with blacked-out trims, black alloy wheels, and wide fender flares, it commands attention on any road. Powered by a 3.0L turbodiesel and paired with a 6-speed automatic, it combines raw capability with refined comfort.",
    heroImage: "/vehicles/tfs40-double-auto/1.jpeg",
    gallery: [
      "/vehicles/tfs40-double-auto/1.jpeg",
      "/vehicles/tfs40-double-auto/3.jpeg",
      "/vehicles/tfs40-double-auto/4.jpeg",
      "/vehicles/tfs40-double-auto/5.jpeg",
      "/vehicles/tfs40-double-auto/6.jpeg",
      "/vehicles/tfs40-double-auto/2.jpeg",
    ],
    presentationVideo: {
      url: "/vehicles/tfs40-double-auto/tfs40-video.mp4",
      title: "Experience the TFS 40",
      description: "Take a closer look at the bold styling, aggressive stance, and premium finish of the Isuzu TFS 40 Double Cab Automatic. Built for power and presence.",
    },
    quickSpecs: {
      engine: "3.0L Turbo Diesel",
      transmission: "6-Speed Automatic",
      power: "140 kW @ 3,600 rpm",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4JJ3-TCX, 4-Cylinder, In-Line, DOHC, Intercooled VGS Turbo",
        displacement: "2,999 cc",
        maxPower: "140 kW (190 PS) @ 3,600 rpm",
        maxTorque: "450 Nm @ 1,600 – 2,600 rpm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "5,295 mm",
        width: "1,865 mm",
        height: "1,790 mm",
        wheelbase: "3,095 mm",
        groundClearance: "240 mm",
      },
      chassis: {
        suspensionFront: "Independent Double-Wishbone, Torsion Bar Springs, Stabiliser Bar",
        suspensionRear: "Rigid Axle, Semi-Elliptic Leaf Springs",
        brakes: "Front Ventilated Disc, Rear Drum with ABS, EBD & BA",
        steering: "Rack & Pinion with Power Assist",
      },
      capacities: {
        fuelTank: "76 Litres",
        seating: "5 Seats",
        gvm: "3,100 kg",
      },
    },
    features: [
      "Aggressive Sport Exterior with Black Trims",
      "Black 18-inch Alloy Wheels",
      "Wide Fender Flares for Bold Stance",
      "6-Speed Automatic Transmission",
      "Shift-on-the-Fly 4WD (2H / 4H / 4L)",
      "4×4 with Differential Lock",
      "9-inch Touchscreen with Apple CarPlay & Android Auto",
      "Reversing Camera",
      "Leather-Appointed Seats",
      "Seating for 5",
      "Air Conditioning",
      "6 Airbags",
    ],
  },

  "double-cabin": {
    id: "double-cabin",
    category: "Pickups",
    title: "Isuzu D-Max Kipchoge Edition",
    description: "The Kipchoge Edition perfectly bridges work and lifestyle. With seating for 5, a genuine 4WD system, and available in both manual and automatic.",
    heroImage: "/vehicles/dmax-single.webp",
    gallery: ["/vehicles/dmax-single.webp"],
    quickSpecs: { engine: "3.0L Turbo Diesel", transmission: "6-Speed Auto / Manual", power: "140 kW @ 3,600 rpm", fuel: "Diesel" },
    detailedSpecs: {
      engine: { type: "4JJ3-TCX", displacement: "2,999 cc", maxPower: "140 kW", maxTorque: "450 Nm", fuelSystem: "Common Rail" },
      dimensions: { length: "5,295 mm", width: "1,865 mm", height: "1,790 mm", wheelbase: "3,095 mm", groundClearance: "240 mm" },
      chassis: { suspensionFront: "Double-Wishbone", suspensionRear: "Rigid Axle", brakes: "Disc/Drum", steering: "Power Assist" },
      capacities: { fuelTank: "76 Litres", seating: "5 Seats", gvm: "3,100 kg" },
    },
    features: ["Seating for 5", "Shift-on-the-fly 4WD", "9-inch Touchscreen", "Reversing Camera", "Leather seats"],
  },

  // ══════════════════════════════════════════
  //  Trucks
  // ══════════════════════════════════════════

  "f-series-frr90n": {
    id: "f-series-frr90n",
    category: "Trucks",
    title: "F-Series FRR 90N",
    description: "The Isuzu FRR 90N is the benchmark medium-duty truck for Kenyan transport operators. Built for urban and intercounty delivery, it packs a powerful 5.2L turbocharged engine into a compact, highly manoeuvrable cab-over chassis delivering an impressive 11-tonne payload.",
    heroImage: "/vehicles/f-series/frr90n/1.jpeg",
    gallery: [
      "/vehicles/f-series/frr90n/1.jpeg",
      "/vehicles/f-series/frr90n/2.jpeg",
      "/vehicles/f-series/frr90n/3.jpeg",
      "/vehicles/f-series/frr90n/4.jpeg",
      "/vehicles/f-series/frr90n/5.jpeg",
      "/vehicles/f-series/frr90n/6.jpeg",
      "/vehicles/f-series/frr90n/7.jpeg",
    ],
    quickSpecs: {
      engine: "5,193cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "177 kW (240 PS)",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HK1-TCS, 4-Cylinder, DOHC, Intercooled Turbo",
        displacement: "5,193 cc",
        maxPower: "177 kW (240 PS)",
        maxTorque: "637 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "7,690 mm",
        width: "2,490 mm",
        height: "2,870 mm",
        wheelbase: "4,380 mm",
        groundClearance: "210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs, Auxiliary Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "3 Seats",
        gvm: "10,500 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 5,950,000",
      "Payload: 11 Tonnes",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Ergonomic driver-oriented cab",
      "Air-suspended driver seat",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "f-series-fvr90l": {
    id: "f-series-fvr90l",
    category: "Trucks",
    title: "F-Series FVR 90L",
    description: "The Isuzu FVR 90L delivers serious heavy-duty capability for Kenya's most demanding intercounty routes. With a 5.2L turbocharged engine and a massive 13-tonne payload, it is built for businesses that demand more from every trip.",
    heroImage: "/vehicles/f-series/fvr90l/1.jpeg",
    gallery: [
      "/vehicles/f-series/fvr90l/1.jpeg",
      "/vehicles/f-series/fvr90l/2.jpeg",
      "/vehicles/f-series/fvr90l/3.jpeg",
      "/vehicles/f-series/fvr90l/4.jpeg",
      "/vehicles/f-series/fvr90l/5.jpeg",
      "/vehicles/f-series/fvr90l/6.jpeg",
      "/vehicles/f-series/fvr90l/7.jpeg",
      "/vehicles/f-series/fvr90l/8.jpeg",
      "/vehicles/f-series/fvr90l/9.jpeg",
    ],
    quickSpecs: {
      engine: "5,193cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "206 kW (280 PS)",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HK1-TCS, 4-Cylinder, DOHC, Intercooled Turbo",
        displacement: "5,193 cc",
        maxPower: "206 kW (280 PS)",
        maxTorque: "785 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "8,300 mm",
        width: "2,490 mm",
        height: "2,870 mm",
        wheelbase: "4,800 mm",
        groundClearance: "210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs, Auxiliary Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "3 Seats",
        gvm: "15,000 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 7,820,000",
      "Payload: 13 Tonnes",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "6-Cylinder pulling power for long-haul routes",
      "Air-suspended driver seat",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "f-series-fvr90p": {
    id: "f-series-fvr90p",
    category: "Trucks",
    title: "F-Series FVR 90P",
    description: "The Isuzu FVR 90P is the premium variant of the FVR range — Kenya's top choice for high-volume intercounty haulage. Its 5.2L turbocharged engine delivers exceptional torque, hauling 13 tonnes with confidence on even the toughest routes.",
    heroImage: "/vehicles/f-series/fvr90p/1.jpg",
    gallery: [
      "/vehicles/f-series/fvr90p/1.jpg",
    ],
    quickSpecs: {
      engine: "5,193cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "221 kW (300 PS)",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HK1-TCS, 4-Cylinder, DOHC, Intercooled Turbo",
        displacement: "5,193 cc",
        maxPower: "221 kW (300 PS)",
        maxTorque: "882 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "8,600 mm",
        width: "2,490 mm",
        height: "2,870 mm",
        wheelbase: "5,100 mm",
        groundClearance: "210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs, Auxiliary Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "250 Litres",
        seating: "3 Seats",
        gvm: "18,000 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 7,999,000",
      "Payload: 13 Tonnes",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Maximum power output in the FVR range",
      "Air-suspended driver seat",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "f-series-fvz34n": {
    id: "f-series-fvz34n",
    category: "Trucks",
    title: "F-Series FVZ 34N Truck",
    description: "The Isuzu FVZ 34N is Kenya's premier heavy haulage truck. Its massive 7.8L six-cylinder engine and 6×4 drive configuration conquer the most demanding routes, delivering a massive 16-tonne payload for nationwide distribution.",
    heroImage: "/vehicles/f-series/fvz34n/1.jpeg",
    gallery: [
      "/vehicles/f-series/fvz34n/1.jpeg",
      "/vehicles/f-series/fvz34n/2.jpeg",
      "/vehicles/f-series/fvz34n/3.jpeg",
      "/vehicles/f-series/fvz34n/4.jpeg",
      "/vehicles/f-series/fvz34n/5.jpeg",
      "/vehicles/f-series/fvz34n/6.jpeg",
    ],
    quickSpecs: {
      engine: "7,790cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "221 kW (300 PS)",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "6HK1-TCS, 6-Cylinder, DOHC, Intercooled Turbo",
        displacement: "7,790 cc",
        maxPower: "221 kW (300 PS)",
        maxTorque: "980 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "9,250 mm",
        width: "2,490 mm",
        height: "2,870 mm",
        wheelbase: "5,480 mm",
        groundClearance: "210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs, Auxiliary Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "250 Litres",
        seating: "3 Seats",
        gvm: "26,000 kg",
      },
    },
    features: [
      "Drive Configuration: 6×4",
      "Chassis Price: Ksh 10,860,000",
      "Payload: 16 Tonnes",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Highest GVM in the F-Series range",
      "Air-suspended driver seat",
      "Corrosion-resistant high-tensile chassis",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "f-series-fvz34t": {
    id: "f-series-fvz34t",
    category: "Trucks",
    title: "F-Series FVZ 34T Tipper",
    description: "The Isuzu FVZ 34T Tipper is built for Kenya's construction and quarrying industries. Powered by the same mighty 7.8L six-cylinder engine as the FVZ 34N, it features a heavy-duty hydraulic tipper body for efficient bulk material transport of up to 16 tonnes.",
    heroImage: "/vehicles/f-series/fvz34t/1.jpeg",
    gallery: [
      "/vehicles/f-series/fvz34t/1.jpeg",
      "/vehicles/f-series/fvz34t/2.jpeg",
      "/vehicles/f-series/fvz34t/3.jpeg",
      "/vehicles/f-series/fvz34t/4.jpeg",
      "/vehicles/f-series/fvz34t/5.jpeg",
    ],
    quickSpecs: {
      engine: "7,790cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "221 kW (300 PS)",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "6HK1-TCS, 6-Cylinder, DOHC, Intercooled Turbo",
        displacement: "7,790 cc",
        maxPower: "221 kW (300 PS)",
        maxTorque: "980 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "9,250 mm",
        width: "2,490 mm",
        height: "2,870 mm",
        wheelbase: "5,480 mm",
        groundClearance: "210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs, Auxiliary Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "250 Litres",
        seating: "3 Seats",
        gvm: "26,000 kg",
      },
    },
    features: [
      "Drive Configuration: 6×4",
      "Complete Unit Price: Ksh 11,650,000",
      "Payload: 16 Tonnes",
      "Hydraulic Tipper Body for bulk haulage",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Ideal for construction, quarrying, aggregate transport",
      "Air-suspended driver seat",
      "Corrosion-resistant high-tensile chassis",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },



  "n-series-nlr": {
    id: "n-series-nlr",
    category: "Trucks",
    title: "N-Series NLR",
    description: "The Isuzu NLR is Kenya's most trusted light commercial truck, engineered for city deliveries and navigating tight spaces with ease. It offers outstanding fuel efficiency, a low cab-forward design, and rugged reliability.",
    heroImage: "/vehicles/n-series/nlr-chassis.png",
    gallery: [
      "/vehicles/n-series/nlr-chassis.png",
      "/vehicles/n-series/nlr-canopy.jpg"
    ],
    quickSpecs: {
      engine: "2,999cc Turbo Diesel",
      transmission: "5-Speed Manual",
      payload: "2.3 Tonnes",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4JJ1-TCC, 4-Cylinder Turbocharged",
        displacement: "2,999 cc",
        maxPower: "77 kW (105 PS) @ 3,200 rpm",
        maxTorque: "230 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "4,735 mm",
        width: "1,815 mm",
        height: "2,130 mm",
        wheelbase: "2,490 mm",
        groundClearance: "190 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs",
        brakes: "Hydraulic Dual Circuit",
        steering: "Recirculating Ball with Power Assist",
      },
      capacities: {
        fuelTank: "75 Litres",
        seating: "3 Seats",
        gvm: "4,500 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 3,612,000",
      "With Body Price: Ksh 3,923,000",
      "Service intervals: 15,000kms",
      "Warranty: 2 years or 100,000Kms",
      "High-tensile ladder-frame chassis",
      "Up to 100% bank financing available",
    ],
  },

  "n-series-nmr85": {
    id: "n-series-nmr85",
    category: "Trucks",
    title: "N-Series NMR 85",
    description: "The Isuzu NMR 85 steps up the capability for businesses needing more payload without sacrificing agility. A robust 3.5-tonne payload makes it the perfect all-rounder for general transport.",
    heroImage: "/vehicles/n-series/nmr85/1.jpeg",
    gallery: [
      "/vehicles/n-series/nmr85/1.jpeg",
      "/vehicles/n-series/nmr85/2.jpeg",
      "/vehicles/n-series/nmr85/3.jpeg",
      "/vehicles/n-series/nmr85/4.jpeg",
      "/vehicles/n-series/nmr85/5.jpeg",
      "/vehicles/n-series/nmr85/6.jpeg",
      "/vehicles/n-series/nmr85/7.jpeg",
    ],
    quickSpecs: {
      engine: "2,999cc Turbo Diesel",
      transmission: "5-Speed Manual",
      payload: "3.5 Tonnes",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4JJ1-TCC, 4-Cylinder Turbocharged",
        displacement: "2,999 cc",
        maxPower: "96 kW (130 PS) @ 2,800 rpm",
        maxTorque: "330 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "5,120 mm",
        width: "1,815 mm",
        height: "2,170 mm",
        wheelbase: "2,750 mm",
        groundClearance: "190 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs",
        brakes: "Hydraulic Dual Circuit with ABS",
        steering: "Recirculating Ball with Power Assist",
      },
      capacities: {
        fuelTank: "75 Litres",
        seating: "3 Seats",
        gvm: "5,500 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 4,200,000",
      "With Body Price: Ksh 4,578,000",
      "Anti-lock Braking System (ABS)",
      "Service intervals: 15,000kms",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "n-series-nps": {
    id: "n-series-nps",
    category: "Trucks",
    title: "N-Series NPS 81H 4×4",
    description: "Built for Kenya's toughest terrains, the NPS 81H 4×4 delivers true off-road capability combined with a 3.0-tonne payload and a powerful 4.8L engine, making it the ideal choice for remote operations, agriculture, and rough terrain.",
    heroImage: "/vehicles/n-series/nps-81h-real.png",
    gallery: [
      "/vehicles/n-series/nps-81h-real.png",
    ],
    quickSpecs: {
      engine: "4,778cc Turbo Diesel",
      transmission: "5-Speed Manual 4x4",
      payload: "3.0 Tonnes",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "4,778 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "400 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "5,120 mm",
        width: "1,995 mm",
        height: "2,265 mm",
        wheelbase: "2,750 mm",
        groundClearance: "240 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs",
        brakes: "Hydraulic Dual Circuit",
        steering: "Recirculating Ball with Power Assist",
      },
      capacities: {
        fuelTank: "75 Litres",
        seating: "3 Seats",
        gvm: "6,000 kg",
      },
    },
    features: [
      "Drive Configuration: 4×4 Off-Road",
      "Complete Unit Price: Ksh 6,100,000",
      "True 4WD capability for rough terrain",
      "Service intervals: 15,000kms",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "n-series-nqr81": {
    id: "n-series-nqr81",
    category: "Trucks",
    title: "N-Series NQR 81",
    description: "The Isuzu NQR 81 is the powerhouse of the N-Series. With a 4.8-litre engine and a heavy-duty 5.0-tonne payload, it bridges the gap between light and medium commercial trucks.",
    heroImage: "/vehicles/nqr-hero.png",
    gallery: [
      "/vehicles/nqr-hero.png",
    ],
    quickSpecs: {
      engine: "4,778cc Turbo Diesel",
      transmission: "6-Speed Manual",
      payload: "5.0 Tonnes",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HL1-TC, 4-Cylinder Turbocharged",
        displacement: "4,778 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "400 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "5,985 mm",
        width: "2,115 mm",
        height: "2,265 mm",
        wheelbase: "3,365 mm",
        groundClearance: "220 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs",
        brakes: "Hydraulic with Vacuum Servo & ABS",
        steering: "Recirculating Ball with Power Assist",
      },
      capacities: {
        fuelTank: "110 Litres",
        seating: "3 Seats",
        gvm: "8,000 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 4,775,000",
      "With Body Price: On Request",
      "Anti-lock Braking System (ABS)",
      "Service intervals: 15,000kms",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "n-series-nqr-xtra": {
    id: "n-series-nqr-xtra",
    category: "Trucks",
    title: "N-Series NQR Xtra",
    description: "The ultimate N-Series. The NQR Xtra features an extended chassis providing maximum load space and an unmatched 6.0-tonne payload, ideal for voluminous cargo and specialized bodies.",
    heroImage: "/vehicles/n-series/nqr-xtra-real.png",
    gallery: [
      "/vehicles/n-series/nqr-xtra-real.png",
    ],
    quickSpecs: {
      engine: "4,778cc Turbo Diesel",
      transmission: "6-Speed Manual",
      payload: "6.0 Tonnes",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HL1-TC, 4-Cylinder Turbocharged",
        displacement: "4,778 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "400 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "6,620 mm",
        width: "2,115 mm",
        height: "2,265 mm",
        wheelbase: "3,815 mm",
        groundClearance: "220 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs",
        brakes: "Hydraulic with Vacuum Servo & ABS",
        steering: "Recirculating Ball with Power Assist",
      },
      capacities: {
        fuelTank: "110 Litres",
        seating: "3 Seats",
        gvm: "8,700 kg",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Chassis Price: Ksh 5,250,000",
      "With Body Price: On Request",
      "Anti-lock Braking System (ABS)",
      "Extended chassis for maximum body length",
      "Service intervals: 15,000kms",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "movers": {
    id: "movers",
    category: "Trucks",
    title: "Movers",
    description: "Isuzu Heavy-Duty Movers — the GXZ and CYZ series — are Kenya's most powerful prime movers. Built for maximum tonne-kilometres, these 6x4 tractors feature massive turbocharged engines, 10-speed gearboxes, and full air brake systems capable of hauling up to 60 tonnes GCM on East Africa's most demanding routes.",
    heroImage: "/vehicles/gxz-mover.webp",
    gallery: [
      "/vehicles/gxz-mover.webp",
    ],
    quickSpecs: {
      engine: "9.8L – 15.6L Turbo Diesel",
      transmission: "10/12-Speed Manual or AMT",
      power: "280 kW – 382 kW",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "6WF1-TC (GXZ) / 6WG1-TCC (CYZ), 6-Cylinder In-Line, DOHC, Intercooled Turbo",
        displacement: "9,839 cc (GXZ) / 15,681 cc (CYZ)",
        maxPower: "280 kW (GXZ380) – 382 kW (CYZ52S)",
        maxTorque: "1,373 Nm (GXZ) – 2,256 Nm (CYZ)",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "6,800 mm (tractor only)",
        width: "2,490 mm",
        height: "3,500 mm",
        wheelbase: "3,700 mm (6x4 configuration)",
        groundClearance: "260 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs, Double-Acting Shock Absorbers",
        suspensionRear: "Tandem Axle, Bogie Suspension with Semi-Elliptic Leaf Springs",
        brakes: "Full Air Brakes with ABS & EBS",
        steering: "Power Assisted, Recirculating Ball (optional Air-Assisted)",
      },
      capacities: {
        fuelTank: "400 – 600 Litres (dual tanks)",
        seating: "2 Seats (Sleeper cab available)",
        gvm: "Up to 60 Tonnes GCM",
      },
    },
    features: [
      "Up to 60 Tonne Gross Combination Mass (GCM)",
      "Full Air Brake System with ABS & EBS",
      "Exhaust Brake for controlled descents",
      "Retarder braking system",
      "10/12-speed synchromesh gearbox",
      "Air-suspended driver seat with lumbar support",
      "Dual 400L+ fuel tanks for long-haul routes",
      "Sleeper cab option for overnight drivers",
      "Hill Start Assist",
      "Anti-Roll protection",
      "Long 20,000 km service intervals",
    ],
  },

  // ══════════════════════════════════════════
  //  Buses
  // ══════════════════════════════════════════

  "f-series-buses": {
    id: "f-series-buses",
    category: "Buses",
    title: "F-Series Buses",
    description: "The Isuzu F-Series buses — including the FRR90 (50-seater) and FVR34S (67-seater) — are Kenya's benchmark for inter-city passenger transport. With powerful turbodiesel engines, full air-over-hydraulic or full air brake systems, and locally assembled coachwork, these buses offer unmatched reliability for SACCO operators and institutions.",
    heroImage: "/vehicles/frr90-bus.webp",
    gallery: [
      "/vehicles/frr90-bus.webp",
      "/vehicles/fvr34s-bus.webp",
    ],
    quickSpecs: {
      engine: "5.2L – 7.8L Turbo Diesel",
      transmission: "6-Speed Manual (Synchromesh)",
      power: "177 kW – 206 kW",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4HK1-TCC (FRR90) / 6HK1-TCN (FVR34S), DOHC, Intercooled Turbo",
        displacement: "5,193 cc (FRR90) / 7,790 cc (FVR34S)",
        maxPower: "177 kW – 206 kW",
        maxTorque: "637 Nm (FRR90) – 882 Nm (FVR34S)",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "8,900 mm (FRR90) – 12,000 mm (FVR34S body)",
        width: "2,490 mm",
        height: "3,100 – 3,300 mm",
        wheelbase: "4,860 mm (FRR90) / 6,050 mm (FVR34S)",
        groundClearance: "220 – 240 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs, Double-Acting Shock Absorbers",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs with Auxiliary Leaf Springs",
        brakes: "Air Over Hydraulic (FRR90) / Full Air Brakes with ABS (FVR34S)",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "50 – 67 Passengers (body dependent)",
        gvm: "11,000 kg (FRR90) – 15,000 kg (FVR34S)",
      },
    },
    features: [
      "50-Seater (FRR90) and 67-Seater (FVR34S) variants available",
      "Full Air Brakes with ABS on FVR",
      "Air Over Hydraulic Brakes on FRR",
      "Exhaust Brake for safe hill descents",
      "Locally assembled bus body options",
      "Underfloor luggage storage compartments",
      "Driver's air-conditioned cab",
      "Passenger ventilation windows",
      "Safety grab rails throughout",
      "Wide entry/exit doors",
      "Long 20,000 km service intervals",
    ],
  },

  "n-series-buses": {
    id: "n-series-buses",
    category: "Buses",
    title: "N-Series Buses",
    description: "The Isuzu N-Series buses — the NMR85 (25-seater) and NQR81 (33-seater) — are Kenya's most popular school, staff, and public service buses. Built on the ultra-reliable N-Series truck chassis, they deliver the lowest total cost of ownership, outstanding fuel economy, and easy maintenance that fleet operators depend on.",
    heroImage: "/vehicles/nmr85-bus.webp",
    gallery: [
      "/vehicles/nmr85-bus.webp",
      "/vehicles/nqr-bus.webp",
    ],
    quickSpecs: {
      engine: "3.0L – 4.8L Turbo Diesel",
      transmission: "5 or 6-Speed Manual",
      power: "96 kW – 110 kW",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4JJ1-TCC (NMR85) / 4HL1-TC (NQR81), 4-Cylinder, Turbocharged",
        displacement: "2,999 cc (NMR85) / 4,778 cc (NQR81)",
        maxPower: "96 kW @ 2,800 rpm (NMR85) / 110 kW (NQR81)",
        maxTorque: "330 Nm (NMR85) / 400 Nm (NQR81)",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "6,200 mm (NMR85 body) – 7,500 mm (NQR81 body)",
        width: "2,050 – 2,200 mm",
        height: "2,600 – 2,800 mm",
        wheelbase: "2,750 mm (NMR85) / 3,815 mm (NQR81)",
        groundClearance: "190 – 210 mm",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Alloy Steel Leaf Springs",
        suspensionRear: "Semi-Elliptic Alloy Steel Leaf Springs with Auxiliaries",
        brakes: "Hydraulic Dual Circuit with Vacuum Servo",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "75 – 100 Litres",
        seating: "25 Passengers (NMR85) / 33 Passengers (NQR81)",
        gvm: "5,200 kg (NMR85) / 8,500 kg (NQR81)",
      },
    },
    features: [
      "25-Seater (NMR85) and 33-Seater (NQR81) variants",
      "Locally assembled bus body",
      "Wide entry/exit doors for passenger flow",
      "Safety handrails at all seating positions",
      "Comfortable, padded passenger seats",
      "Roof ventilation windows",
      "Driver air conditioning",
      "Anti-lock Braking System (ABS) — NQR81",
      "Excellent fuel economy — low operating cost",
      "Easy to maintain — wide spare parts availability",
      "NTSA compliant school bus options",
    ],
  },
  // ══════════════════════════════════════════
  //  Buses
  // ══════════════════════════════════════════

  "bus-nmr-26": {
    id: "bus-nmr-26",
    category: "Buses",
    title: "NMR 26 Seater Bus",
    description: "The Isuzu NMR 26-Seater Bus offers excellent passenger comfort and safety on a robust N-Series chassis. Ideal for schools, staff transport, and city commuting.",
    heroImage: "/vehicles/buses/nmr26/1.jpg",
    gallery: [
      "/vehicles/buses/nmr26/1.jpg",
      "/vehicles/buses/nmr26/2.jpeg",
      "/vehicles/buses/nmr26/3.jpeg",
      "/vehicles/buses/nmr26/4.jpeg",
      "/vehicles/buses/nmr26/5.jpeg",
      "/vehicles/buses/nmr26/6.jpeg",
      "/vehicles/buses/nmr26/7.jpeg",
      "/vehicles/buses/nmr26/8.jpeg",
    ],
    quickSpecs: {
      engine: "2,999cc Turbo Diesel",
      transmission: "5-Speed Manual",
      power: "130 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "2,999 cc",
        maxPower: "96 kW (130 PS)",
        maxTorque: "330 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Hydraulic Dual Circuit",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "75 Litres",
        seating: "26 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Complete Unit Price: Ksh 5,850,000",
      "Seating Capacity: 26 Passengers",
      "Ideal for Schools and Staff Transport",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-nqr-29": {
    id: "bus-nqr-29",
    category: "Buses",
    title: "NQR 29 Seater Bus",
    description: "The Isuzu NQR 29-Seater Bus delivers reliable, efficient transportation on the proven NQR chassis. Built for durability and passenger safety.",
    heroImage: "/vehicles/nqr-hero.png",
    gallery: ["/vehicles/nqr-hero.png"],
    quickSpecs: {
      engine: "4,778cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "150 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "4,778 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "400 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Hydraulic with Vacuum Servo & ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "110 Litres",
        seating: "29 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Price: On Request",
      "Seating Capacity: 29 Passengers",
      "Robust NQR chassis foundation",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-nqr-33": {
    id: "bus-nqr-33",
    category: "Buses",
    title: "NQR 33 Seater Bus",
    description: "The Isuzu NQR 33-Seater Bus maximizes passenger capacity on the dependable NQR platform, making it highly profitable for transport operators.",
    heroImage: "/vehicles/buses/nqr33/1.jpeg",
    gallery: [
      "/vehicles/buses/nqr33/1.jpeg",
      "/vehicles/buses/nqr33/2.jpeg",
      "/vehicles/buses/nqr33/3.jpeg",
      "/vehicles/buses/nqr33/4.jpeg",
    ],
    quickSpecs: {
      engine: "4,778cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "150 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "4,778 cc",
        maxPower: "110 kW (150 PS)",
        maxTorque: "400 Nm",
        fuelSystem: "Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Hydraulic with Vacuum Servo & ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "110 Litres",
        seating: "33 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Complete Unit Price: Ksh 6,850,000",
      "Seating Capacity: 33 Passengers",
      "Maximum capacity on N-Series platform",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-frr90n-51": {
    id: "bus-frr90n-51",
    category: "Buses",
    title: "FRR 90N 51 Seater Bus",
    description: "The Isuzu FRR 90N 51-Seater Bus is the ideal choice for inter-city travel, church transport, and large-scale staff movement. Built on the proven FRR chassis with a powerful 5.2L engine, it combines reliability with an impressive 51-seat capacity.",
    heroImage: "/vehicles/buses/frr90n-51/1.jpg",
    gallery: [
      "/vehicles/buses/frr90n-51/1.jpg",
      "/vehicles/buses/frr90n-51/2.jpg",
    ],
    quickSpecs: {
      engine: "5,193cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "240 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "5,193 cc",
        maxPower: "177 kW (240 PS)",
        maxTorque: "637 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "51 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Complete Unit Price: Ksh 8,450,000",
      "Seating Capacity: 51 Passengers",
      "Full Air Brake System with ABS",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-frr90q-51": {
    id: "bus-frr90q-51",
    category: "Buses",
    title: "FRR 90Q 51 Seater Bus",
    description: "The Isuzu FRR 90Q 51-Seater Bus is the premium variant in the FRR bus range, delivering enhanced performance and a superior finish for operators who demand the very best. With 51 seats and a powerful engine, it's built for long-distance routes across Kenya.",
    heroImage: "/vehicles/buses/frr90q-51/2.jpg",
    gallery: [
      "/vehicles/buses/frr90q-51/2.jpg",
      "/vehicles/buses/frr90q-51/1.jpg",
    ],
    quickSpecs: {
      engine: "5,193cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "240 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "4-Cylinder Turbocharged",
        displacement: "5,193 cc",
        maxPower: "177 kW (240 PS)",
        maxTorque: "637 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "51 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Complete Unit Price: Ksh 10,425,000",
      "Seating Capacity: 51 Passengers",
      "Premium FRR 90Q variant",
      "Full Air Brake System with ABS",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-fvr34-67-4x2": {
    id: "bus-fvr34-67-4x2",
    category: "Buses",
    title: "FVR 34 67 Seater Bus 4×2",
    description: "The Isuzu FVR 34 Semi-Luxury 67-Seater Bus (4×2) is Kenya's premier high-capacity coach. Powered by a massive 7.8L six-cylinder engine, it delivers exceptional comfort and reliability for long-distance intercounty routes, schools, and corporate transport.",
    heroImage: "/vehicles/buses/fvr34-4x2/1.jpeg",
    gallery: [
      "/vehicles/buses/fvr34-4x2/1.jpeg",
      "/vehicles/buses/fvr34-4x2/2.jpeg",
      "/vehicles/buses/fvr34-4x2/3.jpeg",
      "/vehicles/buses/fvr34-4x2/4.jpeg",
      "/vehicles/buses/fvr34-4x2/5.jpeg",
      "/vehicles/buses/fvr34-4x2/6.jpeg",
      "/vehicles/buses/fvr34-4x2/7.jpeg",
      "/vehicles/buses/fvr34-4x2/8.jpeg",
    ],
    quickSpecs: {
      engine: "7,790cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "280 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "6HK1-TCS, 6-Cylinder, DOHC, Intercooled Turbo",
        displacement: "7,790 cc",
        maxPower: "206 kW (280 PS)",
        maxTorque: "785 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "67 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 4×2",
      "Complete Unit Price: Ksh 14,916,000",
      "Seating Capacity: 67 Passengers",
      "Semi-Luxury Coach Interior",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },

  "bus-fvr34-67-6x2": {
    id: "bus-fvr34-67-6x2",
    category: "Buses",
    title: "FVR 34 67 Seater Bus 6×2",
    description: "The Isuzu FVR 34 Semi-Luxury 67-Seater Bus (6×2) is the top-of-the-range coach for Kenya's most demanding intercounty routes. The 6×2 configuration delivers superior load distribution and stability for operators who carry full loads every day.",
    heroImage: "/vehicles/buses/fvr34-6x2/1.jpeg",
    gallery: [
      "/vehicles/buses/fvr34-6x2/1.jpeg",
      "/vehicles/buses/fvr34-6x2/2.jpeg",
      "/vehicles/buses/fvr34-6x2/3.jpeg",
      "/vehicles/buses/fvr34-6x2/4.jpeg",
      "/vehicles/buses/fvr34-6x2/5.jpeg",
      "/vehicles/buses/fvr34-6x2/6.jpeg",
      "/vehicles/buses/fvr34-6x2/7.jpeg",
      "/vehicles/buses/fvr34-6x2/8.jpeg",
    ],
    quickSpecs: {
      engine: "7,790cc Turbo Diesel",
      transmission: "6-Speed Manual",
      power: "280 PS",
      fuel: "Diesel",
    },
    detailedSpecs: {
      engine: {
        type: "6HK1-TCS, 6-Cylinder, DOHC, Intercooled Turbo",
        displacement: "7,790 cc",
        maxPower: "206 kW (280 PS)",
        maxTorque: "785 Nm",
        fuelSystem: "High-Pressure Common Rail Direct Injection",
      },
      dimensions: {
        length: "TBA",
        width: "TBA",
        height: "TBA",
        wheelbase: "TBA",
        groundClearance: "TBA",
      },
      chassis: {
        suspensionFront: "Semi-Elliptic Leaf Springs with Shock Absorbers",
        suspensionRear: "Semi-Elliptic Leaf Springs",
        brakes: "Full Air Brakes with ABS",
        steering: "Power Assisted Recirculating Ball",
      },
      capacities: {
        fuelTank: "200 Litres",
        seating: "67 Seats",
        gvm: "TBA",
      },
    },
    features: [
      "Drive Configuration: 6×2",
      "Complete Unit Price: Ksh 16,623,000",
      "Seating Capacity: 67 Passengers",
      "Semi-Luxury Coach Interior",
      "Superior load distribution — 6×2 axle config",
      "Full Air Brake System with ABS",
      "Exhaust Brake for safer descents",
      "Warranty: 2 years or 100,000Kms",
      "Up to 100% bank financing available",
    ],
  },
};
