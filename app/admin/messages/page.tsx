"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Mail, 
  Send, 
  FileText, 
  Trash2, 
  Archive, 
  Star, 
  Reply, 
  Forward, 
  Plus,
  Filter,
  MoreHorizontal,
  User,
  Calendar,
  Clock
} from "lucide-react";

// Mock data for messages
const mockMessages = {
  inbox: [
    {
      id: 1,
      from: "john.doe@email.com",
      fromName: "John Doe",
      subject: "Inquiry about BMW X5",
      preview: "Hi, I'm interested in the BMW X5 you have listed. Could you provide more details about...",
      content: "Hi, I'm interested in the BMW X5 you have listed. Could you provide more details about the vehicle's history, maintenance records, and if there are any additional photos available? Also, what's the best price you can offer?",
      date: "2024-01-15T10:30:00Z",
      isRead: false,
      isStarred: true,
      isArchived: false,
      priority: "high",
      category: "inquiry"
    },
    {
      id: 2,
      from: "sarah.wilson@email.com",
      fromName: "Sarah Wilson",
      subject: "Car Selling Request Follow-up",
      preview: "Thank you for your response regarding my car selling request. I would like to schedule...",
      content: "Thank you for your response regarding my car selling request. I would like to schedule an appointment for the inspection. Would Tuesday afternoon work for you? Also, what documents should I bring with me?",
      date: "2024-01-14T15:45:00Z",
      isRead: true,
      isStarred: false,
      isArchived: false,
      priority: "normal",
      category: "follow-up"
    },
    {
      id: 3,
      from: "mike.chen@email.com",
      fromName: "Mike Chen",
      subject: "Import Service Question",
      preview: "I'm looking to import a vehicle from Japan. Can you help me understand the process...",
      content: "I'm looking to import a vehicle from Japan. Can you help me understand the process and what documents I'll need? Also, what are the typical costs involved?",
      date: "2024-01-13T09:20:00Z",
      isRead: true,
      isStarred: false,
      isArchived: false,
      priority: "normal",
      category: "import"
    },
    {
      id: 4,
      from: "lisa.brown@email.com",
      fromName: "Lisa Brown",
      subject: "Financing Application Status",
      preview: "I submitted a financing application last week. Could you please provide an update...",
      content: "I submitted a financing application last week. Could you please provide an update on the status? I'm eager to proceed with the purchase.",
      date: "2024-01-12T14:15:00Z",
      isRead: false,
      isStarred: false,
      isArchived: false,
      priority: "high",
      category: "financing"
    }
  ],
  sent: [
    {
      id: 5,
      to: "john.doe@email.com",
      toName: "John Doe",
      subject: "Re: Inquiry about BMW X5",
      preview: "Thank you for your interest in our BMW X5. Here are the details you requested...",
      content: "Thank you for your interest in our BMW X5. Here are the details you requested:\n\n- Full service history available\n- Single owner\n- No accidents\n- All maintenance records included\n\nI can offer it for $45,000. Would you like to schedule a test drive?",
      date: "2024-01-15T11:00:00Z",
      isRead: true,
      category: "response"
    },
    {
      id: 6,
      to: "sarah.wilson@email.com",
      toName: "Sarah Wilson",
      subject: "Re: Car Selling Request Follow-up",
      preview: "Great! Tuesday afternoon works perfectly. Please bring the following documents...",
      content: "Great! Tuesday afternoon works perfectly. Please bring the following documents:\n\n- Vehicle registration\n- Insurance certificate\n- Service history\n- Any receipts for recent repairs\n\nWe'll meet at our showroom at 2 PM.",
      date: "2024-01-14T16:00:00Z",
      isRead: false,
      category: "appointment"
    }
  ],
  drafts: [
    {
      id: 7,
      to: "mike.chen@email.com",
      toName: "Mike Chen",
      subject: "Re: Import Service Question",
      preview: "Thank you for your inquiry about our import services. Here's a comprehensive overview...",
      content: "Thank you for your inquiry about our import services. Here's a comprehensive overview of the process:\n\n1. Vehicle Selection\n2. Documentation Preparation\n3. Shipping Arrangements\n4. Customs Clearance\n5. Delivery\n\nTypical costs range from $3,000 to $8,000 depending on the vehicle and shipping method.",
      date: "2024-01-13T10:00:00Z",
      category: "draft"
    }
  ]
};

