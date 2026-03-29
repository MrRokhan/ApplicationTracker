export type JobStatus = "saved" | "applied" | "interview" | "offer" | "rejected";

export type Job = {
  id: string;
  company: string;
  role: string;
  location: string;
  status: JobStatus;
  dateApplied?: string;
};