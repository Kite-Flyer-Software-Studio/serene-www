import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-19',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_READ_TOKEN, // Optional, only if you want to fetch drafts
});




