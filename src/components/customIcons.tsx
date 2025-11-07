import React from 'react';

// Centralized custom SVG icons to replace emojis
// Colors tuned to the brand red palette for consistency

export const MongoLeafIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12.8 5 14.4 6.8 15.4 8.8C17.2 12.4 15.6 16.8 12.4 19.2C11.6 19.8 10.8 20.2 10 20.4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 2C11.2 5 9.6 6.8 8.6 8.8C6.8 12.4 8.4 16.8 11.6 19.2C12.4 19.8 13.2 20.2 14 20.4" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 2V12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CoffeeCupIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H18C20 8 21 9 21 11C21 13 20 14 18 14H17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 8L7 18C7 20 9 22 12 22C15 22 17 20 17 18L18 8" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 2C10 3 9 4 9 5C9 6 10 7 10 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 2C14 3 13 4 13 5C13 6 14 7 14 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PythonIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="8" rx="2" stroke="#ef4444" strokeWidth="2" />
    <rect x="10" y="12" width="10" height="8" rx="2" stroke="#b91c1c" strokeWidth="2" />
    <path d="M9 8H9.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 16H15.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const VercelIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ef4444" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L22 21H2L12 3Z" />
  </svg>
);
