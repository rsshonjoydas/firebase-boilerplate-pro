import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../redux/hook';
import Img from '../Img';

const UserPhoto = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className='inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md shadow-sm dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
      <span className='flex items-center hover:animate-pulse'>
        <div className='w-10 h-10 p-1 overflow-hidden duration-500 transform rounded-full ring-4 ring-purple-100 dark:ring-gray-600 sm:mx-0 sm:flex-shrink-0 hover:scale-105'>
          {currentUser?.photoURL ? (
            <Img
              height={60}
              width={60}
              src={currentUser.photoURL}
              alt='avatar'
              className='object-cover w-10 h-10 rounded-full'
              blurDataURL={currentUser.photoURL}
              placeholder='blur'
              loading='lazy'
            />
          ) : (
            <FontAwesomeIcon icon={faUser} className='w-full h-full text-gray-400' />
          )}
        </div>
      </span>
    </div>
  );
};

export default UserPhoto;
