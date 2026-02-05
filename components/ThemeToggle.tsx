'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[104px] h-8" />; // Placeholder to prevent layout shift
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setTheme('light')}
                className={`transition-colors duration-200 ${!isDark ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-500'}`}
                aria-label="Enable Light Mode"
            >
                <SunIcon className="h-5 w-5" />
            </button>
            
            <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`
                    relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent border-2
                    ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'}
                `}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
                <span
                    className={`
                        absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
                        ${isDark ? 'translate-x-[24px] bg-white' : 'translate-x-0 bg-white'}
                    `}
                />
            </button>

            <button
                onClick={() => setTheme('dark')}
                className={`transition-colors duration-200 ${isDark ? 'text-indigo-400' : 'text-gray-400 hover:text-gray-500'}`}
                aria-label="Enable Dark Mode"
            >
                <MoonIcon className="h-5 w-5" />
            </button>
        </div>
    );
}
