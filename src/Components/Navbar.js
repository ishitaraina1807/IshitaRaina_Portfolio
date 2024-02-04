import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');

  const itemVariants = {
    hover: {
      scale: 1.1,
      color: '#f93700',
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
        setScrollDirection(offset > window.scrollY ? 'up' : 'down');
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
          <ScrollLink to="skills" smooth={true} duration={500}>
            <motion.h1 className='text-4xl basic-font font-medium' variants={itemVariants}>
              Skills
              <motion.p
                className='text-sm mt-4 basic-font '
                variants={isSticky && scrollDirection === 'up' ? subheadingVariants : {}}
                initial="hidden"
                animate="visible"
              >
                THAT I DEVELOPED
          </motion.p></motion.h1>
          </ScrollLink>
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer'
          whileHover="hover"
        >
           <ScrollLink to="projects" smooth={true} duration={500}>
          <motion.h1 className='text-4xl basic-font font-medium' variants={itemVariants}>Projects
          <motion.p
            className='text-sm mt-4 basic-font '
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            SOME SAMPLES
          </motion.p></motion.h1>
          </ScrollLink>
        </motion.div>
      </div>

      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer basic-font '
          whileHover="hover"
        >
           <ScrollLink to="info" smooth={true} duration={500}>
          <motion.h1 className='text-2xl font-medium' variants={itemVariants}>Info
          <motion.p
            className='text-xs mt-4 basic-font '
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            ABOUT ME
          </motion.p></motion.h1>
         </ScrollLink>
        </motion.div>
      </div>

      <div className="flex gap-24 text-gray-800">
        <motion.div
          className='text-center transform hover:cursor-pointer basic-font '
          whileHover="hover"
        >
           <ScrollLink to="experience" smooth={true} duration={500}>
          <motion.h1 className='text-4xl font-medium' variants={itemVariants}>Experience
          <motion.p
            className='text-sm mt-4 basic-font '
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            ALL TILL NOW
          </motion.p></motion.h1>
         </ScrollLink>
        </motion.div>
        <motion.div
          className='text-center transform hover:cursor-pointer basic-font '
          whileHover="hover"
        >
           <ScrollLink to="contact" smooth={true} duration={500}>
          <motion.h1 className='text-4xl font-medium' variants={itemVariants}>Contact
          <motion.p
            className='text-sm mt-4 basic-font'
            variants={isSticky ? subheadingVariants : {}}
            initial="hidden"
            animate="visible"
          >
            FOR ANY QUERY
          </motion.p></motion.h1>
          </ScrollLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavBar;
