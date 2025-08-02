"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Award,
  Users,
  Star,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Target,
  Heart,
  Zap,
  Globe,
  Building,
  Car,
  Handshake,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform Kenya's luxury car market",
      icon: <Building className="w-6 h-6" />,
    },
    {
      year: "2019",
      title: "First Showroom",
      description: "Opened flagship showroom in Westlands, Nairobi",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "Import Service Launch",
      description: "Launched comprehensive vehicle import services",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Banking Partnerships",
      description: "Established partnerships with major Kenyan banks",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "1000+ Happy Customers",
      description: "Reached milestone of serving over 1000 satisfied customers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description: "Launched online platform and digital services",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Became Nairobi's leading luxury used car dealership",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  const teamMembers = [
    {
      name: "David Mwangi",
      role: "Founder & CEO",
      bio: "15+ years in automotive industry with passion for luxury vehicles and exceptional customer service.",
      expertise: ["Strategic Leadership", "Market Analysis", "Customer Relations"],
    },
    {
      name: "Sarah Wanjiku",
      role: "Head of Sales",
      bio: "Former luxury brand manager with expertise in premium automotive sales and customer experience.",
      expertise: ["Luxury Sales", "Customer Experience", "Team Management"],
    },
    {
      name: "James Kimani",
      role: "Import Specialist",
      bio: "Certified automotive appraiser with deep knowledge of international vehicle sourcing and customs.",
      expertise: ["Vehicle Sourcing", "Customs Clearance", "Quality Assessment"],
    },
    {
      name: "Grace Muthoni",
      role: "Finance Director",
      bio: "Banking professional specializing in automotive financing and customer financial solutions.",
      expertise: ["Automotive Finance", "Banking Relations", "Risk Assessment"],
    },
    {
      name: "Peter Ochieng",
      role: "Technical Manager",
      bio: "Master technician with 20+ years experience in luxury vehicle maintenance and inspection.",
      expertise: ["Vehicle Inspection", "Technical Assessment", "Quality Control"],
    },
    {
      name: "Catherine Njeri",
      role: "Customer Success Manager",
      bio: "Dedicated to ensuring every customer has an exceptional experience from inquiry to delivery.",
      expertise: ["Customer Support", "Process Optimization", "Relationship Management"],
    },
  ]

  const achievements = [
    {
      number: "2000+",
      label: "Vehicles Sold",
      description: "Successfully delivered premium vehicles to satisfied customers",
      icon: <Car className="w-8 h-8" />,
    },
    {
      number: "500+",
      label: "Import Services",
      description: "Vehicles imported from Japan, Germany, UK, and UAE",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on verified customer reviews and feedback",
      icon: <Star className="w-8 h-8" />,
    },
    {
      number: "15+",
      label: "Banking Partners",
      description: "Established relationships with major financial institutions",
      icon: <Handshake className="w-8 h-8" />,
    },
  ]

  const values = [
    {
      title: "Transparency",
      description: "Complete honesty in all our dealings, from pricing to vehicle history",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Excellence",
      description: "Uncompromising commitment to quality in every vehicle and service",
      icon: <Award className="w-8 h-8" />,
      color: "bg-[#B89E5A]/10 text-[#B89E5A]",
    },
    {
      title: "Integrity",
      description: "Building lasting relationships through ethical business practices",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Innovation",
      description: "Continuously improving our services through technology and innovation",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
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
              <Link
                href="/financing"
                className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors duration-200"
              >
                Financing
              </Link>
              <Link href="/about" className="text-[#B89E5A] font-medium tracking-wide">
                About Us
              </Link>
            </nav>

            <Button className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-[#B89E5A]/10 text-[#B89E5A] border-[#B89E5A]/20 rounded-full px-4 py-2 mb-6 font-light">
            Est. 2018 - Nairobi's Premier Dealership
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide leading-tight">
            Redefining Luxury
            <span className="block text-[#B89E5A] mt-2">Automotive Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            For over 6 years, we've been Nairobi's trusted partner in luxury automotive experiences. From premium used
            vehicles to comprehensive import services, we've built our reputation on transparency, quality, and
            exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-white transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#B89E5A]/10 rounded-2xl flex items-center justify-center mr-6">
                    <Target className="w-8 h-8 text-[#B89E5A]" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 tracking-wide">Our Mission</h3>
                </div>
                <p className="text-gray-700 font-light text-lg leading-relaxed">
                  To provide Kenya's most transparent, professional, and customer-centric automotive experience, making
                  luxury vehicle ownership accessible and enjoyable for every customer while setting new industry
                  standards for quality and service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#B89E5A]/10 rounded-2xl flex items-center justify-center mr-6">
                    <Star className="w-8 h-8 text-[#B89E5A]" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 tracking-wide">Our Vision</h3>
                </div>
                <p className="text-gray-700 font-light text-lg leading-relaxed">
                  To be East Africa's leading luxury automotive dealership, recognized for innovation, integrity, and
                  exceptional customer experiences, while contributing to the growth and professionalization of Kenya's
                  automotive industry.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Journey</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#B89E5A] rounded-xl flex items-center justify-center mr-4 text-white group-hover:scale-105 transition-transform duration-300">
                      {milestone.icon}
                    </div>
                    <div className="text-2xl font-medium text-[#B89E5A] tracking-wide">{milestone.year}</div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">{milestone.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Achievements</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#B89E5A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B89E5A]/20 transition-colors duration-300">
                    <div className="text-[#B89E5A]">{achievement.icon}</div>
                  </div>
                  <div className="text-4xl font-light text-[#B89E5A] mb-2 tracking-wide">{achievement.number}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 tracking-wide">{achievement.label}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide">Meet Our Team</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              The passionate professionals behind Nairobi Prime Motors' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1 tracking-wide">{member.name}</h3>
                  <p className="text-[#B89E5A] font-light mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm tracking-wide">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs font-light border-gray-200 rounded-full"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-wide">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Join thousands of satisfied customers who have chosen Nairobi Prime Motors for their automotive needs. Let's
            help you find your perfect vehicle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-[#B89E5A] hover:bg-[#9A8449] text-white font-light px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              <Car className="w-5 h-5 mr-2" />
              Browse Inventory
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
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Our Showroom",
                value: "Westlands, Nairobi",
                subtitle: "Mon-Sat: 8AM-6PM",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                value: "+254 700 123 456",
                subtitle: "Available 7 days a week",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                value: "info@nairobiprimemotors.com",
                subtitle: "24-hour response time",
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
