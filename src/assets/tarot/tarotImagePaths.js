// Mapping Tarot Card IDs to Image paths
export const getTarotImagePath = (cardId) => {
  // Production logic: images stored in /assets/tarot/cards/
  return `/assets/tarot/cards/card_${cardId}.webp`;
};

export const CARD_BACK_IMAGE = '/assets/tarot/card_back_cosmic.webp';
