import React from 'react';
import { motion } from 'framer-motion';

const Ask = () => {
  return (
    <div className='bg-white h-[180px]'>
        <motion.h3
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 1 }} 
        className="font-poppins font-medium text-3xl text-center px-10"
      >
        Interested in my profile? Feel free to reach out, I’d be happy to connect
      </motion.h3>
    </div>
      
   
  );
};

export default Ask;
