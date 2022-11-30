import { createContext } from "react";

import Job from "../@core/domain/entities/Job";

export type JobContextType = {
  jobs: Job[];
  isLoading: boolean;
};
export const JobContext = createContext<JobContextType>({
  jobs: [],
  isLoading: false,
});
