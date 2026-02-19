import React from 'react';
import { motion } from 'framer-motion';

const TarotCard = ({ card, isRevealed, onClick }) => (
  <motion.div 
    className="tarot-card-wrapper"
    whileHover={{ y: -5 }}
    onClick={onClick}
  >
    <div className={`tarot-card-inner ${isRevealed ? 'revealed' : ''}`}>
      <div className="tarot-card-front">
        <div className="tarot-design">✨</div>
      </div>
      <div className="tarot-card-back">
        <div className="card-content">
          <span className="card-name">{card?.name}</span>
        </div>
      </div>
    </div>
  </motion.div>
);
export default TarotCard;
