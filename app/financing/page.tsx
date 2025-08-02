"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Shield, Clock, Users, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function FinancingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    monthlyIncome: "",
    employmentType: "",
    vehiclePrice: "",
    downPayment: "",
    loanTerm: "",
    agreeToTerms: false,
  })

  const bankPartners = [
    {
      name: "KCB Bank",
      rate: "From 11.5% p.a.",
      features: ["Quick approval", "Flexible terms", "No hidden fees"],
    },
    {
      name: "Stanbic Bank",
      rate: "From 12.0% p.a.",
      features: ["Digital application", "Same day approval", "Competitive rates"],
    },
    {
      name: "NCBA Bank",
      rate: "From 12.5% p.a.",
      features: ["Easy documentation", "Fast processing", "Excellent service"],
    },
    {
      name: "Equity Bank",
      rate: "From 13.0% p.a.",
      features: ["Wide network", "Flexible payment", "Customer support"],
    },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B89E5A] to-[#9A8449] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">NPM</span>
              </div>
              <span className="font-light text-xl text-gray-900 tracking-wide">Nairobi Prime Motors</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/inventory"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Inventory
              </Link>
              <Link
                href="/import-service"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Import Service
              </Link>
              <Link
                href="/sell-your-car"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Sell Your Car
              </Link>
              <Link href="/financing" className="text-[#B89E5A] font-medium tracking-wide">
                Financing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                About Us
              </Link>
            </nav>

            <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-4 py-2 mb-6 font-light">
            Flexible Auto Financing
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide leading-tight">
            Flexible Auto Financing
            <span className="block text-[#B89E5A] mt-2">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Get pre-approved for your dream car with competitive rates from Kenya's leading banks. Simple application,
            quick approval, and transparent terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Payment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              Apply for Pre-Approval
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Why Finance with Us?</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              We make car financing simple, transparent, and tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Process",
                description: "Bank-grade security for all your personal and financial information",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Approval",
                description: "Get pre-approved in as little as 24 hours with our streamlined process",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "Dedicated financing specialists to guide you through every step",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Best Rates",
                description: "Competitive rates from multiple banks to find your best option",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#B89E5A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B89E5A]/20 transition-colors duration-300">
                    <div className="text-[#B89E5A]">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">{benefit.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pre-Approval Form */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Get Pre-Approved Today</h2>
            <p className="text-lg text-gray-600 font-light">
              Complete our secure application and get a financing decision in minutes
            </p>
          </div>

          <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] text-white p-8">
              <CardTitle className="text-2xl font-light text-center tracking-wide">Financing Application</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="font-light text-gray-700 tracking-wide">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-light text-gray-700 tracking-wide">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="font-light text-gray-700 tracking-wide">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-light text-gray-700 tracking-wide">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+254 700 123 456"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="monthlyIncome" className="font-light text-gray-700 tracking-wide">
                      Monthly Income (KES) *
                    </Label>
                    <Input
                      id="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                      placeholder="150,000"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employmentType" className="font-light text-gray-700 tracking-wide">
                      Employment Type *
                    </Label>
                    <Select
                      value={formData.employmentType}
                      onValueChange={(value) => handleInputChange("employmentType", value)}
                    >
                      <SelectTrigger className="mt-2 rounded-lg border-gray-200 font-light">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="business-owner">Business Owner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="vehiclePrice" className="font-light text-gray-700 tracking-wide">
                      Vehicle Price (KES) *
                    </Label>
                    <Input
                      id="vehiclePrice"
                      value={formData.vehiclePrice}
                      onChange={(e) => handleInputChange("vehiclePrice", e.target.value)}
                      placeholder="5,000,000"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="downPayment" className="font-light text-gray-700 tracking-wide">
                      Down Payment (KES) *
                    </Label>
                    <Input
                      id="downPayment"
                      value={formData.downPayment}
                      onChange={(e) => handleInputChange("downPayment", e.target.value)}
                      placeholder="1,000,000"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="loanTerm" className="font-light text-gray-700 tracking-wide">
                      Loan Term *
                    </Label>
                    <Select value={formData.loanTerm} onValueChange={(value) => handleInputChange("loanTerm", value)}>
                      <SelectTrigger className="mt-2 rounded-lg border-gray-200 font-light">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24">24 months</SelectItem>
                        <SelectItem value="36">36 months</SelectItem>
                        <SelectItem value="48">48 months</SelectItem>
                        <SelectItem value="60">60 months</SelectItem>
                        <SelectItem value="72">72 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm font-light text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#B89E5A] hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#B89E5A] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                  disabled={!formData.agreeToTerms}
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bank Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Banking Partners</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              We work with Kenya's most trusted financial institutions to offer you the best rates and terms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bankPartners.map((bank, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">{bank.name}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">{bank.name}</h3>
                  <div className="text-[#B89E5A] font-medium mb-4">{bank.rate}</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {bank.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-wide">
            Need Help with Financing?
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
            Our financing specialists are here to help you find the perfect loan solution
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Phone className="w-12 h-12" />,
                title: "Call Our Experts",
                description: "Speak directly with our financing team",
                value: "+254 700 123 456",
                subtitle: "Mon-Sat: 8AM-6PM",
              },
              {
                icon: <Mail className="w-12 h-12" />,
                title: "Email Us",
                description: "Get detailed information via email",
                value: "financing@nairobiprimemotors.com",
                subtitle: "Response within 24 hours",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-[#B89E5A] mx-auto mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 tracking-wide">{contact.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{contact.description}</p>
                  <div className="text-xl font-medium text-[#B89E5A] mb-2 tracking-wide">{contact.value}</div>
                  <p className="text-sm text-gray-500 font-light">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
