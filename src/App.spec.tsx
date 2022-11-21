import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  RouterProvider: () => <div />,
}));

describe('App', () => {
  it('should render correctly', () => {
    render(<App />);
    screen.getByTestId('app');
  });
});
