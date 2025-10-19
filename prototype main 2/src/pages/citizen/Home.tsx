import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Camera, 
  MapPin, 
  Clock, 
  User, 
  Trophy,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Users,
  ArrowLeft
} from "lucide-react";

const CitizenHome = () => {
  const mockStats = {
    reportedIssues: 12,
    resolvedIssues: 8,
    points: 156,
    rank: "Gold Citizen"
  };

  const recentReports = [
    { id: 1, title: "Broken Streetlight", location: "MG Road", status: "In Progress", date: "2 days ago" },
    { id: 2, title: "Pothole on Main Street", location: "Central Avenue", status: "Resolved", date: "1 week ago" },
    { id: 3, title: "Garbage not collected", location: "Sector 15", status: "Pending", date: "3 days ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "success";
      case "In Progress": return "warning";
      default: return "destructive";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return <CheckCircle className="w-4 h-4" />;
      case "In Progress": return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-muted/10 to-accent-muted/10">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">🌟 SheharSaaf</h1>
                <p className="text-primary-foreground/80">Welcome, Citizen | नागरिक स्वागत</p>
              </div>
            </div>
            <Link to="/citizen/profile">
              <Button variant="outline" size="icon" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{mockStats.reportedIssues}</div>
              <div className="text-sm text-muted-foreground">Reported | रिपोर्ट</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{mockStats.resolvedIssues}</div>
              <div className="text-sm text-muted-foreground">Resolved | समाधान</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">{mockStats.points}</div>
              <div className="text-sm text-muted-foreground">Points | अंक</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 text-warning mx-auto mb-1" />
              <div className="text-sm font-medium">{mockStats.rank}</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 shadow-glow">
          <CardHeader>
            <CardTitle>Quick Actions | त्वरित कार्य</CardTitle>
            <CardDescription>Report or track civic issues easily</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/citizen/chatbot">
                <Button variant="hero" className="w-full h-20 flex-col gap-2">
                  <MessageSquare className="w-6 h-6" />
                  AI Assistant | AI सहायक
                </Button>
              </Link>
              <Link to="/citizen/report">
                <Button variant="civic" className="w-full h-20 flex-col gap-2">
                  <Camera className="w-6 h-6" />
                  Report Issue | मुद्दा रिपोर्ट करें
                </Button>
              </Link>
              <Link to="/citizen/nearby">
                <Button variant="accent" className="w-full h-20 flex-col gap-2">
                  <MapPin className="w-6 h-6" />
                  Nearby Issues | आस-पास की समस्याएं
                </Button>
              </Link>
              <Link to="/citizen/reports">
                <Button variant="outline" className="w-full h-20 flex-col gap-2">
                  <TrendingUp className="w-6 h-6" />
                  My Reports | मेरी रिपोर्ट
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Reports | हाल की रिपोर्ट</CardTitle>
                <CardDescription>Track your submitted issues</CardDescription>
              </div>
              <Link to="/citizen/reports">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <Link key={report.id} to={`/citizen/issue/${report.id}`}>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(report.status)}
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {report.location} • {report.date}
                        </div>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(report.status) as any}>
                      {report.status}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Section */}
        <Card className="mt-8 bg-gradient-secondary text-secondary-foreground shadow-glow">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Join the Community | समुदाय में शामिल हों</h3>
            <p className="mb-4 opacity-90">Connect with other citizens making a difference</p>
            <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
              Explore Community
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenHome;