import { renderHook, waitFor } from '@testing-library/react';

import jobsFixture from '../test/fixtures/jobs.json';
import { Adapter } from '../@core/infra/Adapter';
import Job, { JobProps } from '../@core/domain/entities/Job';

import useFetchJobs from './useFetchJobs';

jest.mock('../@core/infra/Adapter');
const AdapterMocked = Adapter as jest.MockedObject<typeof Adapter>;

const jobsJSON = JSON.parse(JSON.stringify(jobsFixture));
const jobs = jobsJSON.map((job: JobProps) => new Job(job));

describe('useFetchJobs', () => {
  beforeEach(() => {
    AdapterMocked.get.mockClear();
  });

  it('should return loading on first render', async () => {
    const { result } = renderHook(() => useFetchJobs());

    expect(result.current.isLoading).toBeTruthy();
  });

  it('should return jobs if the API is working and returns the data', async () => {
    AdapterMocked.get.mockResolvedValue({ data: jobsFixture } as any);

    const { result } = renderHook(() => useFetchJobs());

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });
    await waitFor(() => {
      expect(result.current.jobs).toEqual(jobs);
    });
  });

  it('should return empty jobs if the API is working and returns the empty data', async () => {
    AdapterMocked.get.mockResolvedValue({ data: [] } as any);

    const { result } = renderHook(() => useFetchJobs());

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });
    await waitFor(() => {
      expect(result.current.jobs).toHaveLength(0);
    });
  });
});
