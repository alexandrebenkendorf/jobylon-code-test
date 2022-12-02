import { screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { renderWithJobContext } from '../test/utils';

import HomePage from './HomePage';

expect.extend(toHaveNoViolations);

describe('HomePage', () => {
  it('should render correctly', async () => {
    const { container } = renderWithJobContext(<HomePage />);

    const jobCards = screen.getAllByTestId(/job-card--/i);

    expect(jobCards).toHaveLength(6);
    expect(screen.getByTestId('home-heading')).toHaveTextContent('Find the right job for you');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
