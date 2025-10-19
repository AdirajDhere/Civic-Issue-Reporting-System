import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Award, Clock, Users } from "lucide-react";

const NGOMetrics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-muted/10 to-secondary-muted/10">
      <div className="bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/ngo/tasks">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold">Performance Metrics</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
              <div className="text-3xl font-bold text-success">94%</div>
              <p className="text-sm text-muted-foreground">Tasks completed</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Avg Time</h3>
              <div className="text-3xl font-bold text-warning">3.2</div>
              <p className="text-sm text-muted-foreground">Days per task</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Rating</h3>
              <div className="text-3xl font-bold text-primary">4.8/5</div>
              <p className="text-sm text-muted-foreground">Citizen feedback</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Impact</h3>
              <div className="text-3xl font-bold text-secondary">2.5K</div>
              <p className="text-sm text-muted-foreground">Citizens served</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Excellence in Environment", desc: "Top NGO for environmental projects", date: "March 2024" },
                  { title: "Community Champion", desc: "Most citizen appreciation", date: "February 2024" },
                  { title: "Quick Response Award", desc: "Fastest task completion", date: "January 2024" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <Award className="w-5 h-5 text-warning mt-1" />
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                      <div className="text-xs text-muted-foreground">{achievement.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle>Monthly Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { month: "March 2024", completed: 8, pending: 2, rating: "4.9" },
                  { month: "February 2024", completed: 12, pending: 1, rating: "4.8" },
                  { month: "January 2024", completed: 10, pending: 0, rating: "4.7" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{stat.month}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.completed} completed, {stat.pending} pending
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-success">{stat.rating}/5</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
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

export default NGOMetrics;