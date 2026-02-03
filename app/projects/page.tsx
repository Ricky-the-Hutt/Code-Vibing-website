import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';
import ProjectGrid from './project-grid';

export const metadata: Metadata = {
    title: 'Projects | Ricardo Lopes',
    description: 'Showcase of AI and Web Development projects.',
};

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-copy-light dark:text-copy-dark">Projects.</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    A collection of experiments, production apps, and AI explorations.
                </p>
            </div>

            <ProjectGrid projects={projects} />
        </div>
    );
}
