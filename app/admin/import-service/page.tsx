"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Phone, Mail, Download, Edit, Trash2, Plus, FileText, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

// Mock data for import service requests
const importRequests = [
  {
    id: "IMP001",
    customerName: "John Doe",
    email: "john.doe@email.com",
    phone: "+254 700 123 456",
    vehicleMake: "BMW",
    vehicleModel: "X5",
    year: "2023",
    estimatedValue: 8500000,
    status: "pending",
    requestDate: "2024-01-15",
    notes: "Looking for a luxury SUV with premium features",
    documents: ["ID Copy", "Import License", "Vehicle Specifications"]
  },
  {
    id: "IMP002",
    customerName: "Sarah Wanjiku",
    email: "sarah.w@email.com",
    phone: "+254 711 234 567",
    vehicleMake: "Mercedes",
    vehicleModel: "C-Class",
    year: "2024",
    estimatedValue: 6500000,
    status: "in_progress",
    requestDate: "2024-01-10",
    notes: "Prefer automatic transmission and leather interior",
    documents: ["ID Copy", "Import License"]
  },
  {
    id: "IMP003",
    customerName: "David Mwangi",
    email: "david.m@email.com",
    phone: "+254 722 345 678",
    vehicleMake: "Audi",
    vehicleModel: "Q7",
    year: "2023",
    estimatedValue: 9500000,
    status: "completed",
    requestDate: "2024-01-05",
    notes: "Successfully imported and delivered",
    documents: ["ID Copy", "Import License", "Vehicle Specifications", "Delivery Receipt"]
  },
  {
    id: "IMP004",
    customerName: "Grace Muthoni",
    email: "grace.m@email.com",
    phone: "+254 733 456 789",
    vehicleMake: "Lexus",
    vehicleModel: "RX 350",
    year: "2024",
    estimatedValue: 7500000,
    status: "cancelled",
    requestDate: "2024-01-12",
    notes: "Customer cancelled due to budget constraints",
    documents: ["ID Copy"]
  },
  {
    id: "IMP005",
    customerName: "Peter Ochieng",
    email: "peter.o@email.com",
    phone: "+254 744 567 890",
    vehicleMake: "Toyota",
    vehicleModel: "Land Cruiser",
    year: "2023",
    estimatedValue: 12000000,
    status: "pending",
    requestDate: "2024-01-18",
    notes: "Looking for a reliable 4x4 vehicle",
    documents: ["ID Copy", "Import License", "Vehicle Specifications"]
  }
]

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  in_progress: { label: "In Progress", color: "bg-blue-100 text-blue-800", icon: FileText },
  completed: { label: "Completed", color: "bg-green-100 text-green-800", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: XCircle }
}

export default function ImportServicePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [makeFilter, setMakeFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const filteredRequests = importRequests.filter(request => {
    const matchesSearch = request.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.vehicleMake.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesMake = makeFilter === "all" || request.vehicleMake === makeFilter

    return matchesSearch && matchesStatus && matchesMake
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

  const totalRequests = importRequests.length
  const pendingRequests = importRequests.filter(r => r.status === "pending").length
  const inProgressRequests = importRequests.filter(r => r.status === "in_progress").length
  const completedRequests = importRequests.filter(r => r.status === "completed").length
  const totalValue = importRequests.reduce((sum, r) => sum + r.estimatedValue, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Import Service Management</h1>
          <p className="text-gray-600 mt-1">Manage vehicle import requests and track import processes</p>
        </div>
        <Button className="bg-[#B89E5A] hover:bg-[#9A8449]">
          <Plus className="w-4 h-4 mr-2" />
          New Import Request
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRequests}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingRequests}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{inProgressRequests}</div>
            <p className="text-xs text-muted-foreground">Currently processing</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              KES {(totalValue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">Estimated value</p>
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
                  placeholder="Search requests..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={makeFilter} onValueChange={setMakeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes">Mercedes</SelectItem>
                  <SelectItem value="Audi">Audi</SelectItem>
                  <SelectItem value="Lexus">Lexus</SelectItem>
                  <SelectItem value="Toyota">Toyota</SelectItem>
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

      {/* Import Requests List */}
      <Card>
        <CardHeader>
          <CardTitle>Import Requests ({filteredRequests.length})</CardTitle>
          <CardDescription>Manage and track all import service requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-semibold text-lg">{request.customerName}</h3>
                        <p className="text-sm text-gray-600">Request ID: {request.id}</p>
                      </div>
                      {getStatusBadge(request.status as keyof typeof statusConfig)}
                    </div>
                    
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Vehicle Details</p>
                        <p className="text-sm text-gray-600">
                          {request.vehicleMake} {request.vehicleModel} ({request.year})
                        </p>
                        <p className="text-sm text-gray-600">
                          Estimated Value: KES {request.estimatedValue.toLocaleString()}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Contact Information</p>
                        <p className="text-sm text-gray-600">{request.email}</p>
                        <p className="text-sm text-gray-600">{request.phone}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Request Details</p>
                        <p className="text-sm text-gray-600">Date: {request.requestDate}</p>
                        <p className="text-sm text-gray-600">
                          Documents: {request.documents.length} uploaded
                        </p>
                      </div>
                    </div>
                    
                    {request.notes && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700">Notes</p>
                        <p className="text-sm text-gray-600">{request.notes}</p>
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
                      <Download className="w-4 h-4 mr-1" />
                      Documents
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