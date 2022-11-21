import { render, screen } from '@testing-library/react';

import { withThemeProvider } from '../test/utils';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render correctly', () => {
    render(withThemeProvider(<ErrorPage />));
    expect(screen.getByTestId('error-page')).toMatchSnapshot();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
