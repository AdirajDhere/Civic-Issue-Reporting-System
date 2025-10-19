import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ThumbsUp,
  MessageSquare,
  Share,
  Eye,
  User,
  Phone,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IssueDetails = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app this would come from API
  const issueData = {
    id: id,
    title: "Broken Streetlight on MG Road",
    description: "The streetlight has been flickering for the past week and went completely off last night. This is causing safety concerns for pedestrians and vehicles, especially during late evening hours. The light pole number is SL-2456.",
    category: "Street Lighting",
    location: "MG Road, Sector 15, Near Metro Station",
    coordinates: "28.5355° N, 77.3910° E",
    status: "In Progress",
    priority: "High",
    reportId: "SHR1234",
    reportedDate: "March 18, 2024",
    expectedResolution: "March 25, 2024",
    assignedTo: "Delhi Municipal Corporation - Electrical Division",
    contactPerson: "Raj Kumar (Engineer)",
    contactPhone: "+91 98765 43210",
    likes: 15,
    views: 142,
    progress: 60,
    images: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    ],
    timeline: [
      { date: "Mar 18, 2024 10:30 AM", status: "Reported", description: "Issue reported by citizen", icon: AlertCircle },
      { date: "Mar 18, 2024 2:45 PM", status: "Acknowledged", description: "Report received and verified by authorities", icon: Eye },
      { date: "Mar 19, 2024 9:15 AM", status: "Assigned", description: "Assigned to Electrical Division for resolution", icon: User },
      { date: "Mar 20, 2024 11:00 AM", status: "In Progress", description: "Field team dispatched for assessment", icon: Clock }
    ],
    comments: [
      { user: "Priya Sharma", time: "2 hours ago", comment: "This is affecting our morning walks. Please prioritize this issue." },
      { user: "Municipal Worker", time: "1 day ago", comment: "We have identified the issue. Parts have been ordered and will be fixed by tomorrow." },
      { user: "Amit Singh", time: "2 days ago", comment: "Same issue is there near the park as well. Can we report that too?" }
    ]
  };

  const handleLike = () => {
    setHasLiked(!hasLiked);
    toast({
      title: hasLiked ? "Like removed" : "Issue liked",
      description: hasLiked ? "You've removed your support" : "You're supporting this issue resolution"
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: issueData.title,
        text: `Check out this civic issue: ${issueData.description}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Issue link copied to clipboard"
      });
    }
  };

  const handleComment = () => {
    if (newComment.trim()) {
      toast({
        title: "Comment added",
        description: "Your comment has been posted"
      });
      setNewComment("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "success";
      case "In Progress": return "warning";
      case "Pending": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return <CheckCircle className="w-4 h-4" />;
      case "In Progress": return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-muted/10 to-accent-muted/10">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/citizen/reports">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg font-bold">Issue Details | मुद्दे का विवरण</h1>
              <p className="text-sm text-primary-foreground/80">Report #{issueData.reportId}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={handleShare} className="text-white hover:bg-white/10">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Main Issue Card */}
        <Card className="mb-6 shadow-glow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl">{issueData.title}</CardTitle>
                  <Badge variant={getStatusColor(issueData.status) as any} className="flex items-center gap-1">
                    {getStatusIcon(issueData.status)}
                    {issueData.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {issueData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {issueData.reportedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {issueData.views} views
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description | विवरण</h3>
              <p className="text-muted-foreground leading-relaxed">{issueData.description}</p>
            </div>

            {/* Images */}
            {issueData.images.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Photos | फोटो</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {issueData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Issue photo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border shadow-card"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Issue Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Issue Information | मुद्दे की जानकारी</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{issueData.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Priority:</span>
                    <Badge variant="destructive">{issueData.priority}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Resolution:</span>
                    <span>{issueData.expectedResolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coordinates:</span>
                    <span>{issueData.coordinates}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Assignment Details | असाइनमेंट विवरण</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{issueData.assignedTo}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{issueData.contactPerson}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{issueData.contactPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Resolution Progress | समाधान प्रगति</h3>
                <span className="text-sm text-muted-foreground">{issueData.progress}% Complete</span>
              </div>
              <Progress value={issueData.progress} className="h-2" />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t">
              <Button
                variant={hasLiked ? "default" : "outline"}
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <ThumbsUp className={`w-4 h-4 ${hasLiked ? "fill-current" : ""}`} />
                {hasLiked ? issueData.likes + 1 : issueData.likes} Support
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share className="w-4 h-4 mr-2" />
                Share | साझा करें
              </Button>
              <Link to="/citizen/nearby">
                <Button variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Similar Issues
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle>Resolution Timeline | समाधान समयरेखा</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {issueData.timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{item.status}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Community Comments | सामुदायिक टिप्पणियां
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Add Comment */}
            <div className="space-y-3">
              <Textarea
                placeholder="Add your comment or suggestion... | अपनी टिप्पणी या सुझाव जोड़ें..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
              />
              <Button onClick={handleComment} variant="hero" size="sm">
                Post Comment | टिप्पणी पोस्ट करें
              </Button>
            </div>

            {/* Comments List */}
            <div className="space-y-4 pt-4 border-t">
              {issueData.comments.map((comment, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.user}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IssueDetails;