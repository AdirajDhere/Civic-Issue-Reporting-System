import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Navigation,
  Filter,
  Search,
  Eye,
  ThumbsUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap
} from "lucide-react";

interface NearbyIssue {
  id: number;
  title: string;
  category: string;
  location: string;
  distance: string;
  status: "Pending" | "In Progress" | "Resolved";
  priority: "High" | "Medium" | "Low";
  reportedBy: string;
  timeAgo: string;
  likes: number;
  description: string;
  image?: string;
}

const NearbyIssues = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("distance");

  const mockNearbyIssues: NearbyIssue[] = [
    {
      id: 1,
      title: "Broken Streetlight",
      category: "Street Lighting",
      location: "MG Road, Near Metro Station",
      distance: "0.2 km",
      status: "In Progress",
      priority: "High",
      reportedBy: "Raj Kumar",
      timeAgo: "2 days ago",
      likes: 15,
      description: "Streetlight has been off for 3 days",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Pothole on Main Road",
      category: "Roads & Infrastructure",
      location: "Central Avenue",
      distance: "0.5 km",
      status: "Pending",
      priority: "Medium",
      reportedBy: "Priya Sharma", 
      timeAgo: "1 day ago",
      likes: 23,
      description: "Large pothole causing traffic issues"
    },
    {
      id: 3,
      title: "Garbage Pile Near Park",
      category: "Waste Management",
      location: "Community Park, Sector 15",
      distance: "0.8 km",
      status: "Resolved",
      priority: "Medium",
      reportedBy: "Amit Singh",
      timeAgo: "1 week ago",
      likes: 8,
      description: "Garbage not collected for several days"
    },
    {
      id: 4,
      title: "Water Logging Issue",
      category: "Water & Drainage",
      location: "Railway Underpass",
      distance: "1.2 km",
      status: "In Progress",
      priority: "High",
      reportedBy: "Neha Gupta",
      timeAgo: "3 days ago",
      likes: 31,
      description: "Severe water logging blocking traffic"
    },
    {
      id: 5,
      title: "Broken Park Bench",
      category: "Parks & Environment",
      location: "Children's Park, Sector 18",
      distance: "1.5 km",
      status: "Pending",
      priority: "Low",
      reportedBy: "Ravi Patel",
      timeAgo: "5 days ago",
      likes: 6,
      description: "Wooden bench is broken and unsafe"
    },
    {
      id: 6,
      title: "Traffic Signal Not Working",
      category: "Traffic & Safety",
      location: "Main Chowk Intersection",
      distance: "2.1 km",
      status: "In Progress",
      priority: "High",
      reportedBy: "Sunita Devi",
      timeAgo: "1 day ago",
      likes: 42,
      description: "Traffic signal stuck on red for hours"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "success";
      case "In Progress": return "warning";
      case "Pending": return "destructive";
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

  const filteredIssues = mockNearbyIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || issue.category.toLowerCase().includes(categoryFilter);
    const matchesDistance = distanceFilter === "all" || 
      (distanceFilter === "1km" && parseFloat(issue.distance) <= 1) ||
      (distanceFilter === "2km" && parseFloat(issue.distance) <= 2) ||
      (distanceFilter === "5km" && parseFloat(issue.distance) <= 5);
    
    return matchesSearch && matchesCategory && matchesDistance;
  }).sort((a, b) => {
    switch (sortBy) {
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      case "priority":
        const priorityOrder = { "High": 3, "Medium": 2, "Low": 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      case "likes":
        return b.likes - a.likes;
      case "recent":
        return a.id - b.id; // Assuming higher ID means more recent
      default:
        return 0;
    }
  });

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
            <div className="flex-1">
              <h1 className="text-lg font-bold">Nearby Issues | आस-पास की समस्याएं</h1>
              <p className="text-sm text-primary-foreground/80">Discover and support local civic issues</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Navigation className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Current Location */}
        <Card className="mb-6 bg-gradient-accent text-accent-foreground shadow-glow">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="font-semibold">Current Location | वर्तमान स्थान</div>
                <div className="text-sm opacity-90">Sector 15, Block B, New Delhi</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter & Search | फ़िल्टर और खोजें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search nearby issues..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                  <SelectItem value="waste">Waste Management</SelectItem>
                  <SelectItem value="lighting">Street Lighting</SelectItem>
                  <SelectItem value="water">Water & Drainage</SelectItem>
                  <SelectItem value="parks">Parks & Environment</SelectItem>
                  <SelectItem value="traffic">Traffic & Safety</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={distanceFilter} onValueChange={setDistanceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Distance</SelectItem>
                  <SelectItem value="1km">Within 1 km</SelectItem>
                  <SelectItem value="2km">Within 2 km</SelectItem>
                  <SelectItem value="5km">Within 5 km</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Nearest First</SelectItem>
                  <SelectItem value="priority">High Priority</SelectItem>
                  <SelectItem value="likes">Most Supported</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image */}
                  {issue.image && (
                    <div className="md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{issue.title}</h3>
                          <Badge variant={getStatusColor(issue.status) as any} className="flex items-center gap-1">
                            {getStatusIcon(issue.status)}
                            {issue.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{issue.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {issue.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Navigation className="w-4 h-4" />
                            {issue.distance} away
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {issue.timeAgo}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">Reported by</div>
                        <div className="font-medium text-sm">{issue.reportedBy}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{issue.category}</Badge>
                        <Badge variant={getPriorityColor(issue.priority) as any}>
                          {issue.priority} Priority
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="w-4 h-4" />
                          {issue.likes} support
                        </div>
                        <Link to={`/citizen/issue/${issue.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Issues Found Nearby</h3>
              <p className="text-muted-foreground mb-4">
                No issues match your current search criteria in this area.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/citizen/report">
                  <Button variant="hero">
                    Report First Issue | पहला मुद्दा रिपोर्ट करें
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setDistanceFilter("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Action */}
        <Card className="mt-8 bg-gradient-secondary text-secondary-foreground shadow-glow">
          <CardContent className="p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Found an Issue? | कोई समस्या मिली?</h3>
            <p className="mb-4 opacity-90">Help your community by reporting issues you encounter</p>
            <Link to="/citizen/report">
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                Report New Issue | नया मुद्दा रिपोर्ट करें
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NearbyIssues;