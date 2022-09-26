import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SubmitButton from '../components/Button/SubmitButton';
import SocialAuth from '../components/Form/SocialAuth';
import FormikControl from '../components/Formik/FormikControl';
import { loginSchema } from '../components/Formik/formikSchema';
import PasswordInput from '../components/Formik/PasswordInput';
import TextError from '../components/Formik/TextError';
import Layout from '../components/Layout';
import { ILogin } from '../interface/authType';
import { useAppDispatch } from '../redux/hook';
import { login } from '../redux/reducer/authReducer';

const Login = () => {
  const [remember, setRemember] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const InitialValues: ILogin = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: ILogin, { setStatus, resetForm }: any) => {
    const { email, password } = values;

    await dispatch(login({ email, password, remember, router }));
    try {
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
    }
  };

  return (
    <Layout title='Login'>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 antialiased sm:px-6 lg:px-8'>
        <div className='relative py-3 mx-auto sm:max-w-xl'>
          <div className='my-2 text-2xl text-center'>Login to your account</div>
          <Formik
            initialValues={InitialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
            validateOnMount
          >
            {({ values, handleChange, isSubmitting, isValid }) => (
              <Form className='relative mt-4 text-left bg-white shadow-md dark:bg-slate-800 dark:shadow-xl lg:w-96 md:w-96 sm:w-80 sm:rounded-lg'>
                <div className='h-2 bg-indigo-400 rounded-t-md' />
                <div className='px-8 py-6'>
                  {/* // ? Username & Password Field */}
                  <FormikControl
                    control='input'
                    label='Username or Email'
                    placeholder='Username or Email'
                    className='label-required'
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                  />
                  <PasswordInput
                    name='password'
                    label='password'
                    placeholder='Password'
                    values={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='password' component={TextError} />
                  {/* //? Remember me checkbox */}
                  <div className='flex items-center mt-2'>
                    <input
                      type='checkbox'
                      id='rb-me'
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    <label htmlFor='rb-me' className='ml-2 text-sm '>
                      Remember me
                    </label>
                  </div>
                  {/* // ? Submit button & Forget password Field */}
                  <div className='flex items-center justify-between'>
                    <SubmitButton
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                      label='Login'
                    />
                    <Link href='/forgot-password'>
                      <a className='ml-8 text-sm hover:underline'>Forgot password?</a>
                    </Link>
                  </div>

                  <SocialAuth />
                  {/* // ? Toggle Login & Sign Up button */}
                  <div className='flex items-center justify-center'>
                    <Link href='/register'>Don&prime;t have an account? Sign Up</Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
