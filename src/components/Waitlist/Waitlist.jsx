import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import creditCard from '../../images/credit-card.png';
import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Waitlist() {
    return (
        <section id='waitlist' className="container mx-auto px-2 md:px-0 pt-20 md:pt-48 pb-2 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-12 px-4 md:px-4">
                    <motion.img
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        src={creditCard} alt="" />
                </div>
                <div className="flex justify-center">
                    <div className="max-w-md text-white">
                        <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        >
                            <h2 className="font-bold text-4xl mb-6 leading-normal">
                                Introducing the <span className="text-blue-gradient">NEFA</span> <br /> Credit Card
                            </h2>
                            <p className='text-gray'>Subject to cardholder and rewards terms which will be available <br /> at application.</p>

                            <ul className="my-6">
                                <li className='mb-2'>
                                    <BsCheckCircleFill className='text-primary inline mr-2' />
                                    Up to 3% back on purchases
                                </li>
                                <li className='mb-2'>
                                    <BsCheckCircleFill className='text-primary inline mr-2' />
                                    Earn rewards in bitcoin or any crypto on NEFA
                                </li>
                                <li className='mb-2'>
                                    <BsCheckCircleFill className='text-primary inline mr-2' />
                                    No annual fee
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn('down', 'tween', 0.4, 0.5)}
                        >

                            <SecondaryButton>
                                Join the waitlist
                            </SecondaryButton>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section >
    );
}