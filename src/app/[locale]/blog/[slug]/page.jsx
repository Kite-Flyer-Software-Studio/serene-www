import Image from 'next/image';

import { getBlogFrontMatterBySlug, getSingleBlog } from '@/lib/blogs';
import { redirect } from '@/i18n/routing';

import { Container } from '@/components/ui/container';
import { DivideX } from '@/components/ui/divide-x';
import { PortableTextRenderer } from '@/components/PortableTextRenderer';

export async function generateMetadata({ params }) {
  const data = await params;
  const frontmatter = await getBlogFrontMatterBySlug(data.slug);

  if (!frontmatter) {
    return {
      title: 'Blog not found',
    };
  }

  return {
    title: frontmatter.title + ' | Serene',
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({ params }) {
  const data = await params;
  const blog = await getSingleBlog(data.slug);

  if (!blog) {
    redirect('/blog');
  }

  const { content, frontmatter } = blog;

  // Check if content is portable text (array) or markdown string
  const isPortableText = Array.isArray(content);

  return (
    <div>
      <DivideX />
      <Container className="border-divide border-x px-8 pt-10 md:pt-20 md:pb-10">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1200}
          height={600}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
        />
        <div className="prose prose-base dark:prose-invert mx-auto">
          {isPortableText ? (
            <PortableTextRenderer content={content} />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const lines = content.split('\n');
                  let html = '';
                  let inList = false;

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const trimmed = line.trim();

                    // Headers
                    if (trimmed.startsWith('# ')) {
                      if (inList) {
                        html += '</ul>';
                        inList = false;
                      }
                      html += `<h1>${trimmed.substring(2)}</h1>`;
                    } else if (trimmed.startsWith('## ')) {
                      if (inList) {
                        html += '</ul>';
                        inList = false;
                      }
                      html += `<h2>${trimmed.substring(3)}</h2>`;
                    } else if (trimmed.startsWith('### ')) {
                      if (inList) {
                        html += '</ul>';
                        inList = false;
                      }
                      html += `<h3>${trimmed.substring(4)}</h3>`;
                    }
                    // List items
                    else if (
                      trimmed.startsWith('- ') ||
                      trimmed.startsWith('* ')
                    ) {
                      if (!inList) {
                        html += '<ul>';
                        inList = true;
                      }
                      html += `<li>${trimmed.substring(2)}</li>`;
                    }
                    // Empty lines
                    else if (trimmed === '') {
                      if (inList) {
                        html += '</ul>';
                        inList = false;
                      }
                      html += '<br />';
                    }
                    // Regular paragraphs
                    else {
                      if (inList) {
                        html += '</ul>';
                        inList = false;
                      }
                      html += `<p>${trimmed}</p>`;
                    }
                  }

                  if (inList) {
                    html += '</ul>';
                  }

                  return html;
                })(),
              }}
            />
          )}
        </div>
      </Container>
      <DivideX />
    </div>
  );
}
