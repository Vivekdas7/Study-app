import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import './QuestionPaperViewer.css';

const QuestionPaperViewer = ({ branch, year }) => {
  const [papers, setPapers] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // Simulated paper fetching - replace with actual Google Drive API or backend call
    const mockPapers = [
      { 
        id: 1, 
        title: `${branch} Question Paper ${year}`, 
        url: 'https://example.com/sample-paper.pdf' 
      }
    ];
    setPapers(mockPapers);
  }, [branch, year]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="paper-viewer">
      <h2>{`${branch} - ${year} Question Papers`}</h2>
      <div className="paper-container">
        <div className="paper-list">
          {papers.map(paper => (
            <div 
              key={paper.id} 
              onClick={() => setSelectedPaper(paper)}
              className={`paper-item ${selectedPaper?.id === paper.id ? 'selected' : ''}`}
            >
              {paper.title}
            </div>
          ))}
        </div>
        {selectedPaper && (
          <div className="pdf-viewer">
            <Document 
              file={selectedPaper.url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  width={600} 
                />
              ))}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPaperViewer;
