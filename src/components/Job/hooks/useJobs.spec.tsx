import { render, screen } from '@testing-library/react';
import React from 'react';

import { withJobContext } from '../../../test/utils';

import { useJobs } from './useJobs';

const spyUseContext = jest.spyOn(React, 'useContext');

const Component = () => {
  const { isLoading } = useJobs();
  return <div>{isLoading && 'isLoading'}</div>;
};

describe('useJobs', () => {
  it('should return contex', () => {
    spyUseContext.mockImplementation(() => ({
      isLoading: true,
    }));
    render(withJobContext(<Component />));

    expect(screen.getByText('isLoading')).toBeInTheDocument();
  });

  it('should throw an error if not used within contex provider', () => {
    spyUseContext.mockImplementation(() => {});
    expect(useJobs).toThrowError();
  });
});
