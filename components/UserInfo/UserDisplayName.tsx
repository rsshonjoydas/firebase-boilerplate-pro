import { useAppSelector } from '../../redux/hook';

const UserDisplayName = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <span className='pl-4 -mx-4 font-bold text-gray-400 uppercase text-md'>
      {currentUser?.displayName}
    </span>
  );
};

export default UserDisplayName;
