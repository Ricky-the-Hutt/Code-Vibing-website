import { getPageContent } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Ricardo Lopes',
    description: 'Learn more about Ricardo Lopes',
};

export default async function AboutPage() {
    const page = await getPageContent('about');

    if (!page) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <article
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-copy-light dark:prose-headings:text-copy-dark prose-p:text-copy-light dark:prose-p:text-copy-dark leading-relaxed prose-a:text-accent dark:prose-a:text-white"
                dangerouslySetInnerHTML={{ __html: page.body }}
            />
        </div>
    );
}
