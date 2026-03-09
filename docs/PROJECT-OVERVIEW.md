# Paradise Removals - Project Overview

## About the Project
A professional website for **Paradise Removals**, a furniture removals company based on the Gold Coast, Queensland, Australia.

- **Slogan**: "Make Your Move a Breeze"
- **Industry**: Furniture Removals / Moving Services
- **Target Market**: Residential and commercial customers on the Gold Coast

## Service Areas
- Arundel
- Southport
- Helensvale
- Coomera
- Labrador
- Parkwood

## Tech Stack
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.x | React framework (App Router) |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 4.x | Utility-first CSS framework |
| React | 19.x | UI library |

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm 9+ installed

### Installation
```bash
cd paradise-removals
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Project Structure
```
paradise-removals/
├── public/
│   └── images/           # Brand assets and photos
│       ├── logo.jpg      # Paradise Removals logo
│       ├── david.jpeg    # Crew leader portrait
│       ├── team.jpeg     # Full team photo
│       ├── consultation.jpeg  # In-home service photo
│       └── branding.jpg  # Brand identity mockup
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with fonts & metadata
│   │   ├── page.tsx      # Main homepage (assembles all sections)
│   │   └── globals.css   # Tailwind theme, animations, custom styles
│   └── components/
│       ├── Navbar.tsx     # Sticky navigation with mobile hamburger
│       ├── Hero.tsx       # Hero section with CTA
│       ├── Services.tsx   # 6 service cards grid
│       ├── WhyChooseUs.tsx # 6 feature highlights
│       ├── ServiceAreas.tsx # 6 Gold Coast suburb cards
│       ├── About.tsx      # Team section with photo
│       ├── Testimonials.tsx # Customer reviews
│       ├── QuoteForm.tsx  # Contact/quote form
│       ├── Footer.tsx     # 4-column footer
│       ├── WaveDivider.tsx # SVG wave section dividers
│       └── BackToTop.tsx  # Scroll-to-top button
├── docs/                  # Project documentation
└── package.json
```

## Deployment
Recommended deployment: **Vercel** (native Next.js support)

```bash
npm run build   # Creates production build
```

Other hosting options: Netlify, AWS Amplify, or any Node.js hosting.
