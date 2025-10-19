import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Citizen App Pages
import CitizenLogin from "./pages/citizen/Login";
import CitizenSignup from "./pages/citizen/Signup";
import CitizenHome from "./pages/citizen/Home";
import ChatBot from "./pages/citizen/ChatBot";
import ReportIssue from "./pages/citizen/ReportIssue";
import RecentReports from "./pages/citizen/RecentReports";
import IssueDetails from "./pages/citizen/IssueDetails";
import Profile from "./pages/citizen/Profile";
import NearbyIssues from "./pages/citizen/NearbyIssues";

// Admin Dashboard Pages
import AdminLogin from "./pages/admin/Login";
import AdminSignup from "./pages/admin/Signup";
import AdminDashboard from "./pages/admin/Dashboard";
import ComplaintManagement from "./pages/admin/ComplaintManagement";
import AdminIssueDetails from "./pages/admin/IssueDetails";
import AssignmentPanel from "./pages/admin/AssignmentPanel";
import Analytics from "./pages/admin/Analytics";

// NGO Portal Pages
import NGOLogin from "./pages/ngo/Login";
import NGOSignup from "./pages/ngo/Signup";
import AssignedTasks from "./pages/ngo/AssignedTasks";
import UpdateStatus from "./pages/ngo/UpdateStatus";
import NGOMetrics from "./pages/ngo/Metrics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Citizen App Routes */}
          <Route path="/citizen/login" element={<CitizenLogin />} />
          <Route path="/citizen/signup" element={<CitizenSignup />} />
          <Route path="/citizen/home" element={<CitizenHome />} />
          <Route path="/citizen/chatbot" element={<ChatBot />} />
          <Route path="/citizen/report" element={<ReportIssue />} />
          <Route path="/citizen/reports" element={<RecentReports />} />
          <Route path="/citizen/issue/:id" element={<IssueDetails />} />
          <Route path="/citizen/profile" element={<Profile />} />
          <Route path="/citizen/nearby" element={<NearbyIssues />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/complaints" element={<ComplaintManagement />} />
          <Route path="/admin/issue/:id" element={<AdminIssueDetails />} />
          <Route path="/admin/assign" element={<AssignmentPanel />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          
          {/* NGO Portal Routes */}
          <Route path="/ngo/login" element={<NGOLogin />} />
          <Route path="/ngo/signup" element={<NGOSignup />} />
          <Route path="/ngo/tasks" element={<AssignedTasks />} />
          <Route path="/ngo/update/:id" element={<UpdateStatus />} />
          <Route path="/ngo/metrics" element={<NGOMetrics />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
