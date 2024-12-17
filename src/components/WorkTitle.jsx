import React from 'react';
import { motion } from 'framer-motion';

const WorkTitle = () => {
  return (
    <div className=" bg-gray-50 h-min-screen">
      <div  className="flex flex-col font-poppins text-5xl font-bold gap-10">
        {/* Animation pour 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 0.8 }} 
          className="font-poppins text-5xl flex flex-col font-bold gap-7"
        >
          Some of graphic design project

        </motion.h2>

        {/* Animation pour 2 */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.8 }}
          className="font-poppins text-3xl flex flex-col gap-7"
        >
        Find some of my academic and personal achievements.
        </motion.h3>
      </div>
    </div>
  );
};

export default WorkTitle;
