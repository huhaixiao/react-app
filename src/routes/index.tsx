// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './home/';
import { StoreContextProvider } from '@/stores';
import { About } from './about';
import { Dashboard } from './dashboard';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StoreContextProvider>
              <Home />
            </StoreContextProvider>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
