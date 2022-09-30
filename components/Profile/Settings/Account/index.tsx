import Border from '../../../Border';
import Avatar from './Avatar';
import ChangeDisplayName from './ChangeDisplayName';
import ChangeEmail from './ChangeEmail';

const Account = () => (
  <>
    <div className='mt-10 sm:mt-0'>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-600 dark:text-gray-300'>
              Account
            </h3>
            <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
              Your account information. Be careful when changing.
            </p>
          </div>
        </div>

        <div className='mt-5 md:mt-0 md:col-span-2'>
          <div>
            <div className='overflow-hidden shadow sm:rounded-md'>
              <div className='px-4 py-5 bg-white/60 dark:bg-slate-800/30 sm:p-6 dark:text-gray-400'>
                <Avatar />
                <ChangeDisplayName />
                <ChangeEmail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Border />
  </>
);

export default Account;
