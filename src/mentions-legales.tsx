import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import MentionsLegales from './components/MentionsLegales';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <MentionsLegales />
  </StrictMode>
);
// Prerendered at build time (vite.config.ts); the dev server serves an empty #root.
if (root.firstChild) hydrateRoot(root, app);
else createRoot(root).render(app);
