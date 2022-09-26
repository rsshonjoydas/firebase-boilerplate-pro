import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import SubmitButton from '../components/Button/SubmitButton';
import FormikControl from '../components/Formik/FormikControl';
import { emailSchema } from '../components/Formik/formikSchema';
import Layout from '../components/Layout';
import { useAppDispatch } from '../redux/hook';
import { forgotPassword } from '../redux/reducer/authReducer';

const InitialValues = {
  email: '',
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (values: any, { setStatus, resetForm }: any) => {
    const { email } = values;
    await dispatch(forgotPassword({ email, router }));

    try {
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
    }
  };

  return (
    <Layout title='Forgot Password'>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 antialiased text-gray-600 sm:px-6 lg:px-8'>
        <div className='relative py-3 mx-auto sm:max-w-xl'>
          <div className='my-2 text-2xl text-center dark:text-light-200'>Forgot Password</div>
          <Formik
            initialValues={InitialValues}
            validationSchema={emailSchema}
            onSubmit={handleSubmit}
            validateOnMount
          >
            {({ values, handleChange, isSubmitting, isValid }) => (
              <Form className='relative mt-4 text-left bg-white shadow-md dark:bg-slate-800 lg:w-96 md:w-96 sm:w-80 sm:rounded-lg'>
                <div className='h-2 bg-indigo-400 rounded-t-md' />
                <div className='px-8 py-6 text-gray-500'>
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
                  <div className='flex items-center justify-between'>
                    <SubmitButton
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                      label='Send'
                    />
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

export default ForgotPassword;
