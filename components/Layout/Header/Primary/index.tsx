import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { navbarData } from '../../../../adapters/data/NavbarData';
import BottomBorder from '../../../Border/BottomBorder';
import TopBorder from '../../../Border/TopBorder';
import { GithubIcon } from '../../../Img/Icons/SocialIcons';
import Logo from '../../../Img/Logo';
import Theme from '../../../Theme';
import NavbarItem from '../../NavbarItem';

import AuthBtn from './AuthBtn';
import MobileDrawer from './Drawer';

const HeaderPrimary = () => (
  <Popover className='bg-light/30 dark:bg-dark/30 backdrop-blur-md border-b-[1px] dark:border-dark-300 fixed top-0 inset-x-0 z-10 h-16 text-white font-medium'>
    <TopBorder />
    <div className='container px-4 mx-auto sm:px-6'>
      <div className='flex items-center justify-between md:justify-start lg:justify-end'>
        <div className='flex items-center justify-start lg:w-0 lg:flex-1'>
          <div className='md:hidden'>
            <div className='inline-flex items-center justify-center p-3 text-gray-400 bg-gray-100 rounded-full shadow-xl cursor-pointer dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-black/5 ring-1 ring-slate-700/10'>
              <MobileDrawer />
            </div>
          </div>
          <Logo />
        </div>
        <Popover.Group as='nav' className='hidden space-x-10 md:flex lg:flex'>
          {navbarData.map((menuItem) => (
            <NavbarItem
              key={menuItem.id}
              label={menuItem.label}
              href={menuItem.path}
              className='link'
            />
          ))}
        </Popover.Group>

        <div className='flex items-center'>
          <div className='items-end hidden gap-4 md:flex md:flex-1lg:w-0'>
            <AuthBtn />
          </div>
          <div className='my-2 ml-6 border-l border-slate-200 dark:border-slate-800'>
            <div className='flex items-center justify-center'>
              <Theme className='mx-2 theme-btn-primary' />
              <Link href='https://github.com/rsshonjoydas'>
                <a target='_blank'>
                  <GithubIcon className='w-10 h-10 p-2 text-lg text-gray-500 rounded-lg cursor-pointer focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBorder />
  </Popover>
);

export default HeaderPrimary;
