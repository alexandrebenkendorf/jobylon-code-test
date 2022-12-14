import Job from "../@core/domain/entities/Job";


export function filterJobs(jobs: Job[], terms: [string, string]) {
  const [term, place] = terms;
  if (!term && !place) {
    return jobs;
  }

  const regexTerm = RegExp(term, 'i');
  const regexPlace = RegExp(place, 'i');

  return jobs.filter((job) => {
    const matchesTerm = [job.skills.match(regexTerm), job.title.match(regexTerm), job.company.name.match(regexTerm)];
    const isMatchTerm = matchesTerm.some((match) => Boolean(match));
    
    const isMatchesPlace = Boolean(job.location.match(regexPlace));

    return isMatchTerm && isMatchesPlace;
  });
}
