# Aspire Card Management Portal

A React-based card management application built with TypeScript and Vite.

## Tech Stack & Libraries

### Core Technologies
- **React** (v18.3.1) - Frontend framework
- **TypeScript** (v5.5.3) - Type checking and for better development experience
- **Vite** (v5.4.2) - Frontend Tooling & bundling

### State Management
- **Zustand** (v4.5.2) - Lightweight state management

### Routing
- **React Router DOM** (v6.22.3) - Client-side routing

### Styling
- **Tailwind CSS** (v3.4.1) - CSS framework
- **CLSX** (v2.1.0) - Utility for className strings

### UI/UX
- **React Toastify** (v11.0.5) - Toast notifications

### Development Tools
- **ESLint** (v9.9.1) - Code linting
  - @eslint/js
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh
- **TypeScript ESLint** (v8.3.0) - TypeScript-specific linting rules

## Project Setup

1. Clone the repository
```bash
git clone [repository-url]
cd aspire-card-management
```

2. Install dependencies - yarn

3. Start the development server - yarn dev

4. Build for production - yarn build


## Data Management

I'm using Zustand for state management, which provides:
- Centralized state management
- Simple and intuitive
- Built-in TypeScript support
- No boilerplate code
- Easy integration with React components

## Development Workflow
1. **Type Checking**: TypeScript is configured to provide static type checking
2. **Code Quality**: ESLint is set up to maintain code quality and consistency
3. **Styling**: Tailwind CSS is used for styling with PostCSS for processing
4. **Routing**: React Router handles navigation and routing
5. **State Management**: Zustand manages application state
6. **Notifications**: React Toastify provides user feedback


## Available Scripts

- `yarn run dev` - Start development server
- `yarn run build` - Build for production
- `yarn run preview` - Preview production build
- `yarn run lint` - Run ESLint for code linting
