import { storageService } from './storageService';

export const ratingService = {
  async shouldShowPrompt() {
    const sessions = await storageService.get('session_count') || 0;
    const hasRated = await storageService.get('has_rated') || false;
    
    // Update session count
    await storageService.set('session_count', sessions + 1);
    
    return sessions >= 5 && !hasRated;
  },
  
  async markAsRated() {
    await storageService.set('has_rated', true);
  }
};
