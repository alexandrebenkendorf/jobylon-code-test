import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { JOBS_API } from '../../../constants/jobs';
import { Job } from '../types';

export function useFetchJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchJobs = useCallback(async () => {
    try {
      const { data } = await axios.get(JOBS_API);
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchJobs();
  }, [handleFetchJobs]);

  return { jobs, isLoading };
}
