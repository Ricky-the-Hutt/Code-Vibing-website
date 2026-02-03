'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter((post) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        );
    });

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            {/* Blog Posts */}
            {filteredPosts.length === 0 ? (
                <p className="text-copy-light dark:text-copy-dark text-center py-8">No blog posts found.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className="group">
                            <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 no-underline">
                                <h2 className="text-xl font-normal text-accent dark:text-white hover:border-b hover:border-dashed hover:border-accent dark:hover:border-white decoration-from-font underline-offset-4">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                                    {format(new Date(post.date), 'MMM dd, yyyy')}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>
            )}

            {/* Search Bar - Moved to Bottom */}
            <div className="mt-16 pt-8">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:border-accent dark:focus:border-white focus:outline-none bg-background-light dark:bg-background-dark text-copy-light dark:text-copy-dark"
                />
            </div>
        </div>
    );
}
