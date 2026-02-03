import { getPageContent } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Timeline from '@/components/features/Timeline';

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

            <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-8 text-copy-light dark:text-copy-dark">Journey.</h2>
                <Timeline />
            </div>
        </div>
    );
}
