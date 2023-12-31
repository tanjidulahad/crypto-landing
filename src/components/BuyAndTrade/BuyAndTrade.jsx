import React, { useState } from 'react';
import buyIcon from '../../images/buy.png';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import usd from "/cryptocurrencies/usd.svg"
import btc from "/cryptocurrencies/btc.svg"
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export default function BuyAndTrade() {

    const [usdValue,setUsdValue]=useState("5000")
    const [btcValue,setBtcValue]=useState("0.145")

    const formHandler = (e) => {
        e.preventDefault();
    };

    const inputChangeHandler = (e) => {
        setUsdValue(e.target.value)
        setBtcValue(0.000029*e.target.value)
    };

    return (
        <section id='exchange' className="container mx-auto px-2 lg:px-14 pt-20 md:pt-28 pb-20 md:pb-48 overflow-hidden">

            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex items-center">
                    <div className="max-w-xl">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        >
                            <h2 className="font-bold text-4xl mb-6 leading-normal text-white">Buy & trade on the <br /> original crypto exchange.</h2>
                            <p className="text-white mb-6">Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25 Crypto Coin. We accept BTC crypto-currency</p>
                        </motion.div>

                        <form onSubmit={formHandler}>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                variants={fadeIn('up', 'tween', 0.4, 0.5)}
                                className="flex justify-between gap-4 md:gap-6 mb-6">
                                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-[75%]">
                                    <div className="border-r border-primary pr-4 md:pr-6">
                                        <small className="text-primary text-white">Amount</small>
                                    </div>
                                    <input type="text" value={usdValue} onChange={inputChangeHandler} className='text-right text-white outline-none w-full bg-[#1A232E]' />
                                </div>
                                <div className='border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-[25%] justify-center text-white'>
                                    <span className='mr-2'><img className='w-5 h-5' src={usd} alt="" /></span>
                                    USD
                                </div>
                            </motion.div>

                            <motion.div
                            initial="hidden"
                            whileInView="show"
                            variants={fadeIn('up', 'tween', 0.6, 0.5)}
                            className="flex justify-between gap-4 md:gap-6 mb-6">
                                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center text-white w-[75%]">
                                    <div className="border-r border-primary pr-4 md:pr-6">
                                        <small className="text-primary">Amount</small>
                                    </div>
                                    <input type="text" value={btcValue} disabled className='text-right outline-none w-full bg-[#1A232E]' />
                                </div>
                                <div className='border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-[25%] justify-center text-white'>
                                    <span className='mr-2'><img className='w-5 h-5' src={btc} alt="" /></span>
                                    BTC
                                </div>
                            </motion.div>
                        </form>
                        <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn('up', 'tween', 0.8, 0.5)}
                        >

                        <PrimaryButton className="w-full">
                            Buy Now
                        </PrimaryButton>
                        </motion.div>
                    </div>
                </div>
                <div className='row-start-1 md:col-start-2'>
                    <motion.img
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        src={buyIcon} alt="" />
                </div>
            </div>

        </section >
    );
}