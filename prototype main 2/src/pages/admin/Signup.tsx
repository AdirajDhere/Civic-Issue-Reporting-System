import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const AdminSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-muted/20 via-background to-primary-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card shadow-glow">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-secondary" />
            Admin Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Full Name</Label>
            <Input placeholder="Administrator name" />
          </div>
          <div>
            <Label>Department</Label>
            <Input placeholder="Municipal Department" />
          </div>
          <div>
            <Label>Official Email</Label>
            <Input type="email" placeholder="admin@department.gov" />
          </div>
          <div>
            <Label>Employee ID</Label>
            <Input placeholder="EMP123456" />
          </div>
          <Button className="w-full" variant="civic">
            Request Admin Access
          </Button>
          <div className="text-center">
            <Link to="/admin/login" className="text-sm text-primary hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSignup;