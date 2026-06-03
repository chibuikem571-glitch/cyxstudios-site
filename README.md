# cyxstudios Hero Section

React + TypeScript + Tailwind CSS + Vite

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Features
- Full-screen video background (no overlays)
- Character-by-character animated heading
- Staggered fade-in animations
- Liquid glass UI components
- Fully responsive layout
- Inter font with antialiasing

## Images

Place images in the `public/` folder for simple referencing (example: `/my-image.png`).

Run the included organizer to move files into `public/images/` by type:

```bash
npm run sort-public
```

If you prefer imports from `src/`, put images in `src/assets/` and import them in components. A `src/custom.d.ts` file is included to allow TypeScript to import image files.

## Publishing / Make public

This project can be published to GitHub Pages and served at `cyxstudios.com`.

Steps:

1. Push this repository to GitHub (create a repo named e.g. `cyxstudios-site`) and set the default branch to `main`.
2. Ensure `public/CNAME` contains your custom domain (it is already present and set to `cyxstudios.com`).
3. GitHub Actions will build and deploy to the `gh-pages` branch on each push to `main` using `.github/workflows/deploy.yml`.
4. Configure your domain's DNS:
	- For apex domain (cyxstudios.com) add A records pointing to GitHub Pages IPs:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

	- Also add a CNAME for `www` (optional) pointing to `username.github.io` or use an ALIAS/ANAME if supported.
5. Wait for DNS propagation and GitHub will provision HTTPS certificate automatically.

Alternative: Deploy on Vercel or Netlify — connect the GitHub repo, and set the custom domain inside their dashboard (they provide DNS instructions or automatic setup).

If you want, I can create a GitHub repo for you and open a PR with these changes — but I cannot push to GitHub or register the domain on your behalf. You'll need to:

- create the GitHub repo and push the code
- purchase `cyxstudios.com` (if you don't already own it) and update DNS records at your domain registrar

After you push, the Action will run and publish the site. Let me know when you've pushed and I can help verify the deployment and DNS.
