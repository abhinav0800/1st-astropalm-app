export const analyticsService = {
  logEvent(eventName, params = {}) {
    if (import.meta.env.PROD) {
      // Connect your provider here (Firebase, Mixpanel, etc.)
      console.log(`[Analytics]: ${eventName}`, params);
    } else {
      console.log(`[Dev-Analytics]: ${eventName}`, params);
    }
  },
  
  logScreen(screenName) {
    this.logEvent('screen_view', { screen_name: screenName });
  }
};
