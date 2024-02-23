import { useGetAllUserProfilesQuery } from '@features/profiles/queries/ProfileQuery';
import { Profile } from '@types';
import { List, Avatar, Card, Button, Tooltip } from 'antd';
import { UserOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import useTranslate from '@hooks/intl';

const ProfilesList = () => {
  const translate = useTranslate();
  const { data: profiles, isLoading } = useGetAllUserProfilesQuery();

  const renderProfileItem = (profileItem: Profile) => (
    <List.Item className="h-[75px]">
      <List.Item.Meta
        avatar={
          <Avatar size="default" shape="circle" icon={<UserOutlined />} />
        }
        title={profileItem.name}
        description={profileItem.notes}
      />
    </List.Item>
  );

  const onCreateProfile = () => {};

  const renderItemHeader = () => (
    <div className="flex flex-row items-center justify-between">
      <div className="text-h4 py-8 font-normal leading-7">
        {translate('profiles.list.page_title')}
      </div>
      <div className="header-action-section flex flex-row items-center">
        <Tooltip title={translate('profiles.list.filters')}>
          <div className="mr-4 flex items-center justify-center">
            <Button
              type="default"
              icon={<FilterOutlined />}
              onClick={onCreateProfile}
            />
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
