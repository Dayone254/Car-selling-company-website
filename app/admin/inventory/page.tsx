"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Car,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Upload,
  Download,
  RefreshCw,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Grid,
  List,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { vehiclesData, type Vehicle } from "@/lib/vehicles-data"

export default function InventoryManagement() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedMake, setSelectedMake] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Duty Paid":
        return <Badge className="bg-green-100 text-green-700">Duty Paid</Badge>
      case "Pending":
        return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>
      case "Sold":
        return <Badge className="bg-gray-100 text-gray-700">Sold</Badge>
      default:
        return <Badge className="bg-blue-100 text-blue-700">{status}</Badge>
    }
  }

  const getFeaturedBadge = (featured: boolean) => {
    if (featured) {
      return <Badge className="bg-[#B89E5A] text-white">Featured</Badge>
    }
    return null
  }

  const filteredVehicles = vehiclesData.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || vehicle.status === selectedStatus
    const matchesMake = selectedMake === "all" || vehicle.make === selectedMake
    const matchesCategory = selectedCategory === "all" || vehicle.category === selectedCategory
    
    return matchesSearch && matchesStatus && matchesMake && matchesCategory
  })

  const stats = [
    {
      title: "Total Vehicles",
      value: vehiclesData.length.toString(),
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Listings",
      value: vehiclesData.filter(v => v.status === "Duty Paid").length.toString(),
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Featured Vehicles",
      value: vehiclesData.filter(v => v.featured).length.toString(),
      icon: Star,
      color: "text-[#B89E5A]",
      bgColor: "bg-[#B89E5A]/10",
    },
    {
      title: "Total Value",
      value: formatPrice(vehiclesData.reduce((sum, v) => sum + v.price, 0)),
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-light text-gray-900 tracking-wide">Inventory Management</h1>
          <p className="text-gray-600 font-light">Manage your vehicle inventory and listings</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Vehicle
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-light text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 border-gray-200 rounded-full h-12 font-light focus:ring-2 focus:ring-[#B89E5A]/20 focus:border-[#B89E5A] transition-all duration-200"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-3">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40 rounded-full h-12 border-gray-200 font-light">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Duty Paid">Duty Paid</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger className="w-40 rounded-full h-12 border-gray-200 font-light">
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                  <SelectItem value="Audi">Audi</SelectItem>
                  <SelectItem value="Toyota">Toyota</SelectItem>
                  <SelectItem value="Lexus">Lexus</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 rounded-full h-12 border-gray-200 font-light">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Cars">Cars</SelectItem>
                  <SelectItem value="SUVs">SUVs</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full px-6 h-12 border-gray-200 hover:bg-gray-50 font-light transition-all duration-200"
              >
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>

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
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-gray-600 font-light">
            Showing <span className="font-medium text-gray-900">{filteredVehicles.length}</span> vehicles
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Vehicle Grid/List */}
      <div
        className={`transition-all duration-500 ${
          viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"
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
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {getStatusBadge(vehicle.status)}
                    {getFeaturedBadge(vehicle.featured)}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
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
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-gray-200 hover:bg-gray-50 w-12 h-12 p-0 bg-transparent"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-gray-200 hover:bg-gray-50 w-12 h-12 p-0 bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <div className="flex gap-6 p-6">
                <div className="relative w-80 h-56 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {getStatusBadge(vehicle.status)}
                    {getFeaturedBadge(vehicle.featured)}
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
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                            <Trash2 className="w-4 h-4" />
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
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-200 hover:bg-gray-50 font-light px-6 bg-transparent"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-200 hover:bg-gray-50 font-light px-6 bg-transparent"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Car className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No vehicles found</h3>
          <p className="text-gray-600 mb-6 font-light">Try adjusting your search criteria or filters</p>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light">
            <Plus className="w-4 h-4 mr-2" />
            Add New Vehicle
          </Button>
        </div>
      )}
    </div>
  )
} 