// Dummy blog data - to be replaced with Sanity CMS data later

const dummyBlogs = [
  {
    slug: 'getting-started-with-serene',
    title: 'Getting Started with Serene',
    description:
      'Learn how to create meaningful connections through Serene. Discover our unique approach to building real IRL friendships.',
    date: '2024-01-15',
    image: '/assets/images/blog/getting-started.jpg',
    authorName: 'Serene Team',
    authorSrc: '/assets/images/blog/author-1.jpg',
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
    image: '/assets/images/blog/conversations.jpg',
    authorName: 'Sarah Chen',
    authorSrc: '/assets/images/blog/author-2.jpg',
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
    image: '/assets/images/blog/digital-world.jpg',
    authorName: 'Michael Park',
    authorSrc: '/assets/images/blog/author-3.jpg',
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
    image: '/assets/images/blog/prompts.jpg',
    authorName: 'Emma Wilson',
    authorSrc: '/assets/images/blog/author-4.jpg',
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
    image: '/assets/images/blog/locations.jpg',
    authorName: 'David Kim',
    authorSrc: '/assets/images/blog/author-5.jpg',
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
    image: '/assets/images/blog/success-stories.jpg',
    authorName: 'Serene Team',
    authorSrc: '/assets/images/blog/author-1.jpg',
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

export const getBlogs = async () => {
  // This will be replaced with Sanity CMS data fetching
  return dummyBlogs.map(({ content, ...blog }) => blog);
};

export const getSingleBlog = async (slug) => {
  // This will be replaced with Sanity CMS data fetching
  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return null;
  }

  const { content, ...frontmatter } = blog;

  return {
    content,
    frontmatter,
  };
};

export const getBlogFrontMatterBySlug = async (slug) => {
  // This will be replaced with Sanity CMS data fetching
  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return null;
  }

  const { content, ...frontmatter } = blog;

  return frontmatter;
};
