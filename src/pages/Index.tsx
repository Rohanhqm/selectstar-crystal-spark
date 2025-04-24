
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { logout, username } = useAuth();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        {/* Logout Button Section */}
        {username && (
          <section className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex justify-center">
              <Button 
                variant="destructive" 
                onClick={logout} 
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