const messageCategories = [
  { value: "all", label: "All Messages" },
  { value: "inquiry", label: "Inquiries" },
  { value: "follow-up", label: "Follow-ups" },
  { value: "import", label: "Import Services" },
  { value: "financing", label: "Financing" },
  { value: "appointment", label: "Appointments" },
  { value: "response", label: "Responses" }
];

const priorityOptions = [
  { value: "all", label: "All Priorities" },
  { value: "high", label: "High Priority" },
  { value: "normal", label: "Normal Priority" },
  { value: "low", label: "Low Priority" }
];

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [showCompose, setShowCompose] = useState(false);
  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    content: ""
  });
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);

  const filteredMessages = useMemo(() => {
    let messages = mockMessages[activeTab as keyof typeof mockMessages] || [];
    
    if (searchQuery) {
      messages = messages.filter(msg => 
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (msg.fromName || msg.toName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.preview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      messages = messages.filter(msg => msg.category === categoryFilter);
    }

    if (priorityFilter !== "all" && activeTab === "inbox") {
      messages = messages.filter(msg => msg.priority === priorityFilter);
    }

    return messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeTab, searchQuery, categoryFilter, priorityFilter]);

  const handleMessageSelect = (message: any) => {
    setSelectedMessage(message);
  };

  const handleComposeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message
    console.log("Sending message:", composeData);
    setShowCompose(false);
    setComposeData({ to: "", subject: "", content: "" });
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on messages:`, selectedMessages);
    setSelectedMessages([]);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "normal": return "bg-blue-100 text-blue-800";
      case "low": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Manage customer communications and inquiries
          </p>
        </div>
        <Button onClick={() => setShowCompose(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Compose Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockMessages.inbox.length + mockMessages.sent.length}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockMessages.inbox.filter(m => !m.isRead).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Starred</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockMessages.inbox.filter(m => m.isStarred).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Important messages
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockMessages.drafts.length}
            </div>
            <p className="text-xs text-muted-foreground">
              Pending completion
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Message List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Messages</CardTitle>
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
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {messageCategories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {activeTab === "inbox" && (
                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorityOptions.map(priority => (
                          <SelectItem key={priority.value} value={priority.value}>
                            {priority.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="inbox">Inbox</TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="mt-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    {filteredMessages.length === 0 ? (
                      <div className="p-6 text-center text-muted-foreground">
                        No messages found
                      </div>
                    ) : (
                      <div className="divide-y">
                        {filteredMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                              selectedMessage?.id === message.id ? "bg-muted" : ""
                            }`}
                            onClick={() => handleMessageSelect(message)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium truncate">
                                    {message.fromName || message.toName}
                                  </span>
                                  {message.isStarred && (
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  )}
                                  {!message.isRead && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  )}
                                  {message.priority === "high" && (
                                    <Badge variant="destructive" className="text-xs">
                                      High
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm font-medium truncate">
                                  {message.subject}
                                </p>
                                <p className="text-sm text-muted-foreground truncate">
                                  {message.preview}
                                </p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-xs text-muted-foreground">
                                    {formatDate(message.date)}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {message.category}
                                  </Badge>
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

        {/* Message Detail */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Message Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedMessage ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{selectedMessage.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {activeTab === "inbox" ? `From: ${selectedMessage.fromName}` : `To: ${selectedMessage.toName}`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Reply className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Forward className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedMessage.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(selectedMessage.date).toLocaleTimeString()}</span>
                    </div>
                    <Badge variant="outline">{selectedMessage.category}</Badge>
                    {selectedMessage.priority && (
                      <Badge className={getPriorityColor(selectedMessage.priority)}>
                        {selectedMessage.priority} Priority
                      </Badge>
                    )}
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap">{selectedMessage.content}</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-2">
                    <Button>
                      <Reply className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                    <Button variant="outline">
                      <Forward className="mr-2 h-4 w-4" />
                      Forward
                    </Button>
                    <Button variant="outline">
                      <Archive className="mr-2 h-4 w-4" />
                      Archive
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a message to view its details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Compose Message Dialog */}
      {showCompose && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4">
            <CardHeader>
              <CardTitle>Compose Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleComposeSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">To</label>
                  <Input
                    value={composeData.to}
                    onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                    placeholder="recipient@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    value={composeData.subject}
                    onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                    placeholder="Message subject"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    value={composeData.content}
                    onChange={(e) => setComposeData({ ...composeData, content: e.target.value })}
                    placeholder="Type your message here..."
                    rows={8}
                    required
                  />
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowCompose(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 