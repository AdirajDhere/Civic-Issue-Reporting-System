import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, UserCheck } from "lucide-react";

const ComplaintManagement = () => {
  const complaints = [
    { id: 1, title: "Broken Streetlight", location: "MG Road", status: "Pending", priority: "High", date: "2024-03-20" },
    { id: 2, title: "Pothole Issue", location: "Central Ave", status: "In Progress", priority: "Medium", date: "2024-03-19" },
    { id: 3, title: "Garbage Collection", location: "Sector 15", status: "Resolved", priority: "Low", date: "2024-03-18" }
  ];

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
            <h1 className="text-lg font-bold">Complaint Management</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle>All Complaints | सभी शिकायतें</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <div key={complaint.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{complaint.title}</h3>
                    <p className="text-sm text-muted-foreground">{complaint.location} • {complaint.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={complaint.status === "Resolved" ? "success" : complaint.status === "Pending" ? "destructive" : "warning"}>
                      {complaint.status}
                    </Badge>
                    <Link to={`/admin/issue/${complaint.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Link to="/admin/assign">
                      <Button variant="civic" size="sm">
                        <UserCheck className="w-4 h-4 mr-1" />
                        Assign
                      </Button>
                    </Link>
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

export default ComplaintManagement;