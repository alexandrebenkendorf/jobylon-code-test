import { useContext } from 'react';

import { JobContext, JobContextType } from '../contexts/JobContext';

export function useJobs(): JobContextType {
  const result = useContext(JobContext);

  if (!result) {
    throw new Error('useJobs must be used within the JobContext provider');
  }

  return result;
}
