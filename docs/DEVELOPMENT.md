# Paradise Removals - Development Guide

## Local Development

### Quick Start
```bash
cd paradise-removals
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |

## Adding New Content

### Adding a New Service
Edit `src/components/Services.tsx`:
```tsx
// Add to the services array:
{
  title: "Your New Service",
  description: "Description of the service.",
  icon: (/* SVG icon JSX */),
}
```

### Adding a New Service Area
Edit `src/components/ServiceAreas.tsx`:
```tsx
// Add to the areas array:
{
  name: "Suburb Name",
  description: "Brief description of service in this area.",
}
```

### Adding a New Testimonial
Edit `src/components/Testimonials.tsx`:
```tsx
// Add to the testimonials array:
{
  name: "Customer Name",
  location: "Suburb",
  rating: 5,
  text: "Their review text here.",
}
```

### Updating Contact Info
Contact information appears in multiple places:
- `src/components/Navbar.tsx` - Phone number in CTA button
- `src/components/Hero.tsx` - Phone number in hero CTA
- `src/components/QuoteForm.tsx` - Phone, email, location in sidebar
- `src/components/Footer.tsx` - Phone, email, location, hours

Search for `1300 XXX XXX` to find all phone number instances.
Search for `info@paradiseremovals.com.au` for email instances.

### Updating Images
Place new images in `public/images/` and reference them with `/images/filename`.

To update the logo:
1. Place new logo file in `public/images/`
2. Update `src/components/Navbar.tsx` and `src/components/Footer.tsx`

## Form Integration

The quote form (`QuoteForm.tsx`) currently has client-side only submission. To connect it to a backend:

### Option A: Email via API Route
Create `src/app/api/quote/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using a service like SendGrid, Resend, or Nodemailer
  return NextResponse.json({ success: true });
}
```

### Option B: Third-Party Form Service
- [Formspree](https://formspree.io/) - Simple form backend
- [Netlify Forms](https://www.netlify.com/products/forms/) - If deploying to Netlify
- [Google Forms](https://forms.google.com/) - Free alternative

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Deploy automatically on push

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-Hosted
```bash
npm run build
npm start  # Runs on port 3000
```

## SEO Checklist
- [x] Meta title and description
- [x] Open Graph tags
- [x] Semantic HTML structure
- [x] Alt text on images
- [x] Heading hierarchy (h1 > h2 > h3)
- [ ] Add robots.txt
- [ ] Add sitemap.xml
- [ ] Add structured data (LocalBusiness schema)
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
