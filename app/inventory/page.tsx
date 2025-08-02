"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Grid,
  List,
  Heart,
  MessageCircle,
  Calendar,
  SlidersHorizontal,
  Eye,
  Phone,
  ArrowUpDown,
  X,
  MapPin,
  Tag,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { vehiclesData, getPopularMakes, getCategories, type Vehicle } from "@/lib/vehicles-data"

export default function InventoryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 15000000])
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMake, setSelectedMake] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTransmission, setSelectedTransmission] = useState<string>("all")
  const [selectedFuelType, setSelectedFuelType] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [selectedSellerType, setSelectedSellerType] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")

  const popularMakes = getPopularMakes()
  const categories = getCategories()

  // Filter vehicles based on all criteria
  const filteredVehicles = useMemo(() => {
    let filtered = vehiclesData

    // Debug logging
    console.log('Filtering vehicles with:', {
      searchQuery,
      priceRange,
      selectedMake,
      selectedCategory,
      selectedTransmission,
      selectedFuelType,
      selectedLocation,
      selectedSellerType,
      selectedFilters,
      sortBy
    })

    // Search query
    if (searchQuery) {
      filtered = filtered.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.bodyType.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Price range
    filtered = filtered.filter(vehicle => 
      vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
    )

    // Make filter
    if (selectedMake && selectedMake !== "all") {
      filtered = filtered.filter(vehicle => vehicle.make === selectedMake)
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(vehicle => vehicle.category === selectedCategory)
    }

    // Transmission filter
    if (selectedTransmission && selectedTransmission !== "all") {
      filtered = filtered.filter(vehicle => vehicle.transmission === selectedTransmission)
    }

    // Fuel type filter
    if (selectedFuelType && selectedFuelType !== "all") {
      filtered = filtered.filter(vehicle => vehicle.fuelType === selectedFuelType)
    }

    // Location filter
    if (selectedLocation && selectedLocation !== "all") {
      filtered = filtered.filter(vehicle => vehicle.location === selectedLocation)
    }

    // Seller type filter
    if (selectedSellerType && selectedSellerType !== "all") {
      filtered = filtered.filter(vehicle => vehicle.sellerType === selectedSellerType)
    }

    // Body type filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(vehicle => selectedFilters.includes(vehicle.bodyType))
    }

    // Sort vehicles
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "year":
        filtered.sort((a, b) => b.year - a.year)
        break
      case "mileage":
        filtered.sort((a, b) => {
          const aMileage = parseInt(a.mileage.replace(/[^\d]/g, ""))
          const bMileage = parseInt(b.mileage.replace(/[^\d]/g, ""))
          return aMileage - bMileage
        })
        break
              default: // newest
        filtered.sort((a, b) => b.id - a.id)
    }

    console.log('Filtered vehicles count:', filtered.length)
    return filtered
  }, [
    searchQuery,
    priceRange,
    selectedMake,
    selectedCategory,
    selectedTransmission,
    selectedFuelType,
    selectedLocation,
    selectedSellerType,
    selectedFilters,
    sortBy
  ])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Generate multiple images for each vehicle for carousel effect
  const getVehicleImages = (vehicle: Vehicle) => {
    const baseImage = vehicle.image || "/placeholder.svg"
    const imageVariations = [
      baseImage,
      baseImage.replace('.png', '-front.png'),
      baseImage.replace('.png', '-side.png'),
      baseImage.replace('.png', '-rear.png'),
      baseImage.replace('.png', '-dashboard.png'),
    ]
    
    // Filter out invalid variations and ensure we have at least the base image
    return imageVariations.filter(img => img !== baseImage || img === baseImage)
  }

  // Auto-scroll carousel effect
  useEffect(() => {
    const carousels = document.querySelectorAll('.group\\/image-carousel, .group\\/image-carousel-list')
    
    carousels.forEach((carousel) => {
      let intervalId: NodeJS.Timeout
      let currentIndex = 0
      const imageContainer = carousel.querySelector('.flex') as HTMLElement
      const images = carousel.querySelectorAll('.min-w-full')
      
      if (!imageContainer || images.length <= 1) return
      
      const startAutoScroll = () => {
        intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length
          imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`
        }, 2000) // Change image every 2 seconds
      }
      
      const stopAutoScroll = () => {
        clearInterval(intervalId)
      }
      
      carousel.addEventListener('mouseenter', startAutoScroll)
      carousel.addEventListener('mouseleave', stopAutoScroll)
      
      return () => {
        carousel.removeEventListener('mouseenter', startAutoScroll)
        carousel.removeEventListener('mouseleave', stopAutoScroll)
        clearInterval(intervalId)
      }
    })
  }, [filteredVehicles])

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter)
      } else {
        return [...prev, filter]
      }
    })
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 15000000])
    setSearchQuery("")
    setSelectedMake("all")
    setSelectedCategory("all")
    setSelectedTransmission("all")
    setSelectedFuelType("all")
    setSelectedLocation("all")
    setSelectedSellerType("all")
    setSortBy("newest")
  }

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 800)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (searchQuery) count++
    if (selectedMake && selectedMake !== "all") count++
    if (selectedCategory && selectedCategory !== "all") count++
    if (selectedTransmission && selectedTransmission !== "all") count++
    if (selectedFuelType && selectedFuelType !== "all") count++
    if (selectedLocation && selectedLocation !== "all") count++
    if (selectedSellerType && selectedSellerType !== "all") count++
    if (selectedFilters.length > 0) count++
    // Only count price range if it's been modified from default
    if (priceRange[0] > 0 || priceRange[1] < 15000000) count++
    return count
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300" id="header">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <span className="font-light text-xl text-gray-900 tracking-wide">Nairobi Prime Motors</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/inventory" className="text-[#B89E5A] font-medium tracking-wide">
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

            <div className="flex items-center space-x-4">
              <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg">
                Book Test Drive
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8 lg:mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Premium Collection</h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Discover our curated selection of luxury vehicles, each one meticulously inspected and verified for your
              peace of mind.
            </p>
          </div>
        </div>

        {/* Popular Brands and Search/Filter Section */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-6">
            {/* Popular Brands */}
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">Popular Brands</h2>
              <div className="flex flex-wrap gap-3">
                {popularMakes.map((make) => (
                  <Button
                    key={make}
                    variant={selectedMake === make ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMake(selectedMake === make ? "all" : make)}
                    className={`rounded-full font-light transition-all duration-200 ${
                      selectedMake === make 
                        ? "bg-[#B89E5A] hover:bg-[#9A8449] text-white" 
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {make}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by make, model, or keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 border-gray-200 rounded-full h-12 font-light focus:ring-2 focus:ring-[#B89E5A]/20 focus:border-[#B89E5A] transition-all duration-200"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-full px-6 h-12 border-gray-200 hover:bg-gray-50 font-light transition-all duration-200"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                  {getActiveFiltersCount() > 0 && (
                    <Badge className="ml-2 bg-[#B89E5A] text-white rounded-full px-2 py-1 text-xs">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                </Button>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 rounded-full h-12 border-gray-200 font-light">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="mileage">Lowest Mileage</SelectItem>
                    <SelectItem value="year">Year: Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-gray-200 rounded-full overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-none px-4 h-12 ${viewMode === "grid" ? "bg-[#B89E5A] text-white" : "hover:bg-gray-50"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-none px-4 h-12 ${viewMode === "list" ? "bg-[#B89E5A] text-white" : "hover:bg-gray-50"}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {console.log('showFilters state:', showFilters)}
        {showFilters && (
          <div className="mb-8 lg:mb-12 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Advanced Filters</h3>
                <div className="flex items-center gap-3">
                  {getActiveFiltersCount() > 0 && (
                    <Button
                      variant="ghost"
                      onClick={clearFilters}
                      className="text-gray-500 hover:text-gray-700 font-light"
                    >
                      Clear All
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={15000000}
                    min={0}
                    step={100000}
                    className="mt-2"
                  />
                </div>

                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Make</label>
                  <Select value={selectedMake} onValueChange={setSelectedMake}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All Makes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Makes</SelectItem>
                      {popularMakes.map((make) => (
                        <SelectItem key={make} value={make}>{make}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Transmission</label>
                  <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Automatic">Automatic</SelectItem>
                      <SelectItem value="Manual">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Fuel Type</label>
                  <Select value={selectedFuelType} onValueChange={setSelectedFuelType}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Westlands">Westlands</SelectItem>
                      <SelectItem value="Nairobi">Nairobi</SelectItem>
                      <SelectItem value="Kiambu">Kiambu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Seller Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Seller Type</label>
                  <Select value={selectedSellerType} onValueChange={setSelectedSellerType}>
                    <SelectTrigger className="rounded-lg border-gray-200 font-light">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Dealer">Dealer</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Body Type</label>
                  <div className="space-y-2">
                    {["SUV", "Sedan", "Hatchback", "Pickup"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={selectedFilters.includes(type)}
                          onCheckedChange={() => handleFilterChange(type)}
                          className="rounded border-gray-300"
                        />
                        <label htmlFor={type} className="text-sm text-gray-700 font-light">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <p className="text-gray-600 font-light">
              Showing <span className="font-medium text-gray-900">{filteredVehicles.length}</span> vehicles
            </p>
            {getActiveFiltersCount() > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {searchQuery && (
                  <Badge variant="secondary" className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-3 py-1">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery("")} className="ml-2 hover:text-[#B89E5A]/70">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedMake && selectedMake !== "all" && (
                  <Badge variant="secondary" className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-3 py-1">
                    Make: {selectedMake}
                    <button onClick={() => setSelectedMake("all")} className="ml-2 hover:text-[#B89E5A]/70">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="secondary"
                    className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-3 py-1"
                  >
                    {filter}
                    <button onClick={() => handleFilterChange(filter)} className="ml-2 hover:text-[#B89E5A]/70">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#B89E5A]"></div>
          </div>
        )}

        {/* Vehicle Grid/List */}
        {!isLoading && (
          <div
            className={`transition-all duration-500 ${
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "space-y-6"
            }`}
          >
            {filteredVehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-sm bg-white overflow-hidden ${
                  viewMode === "grid" ? "rounded-2xl" : "rounded-2xl"
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] relative group/image-carousel">
                        {/* Image Carousel Container */}
                        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out group-hover/image-carousel:translate-x-0 translate-x-0">
                          {getVehicleImages(vehicle).map((image, index) => (
                            <div key={index} className="relative min-w-full h-full">
                        <Image
                                src={image}
                                alt={`${vehicle.make} ${vehicle.model} - View ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image-carousel:opacity-100 transition-opacity duration-300" />
                            </div>
                          ))}
                        </div>
                        
                        {/* Carousel Navigation Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover/image-carousel:opacity-100 transition-opacity duration-300">
                          {getVehicleImages(vehicle).map((_, index) => (
                            <div
                              key={index}
                              className="w-2 h-2 bg-white/60 rounded-full cursor-pointer hover:bg-white transition-colors duration-200"
                              onClick={(e) => {
                                e.stopPropagation()
                                const carousel = e.currentTarget.closest('.group\\/image-carousel')
                                if (carousel) {
                                  const imageContainer = carousel.querySelector('.flex') as HTMLElement
                                  if (imageContainer) {
                                    imageContainer.style.transform = `translateX(-${index * 100}%)`
                                  }
                                }
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Auto-scroll indicator */}
                        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover/image-carousel:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                          {getVehicleImages(vehicle).length} photos
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-gray-700 border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          {vehicle.status}
                        </Badge>
                        {vehicle.featured && (
                          <Badge className="bg-[#B89E5A]/90 text-white border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                            Featured
                          </Badge>
                        )}
                          {vehicle.isNegotiable && (
                            <Badge className="bg-green-600/90 text-white border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                              Negotiable
                            </Badge>
                          )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-medium text-gray-900 mb-1 tracking-wide">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-gray-500 font-light text-sm">
                          {vehicle.year} • {vehicle.condition} • {vehicle.location}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-light text-[#B89E5A] tracking-wide">
                          {formatPrice(vehicle.price)}
                        </span>
                        {vehicle.isNegotiable && (
                          <Badge variant="outline" className="text-green-600 border-green-200 text-xs">
                            Negotiable
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-6 font-light">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                          {vehicle.mileage}
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                          {vehicle.transmission}
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                          {vehicle.engineCapacity}
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                          {vehicle.sellerType}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-light transition-all duration-200 hover:shadow-lg"
                          asChild
                        >
                          <Link href={`/vehicle/${vehicle.id}`}>View Details</Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-gray-200 hover:bg-gray-50 w-12 h-12 p-0 bg-transparent"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-gray-200 hover:bg-gray-50 w-12 h-12 p-0 bg-transparent"
                        >
                          <Calendar className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <div className="flex gap-6 p-6">
                    <div className="relative w-80 h-56 flex-shrink-0 overflow-hidden rounded-xl group/image-carousel-list">
                      {/* Image Carousel Container for List View */}
                      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out group-hover/image-carousel-list:translate-x-0 translate-x-0">
                        {getVehicleImages(vehicle).map((image, index) => (
                          <div key={index} className="relative min-w-full h-full">
                      <Image
                              src={image}
                              alt={`${vehicle.make} ${vehicle.model} - View ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image-carousel-list:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Carousel Navigation Dots for List View */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover/image-carousel-list:opacity-100 transition-opacity duration-300">
                        {getVehicleImages(vehicle).map((_, index) => (
                          <div
                            key={index}
                            className="w-2 h-2 bg-white/60 rounded-full cursor-pointer hover:bg-white transition-colors duration-200"
                            onClick={(e) => {
                              e.stopPropagation()
                              const carousel = e.currentTarget.closest('.group\\/image-carousel-list')
                              if (carousel) {
                                const imageContainer = carousel.querySelector('.flex') as HTMLElement
                                if (imageContainer) {
                                  imageContainer.style.transform = `translateX(-${index * 100}%)`
                                }
                              }
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Photo count indicator for List View */}
                      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover/image-carousel-list:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        {getVehicleImages(vehicle).length} photos
                      </div>
                      
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-white/90 text-gray-700 border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          {vehicle.status}
                        </Badge>
                        {vehicle.featured && (
                          <Badge className="bg-[#B89E5A]/90 text-white border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                            Featured
                          </Badge>
                        )}
                        {vehicle.isNegotiable && (
                          <Badge className="bg-green-600/90 text-white border-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                            Negotiable
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-1 tracking-wide">
                              {vehicle.make} {vehicle.model}
                            </h3>
                            <p className="text-gray-500 font-light">
                              {vehicle.year} • {vehicle.bodyType} • {vehicle.condition}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-light text-[#B89E5A] mb-1 tracking-wide">
                              {formatPrice(vehicle.price)}
                            </div>
                            {vehicle.isNegotiable && (
                              <Badge variant="outline" className="text-green-600 border-green-200 text-xs mb-2">
                                Negotiable
                              </Badge>
                            )}
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                                <Heart className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-6 text-sm text-gray-600 mb-6 font-light">
                          <div>
                            <span className="text-gray-400 block mb-1">Mileage</span>
                            <span className="text-gray-900 font-medium">{vehicle.mileage}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block mb-1">Transmission</span>
                            <span className="text-gray-900 font-medium">{vehicle.transmission}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block mb-1">Engine</span>
                            <span className="text-gray-900 font-medium">{vehicle.engineCapacity}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block mb-1">Seller</span>
                            <span className="text-gray-900 font-medium">{vehicle.sellerType}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          className="bg-gray-900 hover:bg-gray-800 text-white rounded-full font-light px-8 transition-all duration-200 hover:shadow-lg"
                          asChild
                        >
                          <Link href={`/vehicle/${vehicle.id}`}>View Details</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-gray-200 hover:bg-gray-50 font-light px-6 bg-transparent"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-gray-200 hover:bg-gray-50 font-light px-6 bg-transparent"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Test Drive
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-gray-200 hover:bg-gray-50 font-light px-6 bg-transparent"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600 mb-6 font-light">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters} className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredVehicles.length > 0 && (
        <div className="flex justify-center mt-12 lg:mt-16">
          <div className="flex items-center space-x-2">
            <Button variant="outline" disabled className="rounded-full px-6 font-light border-gray-200 bg-transparent">
              Previous
            </Button>
            <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full px-4 font-light">1</Button>
            <Button
              variant="outline"
              className="rounded-full px-4 font-light border-gray-200 hover:bg-gray-50 bg-transparent"
            >
              2
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-4 font-light border-gray-200 hover:bg-gray-50 bg-transparent"
            >
              3
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 font-light border-gray-200 hover:bg-gray-50 bg-transparent"
            >
              Next
            </Button>
          </div>
        </div>
        )}
      </div>

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
              } else {
                // Remove solid background classes
                header.classList.remove('bg-white', 'backdrop-blur-md', 'border-b', 'border-gray-200', 'shadow-md');
                header.classList.add('bg-white');
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
