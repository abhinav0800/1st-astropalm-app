import { apiClient } from './apiClient';
import { VISION_MODEL, TEXT_MODEL } from '../config/aiModels';

const SYSTEM_PROMPT = `
You are a senior spiritual guide, tarot expert, and palm reader.
RULES:
1. Tone: Calm, symbolic, spiritual, and supportive.
2. NO fear-based language. NO death predictions.
3. NO medical, legal, or financial advice.
4. Output must be long-form, detailed, and beautifully structured.
5. If analyzing a palm, focus on character, strengths, and spiritual energy.
6. Language: Respond ALWAYS in the user's selected language.
7. Disclaimer: Always maintain that this is for guidance and reflection, not absolute future prediction.
`;

export const aiService = {
  // Vision Analysis (Palm Reading)
  async analyzePalm(imageUri, handType, language = 'en') {
    const payload = {
      model: VISION_MODEL.id,
      messages: [
        { role: 'system', content: `${SYSTEM_PROMPT} Current Language: ${language}` },
        {
          role: 'user',
          content: [
            { type: 'text', text: `Analyze this ${handType} hand palm. Focus on Heart, Head, Life, and Fate lines.` },
            { type: 'image_url', image_url: { url: imageUri } }
          ]
        }
      ]
    };
    return await apiClient.post('/chat/completions', payload);
  },

  // Text Generation (Tarot, Horoscope, Chat)
  async getGuidance(prompt, language = 'en') {
    const payload = {
      model: TEXT_MODEL.id,
      messages: [
        { role: 'system', content: `${SYSTEM_PROMPT} Current Language: ${language}` },
        { role: 'user', content: prompt }
      ],
      include_reasoning: true
    };
    return await apiClient.post('/chat/completions', payload);
  }
};
