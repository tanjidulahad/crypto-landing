import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import {ImLinkedin2,ImTwitter,ImWhatsapp,ImFacebook, ImInstagram} from "react-icons/im"

import logo from '../../images/logo.svg';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';

export default function Footer() {
    return (
        <footer>
            <div className="container px-6 py-6 text-white">
                <div className='mb-6 px-6'>
                    <a href="#home"><img src={logo} alt="" /></a>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="p-6 xl:flex md:justify-between xl:border-r border-[#202F3B]">

                        <ul>
                            <li className='mb-4'>
                                <a href="#trendings" className='hover:text-[#136BEF]'>Trendings</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#exchange" className='hover:text-[#136BEF]'>Exchanges</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#waitlist" className='hover:text-[#136BEF]'>Waitlist</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#tools" className='hover:text-[#136BEF]'>Tools</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#get-started" className='hover:text-[#136BEF]'>Steps</a>
                            </li>
                        </ul>
                    </div>
                    <div className='p-6 xl:flex md:justify-center xl:border-r border-[#202F3B]'>
                        <ul>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Products</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>About Us</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Careers</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Blog</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Security</p>
                            </li>
                        </ul>
                    </div>
                    <div className='p-6 xl:flex md:justify-center xl:border-r border-[#202F3B]'>
                        <ul>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Help Center</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Contact Us</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>System Status</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Area Avaibility</p>
                            </li>
                            <li className='mb-4'>
                                <p className='hover:text-[#136BEF] cursor-pointer'>Privacy Policy</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 w-full col-span-2 lg:col-span-3 xl:col-auto">
                        <span >Newsletter</span>
                        <p className='font-thin'>Never miss anything crypto when you're on the go</p>
                        <div className="flex gap-4 my-4">
                            <div>
                                <input type="email" className="border border-[#202F3B] rounded-xl p-4 outline-none focus:border-primary w-full text-black" placeholder="Enter your email" />
                            </div>
                            <div>
                                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                                    <BsArrowRight color='white' />
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-8'>
                            <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>

                                <ImLinkedin2 color='#202F3B' size={12} />
                            </div>
                            <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>

                                <ImFacebook color='#202F3B' size={12} />
                            </div>
                            <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>

                                <ImTwitter color='#202F3B' size={12} />
                            </div>
                            <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>

                                <ImWhatsapp color='#202F3B' size={12} />
                            </div>
                            <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>

                                <ImInstagram color='#202F3B' size={12} />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-6 text-white">
                <p >© Copyright 2022 Tanjidul Ahad All rights reserved</p>
            </div>
        </footer>
    );
}