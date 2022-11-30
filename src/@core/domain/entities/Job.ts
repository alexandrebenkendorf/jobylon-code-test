import { CompanyProps } from './Company';
import { LocationProps } from './Location';

export type JobProps = {
  id: number;
  benefits: [];
  company: CompanyProps;
  contact: {};
  departments: [];
  descr: string;
  employment_type: string;
  experience: string;
  locations: LocationProps[];
  slug: string;
  title: string;
  urls: { ad: string; apply: string };
  skills: string;
  [key: string]: unknown;
};

export default class Job {
  constructor(readonly props: JobProps) {}

  get id() {
    return this.props.id;
  }
  get title() {
    return this.props.title;
  }
  get company() {
    return this.props.company;
  }
  get descr() {
    return this.props.descr;
  }
  get employmentType() {
    return this.props.employment_type;
  }
  get location() {
    return this.props.locations[0].location.text;
  }
  get slug() {
    return this.props.slug;
  }
  get urls() {
    return this.props.urls;
  }
  get skills() {
    return this.props.skills;
  }
}
