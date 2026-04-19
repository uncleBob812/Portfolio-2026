# Portfolio 2026 — Lead UX Designer & Art Director

A premium, dark editorial portfolio website for a Lead UX Designer with 10+ years of experience in FinTech, banking, and emerging tech. Built with clean HTML5, CSS3 (CSS variables), and Vanilla JavaScript.

**Live Demo:** [https://uncleBob812.github.io/Portfolio-2026/](https://uncleBob812.github.io/Portfolio-2026/)

## Design System

- **Style**: Dark Editorial / High‑End / Immersive
- **Visual Language**: Sharp edges (0px radius), bold typography, fluid animations
- **Colors**: 
  - Background: `#0a0a0a`
  - Cards: `#111111`
  - Surface: `#161616`
  - Primary Accent: `#d4f060` (Electric Lime)
  - Secondary Accent: `#f06040` (Coral Red)
- **Typography**: 
  - Headings: **Syne** (800 weight)
  - Body: **DM Sans** (300/400 weights)

## Features

- Custom magnetic cursor with trailing ring effect
- Smooth scroll‑reveal animations (IntersectionObserver)
- Scrolling marquee for skills/tech stack
- Responsive, mobile‑first layout (12‑column grid on desktop)
- Sticky navigation with anchor‑link smooth scrolling
- Hover‑driven project cards with scale effects
- Dark‑mode‑only aesthetic (no light mode toggle)
- Semantic HTML, accessible markup

## Sections

1. **Hero** – Name, role, availability dot, scrolling marquee
2. **About / Stats** – Key metrics in a clean grid
3. **Work Grid** – Selected projects with hover reveals
4. **Process** – 5‑step strategic framework (Discover → Deliver)
5. **Testimonials** – Typographic quotes from leaders
6. **Contact** – Full‑width inverted section with accent background

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/uncleBob812/Portfolio-2026.git
   cd Portfolio-2026
   ```

2. Open `index.html` in your browser, or run a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Visit `http://localhost:8000`

## Deployment to GitHub Pages

This repository is already configured for GitHub Pages (serves from the `main` branch). To deploy:

1. Push changes to `main`.
2. Go to **Settings → Pages** in the GitHub repository.
3. Ensure **Source** is set to `Deploy from a branch` and `main` branch.
4. The site will be published at `https://<username>.github.io/Portfolio-2026/`.

## Customization

- Edit `index.html` to update content.
- Modify CSS variables in `style.css` (`:root` section) to change colors, fonts, spacing.
- Adjust animation speeds and cursor behavior in `script.js`.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive down to 320px width
- No Internet Explorer support

## License

© 2026 Vladimir Nesterov. All rights reserved.

This design and code are for personal/portfolio use. Please attribute if reused.