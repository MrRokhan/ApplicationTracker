import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function DashboardPage() {
  const stats = [
    { title: "Applications", value: 12 },
    { title: "Interviews", value: 3 },
    { title: "Offers", value: 1 },
    { title: "Rejected", value: 4 },
  ];

  const recentApplications = [
    { company: "Telstra", role: "Software Engineer", status: "Applied" },
    { company: "Deloitte", role: "Graduate Developer", status: "Interview" },
    { company: "Accenture", role: "Technology Analyst", status: "Applied" },
  ];

  const upcomingInterviews = [
    { company: "BHP", role: "Graduate Engineer", date: "20 Mar 2026" },
    { company: "Canva", role: "Frontend Developer", date: "25 Mar 2026" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">

        <Sidebar />

        {/* Main content */}
        <section className="flex-1 p-6 md:p-10">
          {/* Top bar */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="mt-1 text-gray-600">
                Track your applications and upcoming interviews.
              </p>
            </div>

            <div className="flex gap-3">
<Link
  href="/pipeline"
  className="rounded-xl border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
>
  View Pipeline
</Link>
              <Link
  href="/jobs/new"
  className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
>
  Add Job
</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="mt-2 text-3xl font-bold">{stat.value}</h2>
              </div>
            ))}
          </div>

          {/* Lower section */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {/* Recent applications */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold">Recent Applications</h3>
              <div className="mt-5 space-y-4">
                {recentApplications.map((job, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
                  >
                    <div>
                      <p className="font-semibold">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.role}</p>
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming interviews */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold">Upcoming Interviews</h3>
              <div className="mt-5 space-y-4">
                {upcomingInterviews.map((interview, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <p className="font-semibold">{interview.company}</p>
                    <p className="text-sm text-gray-500">{interview.role}</p>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {interview.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}