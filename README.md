# The Wild Oasis (Course project)

A larger Vite + React project built during the Jonas Schmedtmann course. This repository demonstrates a more complete app structure including pages, custom hooks, React Context, services and integration with Supabase for backend storage.

## Key features

- Multi-page app with routing
- Custom hooks and services for data fetching
- React Context for global state and theming
- Supabase integration for persistence (auth, database)
- Styled components / CSS-in-JS patterns for scoped UI styling

## Tech

- React + Vite
- Supabase (client usage in `src/services/`) for backend services
- styled-components (or similar CSS-in-JS)
- ESLint + Prettier configs included

## Environment & secrets

This project expects runtime API credentials to be provided via environment variables rather than hardcoding them in source. For Vite projects, environment variables should start with `VITE_`.

Create a `.env.local` file at the project root with the following variables (example):

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your-public-anon-or-service-key
```

Important security notes:
- Do NOT commit `.env.local` to the repository. Add it to `.gitignore`.
- Never check in secret keys. Use the anon/public key for client usage; keep service-role keys only on secure servers.
- I noticed `src/services/supabase.js` currently contains a hard-coded Supabase key — it's important to remove that and use environment variables instead. If that key is a service-role key, rotate/revoke it in the Supabase dashboard immediately.

## How supabase is used

- The client is created in `src/services/supabase.js` with `createClient(...)` and used by the app's services/hooks to read and write data.
- Replace any hard-coded values with `import.meta.env.VITE_SUPABASE_URL` and `import.meta.env.VITE_SUPABASE_KEY` (Vite) or `process.env.REACT_APP_*` (CRA) depending on your build setup.

Example (Vite) change in `src/services/supabase.js`:

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
```

## Run locally

1. Install dependencies

```powershell
npm install
```

2. Add a `.env.local` with your `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` (see above)

3. Start dev server

```powershell
npm run dev
```

4. Build for production

```powershell
npm run build
```

## Deployment

- When deploying (Vercel, Netlify, etc.) configure the same environment variables in the provider's dashboard.

## Notes & next steps

- I can remove the hard-coded key from `src/services/supabase.js`, update the code to read from environment variables, and add `.env.local` to `.gitignore` for you. I can also help rotate the exposed key if you'd like — let me know and I will implement these changes and create the commit.

---
_README updated to document Supabase usage, styled-components and secure handling of API keys._


