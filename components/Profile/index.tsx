/* eslint-disable no-unused-vars */
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppSelector } from '../../redux/hook';
import Border from '../Border';

interface IProps {
  setOnSetting: (onSetting: boolean) => void;
}

const Profile: React.FC<IProps> = ({ setOnSetting }) => {
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <div className='h-[100vh] -mt-4 overflow-hidden bg-white dark:bg-dark-100 sm:rounded-lg'>
      <div className='container px-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-600 dark:text-gray-300'>
              Applicant Information
            </h3>
            <p className='max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-400'>
              Personal details and application.
            </p>
          </div>
          <FontAwesomeIcon
            icon={faGear}
            className='w-10 h-10 mx-4 text-blue-500 cursor-pointer animate-spin hover:animate-none'
            onClick={() => setOnSetting(true)}
          />
        </div>
        <div className='border-t border-gray-200 dark:border-gray-500'>
          <dl>
            {/* //? Full Name */}
            <div className='px-4 py-5 bg-gray-50 dark:bg-slate-700/30 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>Full Name</dt>
              <dd className='mt-1 text-sm capitalize sm:mt-0 sm:col-span-2'>{profile?.fullName}</dd>
            </div>
            {/* //? Email Contact */}
            <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                Email contact
              </dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>{profile?.contactEmail}</dd>
            </div>
            {/* //? Address */}
            <div className='px-4 py-5 bg-gray-50 dark:bg-slate-700/30 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>Address</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>{profile?.address}</dd>
            </div>
            {/* //? Phone Number */}
            <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>Phone number</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>{profile?.phone}</dd>
            </div>
            {/* //? Website */}
            <div className='px-4 py-5 bg-gray-50 dark:bg-slate-700/30 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>Website</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                <a
                  href={profile?.website}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline hover:text-blue-600'
                >
                  {profile?.website}
                </a>
              </dd>
            </div>
            {/* //? About */}
            <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 dark:text-gray-300'>About</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>{profile?.about}</dd>
            </div>
          </dl>
          <Border />
        </div>
      </div>
    </div>
  );
};
export default Profile;
