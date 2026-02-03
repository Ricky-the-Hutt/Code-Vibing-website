'use client';

import React, { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import Link from 'next/link';
import { format } from 'date-fns';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import Image from 'next/image';

interface HomeProps {
    recentPosts: Array<{
        slug: string;
        title: string;
        date: string;
        excerpt: string;
    }>;
    homeContent: any;
}

export default function HomePage({ recentPosts, homeContent }: HomeProps) {
    // PostHog A/B Test for Tagline
    const [taglineVariant, setTaglineVariant] = useState('control');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            posthog.onFeatureFlags(() => {
                const variant = posthog.getFeatureFlag('tagline-experiment');
                if (variant) {
                    setTaglineVariant(variant as string);
                }
            });
        }
    }, []);

    const descriptions = {
        control: homeContent?.data?.description_control || "I'm Ricardo, showcasing my work, background, and CV to demonstrate my AI skills.",
        test: null // Remove tagline
    };

    const currentDescription = taglineVariant in descriptions
        ? descriptions[taglineVariant as keyof typeof descriptions]
        : descriptions.control;

    const name = homeContent?.data?.name || "Ricardo Lopes";

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="flex flex-col sm:flex-row gap-8 mb-16 items-start">
                <div className="shrink-0 mx-auto sm:mx-0 pt-2">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                        <Image
                            src="https://github.com/Ricky-the-Hutt.png"
                            alt={name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold mb-4 text-copy-light dark:text-copy-dark">Hi, I'm {name}</h1>
                    {currentDescription && (
                        <p className="text-lg text-copy-light dark:text-copy-dark leading-relaxed mb-6">
                            {currentDescription}
                        </p>
                    )}
                    <div className="flex justify-center sm:justify-start">
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>

            {recentPosts.length > 0 && (
                <section className="mb-12">
                    <h3 className="font-bold text-xl mb-6 text-copy-light dark:text-copy-dark">Recent Posts</h3>
                    <div className="flex flex-col gap-4">
                        {recentPosts.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 no-underline">
                                    <h3 className="text-xl font-normal text-accent dark:text-white hover:border-b hover:border-dashed hover:border-accent dark:hover:border-white decoration-from-font underline-offset-4">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                                        {format(new Date(post.date), 'MMM dd, yyyy')}
                                    </p>
                                </Link>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link href="/blog" className="text-base text-accent dark:text-white hover:border-b hover:border-dashed hover:border-accent dark:hover:border-white underline-offset-4">
                            View all posts
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
}
