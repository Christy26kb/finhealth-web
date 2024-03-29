import { useNavigate } from 'react-router-dom';

import useTranslate from '@hooks/intl';
import { useLoginMutation } from '@features/authentication/queries/AuthQuery';
import { LoginRequest } from '@types';

import { Button, Form, Input, message, Divider } from 'antd';
import { emailRegex } from '@constants/regexps';
import { AUTH, HOME } from '@constants/routes';
import { getErrorKey } from '@utils/error-utils';
import {
  setAccessToken,
  setRefreshToken
} from '@features/authentication/utils/utils';

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
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      navigate(HOME.HOME);
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

        <Divider plain>or</Divider>

        <Form.Item>
          <Button type="text" className="mt-2 w-full" onClick={onSignupClick}>
            {translate('authentication.login.signup')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
