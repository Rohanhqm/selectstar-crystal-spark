
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfViewer from '@/components/PdfViewer';

const DataLineage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <PdfViewer pdfUrl="/data-lineage.pdf" />
      </div>
      <Footer />
    </div>
  );
};

export default DataLineage;
