import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routes/';

createRoot(document.querySelector('#app') as HTMLElement).render(<App />);
