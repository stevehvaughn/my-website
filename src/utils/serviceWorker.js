// Service Worker registration utility
import { config } from './config.js';

export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported');
    return;
  }

  // Only register in production
  if (!config.isProduction) {
    console.log('Service Worker registration skipped in development');
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show update notification
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });

  // Handle service worker messages
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      window.location.reload();
    }
  });
}

// Show update notification
function showUpdateNotification() {
  const updateBanner = document.createElement('div');
  updateBanner.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #4CAF50;
      color: white;
      padding: 1rem;
      text-align: center;
      z-index: 10000;
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <span>A new version is available!</span>
      <button onclick="updateApp()" style="
        margin-left: 1rem;
        padding: 0.5rem 1rem;
        background: white;
        color: #4CAF50;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
      ">Update</button>
      <button onclick="this.parentElement.remove()" style="
        margin-left: 0.5rem;
        padding: 0.5rem 1rem;
        background: transparent;
        color: white;
        border: 1px solid white;
        border-radius: 4px;
        cursor: pointer;
      ">Later</button>
    </div>
  `;
  
  document.body.appendChild(updateBanner);
}

// Update app
window.updateApp = function() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
  }
};

// Check if app is running in standalone mode (PWA)
export function isPWA() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone ||
         document.referrer.includes('android-app://');
}

// Add to homescreen prompt
export function setupInstallPrompt() {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          }
          deferredPrompt = null;
        });
      });
    }
  });
}

// Handle offline contact form submissions
export function handleOfflineContactForm(formData) {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    navigator.serviceWorker.ready.then((registration) => {
      // Store form data for sync
      const request = new Request('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      return caches.open('contact-form-cache').then((cache) => {
        return cache.put(request, new Response('queued'));
      });
    }).then(() => {
      return navigator.serviceWorker.ready;
    }).then((registration) => {
      return registration.sync.register('contact-form');
    }).then(() => {
      console.log('Contact form queued for sync');
      return { success: true, message: 'Message queued for sending when online' };
    }).catch((error) => {
      console.error('Failed to queue contact form:', error);
      return { success: false, message: 'Failed to queue message' };
    });
  }
  
  return Promise.resolve({ success: false, message: 'Offline functionality not available' });
}

export default {
  registerServiceWorker,
  isPWA,
  setupInstallPrompt,
  handleOfflineContactForm
};