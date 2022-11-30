import { JobHttpGateway } from '../gateways/JobHttpGateway';

export default class ListJobsUseCase {
  gateway = new JobHttpGateway();

  async execute() {
    return await this.gateway.getAll();
  }
}
