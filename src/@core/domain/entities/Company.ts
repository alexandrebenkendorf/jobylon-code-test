export type CompanyProps = {
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
