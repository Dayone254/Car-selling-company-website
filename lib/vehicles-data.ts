export interface Vehicle {
  id: number
  make: string
  model: string
  year: number
  price: number
  mileage: string
  image: string
  status: string
  transmission: string
  fuelType: string
  bodyType: string
  engine: string
  engineCapacity: string // e.g., "3000 Cc"
  featured: boolean
  condition: string
  location: string
  isNegotiable: boolean
  sellerType: "Dealer" | "Private"
  category: "Cars" | "SUVs" | "Luxury" | "Commercial"
  drivetrain?: string
  color?: string
  interior?: string
  doors?: number
  seats?: number
  vin?: string
  images?: string[]
  features?: string[]
}

export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    make: "BMW",
    model: "X5 xDrive40i",
    year: 2022,
    price: 8500000,
    mileage: "15,000 km",
    image: "/luxury-bmw-x5-nairobi.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    engine: "3.0L Twin Turbo",
    engineCapacity: "3000 Cc",
    drivetrain: "All-Wheel Drive",
    color: "Alpine White",
    interior: "Black Leather",
    doors: 5,
    seats: 7,
    vin: "WBAXXX123456789",
    featured: true,
    condition: "Excellent",
    location: "Westlands",
    isNegotiable: true,
    sellerType: "Dealer",
    category: "Luxury",
    images: [
      "/bmw-x5-front.png",
      "/bmw-x5-dashboard.png",
      "/bmw-x5-side.png",
      "/bmw-x5-rear.png",
      "/luxury-bmw-x5-showroom.png",
      "/luxury-bmw-x5-nairobi.png",
    ],
    features: [
      "Panoramic Sunroof",
      "Harman Kardon Sound System",
      "Navigation System",
      "Heated Seats",
      "Parking Sensors",
      "Backup Camera",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Keyless Entry",
      "LED Headlights",
    ],
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C-Class C300",
    year: 2021,
    price: 6200000,
    mileage: "22,000 km",
    image: "/elegant-mercedes-c-class.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    engine: "2.0L Turbo",
    engineCapacity: "2000 Cc",
    drivetrain: "Rear-Wheel Drive",
    color: "Obsidian Black",
    interior: "Beige Leather",
    doors: 4,
    seats: 5,
    vin: "WDDXXX987654321",
    featured: false,
    condition: "Excellent",
    location: "Westlands",
    isNegotiable: false,
    sellerType: "Dealer",
    category: "Luxury",
    images: [
      "/elegant-mercedes-c-class.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "MBUX Infotainment System",
      "Burmester Sound System",
      "Ambient Lighting",
      "Heated & Ventilated Seats",
      "360° Camera",
      "Active Parking Assist",
      "Wireless Charging",
      "Adaptive Cruise Control",
      "Keyless Go",
      "LED High Performance Headlamps",
    ],
  },
  {
    id: 3,
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2023,
    price: 7800000,
    mileage: "8,500 km",
    image: "/toyota-land-cruiser-prado.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    engine: "2.8L Turbo Diesel",
    engineCapacity: "2800 Cc",
    drivetrain: "Four-Wheel Drive",
    color: "Pearl White",
    interior: "Black Fabric",
    doors: 5,
    seats: 7,
    vin: "JTDXXX456789123",
    featured: true,
    condition: "Like New",
    location: "Westlands",
    isNegotiable: true,
    sellerType: "Dealer",
    category: "SUVs",
    images: [
      "/toyota-land-cruiser-prado.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Toyota Safety Sense",
      "Multi-Terrain Select",
      "Crawl Control",
      "Kinetic Dynamic Suspension",
      "7-Speed Automatic",
      "Hill Start Assist",
      "Downhill Assist Control",
      "Bluetooth Connectivity",
      "USB Ports",
      "Roof Rails",
    ],
  },
  {
    id: 4,
    make: "Audi",
    model: "Q7 55 TFSI",
    year: 2022,
    price: 9200000,
    mileage: "18,000 km",
    image: "/audi-q7-luxury-suv.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    engine: "3.0L V6 Turbo",
    engineCapacity: "3000 Cc",
    drivetrain: "Quattro All-Wheel Drive",
    color: "Glacier White",
    interior: "Black Valcona Leather",
    doors: 5,
    seats: 7,
    vin: "WAUXXX789123456",
    featured: false,
    condition: "Excellent",
    location: "Westlands",
    isNegotiable: false,
    sellerType: "Dealer",
    category: "Luxury",
    images: [
      "/audi-q7-luxury-suv.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Virtual Cockpit",
      "MMI Navigation Plus",
      "Bang & Olufsen Sound System",
      "Panoramic Sunroof",
      "Audi Pre Sense",
      "Adaptive Air Suspension",
      "Quattro All-Wheel Drive",
      "Wireless Charging",
      "Audi Connect",
      "Matrix LED Headlights",
    ],
  },
  {
    id: 5,
    make: "Lexus",
    model: "RX 350",
    year: 2021,
    price: 7200000,
    mileage: "25,000 km",
    image: "/lexus-rx-350-luxury-suv.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    engine: "3.5L V6",
    engineCapacity: "3500 Cc",
    drivetrain: "Front-Wheel Drive",
    color: "Celestial Blue",
    interior: "Black NuLuxe",
    doors: 5,
    seats: 5,
    vin: "JTHXXX321654987",
    featured: false,
    condition: "Very Good",
    location: "Westlands",
    isNegotiable: true,
    sellerType: "Dealer",
    category: "Luxury",
    images: [
      "/lexus-rx-350-luxury-suv.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Lexus Safety System+",
      "Mark Levinson Sound System",
      "Remote Touch Interface",
      "Heated & Ventilated Seats",
      "360° Camera",
      "Blind Spot Monitor",
      "Wireless Charging",
      "Smart Access",
      "LED Headlights",
      "Panoramic Roof",
    ],
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series 320i",
    year: 2020,
    price: 4800000,
    mileage: "35,000 km",
    image: "/bmw-3-series-sedan.png",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    engine: "2.0L Turbo",
    engineCapacity: "2000 Cc",
    drivetrain: "Rear-Wheel Drive",
    color: "Alpine White",
    interior: "Black SensaTec",
    doors: 4,
    seats: 5,
    vin: "WBAXXX147258369",
    featured: false,
    condition: "Good",
    location: "Westlands",
    isNegotiable: true,
    sellerType: "Dealer",
    category: "Cars",
    images: [
      "/bmw-3-series-sedan.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "iDrive 7.0",
      "Live Cockpit Professional",
      "Harman Kardon Sound",
      "Sport Seats",
      "Parking Assistant",
      "Backup Camera",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Comfort Access",
      "LED Headlights",
    ],
  },
  {
    id: 7,
    make: "Toyota",
    model: "Hilux",
    year: 2019,
    price: 3200000,
    mileage: "45,000 km",
    image: "/placeholder.svg?height=600&width=800",
    status: "Duty Paid",
    transmission: "Manual",
    fuelType: "Diesel",
    bodyType: "Pickup",
    engine: "2.4L Turbo Diesel",
    engineCapacity: "2400 Cc",
    drivetrain: "Four-Wheel Drive",
    color: "Silver",
    interior: "Gray Fabric",
    doors: 4,
    seats: 5,
    vin: "JTDXXX789456123",
    featured: false,
    condition: "Good",
    location: "Nairobi",
    isNegotiable: true,
    sellerType: "Private",
    category: "Commercial",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS Brakes",
      "Central Locking",
      "CD Player",
      "Tinted Windows",
      "Tow Bar",
      "Roof Rails",
      "Alloy Wheels",
      "Fog Lights",
    ],
  },
  {
    id: 8,
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    price: 1800000,
    mileage: "65,000 km",
    image: "/placeholder.svg?height=600&width=800",
    status: "Duty Paid",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    engine: "1.8L",
    engineCapacity: "1800 Cc",
    drivetrain: "Front-Wheel Drive",
    color: "White",
    interior: "Beige Fabric",
    doors: 4,
    seats: 5,
    vin: "JTDXXX456123789",
    featured: false,
    condition: "Good",
    location: "Kiambu",
    isNegotiable: true,
    sellerType: "Private",
    category: "Cars",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Air Conditioning",
      "Power Windows",
      "Power Steering",
      "ABS Brakes",
      "Central Locking",
      "CD Player",
      "Bluetooth",
      "USB Port",
      "Alloy Wheels",
      "Fog Lights",
    ],
  },
]

export const getVehicleById = (id: number): Vehicle | undefined => {
  return vehiclesData.find(vehicle => vehicle.id === id)
}

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehiclesData.filter(vehicle => vehicle.featured)
}

export const getVehiclesByCategory = (category: Vehicle['category']): Vehicle[] => {
  return vehiclesData.filter(vehicle => vehicle.category === category)
}

export const getVehiclesByMake = (make: string): Vehicle[] => {
  return vehiclesData.filter(vehicle => vehicle.make.toLowerCase() === make.toLowerCase())
}

export const getPopularMakes = (): string[] => {
  const makes = vehiclesData.map(vehicle => vehicle.make)
  const makeCounts = makes.reduce((acc, make) => {
    acc[make] = (acc[make] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return Object.entries(makeCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([make]) => make)
}

export const getCategories = (): Vehicle['category'][] => {
  return Array.from(new Set(vehiclesData.map(vehicle => vehicle.category)))
} 