# Aura Persona Landing Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern SaaS landing page aesthetic combining sleek navy-gold luxury palette with professional service presentation. Draw inspiration from premium tech brands while maintaining unique identity through bold color contrasts.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark Navy: #030617 (primary background)
- Deep Navy: #04213a (section backgrounds, cards)
- Blue: #083a6a (accents, hover states)
- Gold: #ffbf00 (primary CTA, highlights)
- Yellow: #ffd400 (secondary accents, gradients)

**Gradients**: Use navy-to-blue and gold-to-yellow gradients for CTA sections and overlays

### B. Typography
- **Headings**: Bold, modern sans-serif (Inter/Outfit)
- **Body**: Clean, readable sans-serif with comfortable line-height
- **Hierarchy**: Large hero headings (3xl-5xl), section titles (2xl-4xl), body text (base-lg)

### C. Layout System
**Spacing**: Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl
- Grid gaps: gap-6 md:gap-8

### D. Component Specifications

**Header**
- Minimalistic sticky header with transparent/solid background on scroll
- Logo + "Aura Persona" text on left
- Navigation with Lucide icons (Home, About, Services, Testimonials, Team, Contact)
- Mobile: Hamburger menu

**Hero Section**
- Full-viewport eye-catching carousel (Swiper) with 3-4 slides
- Each slide: Centered content with h2 heading, paragraph, and prominent gold CTA button
- Dark navy background with subtle gradient overlay
- Smooth transition animations between slides

**About Us Section**
- Two-column split layout (image left 40%, content right 60%)
- Professional image showcasing company/team
- Heading, multi-paragraph description
- Gold "Explore Services" button

**Services Part 1**
- 4 featured services in grid (2x2 on desktop, stack on mobile)
- Each service: Lucide icon, professional image, heading, detailed explanation
- Cards with deep navy backgrounds and subtle borders

**Call to Action Section**
- Full-width bold gradient background (gold-to-yellow or navy-to-blue)
- Large centered heading with compelling copy
- Prominent "Get Started" button
- High contrast text over gradient

**Services Part 2**
- 6 services in responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Lucide icons (large, colored in gold/yellow)
- Service title and description
- Hover effects with subtle elevation

**Testimonials Section**
- 3 horizontal marquee rows with 30 total testimonials
- Row 1: 10 testimonials, 15s animation rightward
- Row 2: 10 testimonials, 9s animation leftward  
- Row 3: 10 testimonials, 15s animation rightward
- Each testimonial: Quote, name, position/company, star rating
- Cards with semi-transparent backgrounds

**FAQ Section**
- Modern accordion design with +/- icons
- Questions in bold with gold accent on active
- Smooth expand/collapse animations
- Clean dividers between items

**Team Section**
- Swiper carousel with 8 team members
- Portrait images (circular or rounded squares)
- Name, position, short bio per member
- Navigation arrows and pagination dots
- 3-4 visible on desktop, 2 on tablet, 1 on mobile

**Contact Section**
- Two-column layout (form left, map/info right)
- Form fields: Name, Email, Message (textarea)
- Gold submit button
- Embedded Google Map
- Company details: Email, phone, social media icons (LinkedIn, Twitter, Instagram)

**Footer**
- Simple centered copyright text
- Optional: Quick links, social icons
- Deep navy background

**Loading Screen**
- Custom animated loader (spinner/pulse with gold accent)
- Company logo/name
- Smooth fade-out transition when content loads

### E. Animations & Interactions
- **AOS Effects**: Fade-up, fade-in, zoom-in throughout all sections
- Stagger animations for grid items
- Smooth scroll behavior for navigation links
- Hover states: Subtle scale/elevation on cards, buttons
- Carousel: Auto-play with pause on hover

### F. Images
**Hero Carousel**: 3-4 modern, high-quality background images representing professional services (abstract tech, team collaboration, modern office)
**About Us**: Professional team or office environment photo
**Services Part 1**: 4 relevant service illustration/photos
**Team Section**: 8 professional portrait photos

### G. Responsive Breakpoints
- Mobile: < 768px (stack all layouts, full-width elements)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, max containers)

### H. Accessibility
- High contrast navy-gold combinations for readability
- Focus states on all interactive elements
- Semantic HTML structure for screen readers
- Keyboard navigation support for carousel/accordion

## Design Principles
1. **Luxury Simplicity**: Clean layouts with bold navy-gold contrasts
2. **Dynamic Movement**: Carousels and marquees create energy without overwhelming
3. **Professional Trust**: Structured information hierarchy builds credibility
4. **Seamless Flow**: AOS animations guide users through the journey