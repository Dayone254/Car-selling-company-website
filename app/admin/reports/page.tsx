"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Calendar, TrendingUp, TrendingDown, DollarSign, Car, Users, FileText, BarChart3, PieChart, LineChart, Download as DownloadIcon, Filter as FilterIcon, RefreshCw, Eye, Plus, Settings, Share2, Trash2, Edit, BarChart, PieChart as PieChartIcon, LineChart as LineChartIcon, Activity } from "lucide-react"

// Mock data for reports
const salesData = [
  { month: "Jan", vehicles: 12, revenue: 85000000, financing: 8, imports: 4 },
  { month: "Feb", vehicles: 15, revenue: 95000000, financing: 10, imports: 5 },
  { month: "Mar", vehicles: 18, revenue: 110000000, financing: 12, imports: 6 },
  { month: "Apr", vehicles: 14, revenue: 90000000, financing: 9, imports: 5 },
  { month: "May", vehicles: 20, revenue: 125000000, financing: 14, imports: 6 },
  { month: "Jun", vehicles: 22, revenue: 135000000, financing: 16, imports: 7 }
]

const topVehicles = [
  { make: "BMW", model: "X5", sales: 8, revenue: 68000000 },
  { make: "Mercedes", model: "C-Class", sales: 6, revenue: 39000000 },
  { make: "Audi", model: "Q7", sales: 5, revenue: 47500000 },
  { make: "Lexus", model: "RX 350", sales: 4, revenue: 30000000 },
  { make: "Toyota", model: "Land Cruiser", sales: 3, revenue: 36000000 }
]

const customerMetrics = [
  { metric: "Total Customers", value: 156, change: "+12%", trend: "up" },
  { metric: "New Customers", value: 23, change: "+8%", trend: "up" },
  { metric: "Repeat Customers", value: 89, change: "+15%", trend: "up" },
  { metric: "Customer Satisfaction", value: "4.8/5", change: "+0.2", trend: "up" }
]

