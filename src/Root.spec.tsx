import { render, screen } from '@testing-library/react';

import { useFetchJobs } from './components/Job/hooks/useFetchJobs';

import Root from './Root';
import { jobs } from './test/fixtures/jobs';
import { withRouter } from './test/utils';

jest.mock('./components/Job/hooks/useFetchJobs');

const useFetchJobsMocked = useFetchJobs as jest.MockedFunction<typeof useFetchJobs>;

describe('Root', () => {
  it('should render correctly', async () => {
    useFetchJobsMocked.mockReturnValue({ jobs, isLoading: false });

    render(withRouter(<Root />));

    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
});
