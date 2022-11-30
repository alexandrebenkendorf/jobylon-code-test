import Job from "./Job";

export default class JobList {
  items: Job[];

  constructor(items?: Job[]) {
    this.items = [];
    if (items) {
      for (const item of items) {
        this.items.push(item);
      }
    }
  }
}
