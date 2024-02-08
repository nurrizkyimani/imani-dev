import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* This Link component will navigate to the `index.tsx` inside the `work` directory */}
            <Link href="/work">
                WORK
            </Link>

            <Link href="/gallery">
                WORK
            </Link>

            <Link href="/blog">
                WORK
            </Link>
            {/* Add more content or other links as needed */}
        </main>
    );
}
