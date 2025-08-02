import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Shield,
  Award,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Heart,
  Eye,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getFeaturedVehicles } from "@/lib/vehicles-data"

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Marketing Director",
      content:
        "Exceptional service from start to finish. The team at Nairobi Prime Motors made buying my BMW X3 effortless and transparent.",
      rating: 5,
    },
    {
      name: "David Kimani",
      role: "Business Owner",
      content:
        "Finally, a dealership that understands professionalism. The financing process was smooth and the car quality is outstanding.",
      rating: 5,
    },
    {
      name: "Grace Muthoni",
      role: "Consultant",
      content:
        "I've bought three cars from them now. Their attention to detail and customer service is unmatched in Nairobi.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300" id="header">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <span className="font-light text-xl text-white tracking-wide drop-shadow-lg">Nairobi Prime Motors</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/inventory"
                className="text-white font-medium tracking-wide hover:text-[#B89E5A] transition-colors duration-200 drop-shadow-sm"
              >
                Inventory
              </Link>
              <Link
                href="/import-service"
                className="text-white/90 hover:text-white font-light tracking-wide transition-colors duration-200 drop-shadow-sm"
              >
                Import Service
              </Link>
              <Link
                href="/sell-your-car"
                className="text-white/90 hover:text-white font-light tracking-wide transition-colors duration-200 drop-shadow-sm"
              >
                Sell Your Car
              </Link>
              <Link
                href="/financing"
                className="text-white/90 hover:text-white font-light tracking-wide transition-colors duration-200 drop-shadow-sm"
              >
                Financing
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-white font-light tracking-wide transition-colors duration-200 drop-shadow-sm"
              >
                About Us
              </Link>
            </nav>

            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-light px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg border border-white/30">
              Book Test Drive
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - World Class Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Primary Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(184,158,90,0.1)_0%,transparent_50%)] animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B89E5A]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#B89E5A]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          {/* Luxury Car Image Overlay */}
          <div className="absolute inset-0">
        <Image
          src="/nairobi-luxury-car-showroom.png"
              alt="Nairobi Prime Motors Showroom"
          fill
              className="object-cover opacity-20"
          priority
        />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
          
          {/* Geometric Accents */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#B89E5A]/20 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border border-[#B89E5A]/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#B89E5A]/10 rounded-full"></div>
        </div>

        {/* Hero Content with Sophisticated Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 w-fit">
                <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
                <span className="text-white/90 font-light text-sm tracking-wider uppercase">Premium Automotive Excellence</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-wide">
                  <span className="block">Nairobi's</span>
                  <span className="block text-[#B89E5A] font-medium">Premier</span>
                  <span className="block">Automotive</span>
                  <span className="block text-[#B89E5A] font-medium">Experience</span>
            </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-lg">
                  Where luxury meets authenticity. Discover meticulously curated vehicles that embody sophistication and performance.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-light text-[#B89E5A] mb-2">500+</div>
                  <div className="text-white/70 font-light text-sm tracking-wide">Premium Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-light text-[#B89E5A] mb-2">98%</div>
                  <div className="text-white/70 font-light text-sm tracking-wide">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-light text-[#B89E5A] mb-2">15+</div>
                  <div className="text-white/70 font-light text-sm tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Search Interface */}
            <div className="relative">
              {/* Floating Search Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-light text-white mb-2 tracking-wide">Find Your Perfect Match</h2>
                  <p className="text-white/70 font-light">Discover vehicles that align with your lifestyle and aspirations</p>
                </div>

                {/* Advanced Search Form */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                      <SelectTrigger className="rounded-xl font-light h-14 border-white/20 bg-white/10 text-white placeholder:text-white/70 hover:bg-white/15 transition-all duration-300">
                        <SelectValue placeholder="Vehicle Make" />
                  </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="lexus">Lexus</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                      <SelectTrigger className="rounded-xl font-light h-14 border-white/20 bg-white/10 text-white placeholder:text-white/70 hover:bg-white/15 transition-all duration-300">
                        <SelectValue placeholder="Body Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="rounded-xl font-light h-14 border-white/20 bg-white/10 text-white placeholder:text-white/70 hover:bg-white/15 transition-all duration-300">
                        <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
                        <SelectItem value="0-2m">0 - 2M KES</SelectItem>
                        <SelectItem value="2m-5m">2M - 5M KES</SelectItem>
                        <SelectItem value="5m-10m">5M - 10M KES</SelectItem>
                        <SelectItem value="10m+">10M+ KES</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                      <SelectTrigger className="rounded-xl font-light h-14 border-white/20 bg-white/10 text-white placeholder:text-white/70 hover:bg-white/15 transition-all duration-300">
                        <SelectValue placeholder="Year Range" />
                  </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
                        <SelectItem value="2020-2024">2020 - 2024</SelectItem>
                        <SelectItem value="2015-2019">2015 - 2019</SelectItem>
                        <SelectItem value="2010-2014">2010 - 2014</SelectItem>
                        <SelectItem value="pre-2010">Pre 2010</SelectItem>
                  </SelectContent>
                </Select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#B89E5A] to-[#9A8449] hover:from-[#9A8449] hover:to-[#B89E5A] text-white rounded-xl font-light h-14 text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105" asChild>
                    <Link href="/inventory">
                      <Search className="w-5 h-5 mr-3" />
                      Explore Collection
                    </Link>
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" className="text-white/70 hover:text-white font-light text-sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with Expert
                    </Button>
                    <Button variant="ghost" className="text-white/70 hover:text-white font-light text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B89E5A]/50 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Sophisticated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-white/50 text-sm font-light tracking-wider uppercase">Scroll to Explore</div>
            <div className="w-6 h-12 border-2 border-white/20 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-[#B89E5A] rounded-full mt-2 animate-bounce"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-[#B89E5A] to-transparent"></div>
        <div className="absolute bottom-1/4 left-10 w-1 h-24 bg-gradient-to-b from-transparent to-[#B89E5A]"></div>
      </section>

      {/* Value Propositions - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B89E5A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-[#B89E5A]/10 rounded-full px-6 py-3 border border-[#B89E5A]/20 w-fit mx-auto mb-6">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
              <span className="text-[#B89E5A] font-light text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Uncompromising
              <span className="text-[#B89E5A] font-medium"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Every aspect of our service is designed to deliver the premium automotive experience you deserve
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#B89E5A]/20 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B89E5A]/10 to-[#B89E5A]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-[#B89E5A]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900 tracking-wide">Verified Mileage</h3>
                <p className="text-gray-600 font-light leading-relaxed">Every vehicle comes with verified mileage and complete service history, ensuring complete transparency</p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#B89E5A]/20 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B89E5A]/10 to-[#B89E5A]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-[#B89E5A]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900 tracking-wide">Accident-Free Guarantee</h3>
                <p className="text-gray-600 font-light leading-relaxed">Comprehensive inspection ensures all vehicles are accident-free with detailed condition reports</p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#B89E5A]/20 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B89E5A]/10 to-[#B89E5A]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-[#B89E5A]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900 tracking-wide">Trade-In Welcome</h3>
                <p className="text-gray-600 font-light leading-relaxed">Get the best value for your current vehicle with our competitive trade-in program</p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#B89E5A]/20 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B89E5A]/10 to-[#B89E5A]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-[#B89E5A]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900 tracking-wide">Bank Financing</h3>
                <p className="text-gray-600 font-light leading-relaxed">Partnered with leading Kenyan banks for competitive financing rates and flexible terms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find What Fits You Section - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#B89E5A]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-[#B89E5A]/10 rounded-full px-6 py-3 border border-[#B89E5A]/20 w-fit mx-auto mb-6">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <span className="text-[#B89E5A] font-light text-sm tracking-wider uppercase">Personalized Experience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Find What
              <span className="text-[#B89E5A] font-medium"> Fits You</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              We help you find a car that fits your personality, dream and pocket!
            </p>
          </div>

          {/* Budget Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { label: "0 - 500K", min: 0, max: 500000 },
              { label: "500K - 1M", min: 500000, max: 1000000 },
              { label: "1M - 2M", min: 1000000, max: 2000000 },
              { label: "2M - 3M", min: 2000000, max: 3000000 },
              { label: "3M - 5M", min: 3000000, max: 5000000 },
              { label: "5M - 10M", min: 5000000, max: 10000000 },
              { label: "Above 10M", min: 10000000, max: Infinity }
            ].map((range) => (
              <Button
                key={range.label}
                variant="outline"
                className="rounded-full px-8 py-4 border-gray-200 hover:bg-[#B89E5A] hover:border-[#B89E5A] hover:text-white font-light transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
              >
                {range.label}
              </Button>
            ))}
          </div>

          {/* Quick Search Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100/50 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#B89E5A]/10 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#B89E5A]/5 rounded-full"></div>
              
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B89E5A]/10 to-[#B89E5A]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-[#B89E5A]" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-wide">Search by Name</h3>
                <p className="text-gray-600 font-light text-lg">
                  Simply write the vehicle name and press the search button (i.e demio or vitz)
                </p>
              </div>
              
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Search vehicle..."
                  className="flex-1 rounded-xl border-gray-200 font-light h-14 text-lg focus:ring-2 focus:ring-[#B89E5A]/20 focus:border-[#B89E5A] transition-all duration-300"
                />
                <Button className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] hover:from-[#9A8449] hover:to-[#B89E5A] text-white rounded-xl font-light px-10 h-14 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#B89E5A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
              </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 w-fit mx-auto mb-6">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <span className="text-white/90 font-light text-sm tracking-wider uppercase">Trusted Brands</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
              Popular
              <span className="text-[#B89E5A] font-medium"> Brands</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Discover vehicles from Kenya's most trusted automotive brands
            </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            {["Toyota", "BMW", "Mercedes-Benz", "Audi", "Lexus", "Nissan", "Honda", "Mazda", "Subaru", "Volkswagen", "Ford", "Hyundai"].map((brand) => (
              <div key={brand} className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:shadow-2xl border border-white/10 hover:border-[#B89E5A]/30 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B89E5A]/20 to-[#B89E5A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#B89E5A] font-bold text-xl">{brand.charAt(0)}</span>
              </div>
                  <h3 className="font-medium text-white tracking-wide group-hover:text-[#B89E5A] transition-colors duration-300">
                    {brand}
                  </h3>
            </div>
              </div>
            ))}
            </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-[#B89E5A] text-[#B89E5A] hover:bg-[#B89E5A] hover:text-white bg-transparent rounded-full font-light px-10 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View All Brands
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#B89E5A]/2 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-[#B89E5A]/10 rounded-full px-6 py-3 border border-[#B89E5A]/20 w-fit mx-auto mb-6">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <span className="text-[#B89E5A] font-light text-sm tracking-wider uppercase">Curated Collection</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Featured
              <span className="text-[#B89E5A] font-medium"> Vehicles</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Handpicked premium vehicles that exemplify quality, performance, and sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden rounded-3xl hover:scale-105">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute top-6 left-6 flex gap-3">
                    <Badge className="bg-white/95 text-gray-700 border-0 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm shadow-lg">
                      {vehicle.status}
                    </Badge>
                    {vehicle.featured && (
                      <Badge className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] text-white border-0 rounded-full px-4 py-2 text-sm font-medium shadow-lg">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/95 hover:bg-white text-gray-700 rounded-full w-12 h-12 p-0 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/95 hover:bg-white text-gray-700 rounded-full w-12 h-12 p-0 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2 tracking-wide">
                    {vehicle.make} {vehicle.model}
                  </h3>
                    <p className="text-gray-500 font-light text-base">
                      {vehicle.year} • {vehicle.condition} • {vehicle.location}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-light text-[#B89E5A] tracking-wide">{formatPrice(vehicle.price)}</span>
                    <div className="text-right">
                      {vehicle.isNegotiable && (
                        <Badge variant="outline" className="text-green-600 border-green-300 text-sm px-3 py-1">
                          Negotiable
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-8 font-light">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-[#B89E5A]/20 rounded-full mr-3"></span>
                      {vehicle.mileage}
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-[#B89E5A]/20 rounded-full mr-3"></span>
                      {vehicle.engineCapacity}
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-[#B89E5A]/20 rounded-full mr-3"></span>
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-[#B89E5A]/20 rounded-full mr-3"></span>
                      {vehicle.sellerType}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-[#B89E5A] hover:to-[#9A8449] text-white rounded-xl font-light h-14 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    asChild
                  >
                    <Link href={`/vehicle/${vehicle.id}`} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-5 h-5 mr-3" />
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-[#B89E5A] text-[#B89E5A] hover:bg-[#B89E5A] hover:text-white bg-transparent rounded-full font-light px-12 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View All Vehicles
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Inspired by Kai & Karo's "One, Two, Three" */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Owning a car is as simple as One, Two, Three</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Your journey to owning a premium vehicle is simple and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#B89E5A]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#B89E5A]/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B89E5A] rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">ONE</h3>
              <h4 className="text-lg font-medium mb-3 text-[#B89E5A] tracking-wide">Select Vehicle</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Browse our curated collection and find the perfect vehicle that matches your style and budget
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#B89E5A]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#B89E5A]/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B89E5A] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">TWO</h3>
              <h4 className="text-lg font-medium mb-3 text-[#B89E5A] tracking-wide">Enquire</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Contact our experts for detailed information, test drive arrangements, and financing options
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#B89E5A]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#B89E5A]/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#B89E5A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B89E5A] rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">THREE</h3>
              <h4 className="text-lg font-medium mb-3 text-[#B89E5A] tracking-wide">Pay</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Complete your purchase with our streamlined process and drive away in your dream car
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#B89E5A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 w-fit mx-auto mb-6">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <span className="text-white/90 font-light text-sm tracking-wider uppercase">Client Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
              What Our
              <span className="text-[#B89E5A] font-medium"> Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Trusted by Nairobi's discerning professionals who demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 rounded-3xl overflow-hidden hover:scale-105 border border-white/10">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#B89E5A] text-[#B89E5A]" />
                    ))}
                  </div>
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#B89E5A]/30" />
                    <p className="text-white/90 italic font-light leading-relaxed text-lg pl-6">"{testimonial.content}"</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-medium text-white tracking-wide text-lg">{testimonial.name}</p>
                    <p className="text-sm text-white/70 font-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - World Class Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B89E5A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#B89E5A]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#B89E5A]/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 w-fit mx-auto mb-8">
              <div className="w-2 h-2 bg-[#B89E5A] rounded-full animate-pulse"></div>
              <span className="text-white/90 font-light text-sm tracking-wider uppercase">Take Action</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-wide leading-tight">
              Ready to Find Your
              <br />
              <span className="text-[#B89E5A] font-medium">Perfect Car?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join hundreds of satisfied customers who chose Nairobi Prime Motors for their luxury vehicle needs
          </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] hover:from-[#9A8449] hover:to-[#B89E5A] text-white rounded-full font-light px-12 py-4 text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <Search className="w-5 h-5 mr-3" />
              Browse Inventory
            </Button>
            <Button
              size="lg"
              variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-gray-900 bg-transparent rounded-full font-light px-12 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm"
            >
                <MessageCircle className="w-5 h-5 mr-3" />
              Chat on WhatsApp
            </Button>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
                <span className="font-light">500+ Vehicles Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
                <span className="font-light">Instant Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
                <span className="font-light">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Inspired by Kai & Karo */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          {/* Stay up to date section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Stay up to date</h3>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-gray-200 font-light focus:ring-2 focus:ring-[#B89E5A]/20 focus:border-[#B89E5A]"
                />
                <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NPM</span>
                </div>
                <span className="font-light text-xl text-gray-900 tracking-wide">Nairobi Prime Motors</span>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Your trusted partner for premium vehicles in Nairobi. Quality, transparency, and exceptional service.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#B89E5A]/10 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#B89E5A]/10 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#B89E5A]/10 transition-colors duration-200">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4 tracking-wide">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">About</Link></li>
                <li><Link href="/sell-your-car" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">Sell Your Car</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4 tracking-wide">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">Frequently asked Questions</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4 tracking-wide">Location</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#B89E5A]" />
                  <div>
                    <p className="text-gray-900 font-medium">Nairobi Prime Motors - Westlands</p>
                    <p className="text-gray-600 font-light text-sm">4th Floor, Westlands Mall</p>
                    <p className="text-gray-600 font-light text-sm">+254 700 000 000</p>
                  </div>
                </div>
                <Button className="w-full bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 font-light">
              © 2025 Nairobi Prime Motors. All rights reserved.
            </p>
            <p className="text-gray-500 font-light text-sm mt-2">
              A craft of Nairobi Prime Motors
            </p>
          </div>
        </div>
      </footer>

      {/* Header Scroll Effect Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function updateHeader() {
      const header = document.getElementById('header');
              if (!header) return;
              
              if (window.scrollY > 50) {
                // Add solid background classes
                header.classList.add('bg-white', 'backdrop-blur-md', 'border-b', 'border-gray-200', 'shadow-md');
                header.classList.remove('bg-transparent');
                
                // Update logo text color
                const logoText = header.querySelector('span');
                if (logoText) {
                  logoText.classList.remove('text-white');
                  logoText.classList.add('text-gray-900');
                }
                
                // Update navigation links
                const navLinks = header.querySelectorAll('nav a');
                navLinks.forEach((link, index) => {
                  link.classList.remove('text-white', 'text-white/90', 'hover:text-[#B89E5A]', 'hover:text-white');
                  if (index === 0) {
                    link.classList.add('text-[#B89E5A]', 'hover:text-[#9A8449]');
                  } else {
                    link.classList.add('text-gray-600', 'hover:text-gray-900');
                  }
                });
                
                // Update button
                const button = header.querySelector('button');
                if (button) {
                  button.classList.remove('bg-white/20', 'hover:bg-white/30', 'border-white/30');
                  button.classList.add('bg-[#B89E5A]', 'hover:bg-[#9A8449]', 'text-white');
                }
              } else {
                // Remove solid background classes
                header.classList.remove('bg-white', 'backdrop-blur-md', 'border-b', 'border-gray-200', 'shadow-md');
                header.classList.add('bg-transparent');
                
                // Restore logo text color
                const logoText = header.querySelector('span');
                if (logoText) {
                  logoText.classList.remove('text-gray-900');
                  logoText.classList.add('text-white');
                }
                
                // Restore navigation links
                const navLinks = header.querySelectorAll('nav a');
                navLinks.forEach((link, index) => {
                  link.classList.remove('text-[#B89E5A]', 'hover:text-[#9A8449]', 'text-gray-600', 'hover:text-gray-900');
                  if (index === 0) {
                    link.classList.add('text-white', 'hover:text-[#B89E5A]');
      } else {
                    link.classList.add('text-white/90', 'hover:text-white');
                  }
                });
                
                // Restore button
                const button = header.querySelector('button');
                if (button) {
                  button.classList.remove('bg-[#B89E5A]', 'hover:bg-[#9A8449]', 'text-white');
                  button.classList.add('bg-white/20', 'hover:bg-white/30', 'border-white/30', 'text-white');
                }
              }
            }
            
            // Run on page load
            document.addEventListener('DOMContentLoaded', updateHeader);
            
            // Run on scroll
            window.addEventListener('scroll', updateHeader);
            
            // Run on resize
            window.addEventListener('resize', updateHeader);
  `,
        }}
      />
    </div>
  )
}
