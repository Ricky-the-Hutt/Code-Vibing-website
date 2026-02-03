export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        repo?: string;
    };
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'code-vibing',
        title: 'Code Vibing Project',
        description: 'A personal portfolio designed to showcase AI capabilities and modern web development practices with a "vibing" aesthetic.',
        tags: ['Next.js', 'Tailwind', 'AI Integration'],
        links: {
            repo: 'https://github.com/Ricky-the-Hutt/Code-Vibing-website',
        },
        featured: true,
    },
    {
        id: 'ai-chat-demo',
        title: 'AI Chat Demo',
        description: 'An interactive RAG-based chat interface demonstrating AI agent capabilities directly in the browser.',
        tags: ['React', 'OpenAI', 'RAG'],
        links: {
            demo: '/chat',
        },
    },
    {
        id: 'neon-city',
        title: 'Neon City',
        description: 'A conceptual visualization project exploring cyberpunk aesthetics and CSS animations.',
        tags: ['CSS', 'Animation', 'Design'],
        links: {},
    },
];
