import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, font, color }) => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-shawdow-lg name-font font-light tracking-widest ${color} ${font}`}
        >
            {text}
        </motion.div>
        
    );
};

export default AnimatedText;
