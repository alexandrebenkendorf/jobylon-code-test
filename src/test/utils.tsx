import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from '../themes/jobylon';
import { JobContext } from '../contexts/JobContext';

import jobsFixture from './fixtures/jobs.json';

const jobs = JSON.parse(JSON.stringify(jobsFixture));

export function withThemeProvider(Component: React.ReactNode) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>{Component}</Fragment>
    </ThemeProvider>
  );
}

export function withRouter(Component: React.ReactNode) {
  return <BrowserRouter>{Component}</BrowserRouter>;
}

export function withJobContext(Component: React.ReactNode) {
  return <JobContext.Provider value={{ jobs, isLoading: false }}>{Component}</JobContext.Provider>;
}

export function renderWithJobContext(Component: React.ReactNode) {
  return render(withJobContext(withRouter(withThemeProvider(Component))));
}
