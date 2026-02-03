import '@/styles/globals.css';
import { Providers } from './providers';
import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ricardo Lopes',
    description: 'Product Manager and developer based in London.',
    icons: {
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
