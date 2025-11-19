/**
 * Migration script to import dummy blog data into Sanity CMS
 *
 * Before running this script:
 * 1. Make sure you have set up your Sanity project and obtained the project ID
 * 2. Create a .env.local file with:
 *    - NEXT_PUBLIC_SANITY_PROJECT_ID
 *    - NEXT_PUBLIC_SANITY_DATASET
 *    - SANITY_API_WRITE_TOKEN (create at https://sanity.io/manage -> API -> Tokens)
 *
 * Run with: npm run migrate-blogs
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
const { createClient } = require('@sanity/client');

// Dummy blog data
const dummyBlogs = [
  {
    slug: 'getting-started-with-serene',
    title: 'Getting Started with Serene',
    description:
      'Learn how to create meaningful connections through Serene. Discover our unique approach to building real IRL friendships.',
    date: '2024-01-15',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop',
    authorName: 'Serene Team',
    authorSrc: 'https://i.pravatar.cc/150?img=1',
    content: `
# Getting Started with Serene

Welcome to Serene! We're excited to help you build meaningful connections.

## What is Serene?

Serene is a platform designed to help you find people who click. We focus on creating real, in-person connections through carefully curated matches.

## How It Works

1. **Sign Up**: Create your profile and tell us about yourself
2. **Get Matched**: We'll connect you with like-minded individuals
3. **Meet Up**: Schedule your first meetup at one of our partner locations
4. **Build Friendships**: Continue building meaningful relationships

## Why Serene?

- Weekly prompts keep conversations lively
- Curated matches based on compatibility
- Partner locations for comfortable meetups
- Focus on real, IRL connections

Start your journey today and discover the power of genuine connections!
    `,
  },
  {
    slug: 'the-art-of-meaningful-conversations',
    title: 'The Art of Meaningful Conversations',
    description:
      'Explore how to have deeper, more meaningful conversations that lead to lasting friendships. Tips and strategies for building genuine connections.',
    date: '2024-01-22',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop',
    authorName: 'Sarah Chen',
    authorSrc: 'https://i.pravatar.cc/150?img=2',
    content: `
# The Art of Meaningful Conversations

Meaningful conversations are the foundation of strong friendships. Here's how to master them.

## Listen Actively

Active listening is key to meaningful conversations. Focus on understanding, not just responding.

## Ask Open-Ended Questions

Instead of yes/no questions, ask questions that invite storytelling and deeper sharing.

## Be Present

Put away distractions and be fully present in the moment. This shows respect and builds trust.

## Share Authentically

Be genuine in your responses. Authenticity creates deeper connections than surface-level small talk.
    `,
  },
  {
    slug: 'building-irl-friendships-in-a-digital-world',
    title: 'Building IRL Friendships in a Digital World',
    description:
      'In an increasingly digital world, learn why in-person connections matter more than ever and how Serene helps bridge the gap.',
    date: '2024-01-29',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop',
    authorName: 'Michael Park',
    authorSrc: 'https://i.pravatar.cc/150?img=3',
    content: `
# Building IRL Friendships in a Digital World

While digital connections have their place, nothing replaces the depth of in-person friendships.

## The Digital Dilemma

We're more connected than ever online, yet many feel more isolated. Digital interactions lack the nuance and depth of face-to-face connections.

## Why IRL Matters

- **Non-verbal Communication**: Body language, tone, and presence add layers to communication
- **Shared Experiences**: Creating memories together strengthens bonds
- **Authentic Connection**: In-person interactions feel more genuine and meaningful

## How Serene Helps

Serene bridges the gap by facilitating real-world meetups at carefully selected partner locations, making it easier to build genuine friendships.
    `,
  },
  {
    slug: 'weekly-prompts-that-spark-connection',
    title: 'Weekly Prompts That Spark Connection',
    description:
      'Discover how our weekly conversation prompts help break the ice and lead to deeper, more engaging discussions with your matches.',
    date: '2024-02-05',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2940&auto=format&fit=crop',
    authorName: 'Emma Wilson',
    authorSrc: 'https://i.pravatar.cc/150?img=4',
    content: `
# Weekly Prompts That Spark Connection

Our weekly prompts are designed to help you have more meaningful conversations.

## Why Prompts Work

Conversation prompts provide a starting point that goes beyond "how was your day?" They're designed to:
- Encourage storytelling
- Reveal values and interests
- Create memorable moments
- Build deeper understanding

## Examples of Great Prompts

- "What's a moment that changed your perspective?"
- "Describe your ideal weekend adventure"
- "What's something you're curious about lately?"

## Making the Most of Prompts

Use prompts as conversation starters, not scripts. Let the conversation flow naturally from there.
    `,
  },
  {
    slug: 'partner-locations-for-perfect-meetups',
    title: 'Partner Locations for Perfect Meetups',
    description:
      'Learn about our carefully curated partner locations where you can meet your matches in comfortable, welcoming environments.',
    date: '2024-02-12',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    authorName: 'David Kim',
    authorSrc: 'https://i.pravatar.cc/150?img=5',
    content: `
# Partner Locations for Perfect Meetups

We've partnered with amazing venues to create the perfect atmosphere for your meetups.

## Why Location Matters

The right environment can make all the difference in how comfortable and natural your first meeting feels.

## Our Partner Network

From cozy coffee shops to elegant wine bars, we've selected locations that offer:
- Welcoming atmosphere
- Great conversation spaces
- Quality food and drinks
- Supportive staff

## Making Your Choice

Consider the vibe you're looking for - whether it's a casual coffee chat or a more formal dinner setting.
    `,
  },
  {
    slug: 'success-stories-from-serene-community',
    title: 'Success Stories from Serene Community',
    description:
      'Read inspiring stories from members who have built lasting friendships through Serene. Real connections, real friendships, real stories.',
    date: '2024-02-19',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop',
    authorName: 'Serene Team',
    authorSrc: 'https://i.pravatar.cc/150?img=1',
    content: `
# Success Stories from Serene Community

Hear from members who have found meaningful connections through Serene.

## Real Connections, Real Stories

Our community is full of people who have built lasting friendships. Here are some of their stories.

## Story 1: Coffee Shop Beginnings

Two members met at one of our partner coffee shops and discovered a shared love for hiking. They now plan monthly adventures together.

## Story 2: Wine Bar Conversations

A group of three members met for the first time at a wine bar and clicked immediately. They've become a tight-knit friend group.

## Story 3: From Match to Best Friends

What started as a casual meetup turned into a deep friendship. These members now support each other through life's ups and downs.

## Your Story Could Be Next

Join Serene and start writing your own success story today!
    `,
  },
];

// Convert simple markdown content to Portable Text blocks
function markdownToPortableText(markdown) {
  const lines = markdown.trim().split('\n');
  const blocks = [];
  let currentBlock = null;
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: listItems.join('\n') }],
        listItem: 'bullet',
        level: 1,
      });
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '') {
      flushList();
      currentBlock = null;
      continue;
    }

    // Headers
    if (line.startsWith('# ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'h1',
        children: [{ _type: 'span', text: line.substring(2) }],
      });
    } else if (line.startsWith('## ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: line.substring(3) }],
      });
    } else if (line.startsWith('### ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: line.substring(4) }],
      });
    }
    // List items
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      const text = line.substring(2);
      // Check if list item has bold formatting
      const boldMatch = text.match(/\*\*(.+?)\*\*:\s*(.*)/);
      if (boldMatch) {
        blocks.push({
          _type: 'block',
          style: 'normal',
          children: [
            { _type: 'span', text: boldMatch[1], marks: ['strong'] },
            { _type: 'span', text: ': ' + boldMatch[2] },
          ],
          listItem: 'bullet',
          level: 1,
        });
      } else {
        blocks.push({
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text }],
          listItem: 'bullet',
          level: 1,
        });
      }
    }
    // Regular paragraphs
    else {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: line }],
      });
    }
  }

  flushList();
  return blocks;
}

async function uploadImageFromUrl(client, imageUrl, filename) {
  try {
    // Fetch the image from URL
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Upload to Sanity
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: filename,
      contentType: contentType,
    });

    return asset._id;
  } catch (error) {
    console.warn(`    ⚠️  Failed to upload image: ${error.message}`);
    return null;
  }
}

async function migrateBlog(blog, client) {
  const {
    slug,
    title,
    description,
    date,
    image,
    authorName,
    authorSrc,
    content,
  } = blog;

  // Upload featured image
  console.log(`    Uploading featured image...`);
  const imageAssetId = await uploadImageFromUrl(
    client,
    image,
    `${slug}-featured.jpg`
  );

  // Upload author image
  console.log(`    Uploading author image...`);
  const authorImageAssetId = await uploadImageFromUrl(
    client,
    authorSrc,
    `${slug}-author.jpg`
  );

  const document = {
    _type: 'blog',
    title,
    slug: {
      _type: 'slug',
      current: slug,
    },
    description,
    date,
    content: markdownToPortableText(content),
    publishedAt: date,
  };

  // Add images only if upload succeeded
  if (imageAssetId) {
    document.image = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAssetId,
      },
    };
  }

  if (authorImageAssetId) {
    document.author = {
      name: authorName,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: authorImageAssetId,
        },
      },
    };
  } else {
    // Fallback: just add author name without image
    document.author = {
      name: authorName,
    };
  }

  return document;
}

async function main() {
  console.log('Starting blog migration to Sanity...\n');

  // Debug: Show loaded environment variables (masked)
  console.log('Environment check:');
  console.log(
    `  Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? '✓ Set' : '✗ Missing'}`
  );
  console.log(
    `  Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}`
  );
  console.log(
    `  Write Token: ${process.env.SANITY_API_WRITE_TOKEN ? '✓ Set' : '✗ Missing'}\n`
  );

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set');
    console.error(
      'Please create a .env.local file with your Sanity configuration'
    );
    process.exit(1);
  }

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_API_WRITE_TOKEN is not set');
    console.error('Create a write token at: https://sanity.io/manage');
    process.exit(1);
  }

  // Create Sanity client after verifying environment variables
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-11-19',
    token: process.env.SANITY_API_WRITE_TOKEN,
  });

  console.log(`Migrating ${dummyBlogs.length} blog posts...\n`);

  for (const blog of dummyBlogs) {
    try {
      console.log(`Migrating: "${blog.title}"...`);

      // Check if blog already exists
      const existing = await client.fetch(
        `*[_type == "blog" && slug.current == $slug][0]`,
        { slug: blog.slug }
      );

      if (existing) {
        console.log(`  ⚠️  Blog already exists, skipping...`);
      } else {
        const document = await migrateBlog(blog, client);
        const result = await client.create(document);
        console.log(`  ✅ Successfully created (ID: ${result._id})`);
      }
    } catch (error) {
      console.error(`  ❌ Error migrating "${blog.title}":`, error.message);
      if (error.response?.body) {
        console.error(`     Details:`, error.response.body);
      }
    }
  }

  console.log('\n✨ Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Visit http://localhost:8000/studio to view your content');
  console.log('2. Review and edit the content as needed');
  console.log('3. Images have been uploaded to Sanity automatically!');
}

main().catch(console.error);
