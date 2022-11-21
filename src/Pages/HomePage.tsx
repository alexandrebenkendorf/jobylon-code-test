import React from 'react';

import { Container, Heading, Section } from '../components/common';
import { JobList } from '../components/Job/JobList';

export default function HomePage(): React.ReactElement {
  return (
    <Container>
      <Section>
        <Heading weight={300} data-testid="home-heading">
          Find the <br />
          <b>right job for you</b>
        </Heading>
        <JobList />
      </Section>
    </Container>
  );
}
