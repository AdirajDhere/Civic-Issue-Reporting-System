import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Users, ArrowLeft } from "lucide-react";

const NGOSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-muted/20 via-background to-secondary-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card shadow-glow">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <CardTitle className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            NGO Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Organization Name</Label>
            <Input placeholder="NGO Name" />
          </div>
          <div>
            <Label>Registration Number</Label>
            <Input placeholder="Govt. Registration ID" />
          </div>
          <div>
            <Label>Contact Email</Label>
            <Input type="email" placeholder="contact@ngo.org" />
          </div>
          <div>
            <Label>Service Areas</Label>
            <Input placeholder="e.g., Environment, Education" />
          </div>
          <Button className="w-full" variant="accent">
            Submit for Verification
          </Button>
          <div className="text-center">
            <Link to="/ngo/login" className="text-sm text-primary hover:underline">
              Already registered? Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NGOSignup;