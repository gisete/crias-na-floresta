# Crias na Floresta - Website

Website for "Crias na Floresta", a forest school in Portugal. This is the foundation setup with Next.js 16, Tailwind CSS, and Payload CMS.

## Tech Stack

- **Next.js**: 16.0.3 (App Router)
- **React**: 19
- **TypeScript**: 5
- **Styling**: Tailwind CSS 3.4
- **CMS**: Payload CMS v2
- **Database**: Supabase PostgreSQL
- **Fonts**: Cormorant (headings) & Libre Franklin (body)

## Project Structure

```
/crias-na-floresta
├── /src
│   ├── /app                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout with fonts
│   │   ├── page.tsx              # Homepage
│   │   ├── /quem-somos          # About page
│   │   ├── /a-floresta          # The forest page
│   │   ├── /galeria             # Gallery page
│   │   └── /inscricoes          # Registration page
│   ├── /components
│   │   ├── /layout              # Header, Footer, Navigation
│   │   └── /shared              # Reusable components (Hero, Container)
│   └── /payload
│       ├── payload.config.ts    # Payload CMS configuration
│       └── /collections         # CMS collections (empty for now)
├── /public
│   ├── /images                  # Image assets
│   └── /videos                  # Video assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Supabase account and project (for database)

### Installation

1. **Clone the repository** (or you're already here!)

2. **Install dependencies:**

```bash
npm install --legacy-peer-deps
```

Note: `--legacy-peer-deps` is needed due to React 19 compatibility with Payload CMS v2.

3. **Set up environment variables:**

```bash
cp .env.example .env
```

Edit `.env` and configure:
- `PAYLOAD_SECRET`: Generate a random secret (e.g., `openssl rand -base64 32`)
- `DATABASE_URI`: Your Supabase PostgreSQL connection string (see `.env.example` for format)
- `NEXT_PUBLIC_SERVER_URL`: Your server URL (default: `http://localhost:3000`)

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

5. **Access Payload CMS Admin (Optional):**

Note: Payload integration is currently commented out in `next.config.js` until the database is configured. To enable:
- Uncomment the Payload import and integration in `next.config.js`
- Ensure your Supabase database connection is working
- Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload admin panel
- On first run, you'll be prompted to create an admin user

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run payload` - Run Payload CLI commands

## Pages

All pages are fully responsive and include:

1. **/** - Homepage with video hero
2. **/quem-somos** - About page
3. **/a-floresta** - The forest page
4. **/galeria** - Gallery page
5. **/inscricoes** - Registration page

## Components

### Hero Component

```typescript
<Hero
  type="video" | "image"
  videoSrc="/path/to/video.mp4"
  imageSrc="/path/to/image.jpg"
  alt="Alt text"
  title="Hero Title"
  subtitle="Hero Subtitle"
/>
```

Features:
- Full viewport height
- Video or image background
- Overlay for text readability
- Responsive (mobile-friendly)

### Container Component

```typescript
<Container className="py-16">
  {/* Your content */}
</Container>
```

Provides consistent max-width and padding across the site.

## Typography

- **Headings**: Cormorant (weights: 400, 600, 700)
- **Body**: Libre Franklin (weights: 400, 500, 600)

Configured in Tailwind:
- `font-heading` - Use for headings
- `font-body` - Use for body text

## Payload CMS

### Collections

Currently configured with:

1. **Users** - Admin authentication
2. **Media** - File uploads (stored in `/public/media`)

### Adding Content Schemas

Content schemas will be added in phase 2. The infrastructure is ready in:
- `src/payload/payload.config.ts`
- `src/payload/collections/` (empty, ready for schemas)

## Database - Supabase PostgreSQL

The project is configured to use Supabase PostgreSQL with Payload CMS.

### Setup Instructions

1. **Create a Supabase project:**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Wait for the database to be provisioned

2. **Get your connection string:**
   - Navigate to Settings > Database in your Supabase dashboard
   - Find "Connection string" and select "URI" format
   - Copy the connection string (it looks like: `postgresql://postgres.[ref]:[password]@...`)
   - Replace `[password]` with your actual database password

3. **Update your `.env` file:**
```
DATABASE_URI=postgresql://postgres.[your-ref]:[your-password]@aws-0-[region].pooler.supabase.com:6543/postgres
```

4. **Enable Payload integration:**
   - Uncomment the Payload lines in `next.config.js`
   - Run `npm run dev` and Payload will automatically create the necessary tables

## Styling

### Tailwind Configuration

Color placeholders defined in `tailwind.config.ts`:
- `primary` - To be defined in phase 2
- `secondary` - To be defined in phase 2
- `forest` - To be defined in phase 2
- `earth` - To be defined in phase 2

## Development Notes

- All pages have proper SEO metadata
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Mobile-responsive layout
- Semantic HTML throughout
- Portuguese content placeholders

## Next Steps (Phase 2)

1. Configure Supabase database connection
2. Enable Payload CMS integration
3. Add actual images/videos to `/public`
4. Define color palette and update Tailwind config
5. Create Payload content schemas
6. Implement design system
7. Add contact forms
8. Integrate gallery functionality

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - All rights reserved by Crias na Floresta

---

Built with Next.js 16, Tailwind CSS, and Payload CMS
