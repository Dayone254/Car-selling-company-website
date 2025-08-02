"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import { MobileNavigation } from "./mobile-navigation"

export function DynamicHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">NPM</span>
            </div>
            <span
              className={`font-semibold text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Nairobi Prime Motors
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/inventory"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              Inventory
            </Link>
            <Link
              href="/import-service"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              Import Service
            </Link>
            <Link
              href="/sell-your-car"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              Sell Your Car
            </Link>
            <Link
              href="/financing"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              Financing
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              About Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white luxury-button">Book Test Drive</Button>
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-gray-600" />
              <span
                className={`font-medium transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                +254 700 123 456
              </span>
            </div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}
