# Crias na Floresta - Website Project

## Project Overview

Website for "Crias na Floresta", a forest school in Portugal. Built with Next.js 16, Tailwind CSS, and Payload CMS. The site is mostly complete with all pages and design implemented - focus is now on making content manageable through CMS and final refinements.

**Live Site**: https://crias-na-floresta.vercel.app
**Repository**: https://github.com/gisete/crias-na-floresta

## Tech Stack

- **Frontend**: Next.js 16.0.3 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **CMS**: Payload CMS v2
- **Database**: Supabase PostgreSQL
- **Storage**: Supabase Storage (for images/media)
- **Hosting**: Vercel (free tier)
- **Fonts**: Cormorant (headings) & Libre Franklin (body)

## Current Status

### ✅ Completed

- All page layouts and structure
- Design system fully implemented (see `src/app/globals.css`)
- Hero component (video/image variants)
- Navigation and footer
- Gallery implementation (final version)
- Responsive layouts (desktop)
- Logo and brand assets
- Portuguese content (mostly finalized)
- Basic Payload CMS setup

### 🚧 Remaining Tasks

1. **Convert content to Payload CMS**
   - Create Payload collections for all text sections
   - Create collection for photos/media
   - Create collection for navigation links
   - Update pages to fetch content from Payload API

2. **Mobile design refinement**
   - Review and optimize all pages for mobile
   - Test on various screen sizes
   - Fine-tune spacing and typography for mobile

3. **New FAQ section**
   - Design and implement FAQ component
   - Create Payload collection for FAQs
   - Add FAQ page or section

4. **Cookie banner**
   - Implement GDPR-compliant cookie consent banner
   - Style to match site design
   - Store user preference

5. **Metadata review**
   - Audit all page metadata for SEO
   - Add Open Graph tags
   - Ensure proper Portuguese localization

6. **Site uptime solution**
   - Implement GitHub Action to ping site weekly
   - Prevent Vercel/Supabase free tier from sleeping

## Project Structure

```
/crias-na-floresta
├── /src
│   ├── /app
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Homepage with video hero
│   │   ├── /quem-somos            # About page
│   │   ├── /a-floresta            # The forest page
│   │   ├── /galeria               # Gallery page (complete)
│   │   └── /inscricoes            # Basic static page
│   ├── /components
│   │   ├── /layout                # Header, Footer, Navigation
│   │   └── /shared                # Hero, Container components
│   └── /payload
│       ├── payload.config.ts      # Payload CMS configuration
│       └── /collections           # CMS collections (to be created)
├── /public
│   ├── /images                    # Site images
│   ├── /videos                    # Site videos
│   └── logo files                 # Brand assets
└── .env                           # Environment variables
```

## Design System

**Source of Truth**: `src/app/globals.css`

### Colors

All colors are defined in globals.css using CSS variables. Do NOT add colors to tailwind.config.ts - use the existing CSS custom properties instead.

### Typography

- **Headings**: Cormorant (font-heading)
- **Body**: Libre Franklin (font-body)
- Weights and sizes are defined in globals.css

### Components

All existing components follow the established design patterns. New components should match the existing visual style.

## Payload CMS Implementation

### Required Collections

1. **Pages Collection**

   ```typescript
   // For managing page content sections
   - Title
   - Slug (auto-generated from title)
   - Sections (array of section blocks)
     - Section title
     - Section content (rich text)
     - Section order
   ```

2. **Media Collection**

   ```typescript
   // For all site images/videos
   - File (upload to Supabase Storage)
   - Alt text (Portuguese)
   - Caption (optional)
   - Category (gallery, hero, general)
   ```

3. **Navigation Collection**

   ```typescript
   // For header/footer links
   - Link text
   - Link URL
   - Link order
   - Location (header/footer)
   ```

4. **FAQ Collection** (to be created)
   ```typescript
   - Question
   - Answer (rich text)
   - Order
   - Category (optional)
   ```

### Supabase Storage Setup

- Configure Supabase Storage bucket for media
- Update Payload config to use Supabase adapter
- Ensure proper CORS settings for Vercel domain

## Important Technical Notes

### Dependencies

**Always use `--legacy-peer-deps` flag** when installing packages due to React 19 compatibility with Payload CMS v2:

```bash
npm install [package] --legacy-peer-deps
```

### Environment Variables

```
PAYLOAD_SECRET=<random-secret>
DATABASE_URI=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
NEXT_PUBLIC_SERVER_URL=http://localhost:3000 (or production URL)
NEXT_PUBLIC_SUPABASE_URL=<supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase-anon-key>
```

### Payload Integration

