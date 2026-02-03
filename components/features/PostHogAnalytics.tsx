'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

function PostHogAnalyticsContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [consentGiven, setConsentGiven] = useState(false);
    const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

    useEffect(() => {
        const checkConsent = () => {
            const consent = localStorage.getItem('cookie-consent');
            setConsentGiven(consent === 'true');
        };

        checkConsent();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'cookie-consent') {
                checkConsent();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('cookie_consent_updated', checkConsent);

        const interval = setInterval(checkConsent, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cookie_consent_updated', checkConsent);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (!POSTHOG_KEY) {
            console.log('PostHog Analytics: Missing POSTHOG_KEY');
            return;
        }
        if (!consentGiven) {
            return;
        }

        if (typeof window !== 'undefined') {
            posthog.init(POSTHOG_KEY, {
                api_host: POSTHOG_HOST,
                capture_pageview: false,
                persistence: 'localStorage',
                autocapture: true,
                disable_session_recording: true,
                disable_surveys: true,
                loaded: (ph) => {
                    if (process.env.NODE_ENV === 'development') console.log('PostHog loaded:', ph);
                },
            });

            // Track pageview on load and on route change
            if (pathname) {
                let url = window.origin + pathname;
                if (searchParams && searchParams.toString()) {
                    url = url + `?${searchParams.toString()}`;
                }
                posthog.capture('$pageview', {
                    $current_url: url,
                });
            }
        }
    }, [consentGiven, POSTHOG_KEY, POSTHOG_HOST, pathname, searchParams]);

    return null;
}

export default function PostHogAnalytics() {
    return (
        <Suspense fallback={null}>
            <PostHogAnalyticsContent />
        </Suspense>
    );
}

// Utility functions for custom tracking
export const trackPostHogEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
        posthog.capture(event, properties);
    }
};

export const setPostHogUserProperty = (key: string, value: any) => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
        if (typeof posthog.setPersonProperties === 'function') {
            posthog.setPersonProperties({ [key]: value });
        } else if (typeof (posthog as any).people?.set === 'function') {
            (posthog as any).people.set({ [key]: value });
        }
    }
};