const recentReports = [
  {
    id: "REP001",
    title: "Monthly Sales Report",
    type: "Sales",
    date: "2024-01-31",
    status: "completed",
    size: "2.3 MB",
    description: "Comprehensive monthly sales analysis including vehicle sales, financing, and import services"
  },
  {
    id: "REP002",
    title: "Customer Satisfaction Survey",
    type: "Customer",
    date: "2024-01-28",
    status: "completed",
    size: "1.1 MB",
    description: "Customer feedback and satisfaction metrics for Q4 2023"
  },
  {
    id: "REP003",
    title: "Inventory Analysis",
    type: "Inventory",
    date: "2024-01-25",
    status: "completed",
    size: "3.2 MB",
    description: "Detailed inventory turnover and performance analysis"
  },
  {
    id: "REP004",
    title: "Financing Performance",
    type: "Financing",
    date: "2024-01-22",
    status: "completed",
    size: "1.8 MB",
    description: "Loan application success rates and financial performance metrics"
  },
  {
    id: "REP005",
    title: "Import Service Report",
    type: "Import",
    date: "2024-01-20",
    status: "completed",
    size: "2.7 MB",
    description: "Import service efficiency and customer satisfaction analysis"
  }
]

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [reportType, setReportType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showReportBuilder, setShowReportBuilder] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [reportBuilderData, setReportBuilderData] = useState({
    title: "",
    type: "sales",
    period: "month",
    includeCharts: true,
    includeTables: true,
    includeMetrics: true,
    recipients: ""
  })
  const [scheduledReports, setScheduledReports] = useState([
    {
      id: "SCH001",
      title: "Weekly Sales Summary",
      type: "Sales",
      frequency: "Weekly",
      nextRun: "2024-01-22",
      recipients: ["admin@nairobiprime.com", "sales@nairobiprime.com"],
      status: "active"
    },
    {
      id: "SCH002", 
      title: "Monthly Financial Report",
      type: "Financial",
      frequency: "Monthly",
      nextRun: "2024-02-01",
      recipients: ["admin@nairobiprime.com", "finance@nairobiprime.com"],
      status: "active"
    }
  ])

  const totalRevenue = salesData.reduce((sum, month) => sum + month.revenue, 0)
  const totalVehicles = salesData.reduce((sum, month) => sum + month.vehicles, 0)
  const totalFinancing = salesData.reduce((sum, month) => sum + month.financing, 0)
  const totalImports = salesData.reduce((sum, month) => sum + month.imports, 0)

  const filteredReports = recentReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = reportType === "all" || report.type.toLowerCase() === reportType

    return matchesSearch && matchesType
  })

  const getTrendIcon = (trend: "up" | "down") => {
    return trend === "up" ? 
      <TrendingUp className="w-4 h-4 text-green-600" /> : 
      <TrendingDown className="w-4 h-4 text-red-600" />
  }

  const handleGenerateReport = () => {
    console.log("Generating report with data:", reportBuilderData)
    // Here you would typically generate the report
    setShowReportBuilder(false)
    setReportBuilderData({
      title: "",
      type: "sales",
      period: "month",
      includeCharts: true,
      includeTables: true,
      includeMetrics: true,
      recipients: ""
    })
  }

  const handleDownloadReport = (report: any) => {
    console.log("Downloading report:", report.id)
    // Here you would typically trigger the download
  }

  const handleViewReport = (report: any) => {
    setSelectedReport(report)
    console.log("Viewing report:", report.id)
  }

  const handleScheduleReport = (report: any) => {
    console.log("Scheduling report:", report.id)
    // Here you would typically schedule the report
  }

  const handleDeleteReport = (reportId: string) => {
    console.log("Deleting report:", reportId)
    // Here you would typically delete the report
  }

  const handleToggleScheduledReport = (reportId: string) => {
    setScheduledReports(prev => 
      prev.map(report => 
        report.id === reportId 
          ? { ...report, status: report.status === "active" ? "inactive" : "active" }
          : report
      )
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Business insights and performance analytics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
          <Button 
            className="bg-[#B89E5A] hover:bg-[#9A8449]"
            onClick={() => setShowReportBuilder(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {(totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Sold</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVehicles}</div>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financing Approved</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFinancing}</div>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Import Services</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalImports}</div>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {customerMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales Chart and Top Vehicles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>Monthly vehicle sales and revenue trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesData.map((month) => (
                <div key={month.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center font-medium">{month.month}</div>
                    <div className="text-sm text-gray-600">
                      {month.vehicles} vehicles • KES {(month.revenue / 1000000).toFixed(1)}M
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{month.financing} financing</span>
                    <span>•</span>
                    <span>{month.imports} imports</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Vehicles */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Vehicles</CardTitle>
            <CardDescription>Best-selling vehicles by revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topVehicles.map((vehicle, index) => (
                <div key={vehicle.make + vehicle.model} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#B89E5A] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{vehicle.make} {vehicle.model}</div>
                      <div className="text-sm text-gray-600">{vehicle.sales} sales</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">KES {(vehicle.revenue / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Generation and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Quick Report Generation</CardTitle>
              <CardDescription>Generate common business reports instantly</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-24 flex-col"
              onClick={() => handleGenerateReport()}
            >
              <BarChart3 className="w-6 h-6 mb-2" />
              <span>Sales Report</span>
              <span className="text-xs text-muted-foreground">Revenue & units sold</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex-col"
              onClick={() => handleGenerateReport()}
            >
              <PieChart className="w-6 h-6 mb-2" />
              <span>Inventory Report</span>
              <span className="text-xs text-muted-foreground">Stock levels & turnover</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex-col"
              onClick={() => handleGenerateReport()}
            >
              <LineChart className="w-6 h-6 mb-2" />
              <span>Financial Report</span>
              <span className="text-xs text-muted-foreground">P&L & cash flow</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-24 flex-col"
              onClick={() => handleGenerateReport()}
            >
              <Activity className="w-6 h-6 mb-2" />
              <span>Performance Report</span>
              <span className="text-xs text-muted-foreground">KPIs & metrics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scheduled Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Automated reports sent to your team</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Schedule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.type} • {report.frequency}</p>
                    </div>
                    <Badge variant={report.status === "active" ? "default" : "secondary"}>
                      {report.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Next: {report.nextRun}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{report.recipients.length} recipients</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant={report.status === "active" ? "outline" : "default"}
                    onClick={() => handleToggleScheduledReport(report.id)}
                  >
                    {report.status === "active" ? "Pause" : "Resume"}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Recently generated and downloaded reports</CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="financing">Financing</SelectItem>
                  <SelectItem value="import">Import</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-lg">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.description}</p>
                    </div>
                    <Badge variant="secondary">{report.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleDownloadReport(report)}
                  >
                    <DownloadIcon className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleViewReport(report)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleScheduleReport(report)}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Schedule
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleDeleteReport(report.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Builder Modal */}
      {showReportBuilder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Create Custom Report</CardTitle>
              <CardDescription>Configure your report settings and content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Report Title</label>
                  <Input
                    value={reportBuilderData.title}
                    onChange={(e) => setReportBuilderData({ ...reportBuilderData, title: e.target.value })}
                    placeholder="Enter report title"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Report Type</label>
                  <Select 
                    value={reportBuilderData.type} 
                    onValueChange={(value) => setReportBuilderData({ ...reportBuilderData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Report</SelectItem>
                      <SelectItem value="inventory">Inventory Report</SelectItem>
                      <SelectItem value="financial">Financial Report</SelectItem>
                      <SelectItem value="performance">Performance Report</SelectItem>
                      <SelectItem value="customer">Customer Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Time Period</label>
                <Select 
                  value={reportBuilderData.period} 
                  onValueChange={(value) => setReportBuilderData({ ...reportBuilderData, period: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Report Content</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="includeCharts"
                      checked={reportBuilderData.includeCharts}
                      onChange={(e) => setReportBuilderData({ ...reportBuilderData, includeCharts: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="includeCharts" className="text-sm">Include Charts & Graphs</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="includeTables"
                      checked={reportBuilderData.includeTables}
                      onChange={(e) => setReportBuilderData({ ...reportBuilderData, includeTables: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="includeTables" className="text-sm">Include Data Tables</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="includeMetrics"
                      checked={reportBuilderData.includeMetrics}
                      onChange={(e) => setReportBuilderData({ ...reportBuilderData, includeMetrics: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="includeMetrics" className="text-sm">Include Key Metrics</label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email Recipients (optional)</label>
                <Input
                  value={reportBuilderData.recipients}
                  onChange={(e) => setReportBuilderData({ ...reportBuilderData, recipients: e.target.value })}
                  placeholder="email1@example.com, email2@example.com"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Separate multiple emails with commas
                </p>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowReportBuilder(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleGenerateReport}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Report Viewer Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedReport.title}</CardTitle>
                  <CardDescription>{selectedReport.description}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setSelectedReport(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Report ID:</span> {selectedReport.id}
                  </div>
                  <div>
                    <span className="font-medium">Type:</span> {selectedReport.type}
                  </div>
                  <div>
                    <span className="font-medium">Generated:</span> {selectedReport.date}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Report Preview</h3>
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">
                      Report preview would be displayed here. This could include charts, tables, and detailed analytics.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 