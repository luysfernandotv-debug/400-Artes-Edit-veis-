import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure lt-v2 custom element is registered with the correct origin if p.js hasn't initialized it
if (typeof window !== 'undefined' && !customElements.get('lt-v2')) {
  class LtV2Element extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const shadow = this.attachShadow({ mode: 'open' });
      const getAttr = this.getAttribute.bind(this);
      const videoId = getAttr('v') || '';
      const ar = getAttr('ar') || '16:9';

      const searchParams = new URLSearchParams();
      searchParams.set('ar', ar);

      const skipAttrs = new Set(['v', 'ar', 'class', 'style', 'id']);
      for (const attr of Array.from(this.attributes)) {
        if (!skipAttrs.has(attr.name)) {
          searchParams.set(attr.name, attr.value);
        }
      }

      const legacyParams = getAttr('p');
      if (legacyParams) {
        legacyParams.split('&').forEach((pair) => {
          const kv = pair.split('=');
          if (kv[0]) searchParams.set(kv[0], kv[1] || '');
        });
      }

      let ratio = '16/9';
      if (ar === 'square') ratio = '1/1';
      else if (ar.includes(':')) ratio = ar.replace(':', '/');
      else ratio = ar;

      shadow.innerHTML = `<style>:host{display:block;max-width:1280px;margin:auto;width:100%;height:100%}.v{position:relative;width:100%;height:100%;aspect-ratio:${ratio};overflow:hidden;border-radius:0px;background:#000}iframe{position:absolute;inset:0;width:100%;height:100%;border:0}</style><div class="v"><iframe src="https://app.litevideo.net/embed/${videoId}?${searchParams.toString()}" loading="lazy" allowfullscreen></iframe></div>`;
    }
  }
  try {
    customElements.define('lt-v2', LtV2Element);
  } catch (err) {
    console.warn('lt-v2 registration:', err);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
