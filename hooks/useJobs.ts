"use client";

import { useEffect, useState } from "react";
import { Job, JobStatus } from "@/types/job";

const STORAGE_KEY = "application-tracker-jobs";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem(STORAGE_KEY);
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  function addJob(job: Omit<Job, "id">) {
    const newJob: Job = {
      id: crypto.randomUUID(),
      ...job,
    };

    setJobs((prev) => [newJob, ...prev]);
  }

  function updateJobStatus(id: string, status: JobStatus) {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, status } : job))
    );
  }

  function deleteJob(id: string) {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  }

  return {
    jobs,
    addJob,
    updateJobStatus,
    deleteJob,
  };
}