'use client';

import React from 'react';

interface TimelineItem {
    year: string;
    title: string;
    company?: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: '2024 - Present',
        title: 'Founder / Full Stack Developer',
        company: 'Code Vibing',
        description: 'Building modern web experiences and exploring AI agents. Focused on Next.js, React, and Python.',
    },
    {
        year: '2022 - 2024',
        title: 'Senior Product Manager',
        company: 'Tech Corp',
        description: 'Led cross-functional teams to ship user-centric products. Bridged the gap between engineering and business.',
    },
    {
        year: '2020 - 2022',
        title: 'Product Manager',
        company: 'Startup Inc',
        description: 'Managed product roadmap and strategy. Launched MVP and scaled to first 10k users.',
    },
    {
        year: '2016 - 2020',
        title: 'BSc Computer Science',
        company: 'University of Technology',
        description: 'Specialized in Software Engineering and Human-Computer Interaction.',
    },
];

export default function Timeline() {
    return (
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 space-y-10 my-10">
            {timelineData.map((item, index) => (
                <div key={index} className="relative group">
                    {/* Dot */}
                    <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-sm" />

                    <div className="ml-8">
                        <span className="text-sm font-mono text-accent dark:text-accent font-semibold tracking-wider">
                            {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-accent transition-colors">
                            {item.title}
                        </h3>
                        {item.company && (
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">
                                @ {item.company}
                            </span>
                        )}
                        <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
