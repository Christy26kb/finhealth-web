import useTranslate from '@hooks/intl';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PROFILE } from '@constants/routes';
import { Profile } from '@types';
import { List, Avatar, Card, Button, Tooltip, Modal } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import {
  useDeleteUserProfileMutation,
  useGetAllUserProfilesQuery
} from '@features/profiles/queries/ProfileQuery';
import { createNotifier } from '@features/components/notifications/notificationSlice';

const { confirm } = Modal;

const ProfilesList = () => {
  const translate = useTranslate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: profiles, isLoading, refetch } = useGetAllUserProfilesQuery();
  const [onDeleteProfile] = useDeleteUserProfileMutation();

  const onEdit = (id: string) =>
    navigate(PROFILE.EDIT_PROFILE.replace(':profileId', id));

  const onDelete = async (id: string) => {
    const response = await onDeleteProfile(id);
    if ('data' in response) {
      dispatch(
        createNotifier({
          notifier: {
            type: 'success',
            message: translate('profiles.list.delete_success')
          }
        })
      );
      refetch();
    }
  };

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: translate('profiles.list.delete_popup_title'),
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(id);
      }
    });
  };

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
          <div className="mr-4 flex items-center justify-center">
            <Button
              type="default"
              icon={<EditOutlined />}
              onClick={() => onEdit(profileItem.id)}
            />
          </div>
        </Tooltip>
        <Tooltip title={translate('profiles.list.delete_tooltip')}>
          <div className="flex items-center justify-center">
            <Button
              type="default"
              icon={<DeleteOutlined />}
              onClick={() => showDeleteConfirm(profileItem.id)}
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
              type="primary"
              icon={<PlusOutlined />}
              onClick={onCreateProfile}
              className="bg-primary hover:bg-primary"
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
