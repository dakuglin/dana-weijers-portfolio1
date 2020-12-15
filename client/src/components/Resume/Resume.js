import React, { useState } from 'react';
import ResumePdf from './dana_weijers_resume.pdf'
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  };

  return (
      <div className="resume">
        <Document file = {ResumePdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
    </div>
  );
};

export default Resume;