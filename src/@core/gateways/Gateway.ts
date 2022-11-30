import HttpClient from '../infra/HttpClient';

export default interface Gateway {
  baseUrl: string;
  httpClient: HttpClient;
}
