import React from 'react';

export default function PrimaryButton({ children, className, onClick, ...props }) {
  return (
    <button onClick={onClick} className={`${className} text-white rounded-full py-3 px-6 md:py-4 md:px-10 transition-all duration-200 bg-[#136BEF] hover:bg-transparent  hover:outline hover:outline-[#136BEF]`
    }
      {...props}
    >
      {children}
    </button >
  );
}