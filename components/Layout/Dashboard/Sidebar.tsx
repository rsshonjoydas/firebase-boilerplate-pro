import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarData } from '../../../adapters/data/NavbarData';

import NavbarItem from '../NavbarItem';

const SidebarPowerIcon = ({ icon, text }: any) => (
  <div className='sidebar sidebar-power-icon group'>
    {icon}
    <span className='tooltip tooltip-left'>{text}</span>
  </div>
);

export const Divider = () => <hr className='sidebar-hr' />;

const Sidebar = () => (
  <div className='fixed top-0 left-0 flex flex-col w-16 h-screen bg-white shadow-lg dark:bg-gray-900'>
    {sidebarData.map((menuItem) => (
      <span key={menuItem.id}>
        <NavbarItem href={`/dashboard/${menuItem.path}`} className='sidebar sidebar-icon group'>
          <FontAwesomeIcon icon={menuItem.icon} className='h-5' />
          <span className='tooltip tooltip-left'>{menuItem.tooltip}</span>
        </NavbarItem>
        {menuItem.tooltip === 'Home' || menuItem.tooltip === 'Profile' ? <Divider /> : null}
      </span>
    ))}
    <div className='absolute inset-x-0 bottom-0 h-16 ...'>
      <SidebarPowerIcon
        icon={<FontAwesomeIcon icon={faPowerOff} className='h-6' />}
        text='Log out'
      />
    </div>
  </div>
);

export default Sidebar;
