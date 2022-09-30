import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DashboardLayout from '../../../components/Layout/Dashboard';
import { Dropdown, SidebarBlock } from '../../../components/Layout/Dashboard/SidebarTopic';
import Account from '../../../components/Profile/Settings/Account';
import ChangePassword from '../../../components/Profile/Settings/ChangePassword';

const topics = ['change-profile', 'change-name', 'change-email', 'password'];

const Settings = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='flex'>
      {toggle ? (
        <div className='shadow-lg sidebar-bar'>
          <SidebarBlock title='Settings' />
          <div className='sidebar-container'>
            <Dropdown header='General' selections={topics} />
          </div>
        </div>
      ) : null}
      {!toggle ? (
        <button type='button' className='ml-16' onClick={() => setToggle(true)}>
          <input type='checkbox' id='btn' hidden />
          <label htmlFor='btn' className='menu-btn'>
            <FontAwesomeIcon icon={faChevronRight} />
          </label>
        </button>
      ) : (
        <button type='button' onClick={() => setToggle(false)}>
          <label htmlFor='btn' className='menu-btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </button>
      )}
      <DashboardLayout title='Settings'>
        <Account />
        <ChangePassword />
      </DashboardLayout>
    </div>
  );
};

export default Settings;
