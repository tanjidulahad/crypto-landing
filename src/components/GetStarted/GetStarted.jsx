import React from 'react';

import signupImage from '../../images/signup.png';
import walletImage from '../../images/wallet.png';
import okayImage from '../../images/okay.png';
import arrow from '../../images/arrow.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export default function GetStarted() {
  return (
    <section id='get-started' className="px-2 md:px-24 pt-20 md:pt-28 overflow-hidden">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="md:flex justify-center gap-20">
            <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            >
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={signupImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
                <p className="text-gray max-w-sm">
                  Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends
                </p>
              </div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 'tween', 0.4, 0.5)}
            >
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={walletImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fund</h3>
                <p className="text-gray max-w-sm">
                  Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                </p>
              </div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 'tween', 0.6, 0.5)}
            >
              <div className="text-center relative px-4">
                <img src={okayImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4">Buy Crypto</h3>
                <p className="text-gray max-w-sm">
                  Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}