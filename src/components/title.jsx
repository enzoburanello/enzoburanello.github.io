import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className="flex bg-gray-50 h-min-screen px-60">
      <div className="">
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
       
      </div>
    </div>
  );
};

export default Introduction;
