"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Phone, Mail, Edit, Trash2, Plus, User, Users, Star, Calendar, MapPin, Car, DollarSign, CheckCircle, Clock, XCircle } from "lucide-react"

// Mock data for customers
const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+254 700 123 456",
    location: "Westlands, Nairobi",
    status: "active",
    joinDate: "2023-06-15",
    totalPurchases: 2,
    totalSpent: 15000000,
    lastPurchase: "2024-01-10",
    vehicles: ["BMW X5 2023", "Mercedes C-Class 2022"],
    preferences: ["Luxury SUVs", "German brands"],
    notes: "High-value customer, prefers premium vehicles"
  },
  {
    id: "CUST002",
    name: "Sarah Wanjiku",
    email: "sarah.w@email.com",
    phone: "+254 711 234 567",
    location: "Kilimani, Nairobi",
    status: "active",
    joinDate: "2023-08-20",
    totalPurchases: 1,
    totalSpent: 6500000,
    lastPurchase: "2024-01-05",
    vehicles: ["Mercedes C-Class 2024"],
    preferences: ["Sedans", "Luxury brands"],
    notes: "First-time buyer, very satisfied with service"
  },
  {
    id: "CUST003",
    name: "David Mwangi",
    email: "david.m@email.com",
    phone: "+254 722 345 678",
    location: "Lavington, Nairobi",
    status: "active",
    joinDate: "2023-05-10",
    totalPurchases: 3,
    totalSpent: 28500000,
    lastPurchase: "2023-12-20",
    vehicles: ["Audi Q7 2023", "BMW X3 2022", "Toyota Land Cruiser 2021"],
    preferences: ["SUVs", "Premium brands", "4x4 vehicles"],
    notes: "Fleet customer, purchases multiple vehicles annually"
  },
  {
    id: "CUST004",
    name: "Grace Muthoni",
    email: "grace.m@email.com",
    phone: "+254 733 456 789",
    location: "Karen, Nairobi",
    status: "inactive",
    joinDate: "2023-09-05",
    totalPurchases: 1,
    totalSpent: 7500000,
    lastPurchase: "2023-11-15",
    vehicles: ["Lexus RX 350 2024"],
    preferences: ["Luxury SUVs", "Japanese brands"],
    notes: "Inactive since last purchase, follow up needed"
  },
  {
    id: "CUST005",
    name: "Peter Ochieng",
    email: "peter.o@email.com",
    phone: "+254 744 567 890",
    location: "Mombasa",
    status: "active",
    joinDate: "2023-12-01",
    totalPurchases: 1,
    totalSpent: 12000000,
    lastPurchase: "2023-12-10",
    vehicles: ["Toyota Land Cruiser 2023"],
    preferences: ["4x4 vehicles", "Reliable brands"],
    notes: "Coastal customer, interested in rugged vehicles"
  }
]

const statusConfig = {
  active: { label: "Active", color: "bg-green-100 text-green-800", icon: CheckCircle },
  inactive: { label: "Inactive", color: "bg-gray-100 text-gray-800", icon: Clock },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock }
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.phone.includes(searchQuery) ||
                         customer.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    const matchesLocation = locationFilter === "all" || customer.location.includes(locationFilter)

    return matchesSearch && matchesStatus && matchesLocation
  })

  const getStatusBadge = (status: keyof typeof statusConfig) => {
    const config = statusConfig[status]
    const Icon = config.icon
    return (
      <Badge className={`${config.color} border-0`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    )
  }

  const totalCustomers = customers.length
  const activeCustomers = customers.filter(c => c.status === "active").length
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0)
  const averageSpent = Math.round(totalRevenue / customers.length)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-1">Manage customer relationships and data</p>
        </div>
        <Button className="bg-[#B89E5A] hover:bg-[#9A8449]">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeCustomers}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {(totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">From all customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Spent</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {(averageSpent / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Per customer</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Nairobi">Nairobi</SelectItem>
                  <SelectItem value="Mombasa">Mombasa</SelectItem>
                  <SelectItem value="Westlands">Westlands</SelectItem>
                  <SelectItem value="Kilimani">Kilimani</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                List
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Database ({filteredCustomers.length})</CardTitle>
          <CardDescription>Manage customer information and track relationships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <p className="text-sm text-gray-600">Customer ID: {customer.id}</p>
                      </div>
                      {getStatusBadge(customer.status as keyof typeof statusConfig)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Contact Information</p>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                        <p className="text-sm text-gray-600">{customer.phone}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-gray-600">{customer.location}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Purchase History</p>
                        <p className="text-sm text-gray-600">
                          {customer.totalPurchases} vehicles purchased
                        </p>
                        <p className="text-sm text-gray-600">
                          Total: KES {customer.totalSpent.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          Last: {customer.lastPurchase}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Account Details</p>
                        <p className="text-sm text-gray-600">
                          Joined: {customer.joinDate}
                        </p>
                        <p className="text-sm text-gray-600">
                          Status: {customer.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-1">Vehicles Owned</p>
                      <div className="flex flex-wrap gap-1">
                        {customer.vehicles.map((vehicle, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Car className="w-3 h-3 mr-1" />
                            {vehicle}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {customer.preferences && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Preferences</p>
                        <div className="flex flex-wrap gap-1">
                          {customer.preferences.map((pref, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {pref}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {customer.notes && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Notes</p>
                        <p className="text-sm text-gray-600">{customer.notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 