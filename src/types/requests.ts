import { Scalars } from '@types';

// Auth Types
export type LoginRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SignupRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type RefreshTokenRequest = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type RefreshTokenResponse = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  idToken: Scalars['String'];
};
