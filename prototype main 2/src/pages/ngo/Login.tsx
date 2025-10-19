import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Users, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NGOLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = () => {
    toast({ title: "NGO Login Successful", description: "Welcome to NGO Portal" });
    navigate("/ngo/tasks");
  };

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
            NGO Portal Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Organization Email</Label>
            <Input type="email" placeholder="ngo@organization.org" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter password" />
            <p className="text-sm text-muted-foreground mt-1">Demo: any credentials work</p>
          </div>
          <Button onClick={handleLogin} className="w-full" variant="accent">
            Access NGO Dashboard
          </Button>
          <div className="text-center">
            <Link to="/ngo/signup" className="text-sm text-primary hover:underline">
              Register NGO
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NGOLogin;