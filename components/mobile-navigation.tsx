"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/inventory", label: "Inventory" },
    { href: "/import-service", label: "Import Service" },
    { href: "/sell-your-car", label: "Sell Your Car" },
    { href: "/financing", label: "Financing" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
            isScrolled 
              ? "hover:bg-gray-100 text-gray-900" 
              : "hover:bg-white/10 text-white"
          }`}
          data-mobile-nav
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <span className="font-light text-xl text-gray-900 tracking-wide">Nairobi Prime Motors</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-[#B89E5A]/10 hover:text-[#B89E5A] rounded-xl transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact Information */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#B89E5A]" />
                <span className="font-medium">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[#B89E5A]" />
                <span className="font-medium">Westlands, Nairobi</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                className="w-full bg-gradient-to-r from-[#B89E5A] to-[#9A8449] hover:from-[#9A8449] hover:to-[#B89E5A] text-white rounded-xl font-medium h-12 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Test Drive
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-[#B89E5A] text-[#B89E5A] hover:bg-[#B89E5A] hover:text-white rounded-xl font-medium h-12 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 