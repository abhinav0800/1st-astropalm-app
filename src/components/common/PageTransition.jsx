import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, screenKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={screenKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
export default PageTransition;
