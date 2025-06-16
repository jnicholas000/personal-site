import SiteLayout from "../../components/SiteLayout";

export default function ResumePage() {
    return (
        <SiteLayout>
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">My Resume</h1>
            <a
                href="/Jonathan_Nicholas_Resume.pdf"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-6"
                download
            >
                Download PDF
            </a>
            <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300">
                <li>Senior Front-End Engineer with 10+ years of experience</li>
                <li>Expert in Angular, TypeScript, and UI architecture</li>
                <li>Led modernization of enterprise insurance platforms</li>
                <li>Skilled in CI/CD, DevSecOps, and CMS integration</li>
            </ul>
        </SiteLayout>
    );
}