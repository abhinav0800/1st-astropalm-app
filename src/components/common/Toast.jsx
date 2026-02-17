import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ show, message, type = 'info', onClose }) => (
  <AnimatePresence>
    {show && (
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className={`toast toast-${type}`}
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);
export default Toast;
