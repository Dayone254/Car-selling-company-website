"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Heart,
  MessageCircle,
  Calendar,
  Share2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Award,
  FileText,
  Calculator,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getVehicleById } from "@/lib/vehicles-data"

export default function VehicleDetailPage() {
  const params = useParams()
  const vehicleId = parseInt(params.id as string)
  const vehicle = getVehicleById(vehicleId)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loanAmount, setLoanAmount] = useState([6000000])
  const [loanTerm, setLoanTerm] = useState("48")
  const [interestRate] = useState(12.5)

  // If vehicle not found, show error or redirect
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6 font-light">The vehicle you're looking for doesn't exist.</p>
          <Button asChild className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light">
            <Link href="/inventory">Back to Inventory</Link>
          </Button>
        </div>
      </div>
    )
  }

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate / 100 / 12
    const numPayments = Number.parseInt(loanTerm)

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    return monthlyPayment
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const nextImage = () => {
    if (vehicle.images) {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images!.length)
    }
  }

  const prevImage = () => {
    if (vehicle.images) {
      setCurrentImageIndex((prev) => (prev - 1 + vehicle.images!.length) % vehicle.images!.length)
    }
  }

  const images = vehicle.images || [vehicle.image]

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <span className="font-light text-xl text-gray-900 tracking-wide">Nairobi Prime Motors</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/inventory"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Inventory
              </Link>
              <Link
                href="/import-service"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Import Service
              </Link>
              <Link
                href="/sell-your-car"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Sell Your Car
              </Link>
              <Link
                href="/financing"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Financing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                About Us
              </Link>
            </nav>

            <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg">
              Book Test Drive
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 font-light">
            <Link href="/" className="hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-gray-900 transition-colors duration-200">
              Inventory
            </Link>
            <span>/</span>
            <span className="text-gray-900">
              {vehicle.make} {vehicle.model}
            </span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative mb-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-light">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square relative overflow-hidden rounded-xl border-2 transition-all ${
                    index === currentImageIndex ? "border-[#B89E5A]" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Info & CTA */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-600 hover:bg-green-600 rounded-full">{vehicle.status}</Badge>
                {vehicle.featured && <Badge variant="outline" className="rounded-full">Featured</Badge>}
                {vehicle.isNegotiable && <Badge className="bg-green-600 hover:bg-green-600 rounded-full">Negotiable</Badge>}
              </div>
              <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">
                {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-gray-600 mb-4 font-light">
                {vehicle.year} • {vehicle.bodyType} • {vehicle.condition} • {vehicle.sellerType}
              </p>
              <div className="text-4xl font-light text-[#B89E5A] mb-6 tracking-wide">{formatPrice(vehicle.price)}</div>
            </div>

            {/* Key Specs */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-gray-900 mb-4 tracking-wide">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 font-light">Mileage:</span>
                    <div className="font-medium">{vehicle.mileage}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-light">Transmission:</span>
                    <div className="font-medium">{vehicle.transmission}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-light">Fuel Type:</span>
                    <div className="font-medium">{vehicle.fuelType}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-light">Engine:</span>
                    <div className="font-medium">{vehicle.engine}</div>
                  </div>
                  {vehicle.drivetrain && (
                  <div>
                      <span className="text-gray-600 font-light">Drivetrain:</span>
                    <div className="font-medium">{vehicle.drivetrain}</div>
                  </div>
                  )}
                  {vehicle.color && (
                  <div>
                      <span className="text-gray-600 font-light">Color:</span>
                    <div className="font-medium">{vehicle.color}</div>
                  </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#B89E5A] hover:bg-[#9A8449] text-white h-12 text-lg rounded-full font-light transform hover:scale-[1.02] transition-all duration-200 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Test Drive
              </Button>
              <Button variant="outline" className="w-full h-12 text-lg rounded-full font-light bg-transparent border-gray-200 hover:bg-gray-50">
                Make an Offer
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-lg rounded-full font-light bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1 rounded-full font-light">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 rounded-full font-light">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-gray-900 mb-4 tracking-wide">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900 font-light">+254 700 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900 font-light">{vehicle.location}, Nairobi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white rounded-2xl shadow-sm">
              <TabsTrigger value="overview" className="rounded-xl font-light">Overview</TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-xl font-light">Specifications</TabsTrigger>
              <TabsTrigger value="features" className="rounded-xl font-light">Features</TabsTrigger>
              <TabsTrigger value="financing" className="rounded-xl font-light">Financing</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">Vehicle Overview</h3>
                    <p className="text-gray-700 mb-6 font-light leading-relaxed">
                      This pristine {vehicle.year} {vehicle.make} {vehicle.model} represents the perfect blend of
                      luxury, performance, and reliability. With only {vehicle.mileage} on the odometer, this vehicle
                      has been meticulously maintained and comes with a complete service history.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <Shield className="w-8 h-8 text-[#B89E5A] mx-auto mb-2" />
                        <div className="font-medium text-gray-900">Verified</div>
                        <div className="text-sm text-gray-600 font-light">Mileage</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <Award className="w-8 h-8 text-[#B89E5A] mx-auto mb-2" />
                        <div className="font-medium text-gray-900">Accident</div>
                        <div className="text-sm text-gray-600 font-light">Free</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <FileText className="w-8 h-8 text-[#B89E5A] mx-auto mb-2" />
                        <div className="font-medium text-gray-900">Complete</div>
                        <div className="text-sm text-gray-600 font-light">History</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">Why Choose This Vehicle?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="text-gray-700 font-light">Low mileage with complete service records</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="text-gray-700 font-light">Single owner, garage kept</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="text-gray-700 font-light">All original parts and accessories</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="text-gray-700 font-light">Recently serviced and inspected</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="text-gray-700 font-light">Comprehensive warranty coverage available</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-wide">Complete Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 tracking-wide">Engine & Performance</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Engine:</span>
                          <span className="font-medium">{vehicle.engine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Transmission:</span>
                          <span className="font-medium">{vehicle.transmission}</span>
                        </div>
                        {vehicle.drivetrain && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">Drivetrain:</span>
                          <span className="font-medium">{vehicle.drivetrain}</span>
                        </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Fuel Type:</span>
                          <span className="font-medium">{vehicle.fuelType}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 tracking-wide">Exterior & Interior</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Body Type:</span>
                          <span className="font-medium">{vehicle.bodyType}</span>
                        </div>
                        {vehicle.doors && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">Doors:</span>
                          <span className="font-medium">{vehicle.doors}</span>
                        </div>
                        )}
                        {vehicle.seats && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">Seats:</span>
                          <span className="font-medium">{vehicle.seats}</span>
                        </div>
                        )}
                        {vehicle.color && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">Color:</span>
                          <span className="font-medium">{vehicle.color}</span>
                        </div>
                        )}
                        {vehicle.interior && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">Interior:</span>
                          <span className="font-medium">{vehicle.interior}</span>
                        </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 tracking-wide">Vehicle Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Year:</span>
                          <span className="font-medium">{vehicle.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Mileage:</span>
                          <span className="font-medium">{vehicle.mileage}</span>
                        </div>
                        {vehicle.vin && (
                        <div className="flex justify-between">
                            <span className="text-gray-600 font-light">VIN:</span>
                          <span className="font-medium">{vehicle.vin}</span>
                        </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-light">Status:</span>
                          <span className="font-medium">{vehicle.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card className="border-0 shadow-sm bg-white rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-wide">Features & Equipment</h3>
                  {vehicle.features ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
                          <span className="text-gray-900 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  ) : (
                    <p className="text-gray-600 font-light">Features information not available for this vehicle.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financing" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calculator className="w-5 h-5 text-[#B89E5A]" />
                      <h3 className="text-xl font-medium text-gray-900 tracking-wide">Financing Calculator</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block font-light">
                          Loan Amount: {formatPrice(loanAmount[0])}
                        </Label>
                        <Slider
                          value={loanAmount}
                          onValueChange={setLoanAmount}
                          max={vehicle.price}
                          min={vehicle.price * 0.1}
                          step={100000}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="loan-term" className="text-sm font-medium text-gray-700 mb-2 block font-light">
                          Loan Term (months)
                        </Label>
                        <Select value={loanTerm} onValueChange={setLoanTerm}>
                          <SelectTrigger className="rounded-lg border-gray-200 font-light">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="24">24 months</SelectItem>
                            <SelectItem value="36">36 months</SelectItem>
                            <SelectItem value="48">48 months</SelectItem>
                            <SelectItem value="60">60 months</SelectItem>
                            <SelectItem value="72">72 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block font-light">
                          Interest Rate: {interestRate}% p.a.
                        </Label>
                        <p className="text-xs text-gray-600 font-light">Rate varies by bank and credit profile</p>
                      </div>

                      <div className="bg-[#B89E5A]/10 p-4 rounded-xl border border-[#B89E5A]/20">
                        <div className="text-center">
                          <div className="text-2xl font-light text-[#B89E5A] mb-1 tracking-wide">
                            {formatPrice(calculateMonthlyPayment())}
                          </div>
                          <div className="text-sm text-gray-600 font-light">Estimated Monthly Payment</div>
                        </div>
                      </div>

                      <Button className="w-full bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light transition-all duration-200 hover:shadow-lg">
                        Apply for Pre-Approval
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">Our Banking Partners</h3>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">
                      We work with Kenya's leading banks to offer you competitive financing rates and flexible terms.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border rounded-xl text-center">
                        <div className="font-medium text-gray-900">KCB Bank</div>
                        <div className="text-sm text-gray-600 font-light">From 11.5% p.a.</div>
                      </div>
                      <div className="p-4 border rounded-xl text-center">
                        <div className="font-medium text-gray-900">Stanbic Bank</div>
                        <div className="text-sm text-gray-600 font-light">From 12.0% p.a.</div>
                      </div>
                      <div className="p-4 border rounded-xl text-center">
                        <div className="font-medium text-gray-900">NCBA Bank</div>
                        <div className="text-sm text-gray-600 font-light">From 12.5% p.a.</div>
                      </div>
                      <div className="p-4 border rounded-xl text-center">
                        <div className="font-medium text-gray-900">Equity Bank</div>
                        <div className="text-sm text-gray-600 font-light">From 13.0% p.a.</div>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="font-light">Minimum 20% down payment required</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="font-light">Loan terms up to 72 months available</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="font-light">Pre-approval available in 24 hours</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#B89E5A] rounded-full mt-2"></div>
                        <span className="font-light">Competitive rates for qualified buyers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
