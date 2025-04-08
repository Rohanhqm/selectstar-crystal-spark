
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';

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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-dblue">D-Crystal</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className={`${isActive('/features')} hover:text-dpurple transition-colors`}>Features</Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-dpurple transition-colors`}>About</Link>
            <Link to="/testimonials" className={`${isActive('/testimonials')} hover:text-dpurple transition-colors`}>Testimonials</Link>
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            {username && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Hello, {username}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={logout}
                  className="flex items-center gap-1"
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
              <Button 
                className="w-full bg-gradient-hero hover:opacity-90 transition-opacity" 
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              
              {username && (
                <div className="pt-2 border-t border-gray-200">
                  <div className="mb-2 text-sm">Hello, {username}</div>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
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
