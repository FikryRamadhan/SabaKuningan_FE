
import React from 'react';

interface CustomAlertProps {
  type: 'success' | 'error' | 'warning';
  message: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, message }) => {
  const color = {
    success: 'green',
    error: 'red',
    warning: 'yellow',
  }[type];

  return (
    <div className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg bg-${color}-100 border border-${color}-400 text-${color}-800 transition duration-300`}>
      <strong className="font-semibold capitalize">{type}:</strong> {message}
    </div>
  );
};

export default CustomAlert;
