import React from 'react';

import { Container, Heading, LinkStyled, Paragraph, Section, SectionContainer } from '../components/common';
import { Layout } from '../components/PageComponents';

export default function ErrorPage(): React.ReactElement {
  return (
    <Layout>
      <Container style={{ textAlign: 'center' }}>
        <Section data-testid="error-page">
          <SectionContainer>
            <Heading>Oops!</Heading>
            <Paragraph>Page not found.</Paragraph>
            <Paragraph>
              <LinkStyled to="/">Take me back to the Home page</LinkStyled>
            </Paragraph>
          </SectionContainer>
        </Section>
      </Container>
    </Layout>
  );
}
