import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MentionsLegales from './components/MentionsLegales';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>,
);
