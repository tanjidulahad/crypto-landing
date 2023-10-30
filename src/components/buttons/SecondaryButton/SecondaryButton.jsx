import React from 'react';

const SecondaryButton = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={`${className} text-white rounded-full py-3 px-6 md:py-4 md:px-10 transition-all duration-200 bg-transparent outline outline-[#136BEF] hover:bg-[#136BEF]  hover:outline-none`
        }
            {...props}
        >
            {children}
        </button >
    );
};

export default SecondaryButton;