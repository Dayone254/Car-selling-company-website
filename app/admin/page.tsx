"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  ShoppingCart,
  Truck,
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Eye,
  Plus,
  MessageSquare,
  Calendar,
  Star,
  Package,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d")

  const stats = [
    {
      title: "Total Vehicles",
      value: "156",
      change: "+12%",
      changeType: "increase",
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Listings",
      value: "89",
      change: "+8%",
      changeType: "increase",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Pending Sales",
      value: "23",
      change: "-3%",
      changeType: "decrease",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Import Requests",
      value: "7",
      change: "+15%",
      changeType: "increase",
      icon: Truck,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Loan Applications",
      value: "34",
      change: "+22%",
      changeType: "increase",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "New Customers",
      value: "45",
      change: "+18%",
      changeType: "increase",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "vehicle_added",
      title: "New BMW X5 Added",
      description: "2022 BMW X5 xDrive40i added to inventory",
      time: "2 minutes ago",
      status: "completed",
    },
    {
      id: 2,
      type: "sale_request",
      title: "Car Sale Request",
      description: "John Doe submitted a request to sell Toyota Corolla",
      time: "15 minutes ago",
      status: "pending",
    },
    {
      id: 3,
      type: "import_request",
      title: "Import Service Request",
      description: "Sarah Wanjiku requested import of Mercedes C-Class",
      time: "1 hour ago",
      status: "pending",
    },
    {
      id: 4,
      type: "loan_application",
      title: "Loan Application",
      description: "David Kimani applied for financing on Audi Q7",
      time: "2 hours ago",
      status: "reviewing",
    },
    {
      id: 5,
      type: "testimonial",
      title: "New Testimonial",
      description: "Grace Muthoni left a 5-star review",
      time: "3 hours ago",
      status: "completed",
    },
  ]

  const quickActions = [
    {
      title: "Add New Vehicle",
      description: "Add a new vehicle to inventory",
      icon: Plus,
      href: "/admin/inventory",
      color: "bg-blue-500",
    },
    {
      title: "Review Sales",
      description: "Review pending car sale requests",
      icon: ShoppingCart,
      href: "/admin/sell-your-car",
      color: "bg-orange-500",
    },
    {
      title: "Process Imports",
      description: "Handle import service requests",
      icon: Truck,
      href: "/admin/import-service",
      color: "bg-purple-500",
    },
    {
      title: "View Messages",
      description: "Check customer inquiries",
      icon: MessageSquare,
      href: "/admin/messages",
      color: "bg-green-500",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />
      case "reviewing":
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>
      case "reviewing":
        return <Badge className="bg-blue-100 text-blue-700">Reviewing</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-700">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-light text-gray-900 tracking-wide">Dashboard</h1>
          <p className="text-gray-600 font-light">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-light text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === "increase" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:border-[#B89E5A]/20 hover:bg-[#B89E5A]/5 transition-all duration-200 cursor-pointer group">
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-[#B89E5A] transition-colors duration-200">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0">
                    {getStatusIcon(activity.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      {getStatusBadge(activity.status)}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="rounded-full">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Sales chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Vehicle Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Category distribution chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">98%</h3>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">24h</h3>
              <p className="text-sm text-gray-600">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">156</h3>
              <p className="text-sm text-gray-600">Total Vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900">4.9</h3>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 