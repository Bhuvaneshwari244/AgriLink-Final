import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import CropLibrary from "./pages/CropLibrary";
import Community from "./pages/Community";
import MandiRates from "./pages/MandiRates";
import Transport from "./pages/Transport";
import Diagnosis from "./pages/Diagnosis";
import Recommendations from "./pages/Recommendations";
import YieldPrediction from "./pages/YieldPrediction";
import CropCalendar from "./pages/CropCalendar";
import CropHealthMonitor from "./pages/CropHealthMonitor";
import Tools from "./pages/Tools";
import CultivationTips from "./pages/CultivationTips";
import FertilizerCalculator from "./pages/FertilizerCalculator";
import PesticideCalculator from "./pages/PesticideCalculator";
import FarmingCalculator from "./pages/FarmingCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/crops" element={<CropLibrary />} />
                <Route path="/community" element={<Community />} />
                <Route path="/mandi" element={<MandiRates />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/diagnosis" element={<Diagnosis />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/yield-prediction" element={<YieldPrediction />} />
                <Route path="/crop-calendar" element={<CropCalendar />} />
                <Route path="/crop-health" element={<CropHealthMonitor />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/cultivation-tips" element={<CultivationTips />} />
                <Route path="/fertilizer-calculator" element={<FertilizerCalculator />} />
                <Route path="/pesticide-calculator" element={<PesticideCalculator />} />
                <Route path="/farming-calculator" element={<FarmingCalculator />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
