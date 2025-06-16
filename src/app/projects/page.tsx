import SiteLayout from "../../components/SiteLayout";

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Learning Room</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A mobile flashcard app built with React Native, designed to help users practice and retain knowledge through quick, tap-based memory drills. Supports customizable decks and an engaging, minimal UI.
        </p>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
        >
          View Details
        </a>
      </div>
    </SiteLayout>
  );
}