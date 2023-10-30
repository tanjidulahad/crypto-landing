import React from 'react';
import globe from "../../images/globe.png"
import BlueCircleParticle from '../particles/BlueCircleParticle';
import OrangeCircleParticle from '../particles/OrangeCircleParticle';
import StarParticle from '../particles/StarParticle';
import PurpleCircleParticle from '../particles/PurpleCircleParticle';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion"
const Hero = () => {
    return (
        <div id='home' className='px-10 overflow-hidden'>

            <div className='gradient-01 h-10'>

            </div>
            <section className='relative bg-primary pt-[100px] bg-opacity-5'>

                <div className="container px-4 mx-auto grid md:grid-cols-2">
                    <div className='flex items-center'>
                        <div className='relative'>
                            <StarParticle className="absolute top-0 right-0" />
                            <PurpleCircleParticle className="absolute bottom-0 -left-12" />
                            <motion.h1
                                initial="hidden"
                                whileInView="show"
                                variants={fadeIn('right', 'tween', 0.2, 0.5)}
                                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal text-white'>
                                The World’s <br />
                                <span className='text-transparent bg-gradient-to-r from-[#0cd3ff] via-[#2f7cf0] to-[#0e65e8] bg-clip-text'>Fastest Growing</span> <br />
                                Crypto Web App
                            </motion.h1>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                variants={fadeIn('right', 'tween', 0.2, 0.5)}
                                className="mt-4 mb-8">
                                <p className="text-white">Buy and sell 200+ cryptocurrencies with 20+ flat currencies using</p>
                                <p className="text-white">bank transfers or your credit/debit card.</p>
                            </motion.div>
                            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    variants={fadeIn('up', 'tween', 0.5, 0.5)}
                                >
                                    <PrimaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                                        Get Started
                                    </PrimaryButton>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    variants={fadeIn('up', 'tween', 1, 0.5)}
                                >
                                <SecondaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                                    Download App
                                </SecondaryButton>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <BlueCircleParticle className="absolute top-0 left-11 duration-[5s]" />
                        <OrangeCircleParticle className="absolute bottom-1/4 right-0" />

                        <motion.img
                            initial="hidden"
                            whileInView="show"
                            variants={fadeIn('left', 'tween', 0.2, 0.5)}
                            src={globe} alt="Globe" />
                    </div>
                </div>
            </section >

        </div>
    );
};

export default Hero;