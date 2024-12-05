import React from 'react';
import { motion } from 'framer-motion';

const ContactButton = () => {
  return (
    <div>
        <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} 
        transition={{ duration: 0.8 }} 
         className="flex justify-center items-center border-2 py-3 px-8 rounded-xl border-black font-poppins mt-10 font-medium"><a href="">Contact-me</a>
         </motion.button>
       
    </div>
      
   
  );
};

export default ContactButton;
