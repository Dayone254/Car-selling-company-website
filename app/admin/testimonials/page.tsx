"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Eye, Edit, Trash2, Plus, Star, MessageSquare, ThumbsUp, ThumbsDown, Calendar, User, CheckCircle, XCircle, Clock } from "lucide-react"

// Mock data for testimonials
const testimonials = [
  {
    id: "TEST001",
    customerName: "John Doe",
    email: "john.doe@email.com",
    rating: 5,
    title: "Excellent Service",
    content: "Nairobi Prime Motors provided exceptional service throughout my car buying experience. The team was professional, knowledgeable, and made the entire process smooth and enjoyable. I highly recommend them!",
    vehiclePurchased: "BMW X5 2023",
    purchaseDate: "2024-01-10",
    status: "approved",
    submissionDate: "2024-01-15",
    verified: true,
    helpful: 12,
    notHelpful: 2
  },
  {
    id: "TEST002",
    customerName: "Sarah Wanjiku",
    email: "sarah.w@email.com",
    rating: 4,
    title: "Great Experience",
    content: "I had a wonderful experience buying my Mercedes C-Class from Nairobi Prime Motors. The financing options were flexible and the staff was very helpful. The car was in perfect condition as described.",
    vehiclePurchased: "Mercedes C-Class 2024",
    purchaseDate: "2024-01-05",
    status: "pending",
    submissionDate: "2024-01-12",
    verified: false,
    helpful: 8,
    notHelpful: 1
  },
  {
    id: "TEST003",
    customerName: "David Mwangi",
    email: "david.m@email.com",
    rating: 5,
    title: "Outstanding Quality",
    content: "The quality of vehicles at Nairobi Prime Motors is outstanding. I purchased an Audi Q7 and it exceeded my expectations. The import service was also very efficient and transparent.",
    vehiclePurchased: "Audi Q7 2023",
    purchaseDate: "2023-12-20",
    status: "approved",
    submissionDate: "2024-01-08",
    verified: true,
    helpful: 15,
    notHelpful: 0
  },
  {
    id: "TEST004",
    customerName: "Grace Muthoni",
    email: "grace.m@email.com",
    rating: 3,
    title: "Good but could be better",
    content: "The service was generally good, but there were some delays in the financing approval process. The staff was helpful though and eventually everything worked out fine.",
    vehiclePurchased: "Lexus RX 350 2024",
    purchaseDate: "2023-12-15",
    status: "rejected",
    submissionDate: "2024-01-05",
    verified: false,
    helpful: 3,
    notHelpful: 5
  },
  {
    id: "TEST005",
    customerName: "Peter Ochieng",
    email: "peter.o@email.com",
    rating: 5,
    title: "Best Car Dealership",
    content: "Nairobi Prime Motors is by far the best car dealership I've ever dealt with. Their attention to detail, customer service, and vehicle quality is unmatched. I will definitely return for my next purchase.",
    vehiclePurchased: "Toyota Land Cruiser 2023",
    purchaseDate: "2023-12-10",
    status: "approved",
    submissionDate: "2024-01-02",
    verified: true,
    helpful: 20,
    notHelpful: 1
  }
]

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  approved: { label: "Approved", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: XCircle }
}

export default function TestimonialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.vehiclePurchased.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || testimonial.status === statusFilter
    const matchesRating = ratingFilter === "all" || testimonial.rating.toString() === ratingFilter

    return matchesSearch && matchesStatus && matchesRating
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  const totalTestimonials = testimonials.length
  const pendingTestimonials = testimonials.filter(t => t.status === "pending").length
  const approvedTestimonials = testimonials.filter(t => t.status === "approved").length
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
          <p className="text-gray-600 mt-1">Manage customer testimonials and reviews</p>
        </div>
        <Button className="bg-[#B89E5A] hover:bg-[#9A8449]">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Testimonials</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTestimonials}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingTestimonials}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedTestimonials}</div>
            <p className="text-xs text-muted-foreground">Published</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{averageRating}</div>
            <p className="text-xs text-muted-foreground">Out of 5 stars</p>
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
                  placeholder="Search testimonials..."
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
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
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

      {/* Testimonials List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Testimonials ({filteredTestimonials.length})</CardTitle>
          <CardDescription>Manage and moderate customer reviews and testimonials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.customerName}</h3>
                        <p className="text-sm text-gray-600">Testimonial ID: {testimonial.id}</p>
                      </div>
                      {getStatusBadge(testimonial.status as keyof typeof statusConfig)}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900 mb-2">{testimonial.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">Vehicle Purchased</p>
                        <p className="text-gray-600">{testimonial.vehiclePurchased}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Purchase Date</p>
                        <p className="text-gray-600">{testimonial.purchaseDate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Submission Date</p>
                        <p className="text-gray-600">{testimonial.submissionDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{testimonial.helpful} helpful</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{testimonial.notHelpful} not helpful</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{testimonial.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
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