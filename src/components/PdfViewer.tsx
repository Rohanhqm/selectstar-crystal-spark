
import React, { useState } from 'react';
import { FileText, AlertCircle, FilePdf, FileExcel } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [fileError, setFileError] = useState(false);

  const handleError = () => {
    setFileError(true);
    console.error(`File not found at: ${pdfUrl}`);
  };

  const getFileType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    return extension;
  };

  const renderFileContent = () => {
    const fileType = getFileType(pdfUrl);

    if (fileError) {
      return (
        <div className="flex flex-col items-center text-red-500">
          <AlertCircle size={48} />
          <p className="mt-2">File not found: {pdfUrl}</p>
          <p className="text-sm mt-1">Please check that the file exists in the public folder.</p>
        </div>
      );
    }

    switch (fileType) {
      case 'pdf':
        return (
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            title="PDF Viewer"
            onError={handleError}
          />
        );
      case 'xlsx':
      case 'xls':
        return (
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${pdfUrl}`}
            className="w-full h-full border-0 rounded-lg shadow-lg"
            title="Excel Viewer"
            onError={handleError}
          />
        );
      default:
        return (
          <div className="flex flex-col items-center text-gray-500">
            <FileText size={48} />
            <p className="mt-2">Unsupported file type</p>
          </div>
        );
    }
  };

  const getFileIcon = () => {
    const fileType = getFileType(pdfUrl);
    switch (fileType) {
      case 'pdf':
        return <FilePdf size={48} />;
      case 'xlsx':
      case 'xls':
        return <FileExcel size={48} />;
      default:
        return <FileText size={48} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {pdfUrl ? (
        renderFileContent()
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          {getFileIcon()}
          <p className="mt-2">No file selected</p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
