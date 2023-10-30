import React from 'react';

import tradingTools from '../../images/tradingtools.png';
import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Tools() {
    return (
        <section id='tools' className="px-24 pt-20 overflow-hidden">
            <div className='rounded-3xl bg-gradient-to-b py-20 text-white'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className='lg:row-start-1 max-w-lg'>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                variants={fadeIn('right', 'tween', 0.2, 0.5)}
                            >
                                <h2 className="font-bold text-4xl mb-6 leading-normal">
                                    Advanced Trading <span className="text-blue-gradient">Tools</span>
                                </h2>
                                <div className="mb-6">
                                    <h3 className='font-bold text-xl mb-4'>Professional Access, Non-stop Availability</h3>
                                    <p className='text-gray'>We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</p>
                                </div>
                                <div className="mb-6">
                                    <h3 className='font-bold text-xl mb-4'>A Range of Powerful Apis</h3>
                                    <p className='text-gray'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
                                </div>
                                <div className="mb-6">
                                    <h3 className='font-bold text-xl mb-4'>Customer Support</h3>
                                    <p className='text-gray'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                                </div>
                            </motion.div>

                            <div className='flex'>
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    variants={fadeIn('up', 'tween', 0.3, 0.5)}
                                >
                                    <SecondaryButton>
                                        Get Started
                                    </SecondaryButton>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    variants={fadeIn('up', 'tween', 0.6, 0.5)}
                                >
                                    <button className='py-4 px-10 text-primary underline'>
                                        Learn more
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                        <div className="row-start-1 mb-8">
                            <motion.img
                                initial="hidden"
                                whileInView="show"
                                variants={fadeIn('left', 'tween', 0.2, 0.5)}
                                src={tradingTools} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}