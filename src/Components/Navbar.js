import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const itemVariants = {
    hover: {
      scale: 1.1,
      color: '#f93700',
      duration: 0.9,
    },
  };

  return (
    <motion.div
      className='py-10 px-16 basic-font flex justify-between absolute w-full bg-transparent z-10'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Info</motion.h1>
          <motion.p className='text-sm mt-4' variants={itemVariants}>ABOUT ME</motion.p>
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Projects</motion.h1>
          <motion.p className='text-sm mt-4' variants={itemVariants}>SOME SAMPLES</motion.p>
        </motion.div>
      </div>

      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Experience</motion.h1>
          <motion.p className='text-sm mt-4' variants={itemVariants}>ALL THE PROCESSES</motion.p>
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Contact me</motion.h1>
          <motion.p className='text-sm mt-4' variants={itemVariants}>FOR ANY QUERY</motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavBar;
