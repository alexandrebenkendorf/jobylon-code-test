import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Heading,
  ICONS,
  Paragraph,
  ExternalLink,
  Container,
  Button,
  Panel,
  PanelHeader,
  Section,
  SectionContainer,
  Divisor,
  SectionCTA,
  PanelContainer,
  LinkStyled,
} from '../components/common';
import { CompanyLogo, Tag, TagIcon, Tags, TagText } from '../components/Job/styles';
import { useJobs } from '../hooks/useJobs';

export default function JobPage(): React.ReactElement | null {
  const { jobs } = useJobs();
  const { jobId } = useParams();

  const job = jobId && jobs.find((job) => job.id === +jobId);

  if (!job) {
    return (
      <Container style={{ textAlign: 'center' }}>
        <Section>
          <SectionContainer>
            <Heading>Oops!</Heading>
            <Paragraph>This opportunity has already been taken :/</Paragraph>
            <Paragraph>
              <LinkStyled to="/">See all opportunities</LinkStyled>
            </Paragraph>
          </SectionContainer>
        </Section>
      </Container>
    );
  }

  const { id, title, location, employmentType, company, descr, skills, urls } = job;

  return (
    <Container data-testid={`job--${id}`}>
      <Section>
        <SectionContainer>
          <Paragraph>
            <LinkStyled to="/"> &#x2190; Back to all positions</LinkStyled>
          </Paragraph>
        </SectionContainer>
      </Section>

      <Panel as="article">
        <PanelContainer>
          <PanelHeader>
            <div>
              <Heading>{title}</Heading>
              <Tags>
                <Tag>
                  <TagIcon src={ICONS.iconLocation} alt="location" />
                  <TagText>{location}</TagText>
                </Tag>
                <Tag>
                  <TagIcon src={ICONS.iconContractType} alt="contract type" />
                  <TagText>{employmentType}</TagText>
                </Tag>
              </Tags>
            </div>
            <ExternalLink href={company.website} target="blank" title={`View website of ${company.name}`}>
              <CompanyLogo>
                <img src={company.logo} alt={company.name} />
              </CompanyLogo>
            </ExternalLink>
          </PanelHeader>

          <Divisor gap="1.5rem" hideLine />

          <Section>
            <Heading as="h2" level={2}>
              Description
            </Heading>
            <SectionContainer>
              <div dangerouslySetInnerHTML={{ __html: descr }} />
            </SectionContainer>
          </Section>

          <Section>
            <Heading as="h2" level={2}>
              Skills
            </Heading>
            <SectionContainer>
              <div dangerouslySetInnerHTML={{ __html: skills }} />
            </SectionContainer>
          </Section>
        </PanelContainer>

        <SectionCTA>
          <Heading as="h2" level={2}>
            Are you the one?
          </Heading>
          <SectionContainer>
            <Paragraph>
              <Button as="a" href={urls.apply} target="blank" data-testid={`button--${id}`} size="big">
                Apply now
              </Button>
            </Paragraph>
            <Paragraph size="small">
              More info about this role you can find{' '}
              <ExternalLink href={urls.ad} target="blank">
                here
              </ExternalLink>
            </Paragraph>
          </SectionContainer>
        </SectionCTA>
      </Panel>
    </Container>
  );
}
