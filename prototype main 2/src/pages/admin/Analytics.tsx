import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, Clock, MapPin } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary-muted/10 to-accent-muted/10">
      <div className="bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold">Analytics & Reports</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resolution Rate</h3>
              <div className="text-3xl font-bold text-success">87%</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Avg Response</h3>
              <div className="text-3xl font-bold text-warning">2.4h</div>
              <p className="text-sm text-muted-foreground">Response time</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Satisfaction</h3>
              <div className="text-3xl font-bold text-accent">4.6/5</div>
              <p className="text-sm text-muted-foreground">Citizen rating</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hotspots</h3>
              <div className="text-3xl font-bold text-secondary">12</div>
              <p className="text-sm text-muted-foreground">Active areas</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { dept: "Electrical", resolved: 142, pending: 8, rate: "94%" },
                  { dept: "Roads", resolved: 89, pending: 15, rate: "86%" },
                  { dept: "Sanitation", resolved: 67, pending: 12, rate: "85%" },
                  { dept: "Water", resolved: 45, pending: 5, rate: "90%" }
                ].map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{dept.dept}</div>
                      <div className="text-sm text-muted-foreground">
                        {dept.resolved} resolved, {dept.pending} pending
                      </div>
                    </div>
                    <div className="text-lg font-bold text-success">{dept.rate}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle>Issue Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: "Street Lighting", count: 156, percent: "32%" },
                  { category: "Roads", count: 124, percent: "26%" },
                  { category: "Waste Management", count: 89, percent: "18%" },
                  { category: "Water & Drainage", count: 67, percent: "14%" },
                  { category: "Others", count: 45, percent: "10%" }
                ].map((cat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{cat.category}</div>
                      <div className="text-sm text-muted-foreground">{cat.count} reports</div>
                    </div>
                    <div className="text-lg font-bold">{cat.percent}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;