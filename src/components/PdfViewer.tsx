
import React, { useState } from 'react';
import { FileText, AlertCircle } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [pdfError, setPdfError] = useState(false);

  const handleError = () => {
    setPdfError(true);
    console.error(`PDF not found at: ${pdfUrl}`);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4">
      {pdfUrl && !pdfError ? (
        <iframe
          src={pdfUrl}
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="PDF Viewer"
          onError={handleError}
        />
      ) : pdfError ? (
        <div className="flex flex-col items-center text-red-500">
          <AlertCircle size={48} />
          <p className="mt-2">PDF not found: {pdfUrl}</p>
          <p className="text-sm mt-1">Please check that the file exists in the public folder.</p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          <FileText size={48} />
          <p className="mt-2">No PDF selected</p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
