import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force rebuild timestamp: 2025-01-07 20:54:36
console.log('App starting - build timestamp: 2025-01-07 20:54:36');
createRoot(document.getElementById("root")!).render(<App />);
