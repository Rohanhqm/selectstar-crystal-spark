
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfViewer from '@/components/PdfViewer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const DataLineage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 h-[calc(100vh-4rem)]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={60}>
            <PdfViewer pdfUrl="/copilot.pdf" />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={50}>
            <div className="h-full p-6 bg-white overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Lineage Information</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What is Data Lineage?</h3>
                  <p className="text-gray-600">
                    Data lineage tracks data from its origin to its destination, showing how the
                    data flows through different systems and transformations. It helps in understanding
                    data quality, impact analysis, and regulatory compliance.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Benefits</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enhanced data governance and quality control</li>
                    <li>Better impact analysis for system changes</li>
                    <li>Improved regulatory compliance tracking</li>
                    <li>Easier troubleshooting of data issues</li>
                    <li>Better understanding of data dependencies</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Use</h3>
                  <p className="text-gray-600">
                    The diagram on the left shows the complete data lineage map. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                    <li>Drag the divider to resize the views</li>
                    <li>Zoom in/out of the PDF for detail</li>
                    <li>Track data flow through different systems</li>
                    <li>Identify dependencies and transformations</li>
                  </ul>
                </section>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
};

export default DataLineage;

