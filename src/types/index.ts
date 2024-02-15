export type Maybe<T> = T | null;

export type Error = any;

export type HTTPResponse<T> = Maybe<T | Error>;

export enum HTTPMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export type Scalars = {
  ID: string;
  String: string;
  QueryString: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type ValidationError = {
  [key: string]: string;
};

export * from './requests';
export * from './notification';
