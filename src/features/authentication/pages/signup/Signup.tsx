import { useNavigate } from 'react-router-dom';

import useTranslate from '@hooks/intl';
import { useSignupMutation } from '@features/authentication/queries/AuthQuery';
import { SignupRequest } from '@types';

import { Button, Form, Input, message, Divider } from 'antd';
import { emailRegex, pwdRegex } from '@constants/regexps';
import { AUTH } from '@constants/routes';

type FieldType = {
  email?: string;
  name?: string;
  password?: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const translate = useTranslate();
  const [signup, { isLoading }] = useSignupMutation();

  const onSignup = async (creds: SignupRequest) => {
    const response = await signup(creds);
    if ('data' in response) {
      navigate(AUTH.LOGIN);
    } else
      message.open({
        type: 'error',
        content: translate('authentication.signup.signup_error')
      });
  };

  const onLoginClick = () => navigate(AUTH.LOGIN);

  return (
    <div className="signup-section w-[450px]">
      <Form
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onSignup}
        autoComplete="on"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[
            {
              required: true,
              message: translate('authentication.signup.email_error'),
              pattern: emailRegex
            }
          ]}
        >
          <Input placeholder={translate('authentication.signup.email')} />
        </Form.Item>

        <Form.Item<FieldType>
          name="name"
          rules={[
            {
              required: true,
              message: translate('authentication.signup.name_error'),
              whitespace: true
            }
          ]}
        >
          <Input placeholder={translate('authentication.signup.name')} />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            {
              required: true,
              message: translate('authentication.signup.password_error'),
              whitespace: true,
              pattern: pwdRegex
            }
          ]}
        >
          <Input.Password
            placeholder={translate('authentication.signup.password')}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary hover:bg-primary"
            loading={isLoading}
          >
            {translate('authentication.signup.signup_button')}
          </Button>
        </Form.Item>

        <Divider plain>or</Divider>

        <Form.Item>
          <Button type="text" className="mt-2 w-full" onClick={onLoginClick}>
            {translate('authentication.signup.back_to_login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
