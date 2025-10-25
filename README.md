# jamesbovis.com

Personal portfolio website for James Bovis - Senior Front-End Engineer at Butternut Box.

## About

A clean, minimal portfolio showcasing professional experience, skills, and contact information. The site features:

- Professional profile with current role and company
- Work experience timeline spanning 7+ years in the industry
- Technical skills overview
- Social links (Email, GitHub, LinkedIn)
- Responsive design optimized for all devices

## Tech Stack

- **Framework**: [React 18](https://react.dev/) with TypeScript
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Netlify](https://netlify.com/) with continuous deployment

## Requirements

- Node.js >= 22.0.0
- Yarn package manager

## Development

### Installation

```bash
# Install dependencies
yarn install
```

### Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linting
yarn lint

# Type checking
yarn typecheck
```

### Local Development

The development server runs on `http://localhost:5173` by default. Hot Module Replacement (HMR) is enabled for fast feedback during development.

If using `nvm`, the project includes an `.nvmrc` file to ensure the correct Node version:

```bash
nvm use
```

## Production Build

The production build outputs to the `dist/` directory with optimized assets:

- Minified JavaScript and CSS
- Optimized images
- Cache-friendly asset hashing

## Deployment

The site is configured for automatic deployment on Netlify:

- **Build Command**: `yarn build`
- **Publish Directory**: `dist`
- **Node Version**: 22

Any push to the `master` branch triggers an automatic deployment.

### Netlify Configuration

The `netlify.toml` file includes:

- SPA routing configuration (redirects all routes to `index.html`)
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Asset caching optimization (1-year cache for `/assets/*`)

## Project Structure

```
jamesbovis.com/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles with Tailwind directives
│   ├── james.jpg         # Profile image
│   └── vite-env.d.ts     # Vite type definitions
├── dist/                 # Production build output (generated)
├── index.html            # HTML entry point
├── netlify.toml          # Netlify deployment configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Configured with React and TypeScript rules
- **Type Checking**: Pre-configured TypeScript checking script

## Browser Support

The site is built with modern web standards and supports all evergreen browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 James Bovis. All rights reserved.

## Contact

- Email: [hello@jamesbovis.com](mailto:hello@jamesbovis.com)
- GitHub: [@James-Bovis](https://github.com/James-Bovis)
- LinkedIn: [jamesbovis](https://www.linkedin.com/in/jamesbovis/)
