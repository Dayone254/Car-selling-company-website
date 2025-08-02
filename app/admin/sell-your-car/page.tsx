"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ShoppingCart,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Download,
  RefreshCw,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Car,
  User,
  MessageSquare,
  Star,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import Image from "next/image"

// Mock data for car sale requests
const carSaleRequests = [
  {
    id: 1,
    customerName: "John Doe",
    customerEmail: "john.doe@email.com",
    customerPhone: "+254 700 123 456",
    customerLocation: "Westlands, Nairobi",
    vehicleMake: "Toyota",
    vehicleModel: "Corolla",
    vehicleYear: 2018,
    vehicleMileage: "65,000 km",
    vehicleCondition: "Good",
    askingPrice: 1800000,
    description: "Well maintained Toyota Corolla, single owner, full service history available.",
    images: ["/placeholder.svg"],
    status: "pending",
    submittedAt: "2024-01-15T10:30:00Z",
    estimatedValue: 1700000,
    notes: "Vehicle appears to be in good condition. Schedule inspection.",
  },
  {
    id: 2,
    customerName: "Sarah Wanjiku",
    customerEmail: "sarah.wanjiku@email.com",
    customerPhone: "+254 700 789 012",
    customerLocation: "Kilimani, Nairobi",
    vehicleMake: "Honda",
    vehicleModel: "Civic",
    vehicleYear: 2020,
    vehicleMileage: "45,000 km",
    vehicleCondition: "Excellent",
    askingPrice: 2500000,
    description: "Honda Civic in excellent condition, low mileage, all original parts.",
    images: ["/placeholder.svg"],
    status: "reviewing",
    submittedAt: "2024-01-14T14:20:00Z",
    estimatedValue: 2400000,
    notes: "High-quality vehicle, good asking price. Recommend proceeding.",
  },
  {
    id: 3,
    customerName: "David Kimani",
    customerEmail: "david.kimani@email.com",
    customerPhone: "+254 700 345 678",
    customerLocation: "Lavington, Nairobi",
    vehicleMake: "BMW",
    vehicleModel: "3 Series",
    vehicleYear: 2019,
    vehicleMileage: "38,000 km",
    vehicleCondition: "Excellent",
    askingPrice: 4200000,
    description: "BMW 3 Series, premium condition, leather interior, navigation system.",
    images: ["/placeholder.svg"],
    status: "approved",
    submittedAt: "2024-01-13T09:15:00Z",
    estimatedValue: 4100000,
    notes: "Approved for purchase. Schedule pickup and payment.",
  },
  {
    id: 4,
    customerName: "Grace Muthoni",
    customerEmail: "grace.muthoni@email.com",
    customerPhone: "+254 700 901 234",
    customerLocation: "Karen, Nairobi",
    vehicleMake: "Mercedes-Benz",
    vehicleModel: "C-Class",
    vehicleYear: 2021,
    vehicleMileage: "28,000 km",
    vehicleCondition: "Excellent",
    askingPrice: 5800000,
    description: "Mercedes C-Class, like new condition, premium features, warranty remaining.",
    images: ["/placeholder.svg"],
    status: "rejected",
    submittedAt: "2024-01-12T16:45:00Z",
    estimatedValue: 5500000,
    notes: "Price too high for market conditions. Counter offer sent.",
  },
  {
    id: 5,
    customerName: "Peter Ochieng",
    customerEmail: "peter.ochieng@email.com",
    customerPhone: "+254 700 567 890",
    customerLocation: "Mombasa",
    vehicleMake: "Toyota",
    vehicleModel: "Land Cruiser Prado",
    vehicleYear: 2017,
    vehicleMileage: "85,000 km",
    vehicleCondition: "Good",
    askingPrice: 8500000,
    description: "Toyota Land Cruiser Prado, diesel engine, perfect for safari and family use.",
    images: ["/placeholder.svg"],
    status: "pending",
    submittedAt: "2024-01-11T11:30:00Z",
    estimatedValue: 8200000,
    notes: "Good vehicle but needs inspection due to location.",
  },
]

export default function SellYourCarManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedMake, setSelectedMake] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

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
      case "pending":
        return <Badge className="bg-orange-100 text-orange-700">Pending Review</Badge>
      case "reviewing":
        return <Badge className="bg-blue-100 text-blue-700">Under Review</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-700">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-700">Rejected</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-700">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />
      case "reviewing":
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "rejected":
        return <X className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const filteredRequests = carSaleRequests.filter(request => {
    const matchesSearch = request.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.vehicleMake.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || request.status === selectedStatus
    const matchesMake = selectedMake === "all" || request.vehicleMake === selectedMake
    
    return matchesSearch && matchesStatus && matchesMake
  })

  const stats = [
    {
      title: "Total Requests",
      value: carSaleRequests.length.toString(),
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Pending Review",
      value: carSaleRequests.filter(r => r.status === "pending").length.toString(),
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Approved",
      value: carSaleRequests.filter(r => r.status === "approved").length.toString(),
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Value",
      value: formatPrice(carSaleRequests.reduce((sum, r) => sum + r.askingPrice, 0)),
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
          <h1 className="text-3xl font-light text-gray-900 tracking-wide">Sell Your Car Management</h1>
          <p className="text-gray-600 font-light">Manage customer car sale requests and evaluations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            New Request
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
                placeholder="Search requests..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewing">Reviewing</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger className="w-40 rounded-full h-12 border-gray-200 font-light">
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="Toyota">Toyota</SelectItem>
                  <SelectItem value="Honda">Honda</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="rounded-full px-6 h-12 border-gray-200 hover:bg-gray-50 font-light transition-all duration-200">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-gray-600 font-light">
            Showing <span className="font-medium text-gray-900">{filteredRequests.length}</span> requests
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex gap-6">
                {/* Vehicle Image */}
                <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={request.images[0] || "/placeholder.svg"}
                    alt={`${request.vehicleMake} ${request.vehicleModel}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    {getStatusBadge(request.status)}
                  </div>
                </div>

                {/* Request Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">
                        {request.vehicleMake} {request.vehicleModel} ({request.vehicleYear})
                      </h3>
                      <p className="text-gray-500 font-light">
                        {request.vehicleMileage} • {request.vehicleCondition} • {request.customerLocation}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-[#B89E5A] mb-1">
                        {formatPrice(request.askingPrice)}
                      </div>
                      <p className="text-sm text-gray-500">Asking Price</p>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{request.customerName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{request.customerPhone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{request.customerEmail}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{request.description}</p>

                  {/* Notes */}
                  {request.notes && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 font-medium mb-1">Admin Notes:</p>
                      <p className="text-sm text-gray-600">{request.notes}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Submitted {new Date(request.submittedAt).toLocaleDateString()}</span>
                      {request.estimatedValue && (
                        <>
                          <span>•</span>
                          <span>Est. Value: {formatPrice(request.estimatedValue)}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="rounded-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <ShoppingCart className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600 mb-6 font-light">Try adjusting your search criteria or filters</p>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full font-light">
            <Plus className="w-4 h-4 mr-2" />
            Add New Request
          </Button>
        </div>
      )}
    </div>
  )
} 