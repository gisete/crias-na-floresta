# Payload CMS Setup

## Collections Created

### 1. Users
- **Purpose**: Admin authentication
- **Fields**: email, password, name
- **Access**: Used for logging into the Payload admin panel

### 2. Pages
- **Purpose**: Manage page content in sections
- **Fields**:
  - `title` - Page title
  - `slug` - URL-friendly identifier (e.g., "quem-somos", "a-floresta")
  - `sections` - Array of content sections
    - `sectionTitle` - Section heading
    - `sectionContent` - Rich text content
    - `sectionOrder` - Display order

### 3. Media
- **Purpose**: Gallery photos and site images
- **Fields**:
  - `file` - Upload (images/videos)
  - `alt` - Alt text for accessibility
  - `caption` - Optional caption
  - `category` - gallery | hero | general
- **Storage**: Configured for Supabase Storage integration
- **Image Sizes**: thumbnail (400x300), card (768x1024), hero (1920x1080)

### 4. Navigation
- **Purpose**: Header and footer links
- **Fields**:
  - `linkText` - Display text
  - `linkUrl` - Link path
  - `order` - Display order
  - `location` - header | footer

## Environment Variables Required

Make sure your `.env` file contains:

```bash
# Payload CMS Secret (generate with: openssl rand -base64 32)
PAYLOAD_SECRET=your-secret-here

# Supabase PostgreSQL Connection
DATABASE_URI=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Supabase Storage (for media uploads)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Supabase Setup Required

### 1. Database Setup
Your Supabase PostgreSQL database will be automatically configured by Payload on first run.

### 2. Storage Bucket Setup
Create a storage bucket in Supabase for media uploads:

1. Go to Supabase Dashboard → Storage
2. Create a new bucket called `media`
3. Set bucket to **Public** (for public image access)
4. Configure CORS if needed for your domain

## Next Steps

### 1. Configure Environment Variables
Update `.env` with your actual Supabase credentials:
- Get DATABASE_URI from Supabase → Settings → Database → Connection String
- Get SUPABASE_URL and SUPABASE_ANON_KEY from Supabase → Settings → API

### 2. Generate Payload Secret
Run: `openssl rand -base64 32`
Copy the output to PAYLOAD_SECRET in `.env`

### 3. Start Development Server
```bash
npm run dev
```

### 4. Access Admin Panel
Navigate to: `http://localhost:3000/admin`

On first visit, you'll be prompted to create your first admin user.

### 5. Create Initial Content
Once logged in, you can:
- Add navigation links for header/footer
- Upload media to the gallery
- Create page content sections

## Using Collections in Your Pages

### Fetching Pages
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=quem-somos`)
const data = await response.json()
const page = data.docs[0]
```

### Fetching Navigation
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/navigation?where[location][equals]=header&sort=order`)
const data = await response.json()
const navLinks = data.docs
```

### Fetching Media
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/media?where[category][equals]=gallery`)
const data = await response.json()
const galleryImages = data.docs
```

## Troubleshooting

### Build Errors
If you get peer dependency warnings, install packages with:
```bash
npm install <package> --legacy-peer-deps
```

### Database Connection Issues
- Verify DATABASE_URI is correct
- Check Supabase project is not paused (free tier)
- Ensure your IP is allowed in Supabase settings

### Storage Upload Issues
- Verify storage bucket `media` exists in Supabase
- Check bucket is set to Public
- Verify SUPABASE_URL and SUPABASE_ANON_KEY are correct

## File Structure
```
src/payload/
├── collections/
│   ├── Users.ts          # Admin users
│   ├── Pages.ts          # Page content
│   ├── Media.ts          # Images/videos
│   └── Navigation.ts     # Header/footer links
├── storage-adapter.ts    # Supabase storage integration
├── payload.config.ts     # Main Payload configuration
└── README.md            # This file
```
