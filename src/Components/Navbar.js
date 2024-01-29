import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  const itemVariants = {
    hover: {
      scale: 1.1,
      color: '#f93700',
      duration: 0.9,
    },
  };

  const subheadingVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`py-10 px-16 basic-font flex justify-between w-full ${isSticky ? 'sticky' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Skills
          <motion.p
            className='text-sm mt-4'
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            THAT I DEVELOPED 
          </motion.p></motion.h1>
         
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Projects
          <motion.p
            className='text-sm mt-4'
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            SOME SAMPLES
          </motion.p></motion.h1>

        </motion.div>
      </div>

      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Experience
          <motion.p
            className='text-sm mt-4'
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            ALL THE PROCESSES
          </motion.p></motion.h1>
         
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
          <motion.h1 className='text-4xl' variants={itemVariants}>Contact me
          <motion.p
            className='text-sm mt-4'
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            FOR ANY QUERY
          </motion.p></motion.h1>
          
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavBar;
