import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  Camera,
  MapPin,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "🌟 नमस्ते! Welcome to SheharSaaf AI Assistant. I'm here to help you report civic issues quickly and efficiently. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        "Report a new issue | नया मुद्दा रिपोर्ट करें",
        "Check my reports | मेरी रिपोर्ट देखें", 
        "Find nearby issues | आस-पास की समस्याएं",
        "How does this work? | यह कैसे काम करता है?"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [currentStep, setCurrentStep] = useState<"greeting" | "category" | "details" | "location" | "confirmation">("greeting");
  const [reportData, setReportData] = useState({
    category: "",
    description: "",
    location: "",
    urgency: ""
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const addMessage = (content: string, type: "user" | "bot", suggestions?: string[]) => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date(),
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    addMessage(suggestion, "user");
    handleBotResponse(suggestion);
  };

  const handleBotResponse = (userMessage: string) => {
    setTimeout(() => {
      if (userMessage.toLowerCase().includes("report") || userMessage.toLowerCase().includes("रिपोर्ट")) {
        setCurrentStep("category");
        addMessage(
          "I'll help you report an issue. First, please select the category that best describes your issue:",
          "bot",
          [
            "🚧 Roads & Infrastructure | सड़क और बुनियादी ढांचा",
            "🗑️ Waste Management | कचरा प्रबंधन",
            "💡 Street Lighting | स्ट्रीट लाइटिंग",
            "🚰 Water & Drainage | पानी और नाली",
            "🌳 Parks & Environment | पार्क और पर्यावरण",
            "🚦 Traffic & Safety | यातायात और सुरक्षा"
          ]
        );
      } else if (currentStep === "category" && (userMessage.includes("Roads") || userMessage.includes("Waste") || userMessage.includes("Street") || userMessage.includes("Water") || userMessage.includes("Parks") || userMessage.includes("Traffic"))) {
        setReportData(prev => ({ ...prev, category: userMessage }));
        setCurrentStep("details");
        addMessage(
          "Great! Now please describe the issue in detail. What exactly is the problem? You can also mention landmarks nearby.",
          "bot"
        );
      } else if (currentStep === "details" && userMessage.trim().length > 10) {
        setReportData(prev => ({ ...prev, description: userMessage }));
        setCurrentStep("location");
        addMessage(
          "Thank you for the details. Now, please share your location or describe where this issue is located:",
          "bot",
          [
            "📍 Use Current Location | वर्तमान स्थान",
            "📝 Type Address Manually | पता मैन्युअल रूप से टाइप करें"
          ]
        );
      } else if (currentStep === "location") {
        setReportData(prev => ({ ...prev, location: userMessage }));
        setCurrentStep("confirmation");
        addMessage(
          "Perfect! Lastly, how urgent is this issue?",
          "bot",
          [
            "🔴 High Priority | उच्च प्राथमिकता",
            "🟡 Medium Priority | मध्यम प्राथमिकता", 
            "🟢 Low Priority | कम प्राथमिकता"
          ]
        );
      } else if (currentStep === "confirmation") {
        setReportData(prev => ({ ...prev, urgency: userMessage }));
        addMessage(
          `✅ Perfect! Your issue has been successfully submitted. Here's a summary:

**Category:** ${reportData.category}
**Description:** ${reportData.description}
**Location:** ${reportData.location}
**Priority:** ${userMessage}

**Report ID:** #SHR${Math.floor(Math.random() * 10000)}

Your report has been forwarded to the concerned authorities. You'll receive updates on your registered mobile number. You can track the progress anytime from your reports section.

Is there anything else I can help you with?`,
          "bot",
          [
            "Track this report | इस रिपोर्ट को ट्रैक करें",
            "Report another issue | दूसरा मुद्दा रिपोर्ट करें",
            "View my reports | मेरी रिपोर्ट देखें"
          ]
        );
        setCurrentStep("greeting");
        setReportData({ category: "", description: "", location: "", urgency: "" });
      } else if (userMessage.toLowerCase().includes("track") || userMessage.toLowerCase().includes("ट्रैक")) {
        addMessage(
          "Here are your recent reports and their current status:\n\n🔴 #SHR1234 - Broken Streetlight (In Progress)\n🟢 #SHR1235 - Pothole Repair (Completed)\n🟡 #SHR1236 - Garbage Collection (Pending)\n\nClick on any report ID to view detailed status and timeline.",
          "bot",
          ["View detailed reports | विस्तृत रिपोर्ट देखें"]
        );
      } else if (userMessage.toLowerCase().includes("nearby") || userMessage.toLowerCase().includes("आस-पास")) {
        addMessage(
          "🗺️ Here are recent issues reported near your area:\n\n• Broken streetlight on MG Road (500m away)\n• Pothole on Central Avenue (1.2km away)\n• Garbage not collected in Sector 15 (800m away)\n\nWould you like to see these on a map or get more details about any specific issue?",
          "bot",
          ["Show on map | मैप पर दिखाएं", "Get issue details | मुद्दे का विवरण"]
        );
      } else if (userMessage.toLowerCase().includes("how") || userMessage.toLowerCase().includes("कैसे")) {
        addMessage(
          "🤖 SheharSaaf AI Assistant works in simple steps:\n\n1️⃣ **Report Issues**: Tell me about any civic problem\n2️⃣ **AI Processing**: I'll categorize and prioritize your issue\n3️⃣ **Smart Routing**: Your report goes to the right department\n4️⃣ **Real-time Updates**: Get notified about progress\n5️⃣ **Community Impact**: Your reports help improve the city\n\nYou can also:\n• Take photos of issues\n• Use voice commands\n• Track all your reports\n• Earn points for active participation",
          "bot",
          ["Start reporting | रिपोर्टिंग शुरू करें", "See community impact | सामुदायिक प्रभाव देखें"]
        );
      } else {
        addMessage(
          "I understand you want to help improve your city! I can assist you with:\n\n• Reporting civic issues\n• Tracking your submitted reports\n• Finding nearby issues\n• Explaining how the system works\n\nWhat would you like to do?",
          "bot",
          [
            "Report a new issue | नया मुद्दा रिपोर्ट करें",
            "Check my reports | मेरी रिपोर्ट देखें", 
            "Find nearby issues | आस-पास की समस्याएं"
          ]
        );
      }
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage(inputMessage, "user");
      handleBotResponse(inputMessage);
      setInputMessage("");
    }
  };

  const handleVoiceToggle = () => {
    if (!isListening) {
      setIsListening(true);
      toast({
        title: "Listening... | सुन रहा है...",
        description: "Speak your message clearly",
      });
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false);
        setInputMessage("I want to report a broken streetlight on MG Road");
        toast({
          title: "Voice recognized | आवाज़ पहचानी गई",
          description: "Message transcribed successfully",
        });
      }, 3000);
    } else {
      setIsListening(false);
    }
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
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold">SheharSaaf AI Assistant</h1>
                <p className="text-sm text-primary-foreground/80">Always ready to help | हमेशा मदद के लिए तैयार</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="h-[calc(100vh-200px)] overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              {message.type === "bot" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${message.type === "user" ? "order-first" : ""}`}>
                <Card className={`${message.type === "user" ? "bg-primary text-primary-foreground" : "bg-card"} shadow-card`}>
                  <CardContent className="p-3">
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </CardContent>
                </Card>
                
                {message.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs h-auto py-2 px-3"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              
              {message.type === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <Card className="shadow-glow">
          <CardContent className="p-4">
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message... | अपना संदेश टाइप करें..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="min-h-[40px]"
                />
              </div>
              <Button
                variant={isListening ? "destructive" : "outline"}
                size="icon"
                onClick={handleVoiceToggle}
                className={isListening ? "animate-pulse" : ""}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Link to="/citizen/report">
                <Button variant="outline" size="icon">
                  <Camera className="h-4 w-4" />
                </Button>
              </Link>
              <Button onClick={handleSendMessage} variant="hero" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                AI-Powered
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Location Aware
              </div>
              <Badge variant="outline" className="text-xs">
                Hinglish Support
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;