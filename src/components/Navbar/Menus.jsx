import React from 'react';

const Menus = () => {
    return (

        <>
            <div className="w-full">
                <a href="#trendings" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>Trendings</a>
            </div>
            <div className="w-full">
                <a href="#exchange" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>Exchanges</a>
            </div>
            <div className="w-full">
                <a href="#waitlist" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>Waitlist</a>
            </div>
            <div className="w-full">
                <a href="#tools" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>Tools</a>
            </div>
            <div className="w-full">
                <a href="/" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>NFT</a>
            </div>
            <div className="w-full">
                <a href="/" className='text-white hover:text-primary py-2 block hover:text-[#136BEF]'>Portofolios</a>
            </div>

        </>
    );
};

export default Menus;