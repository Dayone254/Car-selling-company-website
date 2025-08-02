"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calculator,
  Shield,
  Award,
  Users,
  Phone,
  MessageCircle,
  Mail,
  Star,
  DollarSign,
  Info,
  FileText,
  Truck,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function ImportServicePage() {
  const [activeStep, setActiveStep] = useState(0)

  const importSteps = [
    {
      title: "Vehicle Sourcing",
      duration: "1-2 weeks",
      description: "Find and verify your perfect vehicle",
      icon: <Search className="w-6 h-6" />,
      details: [
        "Global marketplace access",
        "Vehicle history verification",
        "Pre-purchase inspection",
        "Market value assessment",
      ],
    },
    {
      title: "Documentation",
      duration: "3-5 days",
      description: "Handle all required paperwork",
      icon: <FileText className="w-6 h-6" />,
      details: ["Import permit processing", "Insurance documentation", "Financial verification", "Customs preparation"],
    },
    {
      title: "Shipping & Transit",
      duration: "4-6 weeks",
      description: "Secure transportation to Kenya",
      icon: <Truck className="w-6 h-6" />,
      details: ["Professional shipping", "Real-time tracking", "Transit insurance", "Port coordination"],
    },
    {
      title: "Customs & Delivery",
      duration: "1-2 weeks",
      description: "Final clearance and handover",
      icon: <Award className="w-6 h-6" />,
      details: ["Duty calculation", "KEBS inspection", "Registration completion", "Doorstep delivery"],
    },
  ]

  const costBreakdown = [
    {
      category: "Vehicle Cost (CIF)",
      description: "Cost, Insurance, and Freight value",
      percentage: "Base Cost",
    },
    {
      category: "Import Duty",
      description: "Government import duty",
      percentage: "25% of CIF",
    },
    {
      category: "Excise Duty",
      description: "Excise tax on imported vehicles",
      percentage: "20% of Total",
    },
    {
      category: "VAT",
      description: "Value Added Tax",
      percentage: "16% of Total",
    },
    {
      category: "Service Fees",
      description: "Our comprehensive service package",
      percentage: "Fixed Rate",
    },
  ]

  const testimonials = [
    {
      name: "Michael Ochieng",
      role: "Business Executive",
      vehicle: "BMW X3 from Germany",
      content: "Exceptional service from start to finish. Saved over KES 800,000 compared to local prices.",
      rating: 5,
    },
    {
      name: "Catherine Wanjiru",
      role: "Entrepreneur",
      vehicle: "Mercedes C-Class from Japan",
      content: "Complete transparency throughout the process. Professional and reliable service.",
      rating: 5,
    },
    {
      name: "James Mwangi",
      role: "Doctor",
      vehicle: "Toyota Land Cruiser from UAE",
      content: "Effortless process with substantial savings. Highly recommend their expertise.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What types of vehicles can be imported to Kenya?",
      answer:
        "Kenya allows import of passenger vehicles, commercial vehicles, and motorcycles. Vehicles must be less than 8 years old for petrol engines and less than 5 years for diesel engines.",
    },
    {
      question: "How much can I save by importing a vehicle?",
      answer:
        "Savings typically range from KES 500,000 to KES 2,000,000 depending on the vehicle type and model. We provide detailed cost comparisons before you commit.",
    },
    {
      question: "What documents do I need to import a vehicle?",
      answer:
        "You'll need a valid Kenyan ID, KRA PIN certificate, proof of income, and we'll help you obtain the import permit and other required documentation.",
    },
    {
      question: "How long does the entire import process take?",
      answer:
        "The complete process typically takes 6-10 weeks from vehicle selection to delivery. We provide regular updates throughout the journey.",
    },
  ]

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
              <Link href="/import-service" className="text-[#B89E5A] font-medium tracking-wide">
                Import Service
              </Link>
              <Link
                href="/sell-your-car"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
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
              Get Import Quote
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-4 py-2 mb-6 font-light">
            Professional Import Service
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide leading-tight">
            Import Your Dream Car
            <span className="block text-[#B89E5A] mt-2">With Complete Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Save substantially while getting the exact vehicle you want. Our expert team handles every detail of the
            import process, from sourcing to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Import Cost
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>

        {/* Why Choose Our Import Service */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Why Import With Us?</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Experience seamless, transparent, and cost-effective vehicle importing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Significant Savings",
                description: "Save 20-40% compared to local market prices on luxury vehicles",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Complete Transparency",
                description: "Detailed cost breakdown and regular updates throughout the process",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Dedicated specialists with years of customs and regulation experience",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous inspection and verification before shipping",
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

        {/* Import Process Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">How It Works</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              A streamlined 4-step process from selection to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {importSteps.map((step, index) => (
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

        {/* Cost Breakdown */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Import Cost Breakdown</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#B89E5A] to-[#9A8449] p-8 text-white text-center">
                <h3 className="text-2xl font-light tracking-wide">Complete Cost Structure</h3>
              </div>
              <div className="p-0">
                {costBreakdown.map((cost, index) => (
                  <div
                    key={index}
                    className={`p-8 border-b border-gray-100 last:border-b-0 ${
                      index % 2 === 0 ? "bg-gray-50/30" : "bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1 tracking-wide">{cost.category}</h4>
                        <p className="text-gray-600 font-light">{cost.description}</p>
                      </div>
                      <div className="text-xl font-medium text-[#B89E5A] tracking-wide">{cost.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-8 p-6 bg-amber-50/50 rounded-2xl border border-amber-200/50">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-2 tracking-wide">Important Note</h4>
                  <p className="text-amber-700 font-light leading-relaxed">
                    Duty rates may vary based on vehicle specifications. We provide accurate calculations based on
                    current rates and your specific vehicle details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Success Stories</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Real experiences from customers who trusted us with their imports
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
                  <div>
                    <p className="font-medium text-gray-900 tracking-wide">{testimonial.name}</p>
                    <p className="text-gray-600 font-light text-sm">{testimonial.role}</p>
                    <p className="text-[#B89E5A] font-light text-sm mt-1">{testimonial.vehicle}</p>
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
              Get answers to common questions about our import service
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
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-wide">
            Ready to Import Your Dream Car?
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Get a personalized quote and timeline for your specific vehicle. Our experts are ready to guide you through
            every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Consultation
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
                value: "imports@nairobiprimemotors.com",
                subtitle: "24-hour response",
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
