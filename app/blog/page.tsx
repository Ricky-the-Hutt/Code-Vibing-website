import { getBlogPosts } from '@/lib/blog';
import { generateRssFeed } from '@/lib/generate-rss';
import BlogList from './blog-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Ricardo Lopes',
    description: 'Ricardo Lopes Blog',
};

export default async function BlogPage() {
    await generateRssFeed();
    const posts = getBlogPosts();

    return <BlogList posts={posts} />;
}
