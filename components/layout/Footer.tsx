import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-16 bg-background-light dark:bg-background-dark transition-colors duration-200">
            <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="text-sm text-copy-light dark:text-copy-dark flex justify-center items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Ricardo Lopes</p>
                </div>
            </div>
        </footer>
    );
}
