import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
export default Modal;
