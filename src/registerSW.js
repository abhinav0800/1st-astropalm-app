// ============================================
// AI Palm Reader - Service Worker Registration
// ============================================

import { registerSW as registerVitePWA } from 'virtual:pwa-register';

export function registerSW() {
  if ('serviceWorker' in navigator) {
    // Register PWA service worker
    const updateSW = registerVitePWA({
      immediate: true,
      onNeedRefresh() {
        // Show a prompt to the user to refresh
        if (confirm('New content available! Click OK to refresh.')) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log('🔮 App ready to work offline');
        showOfflineReadyNotification();
      },
      onRegistered(registration) {
        console.log('✅ Service Worker registered:', registration);
        
        // Check for updates periodically (every hour)
        if (registration) {
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        }
      },
      onRegisterError(error) {
        console.error('❌ Service Worker registration error:', error);
      },
    });
  }
}

// Show offline ready notification
function showOfflineReadyNotification() {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'sw-notification';
  notification.innerHTML = `
    <div class="sw-notification-content">
      <span class="sw-notification-icon">✨</span>
      <span class="sw-notification-text">App ready for offline use</span>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .sw-notification {
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
    }
    
    .sw-notification-content {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      background: rgba(16, 185, 129, 0.9);
      border-radius: 12px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
    }
    
    .sw-notification-icon {
      font-size: 18px;
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translateX(-50%) translateY(-10px);
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(notification);

  // Remove after animation
  setTimeout(() => {
    notification.remove();
    style.remove();
  }, 3000);
}

// Check if app is running as PWA
export function isPWA() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.includes('android-app://')
  );
}

// Get PWA display mode
export function getDisplayMode() {
  if (window.navigator.standalone === true) {
    return 'standalone-ios';
  }
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return 'standalone';
  }
  if (window.matchMedia('(display-mode: minimal-ui)').matches) {
    return 'minimal-ui';
  }
  if (window.matchMedia('(display-mode: fullscreen)').matches) {
    return 'fullscreen';
  }
  return 'browser';
    }
