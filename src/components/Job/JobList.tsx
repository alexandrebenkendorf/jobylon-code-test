import React, { useMemo, useState } from 'react';

import { Input } from '../common/Form';
import { Section, SectionContainer } from '../common';

import { JobCard } from './JobCard';
import { FilterItem, FilterWrapper, JobCardListStyled } from './JobList.styles';
import { useJobs } from './hooks/useJobs';
import { filterJobs } from './utils';

export function JobList(): React.ReactElement {
  const { jobs } = useJobs();
  const [filterTerm, setFilterTerm] = useState('');
  const [filterPlace, setFilterPlace] = useState('');

  function handleSetFilterTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterTerm(e.currentTarget.value);
  }
  function handleSetFilterPlace(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterPlace(e.currentTarget.value);
  }

  const jobsFiltered = useMemo(() => {
    return filterJobs(jobs, [filterTerm, filterPlace]);
  }, [jobs, filterTerm, filterPlace]);

  return (
    <Section style={{ paddingTop: '2rem' }}>
      <SectionContainer>
        <FilterWrapper>
          <FilterItem>
            <Input
              label="What"
              onChange={handleSetFilterTerm}
              value={filterTerm}
              placeholder="Job title, skill or company"
            />
          </FilterItem>
          <FilterItem>
            <Input label="Where" onChange={handleSetFilterPlace} value={filterPlace} placeholder="Country or city" />
          </FilterItem>
        </FilterWrapper>
        <JobCardListStyled>
          {jobsFiltered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </JobCardListStyled>
      </SectionContainer>
    </Section>
  );
}
