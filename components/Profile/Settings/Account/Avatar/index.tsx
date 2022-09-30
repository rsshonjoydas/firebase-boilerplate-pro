import { useState } from 'react';
import { changeAvatar } from '../../../../../redux/action/accountAction';
import { uploadFiles } from '../../../../../redux/action/fileUploadAction';
import { useAppSelector } from '../../../../../redux/hook';
import Border from '../../../../Border';
import PrimaryButton from '../../../../Button/PrimaryButton';
import Img from '../../../../Img';
import InputFiles from './InputFiles';

const Avatar = () => {
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const handleChangeAvatar = async () => {
    if (!files.length || !currentUser) return;
    setLoading(true);
    if (typeof files[0] === 'string') {
      await changeAvatar(currentUser, files[0]);
      setLoading(false);
    } else {
      const res = await uploadFiles(`images/${currentUser.uid}`, files as File[]);
      await changeAvatar(currentUser, res[0]);
      setLoading(false);
    }
  };

  return (
    <>
      <label className='block text-sm font-medium dark:text-gray-300'>Avatar</label>
      <div className='flex items-center mt-1'>
        <span className='inline-block w-12 h-12 mr-4 overflow-hidden bg-gray-100 rounded-full dark:bg-slate-800'>
          {currentUser?.photoURL ? (
            <Img
              height={44}
              width={44}
              src={currentUser.photoURL}
              alt='avatar'
              className='object-cover w-full h-full'
            />
          ) : (
            <svg className='w-full h-full text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
            </svg>
          )}
        </span>
        <PrimaryButton
          disabled={loading}
          onClick={handleChangeAvatar}
          loading={loading}
          label='Change'
        />
      </div>
      <InputFiles files={files} setFiles={setFiles} />

      <Border />
    </>
  );
};

export default Avatar;
