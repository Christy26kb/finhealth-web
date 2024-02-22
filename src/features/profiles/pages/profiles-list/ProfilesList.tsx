import { useGetAllUserProfilesQuery } from '@features/profiles/queries/ProfileQuery';
import { Profile } from '@types';
import { List, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfilesList = () => {
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

  return (
    <div className="profiles-list-wrapper size-full p-10">
      <div className="text-h4 font-normal leading-7">Profiles</div>
      <Divider className="my-2" />
      <List
        itemLayout="horizontal"
        dataSource={profiles}
        renderItem={renderProfileItem}
        loading={isLoading}
      />
    </div>
  );
};

export default ProfilesList;
