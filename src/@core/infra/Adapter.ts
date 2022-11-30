import AxiosAdapter from './AxiosAdapter';
import HttpClient from './HttpClient';

export const Adapter: HttpClient = new AxiosAdapter();
