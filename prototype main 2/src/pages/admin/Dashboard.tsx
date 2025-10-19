import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BarChart3, MapPin, Users, Clock, CheckCircle, AlertTriangle, TrendingUp, Settings, ArrowLeft } from "lucide-react";

const AdminDashboard = () => {
  const stats = {
    totalReports: 1247,
    pending: 89,
    inProgress: 156,
    resolved: 1002,
    avgResolutionTime: "4.2 days"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary-muted/10 to-accent-muted/10">
      <div className="bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">🌟 SheharSaaf Admin</h1>
                <p className="text-secondary-foreground/80">Municipal Dashboard | नगरपालिका डैशबोर्ड</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/admin/analytics">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.totalReports}</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
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
              <div className="text-2xl font-bold text-success">{stats.resolved}</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold text-accent">{stats.avgResolutionTime}</div>
              <div className="text-xs text-muted-foreground">Avg Resolution</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/admin/complaints">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Manage Reports</h3>
                <p className="text-sm text-muted-foreground">View and process citizen reports</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Heat Map</h3>
              <p className="text-sm text-muted-foreground">Issue density visualization</p>
            </CardContent>
          </Card>

          <Link to="/admin/assign">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Assign Tasks</h3>
                <p className="text-sm text-muted-foreground">Manage worker assignments</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/analytics">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">Performance insights</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle>Recent High Priority Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Traffic Signal Down", location: "Main Chowk", priority: "High", status: "Pending" },
                { title: "Water Main Burst", location: "Sector 12", priority: "High", status: "In Progress" },
                { title: "Road Cave-in", location: "Highway Junction", priority: "High", status: "Pending" }
              ].map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{issue.title}</div>
                    <div className="text-sm text-muted-foreground">{issue.location}</div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="destructive">{issue.priority}</Badge>
                    <Badge variant={issue.status === "Pending" ? "destructive" : "warning"}>
                      {issue.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;