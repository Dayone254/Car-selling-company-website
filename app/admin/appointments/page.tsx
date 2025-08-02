"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Plus,
  Filter,
  Edit,
  Trash2,
  MessageSquare,
  PhoneCall,
  Video,
  Users,
  CalendarDays,
  Clock as ClockIcon,
  DollarSign,
  Wrench
} from "lucide-react";

// Mock data for appointments
const mockAppointments = [
  {
    id: "APT001",
    customerName: "John Doe",
    customerEmail: "john.doe@email.com",
    customerPhone: "+254 700 123 456",
    vehicle: "BMW X5 2023",
    vehicleId: "BMW001",
    appointmentType: "test-drive",
    date: "2024-01-20",
    time: "14:00",
    duration: 60,
    status: "confirmed",
    location: "Nairobi Showroom",
    notes: "Customer is interested in the luxury SUV segment. Has previous BMW experience.",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "APT002",
    customerName: "Sarah Wilson",
    customerEmail: "sarah.wilson@email.com",
    customerPhone: "+254 700 234 567",
    vehicle: "Mercedes C-Class 2023",
    vehicleId: "MERC001",
    appointmentType: "consultation",
    date: "2024-01-21",
    time: "10:00",
    duration: 45,
    status: "pending",
    location: "Nairobi Showroom",
    notes: "First-time buyer. Needs guidance on financing options.",
    createdAt: "2024-01-16T14:20:00Z"
  },
  {
    id: "APT003",
    customerName: "Mike Chen",
    customerEmail: "mike.chen@email.com",
    customerPhone: "+254 700 345 678",
    vehicle: "Audi Q7 2023",
    vehicleId: "AUDI001",
    appointmentType: "test-drive",
    date: "2024-01-22",
    time: "16:00",
    duration: 60,
    status: "confirmed",
    location: "Nairobi Showroom",
    notes: "Comparing with BMW X5. Very interested in technology features.",
    createdAt: "2024-01-17T09:15:00Z"
  },
  {
    id: "APT004",
    customerName: "Lisa Brown",
    customerEmail: "lisa.brown@email.com",
    customerPhone: "+254 700 456 789",
    vehicle: "Lexus RX 350 2023",
    vehicleId: "LEXUS001",
    appointmentType: "consultation",
    date: "2024-01-23",
    time: "11:30",
    duration: 30,
    status: "cancelled",
    location: "Nairobi Showroom",
    notes: "Cancelled due to scheduling conflict. Will reschedule.",
    createdAt: "2024-01-18T16:45:00Z"
  },
  {
    id: "APT005",
    customerName: "David Mwangi",
    customerEmail: "david.mwangi@email.com",
    customerPhone: "+254 700 567 890",
    vehicle: "Toyota Land Cruiser 2023",
    vehicleId: "TOYOTA001",
    appointmentType: "test-drive",
    date: "2024-01-24",
    time: "13:00",
    duration: 90,
    status: "confirmed",
    location: "Nairobi Showroom",
    notes: "Experienced off-road driver. Interested in adventure features.",
    createdAt: "2024-01-19T12:30:00Z"
  }
];

const appointmentTypes = [
  { value: "all", label: "All Types" },
  { value: "test-drive", label: "Test Drive" },
  { value: "consultation", label: "Consultation" },
  { value: "financing", label: "Financing" },
  { value: "service", label: "Service" }
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" }
];

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const filteredAppointments = useMemo(() => {
    let appointments = mockAppointments;
    
    // Filter by tab
    if (activeTab === "upcoming") {
      appointments = appointments.filter(apt => 
        apt.status === "confirmed" || apt.status === "pending"
      );
    } else if (activeTab === "completed") {
      appointments = appointments.filter(apt => apt.status === "completed");
    } else if (activeTab === "cancelled") {
      appointments = appointments.filter(apt => apt.status === "cancelled");
    }
    
    // Filter by search
    if (searchQuery) {
      appointments = appointments.filter(apt => 
        apt.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.customerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by type
    if (typeFilter !== "all") {
      appointments = appointments.filter(apt => apt.appointmentType === typeFilter);
    }
    
    // Filter by status
    if (statusFilter !== "all") {
      appointments = appointments.filter(apt => apt.status === statusFilter);
    }
    
    return appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [activeTab, searchQuery, typeFilter, statusFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "test-drive": return <Car className="h-4 w-4" />;
      case "consultation": return <Users className="h-4 w-4" />;
      case "financing": return <DollarSign className="h-4 w-4" />;
      case "service": return <Wrench className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const handleStatusChange = (appointmentId: string, newStatus: string) => {
    console.log(`Changing appointment ${appointmentId} status to ${newStatus}`);
    // Here you would typically update the appointment status
  };

  const handleContactCustomer = (appointment: any, method: string) => {
    console.log(`Contacting ${appointment.customerName} via ${method}`);
    // Here you would typically initiate contact
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const upcomingAppointments = mockAppointments.filter(apt => 
    apt.status === "confirmed" || apt.status === "pending"
  ).length;

  const todayAppointments = mockAppointments.filter(apt => 
    apt.date === new Date().toISOString().split('T')[0] &&
    (apt.status === "confirmed" || apt.status === "pending")
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">
            Manage test drives and customer appointments
          </p>
        </div>
        <Button onClick={() => setShowNewAppointment(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAppointments.length}</div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments}</div>
            <p className="text-xs text-muted-foreground">
              Confirmed & pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayAppointments}</div>
            <p className="text-xs text-muted-foreground">
              Scheduled for today
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Appointments List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Appointments</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Search and Filters */}
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search appointments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {appointmentTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map(status => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="mt-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    {filteredAppointments.length === 0 ? (
                      <div className="p-6 text-center text-muted-foreground">
                        No appointments found
                      </div>
                    ) : (
                      <div className="divide-y">
                        {filteredAppointments.map((appointment) => (
                          <div
                            key={appointment.id}
                            className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                              selectedAppointment?.id === appointment.id ? "bg-muted" : ""
                            }`}
                            onClick={() => setSelectedAppointment(appointment)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium truncate">
                                    {appointment.customerName}
                                  </span>
                                  <Badge className={getStatusColor(appointment.status)}>
                                    {appointment.status}
                                  </Badge>
                                </div>
                                <p className="text-sm font-medium truncate">
                                  {appointment.vehicle}
                                </p>
                                <p className="text-sm text-muted-foreground truncate">
                                  {appointment.appointmentType} • {appointment.location}
                                </p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    <span>{formatDate(appointment.date)}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>{appointment.time}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Appointment Detail */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedAppointment ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{selectedAppointment.customerName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedAppointment.appointmentType} • {selectedAppointment.vehicle}
                      </p>
                    </div>
                    <Badge className={getStatusColor(selectedAppointment.status)}>
                      {selectedAppointment.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{formatDate(selectedAppointment.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedAppointment.time} ({selectedAppointment.duration} min)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedAppointment.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Customer Contact</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedAppointment.customerEmail}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedAppointment.customerPhone}</span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedAppointment.notes && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Notes</h4>
                      <p className="text-sm text-muted-foreground">{selectedAppointment.notes}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 pt-4">
                    <Button size="sm" className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Confirm
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select an appointment to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 