import React from 'react';

interface CircleProps {
  className?: string;
}

const Circle: React.FC<CircleProps> = ({ className }) => {
  return (
    <div
      className={`absolute flex flex-row items-center justify-center -space-x-5 animate-spin ${className}`}
    >
      <div className="p-8 rounded-full bg-gradient-to-r from-catalina-blue-100 to-white mix-blend-darken" />
      <div className="p-8 rounded-full bg-gradient-to-r from-white to-yellow-sea-100 mix-blend-darken" />
    </div>
  );
};

export default Circle;
