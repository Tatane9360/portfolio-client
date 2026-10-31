import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import MentionsLegales from './components/MentionsLegales';

/** HTML of each page, written into its #root at build time (vite.config.ts), then hydrated. */
export const pages = () => ({
  'index.html': renderToString(<StrictMode><App /></StrictMode>),
  'mentions-legales.html': renderToString(<StrictMode><MentionsLegales /></StrictMode>),
});
