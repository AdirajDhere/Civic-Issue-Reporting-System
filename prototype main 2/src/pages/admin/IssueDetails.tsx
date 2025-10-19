import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, User, Phone } from "lucide-react";

const AdminIssueDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary-muted/10 to-accent-muted/10">
      <div className="bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/admin/complaints">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold">Issue Details #SHR1234</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Broken Streetlight on MG Road
              <Badge variant="destructive">High Priority</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">Streetlight has been off for 3 days causing safety concerns.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Location Details</h3>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  MG Road, Sector 15, Near Metro Station
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Reporter Information</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Raj Kumar
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/admin/assign">
                <Button variant="civic">Assign to Worker</Button>
              </Link>
              <Button variant="outline">Update Status</Button>
              <Button variant="outline">Contact Reporter</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminIssueDetails;