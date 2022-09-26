import { useState } from 'react';
import PrimaryButton from '../components/Button/PrimaryButton';
import Layout from '../components/Layout';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { verify } from '../redux/reducer/authReducer';

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { currentUser } = useAppSelector((state) => state.auth);

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(verify(currentUser));
    setLoading(false);
  };

  return (
    <Layout title='Verify Email'>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 antialiased sm:px-6 lg:px-8'>
        <div className='relative py-3 mx-auto sm:max-w-xl'>
          {/* //? email change heading */}
          <div className='relative mt-4 text-left bg-white shadow-md dark:bg-slate-800 lg:w-100 md:w-96 sm:w-80 sm:rounded-lg'>
            <div className='h-2 bg-indigo-400 rounded-t-md' />
            <div className='px-8 py-6 text-gray-500 dark:text-gray-300'>
              <div className='my-2 text-2xl text-center'>Verify your email</div>
              <div className='my-2 mt-8 text-sm text-center'>
                Go to your email inbox and please verify your email.
              </div>
              <div className='text-sm text-center'>Or</div>
              <div className='my-2 mb-6 text-sm text-center'>
                If you still haven&prime;t received the email. Please resend verification email.
              </div>
              {/* // ? Submit button */}
              <div className='flex items-center justify-center'>
                <PrimaryButton
                  onClick={handleSubmit}
                  disabled={loading}
                  loading={loading}
                  label='Re-send verification email'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyEmail;
