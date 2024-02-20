export enum ErrorCode {
  TooManyRequests = 'TOO_MANY_REQUESTS',
  Unauthorized = 'UNAUTHORIZED',
  InvalidUserInput = 'INVALID_USER_INPUT',
  ObjectNotFound = 'OBJECT_NOT_FOUND'
}

export type ApiError = {
  name: string;
  stack: string;
  status: number;
  message: string;
  errors: {
    message: string;
    path: string[];
    extensions: {
      classification: ErrorCode;
    };
  }[];
};

export enum TokenKeys {
  ACCESS_TOKEN = 'access_token',
  RFERESH_TOKEN = 'refresh_token'
}
