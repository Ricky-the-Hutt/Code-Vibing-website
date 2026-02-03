'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Hello! I'm Ricardo's AI assistant. Ask me anything about his background, skills, or projects!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Mock AI delay and response
        setTimeout(() => {
            const response = getMockResponse(userMessage.content);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const getMockResponse = (query: string): string => {
        const q = query.toLowerCase();
        if (q.includes('projects') || q.includes('work')) return "I've worked on some cool stuff! Check out the 'Projects' page to see my portfolio, including this website.";
        if (q.includes('skills') || q.includes('stack')) return "My stack includes Next.js, React, Tailwind CSS, Node.js, and Python for AI work. I'm also experienced with Product Management.";
        if (q.includes('contact') || q.includes('email')) return "You can reach me via LinkedIn (check the footer!) or drop me a message on the contact page.";
        if (q.includes('vibing')) return "We are strictly vibing right now. ✨";
        return "I'm a simple demo AI for now, so I might not know that one yet! But I can tell you about my skills, projects, or experience.";
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-[600px]">

            {/* Header */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-gray-700 dark:text-gray-200">AI Assistant (Demo)</span>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/20">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl p-4 ${m.role === 'user'
                                    ? 'bg-accent text-white rounded-br-none'
                                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600 rounded-bl-none'
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{m.content}</p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                            <div className="flex gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything..."
                        className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-gray-800 dark:text-gray-200"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-accent dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                    </button>
                </div>
            </form>
        </div>
    );
}
