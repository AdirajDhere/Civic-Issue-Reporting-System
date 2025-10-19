import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = () => {
    if (credentials.email === "admin@shehar.gov" && credentials.password === "admin123") {
      toast({ title: "Admin Login Successful", description: "Welcome to Admin Dashboard" });
      navigate("/admin/dashboard");
    } else {
      toast({ title: "Invalid Credentials", description: "Please check your login details", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-muted/20 via-background to-primary-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold gradient-text mb-2">🌟 SheharSaaf</h1>
          <p className="text-muted-foreground">Admin Portal | प्रशासक पोर्टल</p>
        </div>

        <Card className="bg-gradient-card shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              Administrator Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@shehar.gov"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              />
              <p className="text-sm text-muted-foreground mt-1">Demo: admin@shehar.gov / admin123</p>
            </div>
            <Button onClick={handleLogin} className="w-full" variant="civic">
              Login to Dashboard
            </Button>
            <div className="text-center">
              <Link to="/admin/signup" className="text-sm text-primary hover:underline">
                Create Admin Account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;