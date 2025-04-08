
import React from 'react';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
