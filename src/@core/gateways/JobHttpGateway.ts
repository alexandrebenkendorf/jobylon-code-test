import { JOBS_API } from '../../constants/api';
import Job, { JobProps } from '../domain/entities/Job';
import { Adapter } from '../infra/Adapter';

import Gateway from './Gateway';

export class JobHttpGateway implements Gateway {
  baseUrl = JOBS_API;
  httpClient = Adapter;

  async getAll(): Promise<Job[]> {
    try {
      const { data } = await this.httpClient.get(`${this.baseUrl}`);
      return data.map((data: JobProps) => new Job(data));
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
