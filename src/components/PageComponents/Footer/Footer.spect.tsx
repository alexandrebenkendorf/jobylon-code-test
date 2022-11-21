import { render, screen } from '@testing-library/react';

import { withThemeProvider } from '../../../test/utils';

import { Footer } from './Footer';

describe('Footer', () => {
  render(withThemeProvider(<Footer>footer content</Footer>));

  expect(screen.getByText(/footer content/i)).toBeInTheDocument();
});
