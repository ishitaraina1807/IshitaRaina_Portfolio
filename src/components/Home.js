import React from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 50 }}
      exit={{ opacity: 0, y: -20 }}
    >
     <h1 className="text-gray-200 text-6xl">Hello Page</h1>
    </motion.div>
  );
};

export default MyComponent;
