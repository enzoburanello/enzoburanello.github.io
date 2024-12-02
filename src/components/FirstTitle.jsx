import React from 'react';
import { motion } from 'framer-motion';

const Start = () => {
  return (
    <div className="flex bg-gray-50  ">
        <motion.div className=""
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: false, amount: 1 }}
           transition={{ duration: 0.8 }}>
          
        <h2 className='font-poppins text-4xl flex flex-col font-medium gap-7'>Welcome let's explore a selection of my skills, <span className='font-bold'>and the work I’ve crafted</span></h2>
        </motion.div>
     </div>
  
  );
};

export default Start;
