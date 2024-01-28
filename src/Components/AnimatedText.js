import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, font, color }) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative text-shawdow-lg name-font font-light tracking-widest ${color} absolute top-[430px] left-[850px] ${font}`}
        >
            {text}
        </motion.div>
        
    );
};

export default AnimatedText;
