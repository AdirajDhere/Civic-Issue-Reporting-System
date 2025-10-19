import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Shield, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-civic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-muted/20 to-accent-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              🌟 SheharSaaf
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-foreground/80 animate-fade-in">
              AI-Powered Civic Issue Reporting & Resolution Ecosystem
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Empowering citizens, municipalities, and NGOs to create cleaner, safer cities through intelligent reporting and swift resolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/citizen/home">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Smartphone className="w-5 h-5" />
                  Citizen Portal | नागरिक पोर्टल
                </Button>
              </Link>
              <Link to="/admin/dashboard">
                <Button variant="civic" size="xl" className="w-full sm:w-auto">
                  <Shield className="w-5 h-5" />
                  Admin Dashboard | प्रशासन
                </Button>
              </Link>
              <Link to="/ngo/tasks">
                <Button variant="accent" size="xl" className="w-full sm:w-auto">
                  <Users className="w-5 h-5" />
                  NGO Portal | एनजीओ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features | मुख्य विशेषताएं</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of civic engagement with our comprehensive platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                Smart Reporting | स्मार्ट रिपोर्टिंग
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                AI-powered chatbot for easy issue reporting with voice, photo, and location support.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-secondary" />
                Real-time Analytics | रियल-टाइम एनालिटिक्स
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprehensive dashboard with heatmaps, trends, and performance metrics for data-driven decisions.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                Collaborative Resolution | सहयोगी समाधान
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Seamless coordination between citizens, municipal workers, and NGOs for faster issue resolution.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your City?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of citizens making a difference</p>
          <Link to="/citizen/login">
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Get Started Today | आज ही शुरू करें
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
