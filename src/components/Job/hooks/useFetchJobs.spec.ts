import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';

import { JOBS_API } from '../../../constants/jobs';
import { jobs as jobsFixture } from '../../../test/fixtures/jobs';

import { useFetchJobs } from './useFetchJobs';

const axiosGetSpy = jest.spyOn(axios, 'get');

describe('useFetchJobs', () => {
  beforeEach(() => {
    axiosGetSpy.mockClear();
  });

  it('should return jobs if the API is working and returns the data', async () => {
    axiosGetSpy.mockResolvedValueOnce({ data: jobsFixture });

    const { result } = renderHook(() => useFetchJobs());

    expect(axiosGetSpy).toHaveBeenCalledWith(JOBS_API);

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });
    await waitFor(() => {
      expect(result.current.jobs).toEqual(jobsFixture);
    });
  });

  it('should return empty jobs if the API is working and returns the empty data', async () => {
    axiosGetSpy.mockResolvedValueOnce({ data: [] });

    const { result } = renderHook(() => useFetchJobs());

    expect(axiosGetSpy).toHaveBeenCalledWith(JOBS_API);

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });
    await waitFor(() => {
      expect(result.current.jobs).toHaveLength(0);
    });
  });

  it('should log error if the API fails', async () => {
    const logSpy = jest.spyOn(console, 'error');
    const error = new Error('API failed');

    axiosGetSpy.mockRejectedValueOnce(error);

    renderHook(() => useFetchJobs());

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(error);
    });
  });
});
