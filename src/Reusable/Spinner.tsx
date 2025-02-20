import React from 'react';

interface SpinnerProps {
  size?: string;  // Size of the spinner
  color?: string; // Tailwind color class for the spinner
}

const Spinner: React.FC<SpinnerProps> = ({ size = '8', color = 'text-white' }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color} h-${size} w-${size}`}
        role="status"
        aria-label="Loading spinner"
      ></div>
    </div>
  );
};

export default Spinner;
