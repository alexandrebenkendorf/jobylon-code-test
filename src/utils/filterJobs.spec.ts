import jobsFixture from '../test/fixtures/jobs.json';
import Job, { JobProps } from '../@core/domain/entities/Job';

import { filterJobs } from './filterJobs';

const jobsJSON = JSON.parse(JSON.stringify(jobsFixture));
const jobs = jobsJSON.map((job: JobProps) => new Job(job));

describe('filterJobs', () => {
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
