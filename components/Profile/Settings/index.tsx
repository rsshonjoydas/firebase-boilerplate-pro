/* eslint-disable no-unused-vars */
import React from 'react';
import CancelButton from '../../Button/CancelButton';
import Account from './Account';
import ProfileForm from './ProfileForm';

interface IProps {
  setOnSetting: (onSetting: boolean) => void;
}

const Settings: React.FC<IProps> = ({ setOnSetting }) => (
  <div className='container p-3 px-4 pb-12 mx-auto'>
    <ProfileForm />
    <Account />

    <CancelButton onClick={() => setOnSetting(false)} label='Cancel' />
  </div>
);

export default Settings;
