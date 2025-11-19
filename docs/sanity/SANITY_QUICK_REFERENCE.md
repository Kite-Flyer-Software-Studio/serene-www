# Sanity CMS Quick Reference

## Quick Start Commands

```bash
# Start development server
npm run dev

# Access Sanity Studio
http://localhost:8000/studio

# Migrate blog data
npm run migrate-blogs

# Build for production
npm run build
```

## File Structure

```
serene-www/
├── sanity/
│   ├── schemaTypes/
│   │   ├── blog.js          # Blog post schema
│   │   └── index.js         # Schema exports
│   └── lib/                 # (future extensions)
├── src/
│   ├── lib/
│   │   ├── blogs.js         # Blog data fetching (Sanity + fallback)
│   │   └── sanity/
│   │       ├── client.js    # Sanity client config
│   │       └── image.js     # Image URL builder
│   ├── components/
│   │   └── PortableTextRenderer.jsx  # Render Sanity content
│   └── app/
│       ├── studio/          # Sanity Studio route
│       └── [locale]/blog/   # Blog pages
├── scripts/
│   └── migrate-blogs-to-sanity.js  # Migration script
├── sanity.config.js         # Studio configuration
├── sanity.cli.js           # CLI configuration
└── SANITY_SETUP.md         # Full setup guide
```

## Environment Variables Required

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-19
```

## Key Features Implemented

✅ **Self-hosted Studio** at `/studio`  
✅ **Blog Post Management** with rich content editing  
✅ **Automatic Fallback** to dummy data if Sanity not configured  
✅ **Portable Text Rendering** with full styling support  
✅ **Image Optimization** via Sanity CDN  
✅ **Built-in Authentication** via Sanity OAuth  
✅ **Migration Script** to import existing blog posts  

## Common Tasks

### Create a New Blog Post

1. Go to http://localhost:8000/studio
2. Click "Blog Post" → "+"
3. Fill in title (slug auto-generates)
4. Add description, image, content
5. Set author name and image
6. Publish!

### Edit Existing Post

1. Go to http://localhost:8000/studio
2. Click "Blog Post"
3. Select post to edit
4. Make changes (auto-saves)

### Query Blog Data (GROQ)

```javascript
// Get all blogs
const query = `*[_type == "blog"] | order(date desc)`;

// Get single blog
const query = `*[_type == "blog" && slug.current == $slug][0]`;

// Get with filters
const query = `*[_type == "blog" && publishedAt < now()] | order(publishedAt desc)`;
```

## Studio Access Management

Manage at: https://www.sanity.io/manage → Your Project → Members

- **Administrator**: Full control
- **Editor**: Create/edit content
- **Viewer**: Read-only

## Production Checklist

- [ ] Environment variables set in hosting platform
- [ ] Production domain added to CORS origins
- [ ] Test `/studio` access in production
- [ ] Verify blog posts load correctly
- [ ] Set up webhooks for instant updates (optional)

## Support Links

- **Sanity Dashboard**: https://www.sanity.io/manage
- **Documentation**: https://www.sanity.io/docs
- **GROQ Cheat Sheet**: https://www.sanity.io/docs/query-cheat-sheet

## Tips

💡 **Content Preview**: Changes in Studio appear immediately on refresh  
💡 **Image CDN**: Sanity automatically optimizes and caches images  
💡 **Version History**: Click clock icon in Studio to see revisions  
💡 **Draft Mode**: Set `publishedAt` to future date to schedule posts  
💡 **Fallback**: App works without Sanity - great for local development  

