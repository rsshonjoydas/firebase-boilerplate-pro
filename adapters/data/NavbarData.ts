import {
  faBriefcase,
  faEdit,
  faEnvelopeOpen,
  faGear,
  faHome,
  faNewspaper,
  faUser,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { PathLabel } from '../../interface/pathType';

export const navbarData: PathLabel[] = [
  {
    id: 1,
    path: '/',
    label: 'Home',
    icon: faHome,
  },
  {
    id: 2,
    path: '/about',
    label: 'About',
    icon: faUser,
  },
  {
    id: 3,
    path: '/projects',
    label: 'Projects',
    icon: faBriefcase,
  },
  {
    id: 4,
    path: '/blog',
    label: 'Blogs',
    icon: faNewspaper,
  },
  {
    id: 5,
    path: '/contact',
    label: 'Contact',
    icon: faEnvelopeOpen,
  },
];

export const sidebarData: PathLabel[] = [
  {
    id: 1,
    path: '',
    icon: faHome,
    tooltip: 'Home',
  },
  {
    id: 2,
    path: 'user',
    icon: faEnvelopeOpen,
    tooltip: 'Messages',
  },
  {
    id: 3,
    path: 'user',
    icon: faUser,
    tooltip: 'User',
  },
  {
    id: 4,
    path: 'customize',
    icon: faEdit,
    tooltip: 'Customization',
  },
  {
    id: 5,
    path: 'profile',
    icon: faUserEdit,
    tooltip: 'Profile',
  },
  {
    id: 6,
    path: 'settings',
    icon: faGear,
    tooltip: 'Settings',
  },
];
