
import React from 'react';
import { FilePdf } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4">
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="PDF Viewer"
        />
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          <FilePdf size={48} />
          <p className="mt-2">No PDF selected</p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
