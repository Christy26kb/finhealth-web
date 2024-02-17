import { useNavigate } from 'react-router-dom';

import useTranslate from '@hooks/intl';
import { useLoginMutation } from '@features/authentication/queries/AuthQuery';
import { LoginRequest } from '@types';

import { Button, Form, Input, message } from 'antd';
import { emailRegex } from '@constants/regexps';
import { setToLocalStorage } from '@utils/generic-utils';
import { AUTH, HOME_PAGE } from '@constants/routes';
import { getErrorKey } from '@utils/error-utils';

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const translate = useTranslate();
  const [login, { isLoading }] = useLoginMutation();

  const onLogin = async (creds: LoginRequest) => {
    const response: any = await login(creds);
    const userVerifyError = response?.error?.data?.error.code;
    if ('data' in response) {
      setToLocalStorage('access_token', response.data.accessToken);
      setToLocalStorage('refresh_token', response.data.refreshToken);
      navigate(HOME_PAGE.HOME);
    } else if (userVerifyError) {
      const errorKey = getErrorKey(userVerifyError);
      message.open({
        type: 'error',
        content: errorKey ? translate(errorKey) : userVerifyError
      });
    }
  };

  const onSignupClick = () => navigate(AUTH.REGISTER);

  return (
    <div className="login-section w-[450px]">
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onLogin}
        autoComplete="on"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[
            {
              required: true,
              message: translate('authentication.login.email_error'),
              pattern: emailRegex
            }
          ]}
        >
          <Input placeholder={translate('authentication.login.email')} />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            {
              required: true,
              message: translate('authentication.login.password_error'),
              whitespace: true
            }
          ]}
        >
          <Input.Password
            placeholder={translate('authentication.login.password')}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary hover:bg-primary"
            loading={isLoading}
          >
            {translate('authentication.login.login_button')}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="text" className="mt-10 w-full" onClick={onSignupClick}>
            {translate('authentication.login.signup')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
