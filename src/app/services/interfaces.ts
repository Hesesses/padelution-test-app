
export interface ICountry {
  id: number;
  name: string;
  code: string;
}

export interface IPage {
  id: number;
  name: string;
  slug: string;
}

export interface IEvent {
  id: number;
  name: string;
  description: string;
  start_at: string;
  days: number;
  status: number;
  city: string;
  created_at: string;
  updated_at: string;
  last_sign_up_at: string;
  max_participants: number;
  slug: string;
  start_at_time: string;
  country: ICountry;
  host?: IPage,
}

export interface IApiResponse<T> {
  data: T[];
  links?: any;
  meta?: any;
}
