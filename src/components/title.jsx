import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className="flex bg-gray-50 h-min-screen px-60">
      <div className="w-screen flex flex-col px-60 gap-40">
        {/* Animation pour 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 0.8 }} 
          className="font-poppins text-5xl flex flex-col font-bold gap-7"
        >
          <span>Hi, I am Enzo Buranello</span>
          <span>a graphic design student</span>
        </motion.h2>

        {/* Animation pour 2 */}
        <motion.h3
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.8 }}
          className="font-poppins text-3xl flex flex-col gap-7"
        >
          <span>With a focus on  <span className='font-medium'>Graphic Design</span>, <span className='font-medium'>Web Developpement front-end,</span> and <span className='font-medium'>Project Management</span>,</span>
          
          <span>I enjoy creating engaging visual experiences that combine creativity and functionality.</span>
        </motion.h3>
      </div>
    </div>
  );
};

export default Introduction;
