import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';
import { LocaleProvider } from './contexts/LocaleProvider.tsx';
import { ThemeProvider } from './contexts/ThemeProvider.tsx';
import { TemperatureUnitProvider } from './contexts/TemperatureUnitProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <TemperatureUnitProvider>
          <App />
        </TemperatureUnitProvider>
      </ThemeProvider>
    </LocaleProvider>
  </StrictMode>
);
