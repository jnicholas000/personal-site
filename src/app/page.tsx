import SiteLayout from "@/components/SiteLayout";

export default function Home() {
    return (
        <SiteLayout>
            <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
                Hi, I’m Jonathan Nicholas
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
                Senior Front-End Engineer focused on scalable UI architecture, developer efficiency,
                and delivering high-impact digital experiences. This site showcases my work,
                learning tools, and experiments with AI.
            </p>
            <div className="space-x-4">
                <a href="/resume" className="text-blue-600 hover:underline">
                    View Resume
                </a>
                <a href="/projects" className="text-blue-600 hover:underline">
                    View Projects
                </a>
            </div>
        </SiteLayout>
    );
}
