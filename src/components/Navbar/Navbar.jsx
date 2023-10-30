import React, { useEffect, useState } from 'react';
import logo from "../../images/logo.svg"
import { useMediaQuery } from 'react-responsive';
import { BsList, BsX } from 'react-icons/bs';
import Menus from './Menus';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [backgroundwhite, setBackgroundWhite] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: '768px' });

    //handle page scroll function
    const handleWindowScroll = (e) => {
        const height = window.scrollY;
        const tresholdHeight = 50;

        if (height > tresholdHeight) {
            setBackgroundWhite(true);
        } else {
            setBackgroundWhite(false);
        }
    };

    const handleBlackScreenClick = (e) => {
        e.stopPropagation();
        setDropdownOpen(false);
    };

    //checking ismobile view and closing dropdown menu
    useEffect(() => {
        if (isMobile) {
            setDropdownOpen(false);
        }
    }, [isMobile]);

    //seting navBackground if dropdown is open
    useEffect(() => {
        setBackgroundWhite(dropdownOpen);
    }, [dropdownOpen]);

    //will effect on first render and will set an eventlistener for page scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, []);

    return (
        <nav className={`fixed w-full transition-all duration-700 z-10 py-8 px-2 md:px-10 ${backgroundwhite ? 'bg-[#202F3B] shadow-lg !py-3' : ""}`}>
            <div className="px-4 container mx-auto top-0 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#home"><img src={logo} className="mr-6" alt="Neva" /></a>
                    <div className='hidden mx-4 gap-8 xl:flex'>
                        <Menus />
                    </div>
                </div>
                <div className="hidden gap-4 lg:flex">
                    <SecondaryButton>
                        Sign In
                    </SecondaryButton>
                    <PrimaryButton>
                        Sign Up
                    </PrimaryButton>
                </div>
                <div className="lg:hidden text-2xl">
                    <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {dropdownOpen ?
                            <BsX color='white' />
                            :
                            <BsList color='white' />
                        }
                    </button>

                    {/* Menu dropdown */}
                    <div className={`text-base left-0 top-full right-0 absolute transition-all duration-400 ${dropdownOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                        <div className="h-screen left-0 bg-[#1A232E] bg-opacity-30" onClick={handleBlackScreenClick}>
                            <div className="z-20 shadow-xl bg-[#1A232E] p-6">
                                <div className="gap-4 flex mb-6">
                                    <SecondaryButton className="w-full">
                                        Sign In
                                    </SecondaryButton>
                                    <PrimaryButton className="w-full">
                                        Sign Up
                                    </PrimaryButton>
                                </div>
                                <div className="mb-4">
                                    <Menus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;