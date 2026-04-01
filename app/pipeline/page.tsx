"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { useJobs } from "@/hooks/useJobs";
import { JobStatus } from "@/types/job";

export default function PipelinePage() {
  const { jobs, updateJobStatus, deleteJob } = useJobs();

  const columns: { title: string; key: JobStatus }[] = [
    { title: "Saved", key: "saved" },
    { title: "Applied", key: "applied" },
    { title: "Interview", key: "interview" },
    { title: "Offer", key: "offer" },
    { title: "Rejected", key: "rejected" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">Job Application Pipeline</h1>
                <p className="mt-2 text-gray-600">
                  Track your applications through each stage of the job search.
                </p>
              </div>

              <Link
                href="/jobs/new"
                className="w-fit rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
              >
                Add Job
              </Link>
            </div>

            <div className="grid gap-6 xl:grid-cols-5">
              {columns.map((column) => {
                const columnJobs = jobs.filter((job) => job.status === column.key);

                return (
                  <div
                    key={column.key}
                    className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-lg font-semibold">{column.title}</h2>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                        {columnJobs.length}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {columnJobs.length === 0 ? (
                        <p className="text-sm text-gray-400">No jobs yet</p>
                      ) : (
                        columnJobs.map((job) => (
                          <div
                            key={job.id}
                            className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:shadow-sm"
                          >
                            <h3 className="font-semibold">{job.company}</h3>
                            <p className="mt-1 text-sm text-gray-700">{job.role}</p>
                            <p className="mt-2 text-xs text-gray-500">
                              {job.location}
                            </p>

                            {job.dateApplied && (
                              <p className="mt-2 text-xs text-gray-500">
                                Applied: {job.dateApplied}
                              </p>
                            )}

                            <div className="mt-4 space-y-2">
                              <select
                                value={job.status}
                                onChange={(e) =>
                                  updateJobStatus(job.id, e.target.value as JobStatus)
                                }
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                              >
                                <option value="saved">Saved</option>
                                <option value="applied">Applied</option>
                                <option value="interview">Interview</option>
                                <option value="offer">Offer</option>
                                <option value="rejected">Rejected</option>
                              </select>

                              <button
                                onClick={() => deleteJob(job.id)}
                                className="w-full rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}