Currently commented out in `next.config.js` until database is configured. Uncomment when ready:

```javascript
const { withPayload } = require('@payloadcms/next/withPayload');
// ... rest of config
```

## Page-Specific Notes

### Homepage (/)

- Video hero (final implementation)
- Multiple content sections
- All content should load from Payload

### Quem Somos (/quem-somos)

- About page with team/philosophy content
- Image hero

### A Floresta (/a-floresta)

- Information about the forest location
- Image hero

### Galeria (/galeria)

- **COMPLETE** - Gallery grid implementation
- Only needs: CMS integration for adding/removing photos
- Keep existing layout and functionality

### Inscrições (/inscricoes)

- Simple static informational page
- No complex forms or registration system needed

## Development Guidelines

### Styling

- Use Tailwind utility classes for layout
- Reference globals.css for colors and typography
- Follow existing component patterns
- Mobile-first approach for new components

### Content Management

- All user-facing text should be manageable through Payload
- Portuguese is the primary language
- Maintain semantic HTML structure

### Performance

- Optimize images through Supabase Storage
- Use Next.js Image component
- Lazy load gallery images

## Cookie Banner Requirements

- Must be GDPR compliant
- Should appear on first visit
- Store consent in localStorage
- Minimal, unobtrusive design matching site aesthetic
- Portuguese language
- Options: Accept All, Reject All, Customize (optional)

## FAQ Section Requirements

- To be determined - needs design discussion
- Should be manageable through Payload CMS
- Consider: accordion pattern, searchable, categorized

## Site Uptime Strategy

### Problem

- Vercel free tier may sleep after inactivity
- Supabase free tier may pause after inactivity
- Need to keep site responsive without upgrading to paid plans

### Solution

Implement GitHub Action to ping site weekly:

```yaml
# .github/workflows/keep-alive.yml
name: Keep Site Alive
on:
  schedule:
    - cron: '0 12 * * 1' # Every Monday at noon
  workflow_dispatch: # Allow manual trigger

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping site
        run: |
          curl -I https://crias-na-floresta.vercel.app
          curl -I https://crias-na-floresta.vercel.app/quem-somos
          curl -I https://crias-na-floresta.vercel.app/a-floresta
```

## Testing Checklist

### Pre-Launch

- [ ] All pages load correctly
- [ ] All images display properly from Supabase
- [ ] Navigation works on all pages
- [ ] Gallery loads and displays photos
- [ ] Mobile responsive on all pages
- [ ] Cookie banner functions correctly
- [ ] FAQ section works
- [ ] Metadata correct on all pages
- [ ] Payload admin accessible
- [ ] Client can add/edit content
- [ ] Site stays up on free tier (test for 1-2 weeks)

### Browser Testing

- Chrome (desktop & mobile)
- Safari (desktop & mobile)
- Firefox
- Edge

## Common Commands

```bash
# Development
npm run dev                    # Start dev server
npm run dev --legacy-peer-deps # If peer dependency issues

# Build & Deploy
npm run build                  # Production build
npm start                      # Start production server

# Payload
npm run payload                # Payload CLI commands

# Dependencies
npm install <package> --legacy-peer-deps
```

## Important Notes for Claude Code

1. **Always check globals.css first** for colors, fonts, and design tokens
2. **Do not modify existing components** unless specifically asked - they are finalized
3. **Match the Portuguese language** style and tone when adding/editing content
4. **Use existing patterns** - the site has established component patterns to follow
5. **Gallery is complete** - only add CMS integration, don't change functionality
6. **Mobile refinement** means optimization, not redesign
7. **Keep it simple** - this is a small forest school site, not a complex web app
8. **Free tier conscious** - all solutions must work within Vercel/Supabase free tiers

## Questions for Clarification

When implementing features, consider asking:

- Should this content be editable through Payload?
- Does this need to work on mobile specifically?
- Should this match an existing component pattern?
- Is this addition necessary for the client to manage?

## Client Access

The client will need:

- Access to Payload admin panel at `/admin`
- Ability to add/edit/remove:
  - Page text content
  - Gallery photos
  - Navigation links
  - FAQ items (once implemented)
- Simple, intuitive interface (Payload provides this)

## Success Criteria

Project is complete when:

1. All content is manageable through Payload CMS
2. Mobile design is refined and tested
3. FAQ section is implemented and functional
4. Cookie banner is working and compliant
5. All page metadata is reviewed and optimized
6. Site stays responsive on free tier (with keep-alive action)
7. Client can successfully manage content without developer help

---

**Last Updated**: December 30, 2024
**Project Status**: ~85% complete, CMS integration and polish remaining
