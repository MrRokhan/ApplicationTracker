import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white p-6 md:block">
      <h2 className="text-2xl font-bold">ApplicationTracker</h2>

      <nav className="mt-10 space-y-3">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          href="/pipeline"
          className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Pipeline
        </Link>

        <Link
          href="#"
          className="block rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
        >
          Resumes
        </Link>

        <Link
          href="#"
          className="block rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
        >
          Interviews
        </Link>

        <Link
          href="#"
          className="block rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
        >
          Analytics
        </Link>
      </nav>
    </aside>
  );
}