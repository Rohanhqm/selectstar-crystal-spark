import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FeaturesPage from "./pages/Features";
import AboutPage from "./pages/About";
import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import DataCatalog from "./pages/DataCatalog";
import DataLineage from "./pages/DataLineage";

const queryClient = new QueryClient();

const AppContent = () => (
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Index />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/data-catalog" 
        element={
          <PrivateRoute>
            <DataCatalog />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/data-lineage" 
        element={
          <PrivateRoute>
            <DataLineage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/features" 
        element={
          <PrivateRoute>
            <FeaturesPage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/about" 
        element={
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/testimonials" 
        element={
          <PrivateRoute>
            <TestimonialsPage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
