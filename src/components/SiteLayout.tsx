import Link from 'next/link';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen px-4 py-6 max-w-4xl mx-auto font-sans">
            <header className="mb-8">
                <h1 className="text-2xl font-bold">Jonathan Nicholas</h1>
                <nav className="space-x-4 mt-2">
                    <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                    <Link href="/resume" className="text-blue-600 hover:underline">Resume</Link>
                    <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}