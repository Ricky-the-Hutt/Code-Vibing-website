import React from 'react';
import ChatInterface from '@/components/features/ChatInterface';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Chat | Ricardo Lopes',
    description: 'Chat with my AI assistant to learn more about my background.',
};

export default function ChatPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-copy-light dark:text-copy-dark">Ask the AI.</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    Want to know more? Chat with this demo agent trained on my resume (mock demo).
                </p>
            </div>

            <ChatInterface />
        </div>
    );
}
