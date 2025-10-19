import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, MapPin } from "lucide-react";

const AssignedTasks = () => {
  const tasks = [
    { id: 1, title: "Park Cleanup Drive", location: "Community Park", status: "In Progress", priority: "Medium", deadline: "2024-03-25" },
    { id: 2, title: "Tree Plantation", location: "School Area", status: "Pending", priority: "Low", deadline: "2024-03-30" },
    { id: 3, title: "Awareness Campaign", location: "Market Area", status: "Completed", priority: "High", deadline: "2024-03-20" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-muted/10 to-secondary-muted/10">
      <div className="bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/ngo/login">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-bold">NGO Task Dashboard</h1>
              <p className="text-sm text-accent-foreground/80">Green Earth Foundation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">8</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">5</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle>Assigned Tasks | सौंपे गए कार्य</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{task.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {task.location} • Deadline: {task.deadline}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={task.status === "Completed" ? "success" : task.status === "Pending" ? "destructive" : "warning"}>
                      {task.status === "Completed" ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                      {task.status}
                    </Badge>
                    <Link to={`/ngo/update/${task.id}`}>
                      <Button variant="accent" size="sm">
                        Update Status
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Link to="/ngo/metrics">
          <Button className="mt-6" variant="outline">
            View Performance Metrics
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AssignedTasks;