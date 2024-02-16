import { ValidationError } from '@types';

const ExceptionErrorCodesMap: ValidationError = {
  UserNotConfirmedException: 'authentication.login.verify_email_error',
  NotAuthorizedException: 'authentication.login.login_error'
};

// eslint-disable-next-line import/prefer-default-export
export const getErrorKey = (err: string) => ExceptionErrorCodesMap?.[err];
