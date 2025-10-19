import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Trophy, 
  Star,
  Settings,
  Bell,
  MapPin,
  Phone,
  Mail,
  Camera,
  Edit,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    reports: true,
    community: false,
    updates: true
  });
  const { toast } = useToast();

  const userProfile = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    address: "Sector 15, Block B, New Delhi - 110001",
    joinDate: "January 2024",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
    stats: {
      totalReports: 12,
      resolvedIssues: 8,
      points: 156,
      rank: "Gold Citizen",
      impact: "93%"
    },
    badges: [
      { name: "Early Reporter", icon: "⚡", description: "First to report 5 issues" },
      { name: "Community Champion", icon: "🏆", description: "Top 10% citizen contributor" },
      { name: "Problem Solver", icon: "🔧", description: "80% of reports resolved" },
      { name: "Civic Hero", icon: "🌟", description: "100+ community impact points" }
    ],
    recentAchievements: [
      { title: "Streetlight Issue Resolved", points: 15, date: "2 days ago" },
      { title: "Community Appreciation", points: 10, date: "1 week ago" },
      { title: "Quick Response Award", points: 20, date: "2 weeks ago" }
    ]
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated | प्रोफ़ाइल अपडेट की गई",
      description: "Your profile information has been saved successfully"
    });
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
    toast({
      title: "Notification settings updated",
      description: `${key} notifications ${value ? 'enabled' : 'disabled'}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-muted/10 to-accent-muted/10">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/citizen/home">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg font-bold">My Profile | मेरी प्रोफ़ाइल</h1>
              <p className="text-sm text-primary-foreground/80">Manage your account and achievements</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="text-white hover:bg-white/10"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-6 shadow-glow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-primary/20"
                />
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-warning" />
                  <span className="font-semibold text-warning">{userProfile.stats.rank}</span>
                </div>
                <p className="text-muted-foreground">Member since {userProfile.joinDate}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{userProfile.stats.points}</div>
                  <div className="text-sm text-muted-foreground">Points</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">{userProfile.stats.impact}</div>
                  <div className="text-sm text-muted-foreground">Impact</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userProfile.stats.totalReports}</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{userProfile.stats.resolvedIssues}</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">{userProfile.badges.length}</div>
              <div className="text-sm text-muted-foreground">Badges</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">#{Math.floor(Math.random() * 100) + 1}</div>
              <div className="text-sm text-muted-foreground">City Rank</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information | प्रोफ़ाइल जानकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name | पूरा नाम</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email | ईमेल</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" className="pl-10" defaultValue={userProfile.email} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone | फोन</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" className="pl-10" defaultValue={userProfile.phone} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address | पता</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="address" className="pl-10" defaultValue={userProfile.address} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} variant="hero" size="sm">
                      Save Changes | सहेजें
                    </Button>
                    <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
                      Cancel | रद्द करें
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{userProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{userProfile.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <span className="text-sm">{userProfile.address}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings | अधिसूचना सेटिंग
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Report Updates</div>
                  <div className="text-sm text-muted-foreground">Get notified about your report status</div>
                </div>
                <Switch
                  checked={notifications.reports}
                  onCheckedChange={(checked) => handleNotificationChange('reports', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Community Activity</div>
                  <div className="text-sm text-muted-foreground">Comments and likes on your reports</div>
                </div>
                <Switch
                  checked={notifications.community}
                  onCheckedChange={(checked) => handleNotificationChange('community', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">System Updates</div>
                  <div className="text-sm text-muted-foreground">App updates and important announcements</div>
                </div>
                <Switch
                  checked={notifications.updates}
                  onCheckedChange={(checked) => handleNotificationChange('updates', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges & Achievements */}
        <Card className="mt-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Badges & Achievements | बैज और उपलब्धियां
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {userProfile.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl">{badge.icon}</div>
                  <div>
                    <div className="font-medium">{badge.name}</div>
                    <div className="text-sm text-muted-foreground">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-3">Recent Achievements | हाल की उपलब्धियां</h4>
              <div className="space-y-2">
                {userProfile.recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <div>
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.date}</div>
                      </div>
                    </div>
                    <Badge variant="outline">+{achievement.points} pts</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mt-6 bg-gradient-secondary text-secondary-foreground shadow-glow">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Keep Making an Impact! | प्रभाव बनाते रहें!</h3>
            <p className="mb-4 opacity-90">Your contributions are making the city better every day</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/citizen/report">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                  Report New Issue | नया मुद्दा रिपोर्ट करें
                </Button>
              </Link>
              <Link to="/citizen/nearby">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                  Find Issues Nearby | आस-पास की समस्याएं खोजें
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;