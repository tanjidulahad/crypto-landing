import React from 'react';
import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
export default function PartnerSection() {
  return (
    <section className="px-2 md:px-12">
      <div className='rounded-3xl bg-gradient-to-b from-[white] to-[#C7D5FF] py-20'>
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Trusted Partners Worldwide</h2>
            <p className='text-gray'>We're partners with countless major organisations around the globe</p>
          </div>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.img
                 initial="hidden"
                 whileInView="show"
                 variants={fadeIn('up', 'tween', 0.2, 0.2)}
                src={partner1} className="basis-1/2" alt="" />
                <motion.img
                 initial="hidden"
                 whileInView="show"
                 variants={fadeIn('up', 'tween', 0.4, 0.4)} src={partner2} className="basis-1/2" alt="" />
                <motion.img
                 initial="hidden"
                 whileInView="show"
                 variants={fadeIn('up', 'tween', 0.6, 0.6)} src={partner3} className="basis-1/2" alt="" />
                <motion.img
                 initial="hidden"
                 whileInView="show"
                 variants={fadeIn('up', 'tween', 0.8, 0.8)} src={partner4} className="basis-1/2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
