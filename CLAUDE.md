# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for James Bovis, built as a single-page React application. It's a minimal, performant site showcasing professional experience, with dynamic features like theme switching and live weather display.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server (runs on http://localhost:5173)
yarn dev

# Build for production
yarn build

# Preview production build locally
yarn preview

# Run ESLint
yarn lint

# Type checking only (no emit)
yarn typecheck
```

## Architecture

### Tech Stack
- **React 18** with TypeScript and Vite 5
- **Tailwind CSS** with dark mode support (class-based)
- **Lucide React** for icons
- **Open-Meteo API** for weather data (no API key required)

### Project Structure

```
src/
├── App.tsx                         # Main application component (single-page layout)
├── main.tsx                        # Entry point with ThemeProvider
├── components/
│   ├── ThemeToggle.tsx            # Dark/light mode toggle button
│   └── TemperatureUnitToggle.tsx  # Celsius/Fahrenheit toggle button
├── contexts/
│   └── ThemeContext.tsx           # Theme state management with localStorage persistence
├── hooks/
│   └── useWeather.ts              # Fetches live weather data from Open-Meteo API
└── utils/
    ├── weatherIcons.tsx           # Maps weather codes to emoji icons
    └── temperatureUnit.ts         # Determines default temp unit based on locale
```

### Key Architectural Patterns

**Theme System**: Uses React Context (ThemeContext.tsx) with localStorage persistence. Theme preference checks localStorage first, then falls back to system preference (`prefers-color-scheme`). The theme is applied by adding/removing the `dark` class on the document root, which Tailwind uses for dark mode styling.

**Weather Integration**: The useWeather hook fetches current weather for Aylesford, Kent coordinates from the Open-Meteo API. It supports both Celsius and Fahrenheit units, with the default determined by the user's locale (src/utils/temperatureUnit.ts). On error, it gracefully falls back to default values to prevent UI breakage.

**Performance Optimizations**:
- Vite config (vite.config.ts) includes manual chunk splitting (React vendor, Lucide icons, other vendors)
- Terser minification with console/debugger removal in production
- The App component is memoized to prevent unnecessary re-renders
- Lucide React is excluded from Vite's dependency optimization due to its size

### Build Configuration

**Vite** handles building with:
- Manual chunk splitting for optimized loading
- Terser minification (drops console logs and debuggers in production)
- Chunk size warning limit set to 600KB
- Compressed size reporting enabled

**Netlify** deployment configuration (netlify.toml):
- Build command: `yarn build`
- Publish directory: `dist`
- SPA routing: All routes redirect to index.html
- Security headers configured (X-Frame-Options, X-Content-Type-Options, etc.)
- Asset caching: 1-year cache for `/assets/*`

### Styling Approach

Uses Tailwind CSS exclusively with a utility-first approach. Dark mode implemented via Tailwind's `dark:` variant (requires `dark` class on root element). Color palette is based on neutral shades with semantic naming (e.g., `text-neutral-900 dark:text-neutral-100`).

## Node Version

Requires Node.js >= 22.0.0 (specified in package.json engines field). An .nvmrc file is present for nvm users.

## Deployment

The site auto-deploys to Netlify on pushes to the `master` branch. The build process is configured in netlify.toml.
