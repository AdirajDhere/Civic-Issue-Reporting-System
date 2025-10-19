import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Smartphone, ArrowLeft, User, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CitizenSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    otp: ""
  });
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSendOtp = () => {
    if (formData.name && formData.phone && formData.email) {
      setShowOtp(true);
      toast({
        title: "OTP Sent | ओटीपी भेजा गया",
        description: `OTP sent to ${formData.phone}`,
      });
    } else {
      toast({
        title: "Please fill all required fields | सभी आवश्यक फ़ील्ड भरें",
        description: "Name, phone, and email are required",
        variant: "destructive",
      });
    }
  };

  const handleSignup = () => {
    if (formData.otp === "1234") {
      toast({
        title: "Account Created | खाता बनाया गया",
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
          <p className="text-muted-foreground">Create Account | खाता बनाएं</p>
        </div>

        <Card className="bg-gradient-card shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              Citizen Signup
            </CardTitle>
            <CardDescription>
              Join SheharSaaf community | SheharSaaf समुदाय में शामिल हों
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showOtp ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name | पूरा नाम *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number | फोन नंबर *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address | ईमेल पता *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address | पता</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="Your address"
                      className="pl-10"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City | शहर</Label>
                  <Input
                    id="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>

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
                    value={formData.otp}
                    onChange={(e) => setFormData({...formData, otp: e.target.value})}
                    maxLength={4}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Demo OTP: 1234</p>
                </div>
                <Button onClick={handleSignup} className="w-full" variant="hero">
                  Create Account | खाता बनाएं
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
              <span className="text-sm text-muted-foreground">Already have an account? | पहले से खाता है? </span>
              <Link to="/citizen/login" className="text-sm text-primary hover:underline">
                Login | लॉगिन करें
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenSignup;