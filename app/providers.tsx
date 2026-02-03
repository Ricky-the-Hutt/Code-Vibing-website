'use client';

import { ThemeProvider } from 'next-themes';
import CookieConsentBanner from '@/components/features/CookieConsent';
import CountlyAnalytics from '@/components/features/CountlyAnalytics';
import PostHogAnalytics from '@/components/features/PostHogAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            {children}
            <CountlyAnalytics />
            <PostHogAnalytics />
            <SpeedInsights />
            <CookieConsentBanner />
        </ThemeProvider>
    );
}
