import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Eye,
  TrendingUp
} from "lucide-react";

interface Report {
  id: number;
  title: string;
  category: string;
  location: string;
  status: "Pending" | "In Progress" | "Resolved" | "Rejected";
  priority: "High" | "Medium" | "Low";
  date: string;
  description: string;
  reportId: string;
  likes: number;
}

const RecentReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const mockReports: Report[] = [
    {
      id: 1,
      title: "Broken Streetlight on MG Road",
      category: "Street Lighting",
      location: "MG Road, Sector 15",
      status: "In Progress",
      priority: "High",
      date: "2 days ago",
      description: "Streetlight has been flickering and went off completely last night",
      reportId: "SHR1234",
      likes: 15
    },
    {
      id: 2,
      title: "Large Pothole on Central Avenue",
      category: "Roads & Infrastructure", 
      location: "Central Avenue, Near Metro",
      status: "Resolved",
      priority: "Medium",
      date: "1 week ago",
      description: "Deep pothole causing vehicle damage and traffic issues",
      reportId: "SHR1235",
      likes: 23
    },
    {
      id: 3,
      title: "Garbage Not Collected for 3 Days",
      category: "Waste Management",
      location: "Sector 15, Block B",
      status: "Pending",
      priority: "Medium",
      date: "3 days ago",
      description: "Municipal garbage truck hasn't arrived in our area",
      reportId: "SHR1236",
      likes: 8
    },
    {
      id: 4,
      title: "Water Logging in Underpass",
      category: "Water & Drainage",
      location: "Railway Underpass, Sector 12",
      status: "In Progress",
      priority: "High",
      date: "5 days ago",
      description: "Heavy water logging making underpass unusable",
      reportId: "SHR1237",
      likes: 31
    },
    {
      id: 5,
      title: "Broken Swing in Children's Park",
      category: "Parks & Environment",
      location: "Community Park, Sector 18",
      status: "Resolved",
      priority: "Low",
      date: "2 weeks ago",
      description: "Swing chain broken, safety hazard for children",
      reportId: "SHR1238",
      likes: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "success";
      case "In Progress": return "warning";
      case "Pending": return "destructive";
      case "Rejected": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return <CheckCircle className="w-4 h-4" />;
      case "In Progress": return <Clock className="w-4 h-4" />;
      case "Pending": return <AlertCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter;
    const matchesCategory = categoryFilter === "all" || report.category.toLowerCase().includes(categoryFilter);
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStats = () => {
    const total = mockReports.length;
    const resolved = mockReports.filter(r => r.status === "Resolved").length;
    const inProgress = mockReports.filter(r => r.status === "In Progress").length;
    const pending = mockReports.filter(r => r.status === "Pending").length;
    
    return { total, resolved, inProgress, pending };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-muted/10 to-accent-muted/10">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/citizen/home">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-bold">My Reports | मेरी रिपोर्ट्स</h1>
              <p className="text-sm text-primary-foreground/80">Track your submitted issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{stats.resolved}</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter & Search | फ़िल्टर और खोजें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reports... | रिपोर्ट खोजें..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status | सभी स्थिति</SelectItem>
                  <SelectItem value="pending">Pending | लंबित</SelectItem>
                  <SelectItem value="in progress">In Progress | प्रगति में</SelectItem>
                  <SelectItem value="resolved">Resolved | हल</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories | सभी श्रेणियां</SelectItem>
                  <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                  <SelectItem value="waste">Waste Management</SelectItem>
                  <SelectItem value="lighting">Street Lighting</SelectItem>
                  <SelectItem value="water">Water & Drainage</SelectItem>
                  <SelectItem value="parks">Parks & Environment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <Card key={report.id} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{report.title}</h3>
                          <Badge variant={getStatusColor(report.status) as any} className="flex items-center gap-1">
                            {getStatusIcon(report.status)}
                            {report.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{report.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {report.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {report.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {report.likes} citizens support
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{report.category}</Badge>
                      <Badge variant={getPriorityColor(report.priority) as any}>
                        {report.priority} Priority
                      </Badge>
                      <Badge variant="secondary">#{report.reportId}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link to={`/citizen/issue/${report.id}`}>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Reports Found</h3>
              <p className="text-muted-foreground mb-4">
                No reports match your current search criteria.
              </p>
              <Link to="/citizen/report">
                <Button variant="hero">
                  Create Your First Report | पहली रिपोर्ट बनाएं
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Quick Action */}
        <div className="mt-8 text-center">
          <Link to="/citizen/report">
            <Button variant="hero" size="lg">
              Report New Issue | नया मुद्दा रिपोर्ट करें
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentReports;