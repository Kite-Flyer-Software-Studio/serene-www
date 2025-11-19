# 🎉 Sanity CMS Integration Complete!

Your Serene website now has a fully integrated headless CMS for blog management.

## ⚡ Quick Start (5 minutes)

### Step 1: Create Sanity Project

```bash
cd /Users/reicolee/project-codebases/active/serene/serene-www
npx sanity init --create-project "Serene Blog" --dataset production
```

Follow the prompts and **copy your Project ID**.

### Step 2: Set Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=paste_your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-19
```

### Step 3: Get Write Token (for migration)

1. Go to https://www.sanity.io/manage
2. Select "Serene Blog" → **API** → **Tokens**
3. Create token with **Editor** permissions
4. Add to `.env.local`:

```env
SANITY_API_WRITE_TOKEN=paste_token_here
```

### Step 4: Configure CORS

In Sanity dashboard (**API** → **CORS Origins**), add:
- `http://localhost:8000`

### Step 5: Import Blog Posts

```bash
npm run migrate-blogs
```

### Step 6: Start & Access Studio

```bash
npm run dev
```

Visit: **http://localhost:8000/studio**

Log in with your Sanity account and start managing content!

---

## 📚 Documentation

- **[SANITY_SETUP.md](./SANITY_SETUP.md)** - Complete step-by-step setup guide
- **[SANITY_QUICK_REFERENCE.md](./SANITY_QUICK_REFERENCE.md)** - Commands and common tasks
- **[SANITY_INTEGRATION_SUMMARY.md](./SANITY_INTEGRATION_SUMMARY.md)** - Technical implementation details

## 🏗️ What's Been Built

### Self-Hosted Studio
- **URL**: `/studio` route in your Next.js app
- **Auth**: Sanity's built-in OAuth
- **Deploy**: Automatically with your app

### Blog Management
- Rich text editor (Portable Text)
- Image uploads and optimization
- Author management
- Publication scheduling
- Draft support

### Smart Fallback
- Works with or without Sanity
- Graceful error handling
- Development-friendly

## 🎯 Key Files

```
/sanity/schemaTypes/blog.js     ← Blog content schema
/src/lib/sanity/client.js       ← API client
/src/lib/blogs.js               ← Data fetching (Sanity + fallback)
/src/app/studio/[[...tool]]/    ← Studio route
/scripts/migrate-blogs-to-sanity.js  ← Migration script
```

## 🚀 Production Deployment

1. Add environment variables to hosting platform:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET
   NEXT_PUBLIC_SANITY_API_VERSION
   ```

2. Add production domain to CORS origins in Sanity dashboard

3. Deploy!

Your studio will be at: `https://yourdomain.com/studio`

## 💡 Common Tasks

### Create New Blog Post
1. Go to `/studio`
2. Click "Blog Post" → "+"
3. Fill in details and publish

### Edit Blog Post
1. Go to `/studio`
2. Select post from list
3. Edit and save

### View Blog Posts
- List: `http://localhost:8000/en/blog`
- Single: `http://localhost:8000/en/blog/post-slug`

## ✨ Features

✅ Self-hosted Studio at `/studio`  
✅ Rich content editing  
✅ Image optimization  
✅ Built-in authentication  
✅ Graceful fallback  
✅ Migration script included  
✅ Production ready  

## 🆘 Troubleshooting

**Studio won't load?**
- Check environment variables are set
- Restart dev server
- Check CORS settings

**Blog posts not showing?**
- App falls back to dummy data if Sanity not configured
- Check browser console for errors
- Verify project ID is correct

**Need Help?**
- See `SANITY_SETUP.md` for detailed troubleshooting
- Check [Sanity Docs](https://www.sanity.io/docs)
- Visit [Sanity Slack](https://slack.sanity.io/)

## 📊 Sanity Free Tier

- 100k API requests/month
- 5GB assets storage
- Unlimited documents
- 3 team members
- All features included

Perfect for most blogs!

---

**Ready to go? Start with the Quick Start above! 🚀**

For detailed setup instructions, see [SANITY_SETUP.md](./SANITY_SETUP.md)

