import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {Members} from "./pages/Members";
import {Navigation} from "./components/Navigation";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/members" element={Members()} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/achievements" element={<AchievementsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
