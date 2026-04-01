"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { useJobs } from "@/hooks/useJobs";

export default function DashboardPage() {
  const { jobs } = useJobs();

  const stats = [
    { title: "Applications", value: jobs.length },
    {
      title: "Interviews",
      value: jobs.filter((job) => job.status === "interview").length,
    },
    {
      title: "Offers",
      value: jobs.filter((job) => job.status === "offer").length,
    },
    {
      title: "Rejected",
      value: jobs.filter((job) => job.status === "rejected").length,
    },
  ];

  const recentApplications = jobs.slice(0, 5);
  const upcomingInterviews = jobs.filter((job) => job.status === "interview");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6 md:p-10">
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

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold">Recent Applications</h3>

              <div className="mt-5 space-y-4">
                {recentApplications.length === 0 ? (
                  <p className="text-sm text-gray-400">No jobs added yet</p>
                ) : (
                  recentApplications.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
                    >
                      <div>
                        <p className="font-semibold">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.role}</p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium capitalize text-gray-700">
                        {job.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold">Upcoming Interviews</h3>

              <div className="mt-5 space-y-4">
                {upcomingInterviews.length === 0 ? (
                  <p className="text-sm text-gray-400">No interviews yet</p>
                ) : (
                  upcomingInterviews.map((job) => (
                    <div
                      key={job.id}
                      className="rounded-xl border border-gray-200 p-4"
                    >
                      <p className="font-semibold">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.role}</p>
                      {job.dateApplied && (
                        <p className="mt-2 text-sm text-gray-600">
                          Applied: {job.dateApplied}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}