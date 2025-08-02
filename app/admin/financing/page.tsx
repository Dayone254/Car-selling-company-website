"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Phone, Mail, Download, Edit, Trash2, Plus, FileText, Clock, CheckCircle, XCircle, DollarSign, TrendingUp, Users, CreditCard } from "lucide-react"

// Mock data for financing applications
const financingApplications = [
  {
    id: "FIN001",
    customerName: "James Kimani",
    email: "james.k@email.com",
    phone: "+254 700 111 222",
    vehicleMake: "BMW",
    vehicleModel: "X5",
    year: "2023",
    vehiclePrice: 8500000,
    loanAmount: 6000000,
    downPayment: 2500000,
    loanTerm: 60,
    monthlyPayment: 120000,
    status: "pending",
    applicationDate: "2024-01-15",
    creditScore: 720,
    employmentStatus: "Full-time",
    monthlyIncome: 350000,
    notes: "Good credit history, stable employment"
  },
  {
    id: "FIN002",
    customerName: "Catherine Njeri",
    email: "catherine.n@email.com",
    phone: "+254 711 222 333",
    vehicleMake: "Mercedes",
    vehicleModel: "C-Class",
    year: "2024",
    vehiclePrice: 6500000,
    loanAmount: 4500000,
    downPayment: 2000000,
    loanTerm: 48,
    monthlyPayment: 95000,
    status: "approved",
    applicationDate: "2024-01-10",
    creditScore: 780,
    employmentStatus: "Full-time",
    monthlyIncome: 420000,
    notes: "Excellent credit score, approved with favorable terms"
  },
  {
    id: "FIN003",
    customerName: "Peter Ochieng",
    email: "peter.o@email.com",
    phone: "+254 722 333 444",
    vehicleMake: "Audi",
    vehicleModel: "Q7",
    year: "2023",
    vehiclePrice: 9500000,
    loanAmount: 7000000,
    downPayment: 2500000,
    loanTerm: 72,
    monthlyPayment: 110000,
    status: "rejected",
    applicationDate: "2024-01-08",
    creditScore: 650,
    employmentStatus: "Self-employed",
    monthlyIncome: 280000,
    notes: "Insufficient income for loan amount requested"
  },
  {
    id: "FIN004",
    customerName: "Grace Muthoni",
    email: "grace.m@email.com",
    phone: "+254 733 444 555",
    vehicleMake: "Lexus",
    vehicleModel: "RX 350",
    year: "2024",
    vehiclePrice: 7500000,
    loanAmount: 5000000,
    downPayment: 2500000,
    loanTerm: 60,
    monthlyPayment: 85000,
    status: "in_review",
    applicationDate: "2024-01-12",
    creditScore: 690,
    employmentStatus: "Full-time",
    monthlyIncome: 320000,
    notes: "Under review - additional documentation requested"
  },
  {
    id: "FIN005",
    customerName: "David Mwangi",
    email: "david.m@email.com",
    phone: "+254 744 555 666",
    vehicleMake: "Toyota",
    vehicleModel: "Land Cruiser",
    year: "2023",
    vehiclePrice: 12000000,
    loanAmount: 8000000,
    downPayment: 4000000,
    loanTerm: 84,
    monthlyPayment: 95000,
    status: "pending",
    applicationDate: "2024-01-18",
    creditScore: 750,
    employmentStatus: "Full-time",
    monthlyIncome: 450000,
    notes: "High-value vehicle, requires additional verification"
  }
]

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  in_review: { label: "In Review", color: "bg-blue-100 text-blue-800", icon: FileText },
  approved: { label: "Approved", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: XCircle }
}

export default function FinancingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [makeFilter, setMakeFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const filteredApplications = financingApplications.filter(application => {
    const matchesSearch = application.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.vehicleMake.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || application.status === statusFilter
    const matchesMake = makeFilter === "all" || application.vehicleMake === makeFilter

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

  const totalApplications = financingApplications.length
  const pendingApplications = financingApplications.filter(a => a.status === "pending").length
  const approvedApplications = financingApplications.filter(a => a.status === "approved").length
  const totalLoanAmount = financingApplications.reduce((sum, a) => sum + a.loanAmount, 0)
  const averageCreditScore = Math.round(financingApplications.reduce((sum, a) => sum + a.creditScore, 0) / financingApplications.length)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financing Management</h1>
          <p className="text-gray-600 mt-1">Manage loan applications and financing requests</p>
        </div>
        <Button className="bg-[#B89E5A] hover:bg-[#9A8449]">
          <Plus className="w-4 h-4 mr-2" />
          New Application
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplications}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingApplications}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Loan Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              KES {(totalLoanAmount / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">All applications</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Credit Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{averageCreditScore}</div>
            <p className="text-xs text-muted-foreground">Good range</p>
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
                  placeholder="Search applications..."
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
                  <SelectItem value="in_review">In Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
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

      {/* Financing Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Loan Applications ({filteredApplications.length})</CardTitle>
          <CardDescription>Manage and review all financing applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredApplications.map((application) => (
              <div key={application.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-semibold text-lg">{application.customerName}</h3>
                        <p className="text-sm text-gray-600">Application ID: {application.id}</p>
                      </div>
                      {getStatusBadge(application.status as keyof typeof statusConfig)}
                    </div>
                    
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Vehicle Details</p>
                        <p className="text-sm text-gray-600">
                          {application.vehicleMake} {application.vehicleModel} ({application.year})
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: KES {application.vehiclePrice.toLocaleString()}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Loan Details</p>
                        <p className="text-sm text-gray-600">
                          Amount: KES {application.loanAmount.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          Monthly: KES {application.monthlyPayment.toLocaleString()}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Financial Info</p>
                        <p className="text-sm text-gray-600">
                          Credit Score: {application.creditScore}
                        </p>
                        <p className="text-sm text-gray-600">
                          Income: KES {application.monthlyIncome.toLocaleString()}/month
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Application Details</p>
                        <p className="text-sm text-gray-600">Date: {application.applicationDate}</p>
                        <p className="text-sm text-gray-600">
                          Term: {application.loanTerm} months
                        </p>
                      </div>
                    </div>
                    
                    {application.notes && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700">Notes</p>
                        <p className="text-sm text-gray-600">{application.notes}</p>
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