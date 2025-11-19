import Image from 'next/image';
import { Metadata } from 'next';

import { getBlogs } from '@/lib/blogs';
import { Link } from '@/i18n/routing';

import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { SubHeading } from '@/components/ui/sub-heading';
import { TitleBadge } from '@/components/ui/title-badge';
import { DivideX } from '@/components/ui/divide-x';

export const metadata = {
  title: 'All blogs | Serene',
  description:
    'Discover articles about building meaningful connections, friendship tips, and stories from the Serene community.',
};

const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="pt-16">
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x pt-10 md:pt-20 md:pb-10">
        <TitleBadge text=" All blogs" />
        <Heading>Writing for the World</Heading>
        <SubHeading className="mx-auto mt-2 max-w-sm px-4">
          At Serene, we educate and empower people to build better connections
          and meaningful friendships in the world.
        </SubHeading>
        <div className="border-divide divide-divide mt-10 flex w-full flex-col divide-y border-y">
          <GridLayout blogs={allBlogs.slice(0, 3)} />
          {allBlogs.slice(3).map((blog, idx) => (
            <RowLayout key={blog.title} blog={blog} />
          ))}
        </div>
      </Container>

      <DivideX />
    </div>
  );
}

const GridLayout = ({ blogs }) => {
  return (
    <div className="divide-divide grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {blogs.map((blog, index) => (
        <Link
          key={blog.title}
          href={`/blog/${blog.slug}`}
          className="p-4 hover:bg-gray-50 md:p-8 dark:hover:bg-neutral-800"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            className="shadow-aceternity h-60 w-full rounded-lg object-cover md:h-80 lg:h-60"
          />
          <div>
            <h2 className="text-primary mt-2 text-lg font-medium tracking-tight">
              {blog.title}
            </h2>
            <p className="max-w-lg pt-2 text-base text-gray-600 md:text-sm dark:text-neutral-400">
              {truncate(blog.description || '', 100)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const RowLayout = ({ blog }) => {
  return (
    <Link
      key={blog.title}
      href={`/blog/${blog.slug}`}
      className="flex flex-col justify-between px-4 py-4 hover:bg-gray-50 md:flex-row md:items-center md:px-8 dark:hover:bg-neutral-800"
    >
      <div>
        <h2 className="text-primary text-lg font-medium tracking-tight">
          {blog.title}
        </h2>
        <p className="max-w-lg pt-2 text-base text-gray-600 md:text-sm dark:text-neutral-400">
          {truncate(blog.description || '', 150)}
        </p>
      </div>
      <div className="text-charcoal-700 mt-4 flex flex-col text-sm md:mt-0 md:text-sm dark:text-neutral-100">
        {new Date(blog.date || '').toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
        <div className="mt-2 flex items-center gap-1 md:justify-end">
          <Image
            src={blog.authorSrc}
            alt={blog.authorName}
            height={50}
            width={50}
            className="size-6 rounded-full"
          />
          <span className="text-gray-500 dark:text-neutral-400">
            {blog.authorName}
          </span>
        </div>
      </div>
    </Link>
  );
};
