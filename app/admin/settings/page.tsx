"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Settings, User, Bell, Shield, Database, Globe, Mail, CreditCard, Save, RefreshCw, Eye, EyeOff, Key, Users, FileText, Palette, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false
  })

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: "30",
    passwordExpiry: "90"
  })

  const [company, setCompany] = useState({
    name: "Nairobi Prime Motors",
    email: "info@nairobiprimemotors.com",
    phone: "+254 700 000 000",
    address: "Westlands, Nairobi, Kenya",
    website: "www.nairobiprimemotors.com",
    description: "Premium luxury car dealership in Nairobi"
  })

  const [display, setDisplay] = useState({
    theme: "light",
    language: "en",
    currency: "KES",
    timezone: "Africa/Nairobi"
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage system configuration and preferences</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button className="bg-[#B89E5A] hover:bg-[#9A8449]">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="company" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Company</span>
          </TabsTrigger>
          <TabsTrigger value="display" className="flex items-center space-x-2">
            <Palette className="w-4 h-4" />
            <span>Display</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center space-x-2">
            <Database className="w-4 h-4" />
            <span>Advanced</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic system configuration and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="admin-name">Admin Name</Label>
                  <Input id="admin-name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" defaultValue="admin@nairobiprimemotors.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="Africa/Nairobi">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Nairobi">Africa/Nairobi (GMT+3)</SelectItem>
                      <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                      <SelectItem value="America/New_York">America/New_York (GMT-5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="DD/MM/YYYY">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">Receive promotional emails and updates</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                  />
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Select value={security.sessionTimeout} onValueChange={(value) => setSecurity({ ...security, sessionTimeout: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                    <Select value={security.passwordExpiry} onValueChange={(value) => setSecurity({ ...security, passwordExpiry: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password Change</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <div className="relative">
                        <Input id="current-password" type="password" />
                        <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <div className="relative">
                        <Input id="new-password" type="password" />
                        <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button>
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Company Settings */}
        <TabsContent value="company" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input 
                    id="company-name" 
                    value={company.name}
                    onChange={(e) => setCompany({ ...company, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Company Email</Label>
                  <Input 
                    id="company-email" 
                    type="email" 
                    value={company.email}
                    onChange={(e) => setCompany({ ...company, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Company Phone</Label>
                  <Input 
                    id="company-phone" 
                    value={company.phone}
                    onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Website</Label>
                  <Input 
                    id="company-website" 
                    value={company.website}
                    onChange={(e) => setCompany({ ...company, website: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Input 
                    id="company-address" 
                    value={company.address}
                    onChange={(e) => setCompany({ ...company, address: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="company-description">Company Description</Label>
                  <Textarea 
                    id="company-description" 
                    rows={4}
                    value={company.description}
                    onChange={(e) => setCompany({ ...company, description: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Display Settings */}
        <TabsContent value="display" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>Customize the appearance and display preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={display.theme} onValueChange={(value) => setDisplay({ ...display, theme: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={display.language} onValueChange={(value) => setDisplay({ ...display, language: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="sw">Swahili</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={display.currency} onValueChange={(value) => setDisplay({ ...display, currency: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="KES">Kenyan Shilling (KES)</SelectItem>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={display.timezone} onValueChange={(value) => setDisplay({ ...display, timezone: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Nairobi">Africa/Nairobi</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">America/New_York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>System configuration and maintenance options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Debug Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable debug logging for troubleshooting</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto Backup</Label>
                    <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline">
                      <Database className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                    <Button variant="outline">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Clear Cache
                    </Button>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Reset Settings
                    </Button>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      <Users className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 