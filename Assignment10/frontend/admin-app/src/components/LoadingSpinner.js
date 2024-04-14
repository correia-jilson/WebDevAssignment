import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  <div className="text-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
