import { useCallback, useEffect, useState } from 'react';

import Job from '../@core/domain/entities/Job';
import ListJobsUseCase from '../@core/useCases/ListJobs.useCase';

export default function useFetchJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchJobs = useCallback(async () => {
    const listJobs = new ListJobsUseCase();
    const jobs = await listJobs.execute();
    setJobs(jobs);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchJobs();
  }, [handleFetchJobs]);

  return { jobs, isLoading };
}
