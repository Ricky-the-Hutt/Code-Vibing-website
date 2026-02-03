import Link from 'next/link';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPostPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
        return {};
    }
    return {
        title: `${post.title} - Ricardo Lopes`,
        description: post.title,
    };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Link
                href="/blog"
                className="text-accent dark:text-white mb-8 inline-block text-sm hover:border-b hover:border-dashed hover:border-accent dark:hover:border-white underline-offset-4"
            >
                ← Back to Blog
            </Link>

            <article>
                <h1 className="text-4xl font-bold mb-4 text-copy-light dark:text-copy-dark">
                    {post.title}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Published on {format(new Date(post.date), 'MMM dd, yyyy')}
                </p>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none mb-12 prose-headings:text-copy-light dark:prose-headings:text-copy-dark prose-p:text-copy-light dark:prose-p:text-copy-dark prose-a:text-accent dark:prose-a:text-white prose-li:text-copy-light dark:prose-li:text-copy-dark prose-strong:text-copy-light dark:prose-strong:text-copy-dark"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>
        </div>
    );
}
