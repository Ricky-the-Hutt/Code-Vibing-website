import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../features/ThemeToggle';

export default function Header() {
    return (
        <header className="bg-background-light dark:bg-background-dark transition-colors duration-200">
            <div className="max-w-3xl mx-auto px-4 py-8">
                <nav role="navigation">
                    <div className="flex justify-between items-center">
                        <div className="relative">
                            <Link
                                href="/"
                                className="text-2xl font-bold no-underline text-copy-light dark:text-copy-dark hover:none block"
                            >
                                Ricardo Lopes
                            </Link>
                            <span className="absolute left-0 top-full text-sm text-gray-500 dark:text-gray-400 font-mono pt-1 whitespace-nowrap">
                                Looking after goodness and truth
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/blog" className="text-base font-normal text-copy-light dark:text-copy-dark hover:text-accent dark:hover:text-white transition-colors">
                                Posts
                            </Link>
                            <Link
                                href="/about"
                                className="text-base font-normal text-copy-light dark:text-copy-dark hover:text-accent dark:hover:text-white transition-colors"
                            >
                                About
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
