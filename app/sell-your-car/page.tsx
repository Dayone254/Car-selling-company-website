"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calculator,
  Shield,
  Award,
  Phone,
  MessageCircle,
  Mail,
  Star,
  DollarSign,
  FileText,
  Search,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function SellYourCarPage() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    transmission: "",
    fuelType: "",
    bodyType: "",
    color: "",
    ownerName: "",
    phone: "",
    email: "",
    location: "",
    additionalInfo: "",
  })

  const sellingSteps = [
    {
      title: "Initial Assessment",
      duration: "15 minutes",
      description: "Prepare your vehicle for evaluation",
      icon: <Search className="w-6 h-6" />,
      details: [
        "Clean your vehicle thoroughly",
        "Gather all documentation",
        "Note recent maintenance",
        "Take quality photos",
      ],
    },
    {
      title: "Online Valuation",
      duration: "2 hours",
      description: "Get an instant estimate online",
      icon: <Calculator className="w-6 h-6" />,
      details: [
        "Complete vehicle details form",
        "Upload clear photos",
        "Receive initial valuation",
        "Schedule inspection if satisfied",
      ],
    },
    {
      title: "Professional Inspection",
      duration: "45 minutes",
      description: "Expert evaluation at your location",
      icon: <Award className="w-6 h-6" />,
      details: [
        "Certified appraiser visit",
        "50-point inspection checklist",
        "System and condition check",
        "Final valuation based on condition",
      ],
    },
    {
      title: "Final Offer & Sale",
      duration: "Same day",
      description: "Complete the transaction seamlessly",
      icon: <DollarSign className="w-6 h-6" />,
      details: [
        "Receive final offer (valid 7 days)",
        "Complete transfer documentation",
        "Immediate payment processing",
        "Handle all NTSA procedures",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Peter Kariuki",
      role: "Business Owner",
      vehicle: "2019 Toyota Camry",
      amount: "KES 2,800,000",
      content: "Smooth process with instant payment. Got KES 200,000 more than other dealers.",
      rating: 5,
    },
    {
      name: "Mary Njeri",
      role: "Marketing Manager",
      vehicle: "2020 BMW 320i",
      amount: "KES 4,200,000",
      content: "Professional service throughout. They handled all paperwork efficiently.",
      rating: 5,
    },
    {
      name: "John Mwangi",
      role: "Engineer",
      vehicle: "2018 Mercedes C200",
      amount: "KES 3,600,000",
      content: "Best market price and sold in just 3 days. Highly professional team.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What types of cars do you buy?",
      answer:
        "We purchase all vehicle types including sedans, SUVs, hatchbacks, and luxury cars. We're particularly interested in well-maintained vehicles less than 10 years old with complete documentation.",
    },
    {
      question: "How do you determine the valuation of my car?",
      answer:
        "Our valuation considers market demand, vehicle condition, mileage, service history, and recent comparable sales using advanced market analysis tools.",
    },
    {
      question: "What if my car has an outstanding loan?",
      answer:
        "We can purchase vehicles with outstanding loans. We work directly with your bank to settle the amount and pay you the difference at no extra cost.",
    },
    {
      question: "How long does the entire selling process take?",
      answer:
        "The complete process takes 2-5 days from initial valuation to final payment. Online valuation takes 2 hours, inspection within 24 hours, and same-day payment upon agreement.",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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
              <Link href="/sell-your-car" className="text-[#B89E5A] font-medium tracking-wide">
                Sell Your Car
              </Link>
              <Link
                href="/financing"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
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
              Get Car Valuation
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-4 py-2 mb-6 font-light">
            Premium Car Buying Service
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide leading-tight">
            Sell Your Car
            <span className="block text-[#B89E5A] mt-2">For The Best Price</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Get top market value with our professional, hassle-free selling service. Fair valuations, instant payments,
            and complete paperwork handling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Instant Valuation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-light text-[#B89E5A] tracking-wide">2-5 Days</div>
              <div className="text-sm text-gray-600 font-light">Complete Process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#B89E5A] tracking-wide">0 Fees</div>
              <div className="text-sm text-gray-600 font-light">No Hidden Costs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#B89E5A] tracking-wide">Same Day</div>
              <div className="text-sm text-gray-600 font-light">Payment</div>
            </div>
          </div>
        </div>

        {/* Why Sell With Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Why Sell With Us?</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Experience the difference of selling to trusted automotive professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Best Market Prices",
                description: "Competitive prices up to 15% above market average",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Payment",
                description: "Get paid immediately with secure transfer or cash",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Complete Paperwork",
                description: "We handle all NTSA transfers and documentation",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Trusted",
                description: "Licensed dealer with transparent business practices",
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

        {/* Selling Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">How It Works</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              A simple 4-step process to sell your car quickly and get the best price
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sellingSteps.map((step, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#B89E5A] rounded-2xl flex items-center justify-center mr-6 text-white group-hover:scale-105 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 tracking-wide">{step.title}</h3>
                      <p className="text-[#B89E5A] font-light">{step.duration}</p>
                      <p className="text-gray-600 font-light">{step.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B89E5A] rounded-full"></div>
                        <span className="text-gray-700 font-light">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Valuation Form */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Get Your Car Valuation</h2>
            <p className="text-lg text-gray-600 font-light">
              Fill out the form below to receive an instant valuation for your vehicle
            </p>
          </div>

          <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] text-white p-8">
              <CardTitle className="text-2xl font-light text-center tracking-wide">Vehicle Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="make" className="font-light text-gray-700 tracking-wide">
                      Make *
                    </Label>
                    <Select value={formData.make} onValueChange={(value) => handleInputChange("make", value)}>
                      <SelectTrigger className="mt-2 rounded-lg border-gray-200 font-light">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                        <SelectItem value="audi">Audi</SelectItem>
                        <SelectItem value="lexus">Lexus</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="model" className="font-light text-gray-700 tracking-wide">
                      Model *
                    </Label>
                    <Input
                      id="model"
                      value={formData.model}
                      onChange={(e) => handleInputChange("model", e.target.value)}
                      placeholder="e.g., Camry, X5, C-Class"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="year" className="font-light text-gray-700 tracking-wide">
                      Year *
                    </Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger className="mt-2 rounded-lg border-gray-200 font-light">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 15 }, (_, i) => 2024 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mileage" className="font-light text-gray-700 tracking-wide">
                      Mileage (km) *
                    </Label>
                    <Input
                      id="mileage"
                      value={formData.mileage}
                      onChange={(e) => handleInputChange("mileage", e.target.value)}
                      placeholder="e.g., 45000"
                      className="mt-2 rounded-lg border-gray-200 font-light"
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition" className="font-light text-gray-700 tracking-wide">
                      Condition *
                    </Label>
                    <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                      <SelectTrigger className="mt-2 rounded-lg border-gray-200 font-light">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-wide">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="ownerName" className="font-light text-gray-700 tracking-wide">
                        Full Name *
                      </Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange("ownerName", e.target.value)}
                        placeholder="Your full name"
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
                </div>

                <div>
                  <Label htmlFor="additionalInfo" className="font-light text-gray-700 tracking-wide">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    placeholder="Any additional details about your vehicle..."
                    className="mt-2 rounded-lg border-gray-200 font-light"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Get My Car Valuation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Success Stories</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Real experiences from customers who sold their cars with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#B89E5A] text-[#B89E5A]" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-4">
                    <p className="font-medium text-gray-900 tracking-wide">{testimonial.name}</p>
                    <p className="text-gray-600 font-light text-sm">{testimonial.role}</p>
                  </div>
                  <div className="bg-green-50/50 p-4 rounded-xl border border-green-200/50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700 font-light">{testimonial.vehicle}</span>
                      <span className="text-lg font-medium text-green-600 tracking-wide">{testimonial.amount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Get answers to common questions about selling your car
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-2xl px-8 bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-[#B89E5A] transition-colors py-6 tracking-wide">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-wide">Ready to Sell Your Car?</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Get started today and receive your valuation within 2 hours. Our team is ready to make you a competitive
            offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Instant Valuation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                value: "+254 700 123 456",
                subtitle: "Mon-Sat: 8AM-6PM",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "WhatsApp",
                value: "+254 700 123 456",
                subtitle: "Instant responses",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                value: "sell@nairobiprimemotors.com",
                subtitle: "2-hour response",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#B89E5A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#B89E5A]">{contact.icon}</div>
                </div>
                <h3 className="font-medium mb-2 text-gray-900 tracking-wide">{contact.title}</h3>
                <p className="text-gray-700 font-light">{contact.value}</p>
                <p className="text-gray-500 font-light text-sm">{contact.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
