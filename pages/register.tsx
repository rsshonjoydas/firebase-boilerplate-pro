import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SubmitButton from '../components/Button/SubmitButton';
import SocialAuth from '../components/Form/SocialAuth';
import FormikControl from '../components/Formik/FormikControl';
import { registerSchema } from '../components/Formik/formikSchema';
import PasswordInput from '../components/Formik/PasswordInput';
import TextError from '../components/Formik/TextError';
import Layout from '../components/Layout';
import { IRegister } from '../interface/authType';
import { useAppDispatch } from '../redux/hook';
import { register } from '../redux/reducer/authReducer';

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const InitialValues: IRegister = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false,
  };

  const handleSubmit = async (values: IRegister, { setStatus, resetForm }: any) => {
    const { name, email, password } = values;

    await dispatch(register({ name, email, password, router }));
    try {
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
    }
  };

  return (
    <Layout title='Register'>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 antialiased sm:px-6 lg:px-8'>
        <div className='relative py-3 mx-auto sm:max-w-xl'>
          <div className='my-2 text-2xl text-center'>Sign Up to new account</div>
          <Formik
            initialValues={InitialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
            validateOnMount
          >
            {({ values, handleChange, isSubmitting, isValid }) => (
              <Form className='relative mt-4 text-left bg-white shadow-md dark:bg-slate-800 dark:shadow-xl lg:w-96 md:w-96 sm:w-80 sm:rounded-lg'>
                <div className='h-2 bg-secondary rounded-t-md' />
                <div className='px-8 py-6'>
                  {/* // ? Username & Password Field */}
                  <FormikControl
                    control='input'
                    label='Name'
                    placeholder='Name'
                    className='label-required'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                  />
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
                    label='Password'
                    placeholder='Password'
                    name='password'
                    values={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='password' component={TextError} />
                  <PasswordInput
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    values={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='confirmPassword' component={TextError} />

                  {/* //? agree button */}
                  <FormikControl
                    control='checkbox'
                    type='checkbox'
                    name='termsAndConditions'
                    value={values.termsAndConditions}
                    onChange={handleChange}
                  />
                  {/* // ? Submit button */}
                  <SubmitButton
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                    label='Register'
                  />
                  {/* //? Social Login */}
                  <p>Or sign up with</p>
                  <SocialAuth />
                  {/* // ? Toggle Login & Sign Up button */}
                  <div className='flex items-center justify-center'>
                    <Link href='/login'>Already have an account? Login</Link>
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

export default Register;
