
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfViewer from '@/components/PdfViewer';

const DataCatalog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <PdfViewer pdfUrl="/copilot.pdf" />
      </div>
      <Footer />
    </div>
  );
};

export default DataCatalog;
