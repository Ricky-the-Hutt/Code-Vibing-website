import { getBlogPosts } from '@/lib/blog';
import { getPageContent } from '@/lib/pages';
import HomePage from './home-page';

export default async function Page() {
    const allPosts = getBlogPosts();
    const homeContent = await getPageContent('home');

    const recentPosts = allPosts
        .sort((a, b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
        })
        .slice(0, 10);

    // Ensure passing plain objects.
    // If homeContent contains dates in 'data', they need to be stringified.
    // Assuming gray-matter returns primitives or Dates.
    const serializedHomeContent = homeContent ? JSON.parse(JSON.stringify(homeContent)) : null;

    return <HomePage recentPosts={recentPosts} homeContent={serializedHomeContent} />;
}
