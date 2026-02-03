'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:text-accent dark:hover:text-white transition-colors"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
                <MoonIcon className="h-6 w-6 text-copy-light dark:text-copy-dark" />
            )}
        </button>
    );
}
