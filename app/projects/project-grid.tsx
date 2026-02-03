'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-accent dark:hover:border-accent hover:scale-[1.02]"
                >
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col z-10 relative">
                        <h3 className="text-xl font-bold mb-2 text-copy-light dark:text-copy-dark group-hover:text-accent dark:group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-auto">
                            {project.links.demo && (
                                <Link
                                    href={project.links.demo}
                                    className="text-sm font-semibold text-accent dark:text-white hover:underline decoration-dashed underline-offset-4"
                                >
                                    Live Demo →
                                </Link>
                            )}
                            {project.links.repo && (
                                <a
                                    href={project.links.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-copy-light dark:hover:text-white transition-colors"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Vibing Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
            ))}
        </div>
    );
}
