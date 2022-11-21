import { screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';

import { renderWithJobContext } from '../test/utils';

import JobPage from './JobPage';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const useParamsMock = useParams as jest.MockedFunction<typeof useParams>;

describe('JobPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', async () => {
    useParamsMock.mockImplementation(() => ({
      jobId: '7161',
    }));

    const { container } = renderWithJobContext(<JobPage />);
    expect(screen.getByText(/qa manager/i)).toBeInTheDocument();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should render 'This opportunity has already been taken' if the job wasn not found", () => {
    useParamsMock.mockImplementation(() => ({
      jobId: '999',
    }));

    renderWithJobContext(<JobPage />);
    expect(screen.getByText(/this opportunity has already been taken/i)).toBeInTheDocument();
  });
});
