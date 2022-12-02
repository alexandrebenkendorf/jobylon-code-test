import { render, screen } from '@testing-library/react';

import useFetchJobs from '../hooks/useFetchJobs';
import jobsFixture from '../test/fixtures/jobs.json';

import Root from './Root';
import { withRouter } from '../test/utils';

const jobs = JSON.parse(JSON.stringify(jobsFixture));

jest.mock('../hooks/useFetchJobs');

const useFetchJobsMocked = useFetchJobs as jest.MockedFunction<typeof useFetchJobs>;

describe('Root', () => {
  it('should render correctly', async () => {
    useFetchJobsMocked.mockReturnValue({ jobs, isLoading: false });

    render(withRouter(<Root />));

    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
});
