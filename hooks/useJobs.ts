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

  function saveJobs(updatedJobs: Job[]) {
    setJobs(updatedJobs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
  }

  function addJob(job: Omit<Job, "id">) {
    const newJob: Job = {
      id: crypto.randomUUID(),
      ...job,
    };

    const updatedJobs = [newJob, ...jobs];
    saveJobs(updatedJobs);
  }

  function updateJobStatus(id: string, status: JobStatus) {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, status } : job
    );
    saveJobs(updatedJobs);
  }

  function deleteJob(id: string) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    saveJobs(updatedJobs);
  }

  return {
    jobs,
    addJob,
    updateJobStatus,
    deleteJob,
  };
}