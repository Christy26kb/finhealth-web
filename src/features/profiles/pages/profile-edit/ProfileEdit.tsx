import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTranslate from '@hooks/intl';

import { PROFILE } from '@constants/routes';
import { ProfileRequest } from '@types';
import { Button, Divider, Form, Input, Radio, message } from 'antd';

import {
  useCreateUserProfileMutation,
  useLazyGetUserProfileQuery,
  useUpdateUserProfileMutation
} from '@features/profiles/queries/ProfileQuery';

interface ProfileEditProps {
  isEdit: boolean;
}

type FieldType = {
  name?: string;
  notes?: string;
  currency?: string;
  locale?: string;
  monthly_email_report?: boolean;
};

enum DefaultFieldItemValues {
  CURRENCY = 'INR',
  LOCALE = 'en'
}

const defaultValues = {
  name: '',
  notes: '',
  currency: '',
  locale: '',
  monthly_email_report: false
};

const ProfileEdit = (props: ProfileEditProps) => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const { isEdit } = props;
  const { profileId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileData, setProfileData] = useState(defaultValues);

  const [createProfile, { isLoading: isCreating }] =
    useCreateUserProfileMutation();
  const [updateProfile, { isLoading: isUpdating }] =
    useUpdateUserProfileMutation();
  const [getUserProfile, { isLoading: isProfileLoading }] =
    useLazyGetUserProfileQuery();

  const handleProfileEdit = async () => {
    if (profileId) {
      const response = await getUserProfile(profileId);
      const propfileData = response?.data;
      if (propfileData) {
        setProfileData({
          name: propfileData?.name,
          notes: propfileData?.notes,
          currency: propfileData?.currency,
          locale: propfileData?.locale,
          monthly_email_report: propfileData?.monthly_email_report
        });
      }
    }
  };

  useEffect(() => {
    handleProfileEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitForm = async (params: ProfileRequest) => {
    let response: any = null;
    if (!profileId) response = await createProfile(params);
    else response = await updateProfile({ ...params, id: profileId });

    const err = response?.error?.data?.error;
    if ('data' in response) {
      navigate(PROFILE.PROFILES);
    } else if (err?.code) {
      const errorMsg = err?.message?.[0] || err;
      message.open({
        type: 'error',
        content: errorMsg
      });
    }
  };

  const onCancel = () => navigate(PROFILE.PROFILES);
  const isLoading = isCreating || isUpdating || isProfileLoading;

  return (
    <div className="profile-edit-section size-full p-6">
      <Form
        name="profile-edit"
        className="flex flex-col"
        onFinish={onSubmitForm}
        layout="vertical"
      >
        <div className="profile-edit-title flex w-full flex-row items-center justify-between">
          <div className="text-h4 font-normal leading-7">
            {translate(
              isEdit ? 'profiles.edit.edit_title' : 'profiles.edit.create_title'
            )}
          </div>
          <div>
            <Form.Item className="m-0 flex items-center justify-center">
              <Button type="default" onClick={onCancel} disabled={isLoading}>
                {translate('profiles.edit.cancel')}
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="ml-2 bg-primary hover:bg-primary"
                loading={isLoading}
              >
                {translate('profiles.edit.save')}
              </Button>
            </Form.Item>
          </div>
        </div>
        <Divider className="mb-10" />
        <div className="profile-edit-form-content w-1/2">
          <Form.Item<FieldType>
            name="name"
            className="mb-8"
            label={translate('profiles.edit.name')}
            rules={[
              {
                required: true,
                message: translate('profiles.edit.name_error'),
                whitespace: true
              }
            ]}
          >
            <Input placeholder={translate('profiles.edit.name')} />
          </Form.Item>

          <Form.Item<FieldType>
            name="notes"
            className="mb-8"
            label={translate('profiles.edit.notes')}
            rules={[
              {
                required: true,
                message: translate('profiles.edit.notes_error'),
                whitespace: true
              }
            ]}
          >
            <Input.TextArea placeholder={translate('profiles.edit.notes')} />
          </Form.Item>

          <Form.Item<FieldType>
            name="monthly_email_report"
            className="mb-8"
            label={translate('profiles.edit.monthly_email_report')}
            rules={[
              {
                required: true,
                message: translate('profiles.edit.monthly_email_report')
              }
            ]}
          >
            <Radio.Group value="horizontal" name="monthly_email_report">
              {/* eslint-disable-next-line react/jsx-boolean-value */}
              <Radio.Button value={true}>
                {translate('profiles.edit.monthly_email_yes')}
              </Radio.Button>
              <Radio.Button value={false}>
                {translate('profiles.edit.monthly_email_no')}
              </Radio.Button>
            </Radio.Group>
          </Form.Item>

          <div className="locale-currency-section flex w-full items-center">
            <Form.Item<FieldType>
              name="currency"
              className="mr-4 w-[50%]"
              initialValue={DefaultFieldItemValues.CURRENCY}
              label={translate('profiles.edit.currency')}
              rules={[
                {
                  required: true,
                  message: translate('profiles.edit.currency_error'),
                  whitespace: true
                }
              ]}
            >
              <Input
                placeholder={translate('profiles.edit.currency')}
                defaultValue={DefaultFieldItemValues.CURRENCY}
                disabled
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="locale"
              className="w-[50%]"
              initialValue={DefaultFieldItemValues.LOCALE}
              label={translate('profiles.edit.locale')}
              rules={[
                {
                  required: true,
                  message: translate('profiles.edit.locale_error'),
                  whitespace: true
                }
              ]}
            >
              <Input
                placeholder={translate('profiles.edit.locale')}
                defaultValue={DefaultFieldItemValues.LOCALE}
                disabled
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProfileEdit;
