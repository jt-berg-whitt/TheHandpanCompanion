# The Handpan Companion — React (Vite) scaffold

This is a small React app (Vite) with four pages: Home, About, Book and Interviews.

Getting started


1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser (Vite default). If that port is already used, Vite will choose the next available port and show it in the terminal.

3. Build for production

```bash
npm run build
npm run preview
```

Notes

Deployment to GitHub Pages

This repository includes a GitHub Actions workflow that builds the site and publishes the `dist/` folder to the `gh-pages` branch on every push to `main`.

To enable GitHub Pages for this repository (do this on GitHub's website):

1. Go to your repository on github.com.
2. Click Settings → Pages (in the left sidebar).
3. Under "Build and deployment" or "Source", choose the `gh-pages` branch and set the folder to `/` (root) if required.
4. Save. The site will be available at `https://<your-username>.github.io/<repo-name>/` after the action runs and GitHub finishes configuring Pages.

Notes and SPA routing

- The project includes a `public/404.html` fallback so BrowserRouter routes will work correctly on GitHub Pages. The Action publishes the `dist/` site which includes the fallback.
- If you prefer not to use the fallback, you can switch to `HashRouter` in React which avoids server-side rewrites.
- If you add a custom domain later, add a `CNAME` file in the `public/` folder or configure it in the Pages settings.

