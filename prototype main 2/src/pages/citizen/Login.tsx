import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Smartphone, ArrowLeft, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CitizenLogin = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSendOtp = () => {
    if (loginMethod === "phone" && phoneNumber.length >= 10) {
      setShowOtp(true);
      toast({
        title: "OTP Sent | ओटीपी भेजा गया",
        description: `OTP sent to ${phoneNumber}`,
      });
    } else if (loginMethod === "email" && email.includes("@")) {
      setShowOtp(true);
      toast({
        title: "OTP Sent | ओटीपी भेजा गया",
        description: `OTP sent to ${email}`,
      });
    }
  };

  const handleLogin = () => {
    if (otp === "1234") {
      toast({
        title: "Login Successful | लॉगिन सफल",
        description: "Welcome to SheharSaaf!",
      });
      navigate("/citizen/home");
    } else {
      toast({
        title: "Invalid OTP | गलत ओटीपी",
        description: "Please enter correct OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-muted/20 via-background to-accent-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold gradient-text mb-2">🌟 SheharSaaf</h1>
          <p className="text-muted-foreground">Citizen Login | नागरिक लॉगिन</p>
        </div>

        <Card className="bg-gradient-card shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              Citizen Portal
            </CardTitle>
            <CardDescription>
              Login to report and track civic issues | नागरिक मुद्दों की रिपोर्ट करें
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={loginMethod === "phone" ? "default" : "outline"}
                onClick={() => setLoginMethod("phone")}
                className="w-full"
              >
                <Phone className="w-4 h-4" />
                Phone
              </Button>
              <Button
                variant={loginMethod === "email" ? "default" : "outline"}
                onClick={() => setLoginMethod("email")}
                className="w-full"
              >
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </div>

            {!showOtp ? (
              <div className="space-y-4">
                {loginMethod === "phone" ? (
                  <div>
                    <Label htmlFor="phone">Phone Number | फोन नंबर</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="email">Email Address | ईमेल पता</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="citizen@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}
                <Button onClick={handleSendOtp} className="w-full" variant="hero">
                  Send OTP | ओटीपी भेजें
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="otp">Enter OTP | ओटीपी दर्ज करें</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="1234"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Demo OTP: 1234</p>
                </div>
                <Button onClick={handleLogin} className="w-full" variant="hero">
                  Login | लॉगिन
                </Button>
                <Button
                  onClick={() => setShowOtp(false)}
                  variant="ghost"
                  className="w-full"
                >
                  Back | वापस
                </Button>
              </div>
            )}

            <div className="text-center">
              <span className="text-sm text-muted-foreground">Don't have an account? | खाता नहीं है? </span>
              <Link to="/citizen/signup" className="text-sm text-primary hover:underline">
                Sign Up | साइन अप करें
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenLogin;