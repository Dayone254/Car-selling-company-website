"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  Truck,
  DollarSign,
  Users,
  Settings,
  FileText,
  BarChart3,
  MessageSquare,
  Calendar,
  LogOut,
  Menu,
  X,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  TrendingUp,
  Package,
  Globe,
  Shield,
  Award,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    description: "Overview and analytics"
  },
  {
    title: "Inventory Management",
    href: "/admin/inventory",
    icon: Car,
    description: "Manage vehicle listings"
  },
  {
    title: "Sell Your Car",
    href: "/admin/sell-your-car",
    icon: ShoppingCart,
    description: "Manage car sale requests"
  },
  {
    title: "Import Service",
    href: "/admin/import-service",
    icon: Truck,
    description: "Manage import requests"
  },
  {
    title: "Financing",
    href: "/admin/financing",
    icon: DollarSign,
    description: "Manage loan applications"
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
    description: "Customer management"
  },
  {
    title: "Testimonials",
    href: "/admin/testimonials",
    icon: Star,
    description: "Manage customer reviews"
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
    description: "Analytics and reports"
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
    description: "Customer inquiries"
  },
  {
    title: "Appointments",
    href: "/admin/appointments",
    icon: Calendar,
    description: "Test drive bookings"
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    description: "Website configuration"
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/admin" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <div>
                <span className="font-light text-xl text-gray-900 tracking-wide">Admin Panel</span>
                <div className="text-xs text-gray-500 font-light">Nairobi Prime Motors</div>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#B89E5A]/10 text-[#B89E5A] border border-[#B89E5A]/20'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`w-5 h-5 ${
                    isActive ? 'text-[#B89E5A]' : 'text-gray-400 group-hover:text-gray-600'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-gray-500 font-light">{item.description}</div>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-medium text-gray-900">
                  {sidebarItems.find(item => item.href === pathname)?.title || 'Dashboard'}
                </h1>
                <p className="text-sm text-gray-500">
                  {sidebarItems.find(item => item.href === pathname)?.description || 'Admin Panel'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Admin User</span>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">
                <Users className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 