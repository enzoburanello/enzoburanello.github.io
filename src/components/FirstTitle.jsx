import React from 'react';
import { motion } from 'framer-motion';

const Start = () => {
  return (
    <div className="flex bg-gray-50  flex-col px-60 gap-40 ">
        <motion.div className=""
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: false, amount: 1 }}
           transition={{ duration: 0.8 }}>
          
        <h2 className='font-poppins text-4xl flex flex-col font-medium gap-7'>Welcome let's explore a selection of my skills, <span className='font-bold'>and the work I’ve crafted</span></h2>
        </motion.div>

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
  
  );
};

export default Start;
