import React from 'react';
import { motion } from 'framer-motion';

const Ask = () => {
  return (
    <div>
        <motion.h3
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration: 0.8 }} 
        className="font-poppins text-3xl font-medium flex flex-col gap-10"
      >
        Interested in my profile? Feel free to reach out, I’d be happy to connect
      </motion.h3>
    </div>
      
   
  );
};

export default Ask;
