# Paradise Removals - Component Documentation

## Component Architecture

All components are located in `src/components/` and are imported by `src/app/page.tsx`.

---

## Navbar (`Navbar.tsx`)
**Type**: Client Component (`"use client"`)

**Features**:
- Sticky navigation fixed to top
- Transparent on hero, solid navy on scroll (50px threshold)
- Logo + brand name (left)
- Nav links: Services, Why Us, Areas, About, Reviews, Contact (center)
- Phone CTA button (right)
- Mobile hamburger menu with slide-in panel

**State**:
- `scrolled` - toggles background color
- `mobileOpen` - controls mobile menu visibility

---

## Hero (`Hero.tsx`)
**Type**: Client Component

**Features**:
- Full viewport height (`min-h-screen`)
- Navy gradient background with golden sun glow
- Decorative floating circles
- Animated badge, headline, tagline, CTAs
- Stats bar (2,500+ moves, 4.9 rating, 100% insured)
- Wave divider at bottom

**Animations**: Staggered `fadeInUp` on page load

---

## Services (`Services.tsx`)
**Type**: Client Component

**Features**:
- 3x2 grid of service cards
- Each card: SVG icon, title, description
- Scroll-triggered fade-in animations with stagger

**Services**: Local Removals, Interstate Removals, Office Relocations, Packing Services, Furniture Assembly, Storage Solutions

---

## WhyChooseUs (`WhyChooseUs.tsx`)
**Type**: Client Component

**Features**:
- Navy gradient background
- 3x2 grid of feature items
- Each item: gold icon circle + title + description
- Glass-morphism style cards

**Features Listed**: Professional Team, Affordable Pricing, Stress-Free Experience, Fully Insured, On-Time Guarantee, Free Quotes

---

## ServiceAreas (`ServiceAreas.tsx`)
**Type**: Client Component

**Features**:
- Sand-light background
- 3x2 grid of location cards
- Location pin icons
- "Check Your Area" CTA

**Areas**: Arundel, Southport, Helensvale, Coomera, Labrador, Parkwood

---

## About (`About.tsx`)
**Type**: Client Component

**Features**:
- Two-column layout (text + image)
- Team photo from `/images/team.jpeg`
- Quick stats (10+ years, 15+ team, 6+ trucks)
- Floating "4.9 Star Rating" accent card
- "Get in Touch" CTA

---

## Testimonials (`Testimonials.tsx`)
**Type**: Client Component

**Features**:
- Navy gradient background
- 2x2 grid of review cards
- Glassmorphism card styling
- Quote marks, star ratings
- Customer name and location

---

## QuoteForm (`QuoteForm.tsx`)
**Type**: Client Component

**Features**:
- 3/5 + 2/5 column layout (form + sidebar)
- Form fields: Name, Phone, Email, Moving From/To, Date, Property Size, Details
- Client-side form submission with success state
- Sidebar: Benefits list, contact info
- Sticky sidebar on scroll

**State**: `submitted` - toggles between form and success message

---

## Footer (`Footer.tsx`)
**Type**: Server Component

**Features**:
- Dark navy gradient background
- 4-column layout: Brand, Quick Links, Service Areas, Contact
- Social media icons (Facebook, Instagram, Google)
- Copyright bar with Privacy/Terms links

---

## WaveDivider (`WaveDivider.tsx`)
**Type**: Server Component

**Props**:
| Prop | Type | Description |
|---|---|---|
| `fillColor` | string | Color of the wave shape |
| `bgColor` | string | Background color behind wave |
| `variant` | `"wave1" \| "wave2" \| "wave3"` | Wave shape style |
| `flip` | boolean | Vertically flip the wave |

---

## BackToTop (`BackToTop.tsx`)
**Type**: Client Component

**Features**:
- Fixed position button (bottom-right)
- Appears after scrolling 500px
- Gold gradient circular button
- Smooth scroll to top on click
