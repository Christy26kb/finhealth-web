import { useGetAllUserProfilesQuery } from '@features/profiles/queries/ProfileQuery';
import { Profile } from '@types';
import { List, Avatar, Card, Button, Tooltip } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  FilterOutlined,
  EditOutlined
} from '@ant-design/icons';
import useTranslate from '@hooks/intl';
import { useNavigate } from 'react-router-dom';
import { PROFILE } from '@constants/routes';

const ProfilesList = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const { data: profiles, isLoading } = useGetAllUserProfilesQuery();

  const renderProfileItem = (profileItem: Profile) => (
    <List.Item className="flex h-[75px] items-center justify-between">
      <List.Item.Meta
        avatar={
          <Avatar size="default" shape="circle" icon={<UserOutlined />} />
        }
        title={profileItem.name}
        description={profileItem.notes}
      />
      <div className="flex items-center justify-center">
        <Tooltip title={translate('profiles.list.edit_tooltip')}>
          <div className="flex items-center justify-center">
            <Button
              type="default"
              icon={<EditOutlined />}
              onClick={() =>
                navigate(
                  PROFILE.EDIT_PROFILE.replace(':profileId', profileItem.id)
                )
              }
            />
          </div>
        </Tooltip>
      </div>
    </List.Item>
  );

  const onCreateProfile = () => navigate(PROFILE.CREATE_PROFILE);

  const renderItemHeader = () => (
    <div className="flex flex-row items-center justify-between py-6">
      <div className="text-h4 font-normal leading-7">
        {translate('profiles.list.page_title')}
      </div>
      <div className="header-action-section flex flex-row items-center">
        <Tooltip title={translate('profiles.list.filters')}>
          <div className="mr-4 flex items-center justify-center">
            <Button type="default" icon={<FilterOutlined />} />
          </div>
        </Tooltip>
        <Tooltip title={translate('profiles.list.create_profile')}>
          <div className="flex items-center justify-center">
            <Button
              type="default"
              icon={<PlusOutlined />}
              onClick={onCreateProfile}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );

  return (
    <div className="profiles-list-wrapper size-full p-6">
      <Card title={renderItemHeader()} className="h-full">
        <List
          itemLayout="horizontal"
          dataSource={profiles}
          renderItem={renderProfileItem}
          loading={isLoading}
        />
      </Card>
    </div>
  );
};

export default ProfilesList;
