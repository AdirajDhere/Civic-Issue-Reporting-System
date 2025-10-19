import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, MapPin } from "lucide-react";

const AssignmentPanel = () => {
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
            <h1 className="text-lg font-bold">Assignment Panel</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Available Workers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Rajesh Kumar", dept: "Electrical", location: "Sector 12", status: "Available" },
                  { name: "Amit Singh", dept: "Roads", location: "Central Area", status: "Busy" },
                  { name: "Priya Sharma", dept: "Sanitation", location: "Sector 15", status: "Available" }
                ].map((worker, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{worker.name}</div>
                      <div className="text-sm text-muted-foreground">{worker.dept} • {worker.location}</div>
                    </div>
                    <div className="text-sm text-success">{worker.status}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Assign Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Select Issue</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose issue to assign" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Broken Streetlight - MG Road</SelectItem>
                    <SelectItem value="2">Pothole - Central Avenue</SelectItem>
                    <SelectItem value="3">Garbage Collection - Sector 15</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Assign to Worker</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select worker" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raj">Rajesh Kumar - Electrical</SelectItem>
                    <SelectItem value="amit">Amit Singh - Roads</SelectItem>
                    <SelectItem value="priya">Priya Sharma - Sanitation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Priority Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Set priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="civic">
                Assign Task
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPanel;