import React, { useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Input } from '../common/Form';
import { Section, SectionContainer } from '../common';
import { useJobs } from '../../hooks/useJobs';
import { filterJobs } from '../../utils/filterJobs';

import { JobCard } from './JobCard';
import { FilterItem, FilterWrapper, JobCardListStyled } from './JobList.styles';
import { JobCardWrapper } from './JobCard.styles';

export function JobList(): React.ReactElement {
  const { jobs, isLoading } = useJobs();
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
          {isLoading && (
            <Skeleton
              wrapper={JobCardWrapper}
              height={100}
              count={3}
              borderRadius={10}
              baseColor="#f9f9f9"
              highlightColor="#ffffff"
              style={{ opacity: 0.9 }}
            />
          )}
          {jobsFiltered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </JobCardListStyled>
      </SectionContainer>
    </Section>
  );
}
