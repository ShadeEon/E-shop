import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// 👇 1. Import TanStack Query essentials
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 👇 2. Create a QueryClient instance
const queryClient = new QueryClient({
  // Optional: Add default options here for global behavior
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👇 3. Wrap your App with the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);