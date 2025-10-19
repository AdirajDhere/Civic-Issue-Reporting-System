import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Camera, 
  MapPin, 
  Mic,
  Upload,
  Zap,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    urgency: "",
    location: "",
    landmark: ""
  });
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = [
    { value: "roads", label: "🚧 Roads & Infrastructure | सड़क और बुनियादी ढांचा" },
    { value: "waste", label: "🗑️ Waste Management | कचरा प्रबंधन" },
    { value: "lighting", label: "💡 Street Lighting | स्ट्रीट लाइटिंग" },
    { value: "water", label: "🚰 Water & Drainage | पानी और नाली" },
    { value: "parks", label: "🌳 Parks & Environment | पार्क और पर्यावरण" },
    { value: "traffic", label: "🚦 Traffic & Safety | यातायात और सुरक्षा" },
    { value: "other", label: "📝 Other | अन्य" }
  ];

  const urgencyLevels = [
    { value: "high", label: "🔴 High Priority | उच्च प्राथमिकता", desc: "Immediate attention required" },
    { value: "medium", label: "🟡 Medium Priority | मध्यम प्राथमिकता", desc: "Attention needed within a week" },
    { value: "low", label: "🟢 Low Priority | कम प्राथमिकता", desc: "Can be addressed in routine maintenance" }
  ];

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Recording... | रिकॉर्डिंग...",
        description: "Speak clearly about the issue"
      });
      
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        setFormData(prev => ({
          ...prev,
          description: prev.description + " There is a large pothole on the main road causing traffic problems."
        }));
        toast({
          title: "Voice recorded | आवाज़ रिकॉर्ड की गई",
          description: "Voice converted to text successfully"
        });
      }, 3000);
    }
  };

  const handlePhotoUpload = () => {
    // Simulate photo upload
    const mockImageUrl = `https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop`;
    setUploadedImages(prev => [...prev, mockImageUrl]);
    toast({
      title: "Photo uploaded | फोटो अपलोड की गई",
      description: "Photo added to your report"
    });
  };

  const handleCurrentLocation = () => {
    // Simulate getting current location
    setFormData(prev => ({
      ...prev,
      location: "MG Road, Sector 15, New Delhi - 110001"
    }));
    toast({
      title: "Location captured | स्थान कैप्चर किया गया",
      description: "Current location added to report"
    });
  };

  const handleSubmit = () => {
    if (!formData.category || !formData.title || !formData.description || !formData.urgency) {
      toast({
        title: "Please fill required fields | आवश्यक फ़ील्ड भरें",
        description: "Category, title, description and priority are required",
        variant: "destructive"
      });
      return;
    }

    const reportId = `SHR${Math.floor(Math.random() * 10000)}`;
    toast({
      title: "Report submitted successfully! | रिपोर्ट सफलतापूर्वक जमा की गई!",
      description: `Report ID: ${reportId}. You'll receive updates soon.`
    });
    
    setTimeout(() => {
      navigate("/citizen/reports");
    }, 2000);
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
            <div>
              <h1 className="text-lg font-bold">Report Issue | मुद्दा रिपोर्ट करें</h1>
              <p className="text-sm text-primary-foreground/80">Help improve your city</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Quick Report Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Selection */}
            <div>
              <Label htmlFor="category">Issue Category | मुद्दे की श्रेणी *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category | श्रेणी चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Issue Title */}
            <div>
              <Label htmlFor="title">Issue Title | मुद्दे का शीर्षक *</Label>
              <Input
                id="title"
                placeholder="Brief title of the issue | मुद्दे का संक्षिप्त शीर्षक"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
              />
            </div>

            {/* Description with Voice */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="description">Description | विवरण *</Label>
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="sm"
                  onClick={handleVoiceRecord}
                  className={isRecording ? "animate-pulse" : ""}
                >
                  <Mic className="w-4 h-4 mr-1" />
                  {isRecording ? "Stop" : "Voice"}
                </Button>
              </div>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail... | मुद्दे का विस्तृत विवरण..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                rows={4}
              />
            </div>

            {/* Photo Upload */}
            <div>
              <Label>Photos | फोटो</Label>
              <div className="space-y-3">
                <Button variant="outline" onClick={handlePhotoUpload} className="w-full">
                  <Camera className="w-4 h-4 mr-2" />
                  Take Photo / Upload | फोटो लें / अपलोड करें
                </Button>
                
                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                        <Badge className="absolute top-1 right-1 text-xs">
                          <CheckCircle className="w-3 h-3" />
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Location | स्थान</Label>
                <Button variant="outline" size="sm" onClick={handleCurrentLocation}>
                  <MapPin className="w-4 h-4 mr-1" />
                  Current Location
                </Button>
              </div>
              <Input
                placeholder="Enter location or use current location | स्थान दर्ज करें"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
              />
            </div>

            {/* Landmark */}
            <div>
              <Label htmlFor="landmark">Nearby Landmark | निकटतम स्थल</Label>
              <Input
                id="landmark"
                placeholder="e.g., Near Metro Station, Bank, etc. | जैसे मेट्रो स्टेशन के पास"
                value={formData.landmark}
                onChange={(e) => setFormData(prev => ({...prev, landmark: e.target.value}))}
              />
            </div>

            {/* Priority */}
            <div>
              <Label>Priority Level | प्राथमिकता स्तर *</Label>
              <div className="grid gap-3 mt-2">
                {urgencyLevels.map((level) => (
                  <Card 
                    key={level.value}
                    className={`cursor-pointer transition-all ${
                      formData.urgency === level.value 
                        ? "border-primary bg-primary-muted shadow-card" 
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setFormData(prev => ({...prev, urgency: level.value}))}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{level.label}</div>
                          <div className="text-xs text-muted-foreground">{level.desc}</div>
                        </div>
                        {formData.urgency === level.value && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => navigate("/citizen/home")}>
                Cancel | रद्द करें
              </Button>
              <Button variant="hero" className="flex-1" onClick={handleSubmit}>
                Submit Report | रिपोर्ट जमा करें
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="mt-6 bg-gradient-accent text-accent-foreground shadow-card">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">💡 Quick Tips | त्वरित सुझाव</h3>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Add photos for faster resolution | तेज़ समाधान के लिए फोटो जोड़ें</li>
              <li>• Use voice input for quick description | त्वरित विवरण के लिए आवाज़ का उपयोग करें</li>
              <li>• Share exact location for better tracking | बेहतर ट्रैकिंग के लिए सटीक स्थान साझा करें</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportIssue;