import { Scalars } from '@types';

// Auth Types
export type LoginRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  accessToken: Scalars['String'];
  refreshtTken: Scalars['String'];
};

export type SignupRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};
