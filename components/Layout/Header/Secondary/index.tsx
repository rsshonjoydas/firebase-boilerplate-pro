import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navbarData } from '../../../../adapters/data/NavbarData';
import Theme from '../../../Theme';
import NavbarItem from '../../NavbarItem';

const HeaderSecondary = () => (
  <div className='fixed z-10 flex'>
    <Theme className='control theme-btn-secondary' />
    <div className='controls'>
      {navbarData.map((menuItem) => (
        <NavbarItem key={menuItem.id} href={menuItem.path} className='sidebar sidebar-icon group'>
          <FontAwesomeIcon icon={menuItem.icon} className='h-5' />
          <span className='tooltip tooltip-right tooltip-up'>{menuItem.label}</span>
        </NavbarItem>
      ))}
    </div>
  </div>
);

export default HeaderSecondary;
