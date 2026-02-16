import { API_CONFIG } from '../config/aiModels';

export const apiClient = {
  async post(endpoint, data) {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('API Key is missing. Please check your .env file.');
    }

    try {
      const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          ...API_CONFIG.headers,
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API Client Error:', error);
      throw error;
    }
  }
};
