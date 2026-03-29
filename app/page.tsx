import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          ApplicationTracker
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Track your job applications, manage your progress, and stay organised in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
            Get Started
          </button>

          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-300 px-6 py-3 text-gray-900 transition hover:bg-gray-100"
          >
            View Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Features</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">Track Applications</h3>
              <p className="mt-2 text-gray-600">
                Organise and manage all your job applications in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">Pipeline View</h3>
              <p className="mt-2 text-gray-600">
                Visualise your progress from applied to offer.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">Resume Management</h3>
              <p className="mt-2 text-gray-600">
                Store and manage multiple versions of your resume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}