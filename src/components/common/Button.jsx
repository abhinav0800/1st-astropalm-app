import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false, 
  loading = false,
  fullWidth = false 
}) => {
  const baseStyles = 'btn';
  const variantStyles = `btn-${variant}`;
  const widthStyle = fullWidth ? 'btn-block' : '';
  
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
          <span>Processing...</span>
        </div>
      ) : children}
    </motion.button>
  );
};

export default Button;
