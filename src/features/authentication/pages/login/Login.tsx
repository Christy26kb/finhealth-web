import { useNavigate } from 'react-router-dom';

import useTranslate from '@hooks/intl';
import { useLoginMutation } from '@features/authentication/queries/AuthQuery';
import { LoginRequest } from '@types';

import { Button, Form, Input } from 'antd';
import { emailRegex } from '@constants/regexps';
import { setToLocalStorage } from '@utils/generic-utils';
import { HOME_PAGE } from '@constants/routes';

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const translate = useTranslate();
  const [login, { isLoading }] = useLoginMutation();

  const onLogin = async (creds: LoginRequest) => {
    const response = await login(creds);
    if ('data' in response) {
      setToLocalStorage('access_token', response.data.accessToken);
      navigate(HOME_PAGE.HOME);
    }
  };

  return (
    <div className="login-section w-full">
      <Form
        name="login"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
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

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary"
            loading={isLoading}
          >
            {translate('authentication.login.login_button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
