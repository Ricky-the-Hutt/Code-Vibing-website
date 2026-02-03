import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
};

export default function NotFound() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-32 text-center">
            <h1 className="text-6xl font-bold mb-4 text-bg-copy-light dark:text-copy-dark">404</h1>
            <h2 className="text-3xl font-bold mb-4 text-copy-light dark:text-copy-dark">Page Not Found</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="inline-block text-accent dark:text-white border-b border-dashed border-accent dark:border-white hover:border-solid transition-all"
            >
                Back to Home
            </Link>
        </div>
    );
}
