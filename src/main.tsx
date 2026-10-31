import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
// Built pages are prerendered (vite.config.ts): React takes the HTML over. The dev server serves an empty #root.
if (root.firstChild) hydrateRoot(root, app)
else createRoot(root).render(app)
