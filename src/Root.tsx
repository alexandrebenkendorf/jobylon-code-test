import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from './components/PageComponents';
import { useFetchJobs } from './components/Job/hooks/useFetchJobs';
import { JobContext } from './components/Job/contexts/JobContext';

export default function Root(): React.ReactElement {
  const { jobs, isLoading } = useFetchJobs();

  return (
    <Layout>
      <JobContext.Provider value={{ jobs, isLoading }}>
        <Outlet />
      </JobContext.Provider>
    </Layout>
  );
}
