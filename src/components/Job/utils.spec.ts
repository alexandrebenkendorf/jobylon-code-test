import { jobs } from '../../test/fixtures/jobs';

import { filterJobs } from './utils';

describe('getFilteredJobs', () => {
  it('should return correct filter', () => {
    let filteredJobs = filterJobs(jobs, ['mana', 'sve']);
    expect(filteredJobs).toHaveLength(1);

    filteredJobs = filterJobs(jobs, ['abc', '']);
    expect(filteredJobs).toHaveLength(0);

    filteredJobs = filterJobs(jobs, ['abc', 'abc']);
    expect(filteredJobs).toHaveLength(0);

    filteredJobs = filterJobs(jobs, ['', 'abc']);
    expect(filteredJobs).toHaveLength(0);

    filteredJobs = filterJobs(jobs, ['mana', '']);
    expect(filteredJobs).toHaveLength(2);

    filteredJobs = filterJobs(jobs, ['', '']);
    expect(filteredJobs).toHaveLength(6);
  });
});
