import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import PlcPage from "./pages/PlcPage";
import ScadaPage from "./pages/ScadaPage";
import VfdPage from "./pages/VfdPage";
import HmiPage from "./pages/HmiPage";
import AutomationHub from "./pages/AutomationHub";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/plc-system" element={<PlcPage />} />
            <Route path="/scada-system" element={<ScadaPage />} />
            <Route path="/vfd-drive" element={<VfdPage />} />
            <Route path="/hmi-system" element={<HmiPage />} />
            <Route path="/automation" element={<AutomationHub />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
