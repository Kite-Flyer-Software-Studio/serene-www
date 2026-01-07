import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const components = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <Image
          src={value.asset?.url || value.url}
          alt={value.alt || 'Blog image'}
          width={1200}
          height={600}
          className="rounded-lg"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export function PortableTextRenderer({ content }) {
  return <PortableText value={content} components={components} />;
}




