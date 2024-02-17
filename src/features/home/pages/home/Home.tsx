import { useGetCurrentUserQuery } from '@features/home/queries/UsersQuery';

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: currentUser } = useGetCurrentUserQuery();

  return <div>Home Page</div>;
};

export default HomePage;
