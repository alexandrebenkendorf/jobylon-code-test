import React from 'react';

import Job from '../../@core/domain/entities/Job';
import { ICONS } from '../common';

import {
  JobCardCompany,
  JobCardContainer,
  JobCardInfo,
  JobCardLink,
  JobCardStyled,
  JobCardTitle,
  JobCardWrapper,
} from './JobCard.styles';
import { CompanyLogo, Tag, TagIcon, Tags, TagText } from './styles';

type JobCardProps = {
  job: Job;
};
export function JobCard({ job }: JobCardProps): React.ReactElement {
  return (
    <JobCardWrapper>
      <JobCardLink to={`jobs/${job.id}`}>
        <JobCardStyled data-testid={`job-card--${job.id}`}>
          <JobCardContainer>
            <JobCardInfo>
              <JobCardTitle as="h2">{job.title}</JobCardTitle>
              <JobCardCompany>{job.company.name}</JobCardCompany>
              <Tags>
                <Tag>
                  <TagIcon src={ICONS.iconLocation} alt="location" />
                  <TagText>{job.location}</TagText>
                </Tag>
                <Tag>
                  <TagIcon src={ICONS.iconContractType} alt="contract type" />
                  <TagText>{job.employmentType}</TagText>
                </Tag>
              </Tags>
            </JobCardInfo>
            <CompanyLogo>
              <img src={job.company.logo} alt={job.company.name} />
            </CompanyLogo>
          </JobCardContainer>
        </JobCardStyled>
      </JobCardLink>
    </JobCardWrapper>
  );
}
