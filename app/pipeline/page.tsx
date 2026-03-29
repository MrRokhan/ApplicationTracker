import Sidebar from "@/components/Sidebar";

export default function PipelinePage() {
  const jobs = {
    saved: [
      { id: 1, company: "Atlassian", role: "Frontend Developer", location: "Sydney" },
      { id: 2, company: "Canva", role: "Backend Developer", location: "Remote" },
    ],
    applied: [
      { id: 3, company: "Telstra", role: "Software Engineer", location: "Brisbane" },
      { id: 4, company: "Deloitte", role: "Graduate Developer", location: "Brisbane" },
    ],
    interview: [
      { id: 5, company: "BHP", role: "Graduate Engineer", location: "Brisbane" },
    ],
    offer: [
      { id: 6, company: "Example Corp", role: "Junior Web Developer", location: "Gold Coast" },
    ],
    rejected: [
      { id: 7, company: "Amazon", role: "Software Engineer", location: "Sydney" },
    ],
  };

  const columns = [
    { title: "Saved", key: "saved" as const },
    { title: "Applied", key: "applied" as const },
    { title: "Interview", key: "interview" as const },
    { title: "Offer", key: "offer" as const },
    { title: "Rejected", key: "rejected" as const },
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

              <button className="w-fit rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90">
                Add Job
              </button>
            </div>

            <div className="grid gap-6 xl:grid-cols-5">
              {columns.map((column) => (
                <div
                  key={column.key}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{column.title}</h2>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                      {jobs[column.key].length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {jobs[column.key].map((job) => (
                      <div
                        key={job.id}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:shadow-sm"
                      >
                        <h3 className="font-semibold">{job.company}</h3>
                        <p className="mt-1 text-sm text-gray-700">{job.role}</p>
                        <p className="mt-2 text-xs text-gray-500">{job.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}