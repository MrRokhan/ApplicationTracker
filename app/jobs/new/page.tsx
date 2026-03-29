"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { useJobs } from "@/hooks/useJobs";
import { JobStatus } from "@/types/job";

export default function NewJobPage() {
  const router = useRouter();
  const { addJob } = useJobs();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    status: "saved" as JobStatus,
    dateApplied: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addJob({
      company: formData.company,
      role: formData.role,
      location: formData.location,
      status: formData.status,
      dateApplied: formData.dateApplied,
    });

    router.push("/pipeline");
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h1 className="text-3xl font-bold">Add New Job</h1>
            <p className="mt-2 text-gray-600">
              Add a new application to your tracker.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                >
                  <option value="saved">Saved</option>
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date Applied
                </label>
                <input
                  type="date"
                  name="dateApplied"
                  value={formData.dateApplied}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
              >
                Save Job
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}