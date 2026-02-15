# 🔮 AI Palm Reader – Tarot & Astrology Guidance App

A production-ready Progressive Web App (PWA) for AI-powered palm reading, tarot guidance, horoscope, and daily spiritual insights.

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-ready-green)

## ✨ Features

- 🖐️ **AI Palm Reading** - Upload palm images for AI-powered line analysis
- 🃏 **Tarot Card Reading** - Love, Career, Finance, Personal Growth categories
- ♈ **Daily Horoscope** - Personalized zodiac readings
- 💬 **AI Chat** - Spiritual guidance through conversational AI
- 💕 **Love Reading** - Relationship compatibility insights
- 🌟 **Daily Guidance** - Energy focus, lucky elements, and daily advice

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS3 with Glassmorphism design
- **Animations:** Framer Motion + Lottie
- **PWA:** vite-plugin-pwa + Workbox
- **AI:** OpenRouter API (Vision + Text models)
- **Storage:** IndexedDB + LocalStorage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenRouter API key

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-palm-reader.git
cd ai-palm-reader

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Add your OpenRouter API key to .env
# VITE_OPENROUTER_API_KEY=your_key_here

# Start development server
npm run dev
