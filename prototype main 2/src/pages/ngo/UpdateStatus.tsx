import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, MapPin, Calendar } from "lucide-react";

const UpdateStatus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-muted/10 to-secondary-muted/10">
      <div className="bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/ngo/tasks">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold">Update Task Status</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="shadow-glow">
          <CardHeader>
            <CardTitle>Park Cleanup Drive - Community Park</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Community Park, Sector 15
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Deadline: March 25, 2024
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium">Update Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select current status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending - Not Started</SelectItem>
                  <SelectItem value="progress">In Progress - Ongoing</SelectItem>
                  <SelectItem value="completed">Completed - Finished</SelectItem>
                  <SelectItem value="delayed">Delayed - Need Extension</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Progress Description</label>
              <Textarea 
                placeholder="Describe the current progress, challenges faced, and next steps..."
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Upload Progress Photos</label>
              <Button variant="outline" className="w-full">
                <Camera className="w-4 h-4 mr-2" />
                Upload Before/After Photos
              </Button>
            </div>

            <div>
              <label className="text-sm font-medium">Completion Percentage</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select completion percentage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0% - Just Started</SelectItem>
                  <SelectItem value="25">25% - Initial Progress</SelectItem>
                  <SelectItem value="50">50% - Half Complete</SelectItem>
                  <SelectItem value="75">75% - Nearly Done</SelectItem>
                  <SelectItem value="100">100% - Fully Complete</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3">
              <Button variant="accent" className="flex-1">
                Submit Update
              </Button>
              <Link to="/ngo/tasks">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpdateStatus;