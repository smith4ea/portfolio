# Copilot Instructions for Portfolio Project

## Project Overview
Personal UX Engineer portfolio showcasing full-stack development skills and usability principles. Frontend is React + Vite with Tailwind CSS. 

**Current focus**: Frontend only (might wire backend in the future).

## Architecture & Component System

### Atomic Design Pattern (Strict)
Components live in `src/components/` organized by atomic hierarchy:
- **Atoms** (`atoms/`): Reusable base UI units (button, icon, link, text)
- **Molecules** (`molecules/`): Combinations of atoms (card, input, dropdown, textarea, select, navlink)
- **Organisms** (`organisms/`): Complex sections (header, hero)
- **Templates** (`templates/`): Page layouts (layout.jsx wraps page content)
- **Pages** (`pages/`): Route destinations (home.jsx, projects.jsx, design-system.jsx)

### Routing
- React Router v7 in `App.jsx` defines all routes
- Three main routes: `/`, `/projects`, `/design-system`
- Header component (organism) appears on all pages automatically
- All page content wraps in `<Layout>` template for consistent spacing/styling

### Styling & Configuration
- **Tailwind CSS**: Primary styling method. Extended config in `tailwind.config.js`:
  - Custom font: `Bricolage Grotesque`
  - Semantic color palette: `primary`, `secondary`, `tertiary`, `error`, `success`, `warning` with variants (default, hover, active, disabled)
  - Dark theme: Base color `neutral-900` used in Layout
- **PostCSS**: Configured for Tailwind preprocessing
- All CSS in `src/index.css` (reset/globals) and component className props

## Key Files & Dependencies
- **Entry**: `main.jsx` → `App.jsx` (BrowserRouter setup) → Routes & Header
- **Hero Section**: `organisms/hero.jsx` - used on home, accepts imageUrl, title, subtitle, buttons
- **Hero Image**: `assets/images/heroimage.jpg` (referenced in home.jsx)
- **Icons**: `@heroicons/react` v2.2 (Icon atom wraps this)
- **React**: v19.2, **React Router**: v7.10, **Vite**: v7.2

## Development Workflow

### Scripts
```bash
npm run dev        # Start dev server with HMR (Vite)
npm run build      # Production build → dist/
npm run lint       # ESLint check (enforces no unused vars, react-hooks rules)
npm run preview    # Preview production build
```

### ESLint Rules
- Flat config in `eslint.config.js`
- Recommended rules + react-hooks + react-refresh plugins
- Rule: Unused vars ignored if uppercase (e.g., unused React import is OK)
- Target: JSX/ES2020+

## Code Patterns & Conventions

### Component Props
Components use destructured props with sensible defaults:
```jsx
// Button example (atoms/button.jsx)
export default function Button({
    variant = "primary",        // Supports: primary, secondary, tertiary, icon
    destructive = false,        // Swap color variants to error colors
    onClick,
    icon = null,                // Optional Icon atom
    iconPosition = "left",      // left | right
    className = "",             // Extend Tailwind classes
    children
})
```

### Variant Pattern
Use `variant` prop for presentational control. Button & likely other atoms follow this:
- Variants: `primary` (filled), `secondary` (outlined), `tertiary` (text only), `icon` (minimal)
- Error variants apply when `destructive={true}`

### Tailwind Utilities in Code
- **Spacing**: `px-6 py-2` (standard padding), `max-w-5xl mx-auto` (layout width)
- **Layout**: `flex`, `space-y-8` (stack children with gap), `grid` patterns emerging
- **Colors**: Reference semantic tokens from config (e.g., `text-primary-default`, `bg-neutral-900`)
- **Responsive**: Tailwind breakpoints (sm, md, lg) expected but verify in components

### File Naming
- Lowercase, hyphen-separated filenames: `button.jsx`, not `Button.jsx`
- Directories also lowercase: `atoms/`, `molecules/`
- Export default function with PascalCase name matching filename intent

## When to Extend

### Adding Components
1. Determine atomic level (atom/molecule/organism)
2. Place in appropriate folder
3. Use existing color/spacing tokens from `tailwind.config.js`
4. Follow variant pattern if component has presentation modes
5. Export as default

### Adding Routes
1. Create page in `src/pages/`
2. Add `<Route>` in `App.jsx`
3. Page should import `Layout` template and wrap content
4. Update Header navigation links if needed

### Image Assets
- Store in `src/assets/images/`
- Import and pass as props to Hero or other components
- Currently using heroimage.jpg

## Testing & Debugging
- No test framework configured yet (backlog item)
- Use `npm run lint` before commits
- Dev server runs on localhost:5173 (Vite default)
- Use React DevTools browser extension for component inspection

## Current Branch & Git Workflow
- Main development branch: `dev`
- Feature branches: `feature/*` (e.g., `feature/darkmode` recently pushed)
- Commit before pushing; `git push -u origin [branch-name]`

## Next Steps / Known TODOs
- Backend integration (TBD technology)
- Finish design-system page (currently stub)
- Dark mode feature (branch exists)
- Tests & test framework selection
