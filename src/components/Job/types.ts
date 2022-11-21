export type Location = {
  location: {
    text: string;
    [key: string]: unknown;
  };
};
export type Company = {
  id: number;
  slug: string;
  name: string;
  name_internal: string;
  website: string;
  industry: string;
  descr: string;
  logo: string;
  cover: string;
  [key: string]: unknown;
};
export type Urls = {
  ad: string;
  apply: string;
};
export type Job = {
  id: number;
  benefits: [];
  company: Company;
  contact: {};
  departments: [];
  descr: string;
  employment_type: string;
  experience: string;
  locations: Location[];
  slug: string;
  title: string;
  urls: Urls;
  skills: string;
  [key: string]: unknown;
};
