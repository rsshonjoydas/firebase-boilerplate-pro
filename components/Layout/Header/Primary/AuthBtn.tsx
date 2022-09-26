/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../../redux/hook';
import NavProfile from './NavProfile';

const AuthBtn = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const router = useRouter();

  return (
    <div className='flex items-center gap-4 ml-4'>
      {!currentUser ? (
        <>
          {router.asPath === '/login' ? (
            <Link href='/register'>
              <span className='link-btn link-btn-primary'>Sign up</span>
            </Link>
          ) : router.asPath === '/register' ? (
            <Link href='/login'>
              <span className='link-btn link-btn-secondary'>Sign in</span>
            </Link>
          ) : (
            <>
              <Link href='/login'>
                <span className='link-btn link-btn-secondary'>Sign in</span>
              </Link>
              <Link href='/register'>
                <span className='link-btn link-btn-primary'>Sign up</span>
              </Link>
            </>
          )}
        </>
      ) : (
        <div>
          {!currentUser?.emailVerified ? (
            <Link href='/email-verify'>
              <span className='link-btn link-btn-primary'>Verify Email</span>
            </Link>
          ) : (
            <NavProfile />
          )}
        </div>
      )}
    </div>
  );
};

export default AuthBtn;
