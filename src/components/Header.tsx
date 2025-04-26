import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, UserRound, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { username, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-dpurple" : "text-gray-700";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <span className="text-2xl font-bold text-dblue">D-Crystal</span> */}
              <img src="/public/Prosperity_Logo.jpg" alt="Prosperity Logo"  className="w-[120px] h-auto"/>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-dpurple transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/data-catalog" className="w-full">Data Catalog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/data-lineage" className="w-full">Data Lineage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ask-ai" className="w-full">Ask AI</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/features" className={`${isActive('/features')} hover:text-dpurple transition-colors`}>Features</Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-dpurple transition-colors`}>About</Link>
            <Link to="/testimonials" className={`${isActive('/testimonials')} hover:text-dpurple transition-colors`}>Testimonials</Link>
            
            {!username ? (
              <Button className="bg-gradient-hero hover:opacity-90 transition-opacity" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full py-1 px-3">
                  <UserRound size={18} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-800">{username}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="flex items-center gap-1 border-red-200 text-red-600 hover:bg-red-50"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-16 shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-800">Products</div>
                <Link 
                  to="/data-catalog" 
                  className="block pl-4 py-2 text-gray-700 hover:text-dpurple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Catalog
                </Link>
                <Link 
                  to="/data-lineage" 
                  className="block pl-4 py-2 text-gray-700 hover:text-dpurple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Lineage
                </Link>
                <Link 
                  to="/ask-ai" 
                  className="block pl-4 py-2 text-gray-700 hover:text-dpurple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ask AI
                </Link>
              </div>
              
              <Link 
                to="/features" 
                className={`block ${isActive('/features')} hover:text-dpurple transition-colors py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/about" 
                className={`block ${isActive('/about')} hover:text-dpurple transition-colors py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/testimonials" 
                className={`block ${isActive('/testimonials')} hover:text-dpurple transition-colors py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              
              {!username ? (
                <Button 
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity" 
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              ) : (
                <div className="pt-2 border-t border-gray-200">
                  <div className="mb-3 flex items-center gap-2 py-2">
                    <UserRound size={18} className="text-gray-600" />
                    <span className="font-medium text-gray-800">{username}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
