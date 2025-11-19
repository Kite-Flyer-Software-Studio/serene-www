# Sanity CMS Setup Guide

This guide will walk you through completing the Sanity CMS integration for your Serene blog.

## Prerequisites

All packages have been installed and the code structure is in place. You now need to:

1. Create a Sanity account and project
2. Configure environment variables
3. Import your existing blog data
4. Test and deploy

## Step 1: Create Sanity Account and Project

### Option A: Using Sanity CLI (Recommended)

1. Run the following command in your terminal:

```bash
cd /Users/reicolee/project-codebases/active/serene/serene-www
npx sanity init --create-project "Serene Blog" --dataset production
```

2. Follow the prompts:
   - Log in with your preferred method (GitHub recommended)
   - Confirm project name
   - Select "Clean project with no predefined schemas"
   - The CLI will create a project and give you a **Project ID**

3. Copy the Project ID - you'll need it for the next step

### Option B: Using Sanity Dashboard

1. Go to https://www.sanity.io/
2. Sign up or log in (GitHub login recommended)
3. Click "Create new project"
4. Name it "Serene Blog"
5. Choose "Blog" template or "Start from scratch"
6. Copy the Project ID from the project settings

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in the project root:

```bash
touch .env.local
```

2. Add the following configuration:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-19

# For migration script (write access)
SANITY_API_WRITE_TOKEN=your_write_token_here
```

3. Get your write token:
   - Go to https://www.sanity.io/manage
   - Select your "Serene Blog" project
   - Navigate to **API** → **Tokens**
   - Click **Add API token**
   - Name it "Migration Script"
   - Set permissions to **Editor** or **Administrator**
   - Copy the token and paste it in `.env.local` as `SANITY_API_WRITE_TOKEN`

⚠️ **Important**: Never commit `.env.local` to version control!

## Step 3: Configure CORS

To allow your Next.js app to communicate with Sanity:

1. Go to https://www.sanity.io/manage
2. Select your "Serene Blog" project
3. Navigate to **API** → **CORS Origins**
4. Click **Add CORS origin**
5. Add these origins:
   - `http://localhost:8000` (for local development)
   - Your production domain (e.g., `https://sereneexperience.com`)
6. Check "Allow credentials"
7. Save

## Step 4: Import Existing Blog Data

Now that Sanity is configured, import your existing dummy blog posts:

```bash
npm run migrate-blogs
```

This script will:
- Convert your markdown content to Sanity's Portable Text format
- Create blog posts in your Sanity dataset
- Skip duplicates if run multiple times

You should see output like:

```
✅ Successfully created "Getting Started with Serene"
✅ Successfully created "The Art of Meaningful Conversations"
...
✨ Migration complete!
```

## Step 5: Access Sanity Studio

Your Sanity Studio is now available at:

```
http://localhost:8000/studio
```

### First Time Access

1. Start your dev server if not already running:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:8000/studio

3. You'll be prompted to log in - use the same credentials you used when creating your Sanity account

4. Once logged in, you should see your blog posts!

### Using Sanity Studio

- **View Posts**: Click "Blog Post" in the sidebar
- **Edit Posts**: Click on any post to edit
- **Create New**: Click the + button
- **Upload Images**: The migration uses external URLs - you should upload proper images
- **Publish Changes**: Changes are saved automatically

## Step 6: Test Your Blog

1. Visit your blog listing page:
   ```
   http://localhost:8000/en/blog
   ```

2. You should see your blog posts (either from Sanity or fallback dummy data)

3. Click on a blog post to view the full content

4. Create a new blog post in Sanity Studio and verify it appears

## Step 7: Manage Studio Access

Sanity Studio uses Sanity's built-in authentication. To manage who can access your studio:

1. Go to https://www.sanity.io/manage
2. Select your "Serene Blog" project
3. Navigate to **Members**
4. Invite team members by email
5. Assign roles:
   - **Administrator**: Full access to everything
   - **Editor**: Can create and edit content
   - **Viewer**: Read-only access

## Step 8: Production Deployment

### Environment Variables in Production

Add these environment variables to your production hosting platform (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-19
```

⚠️ **Note**: Do NOT add `SANITY_API_WRITE_TOKEN` to production - it's only needed for the migration script.

### Production CORS

Make sure you've added your production domain to CORS origins (Step 3).

### Deploy

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Integrate Sanity CMS"
   git push
   ```

2. Your hosting platform should automatically deploy

3. Access your production studio at:
   ```
   https://yourdomain.com/studio
   ```

## Optional: Set Up Webhooks for Real-time Updates

To make content updates appear immediately without redeploying:

1. In Sanity dashboard, go to **API** → **Webhooks**
2. Create a new webhook:
   - **Name**: Next.js Revalidation
   - **URL**: `https://yourdomain.com/api/revalidate`
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
3. You'll need to create the revalidation API route in your Next.js app

## Troubleshooting

### "Project ID not found" error

- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly in `.env.local`
- Restart your dev server after adding environment variables

### Studio shows "Forbidden" or authentication errors

- Check CORS settings in Sanity dashboard
- Make sure you're logged into Sanity
- Try clearing browser cache and cookies

### Blog posts not appearing

- The app gracefully falls back to dummy data if Sanity fails
- Check browser console for error messages
- Verify your API token has read permissions

### Migration script fails

- Ensure `SANITY_API_WRITE_TOKEN` is set in `.env.local`
- Verify the token has write permissions
- Check that the project ID is correct

## Next Steps

1. **Upload Better Images**: Replace external image URLs with proper uploads in Sanity
2. **Customize Schema**: Add more fields to your blog schema as needed
3. **Add Categories/Tags**: Create new schema types for better organization
4. **Rich Content**: Explore Portable Text capabilities for richer blog content
5. **Preview Mode**: Set up draft previews for content editors

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/sanity-nextjs-guide)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## Support

If you encounter issues:

1. Check the [Sanity Community](https://www.sanity.io/community)
2. Review the [Sanity Slack](https://slack.sanity.io/)
3. Check your browser console for detailed error messages

