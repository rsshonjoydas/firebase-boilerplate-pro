import { ErrorMessage, Form, Formik } from 'formik';
import { changePassword } from '../../../redux/action/accountAction';
import { useAppSelector } from '../../../redux/hook';
import Border from '../../Border';
import PrimaryButton from '../../Button/PrimaryButton';
import { changePasswordSchema } from '../../Formik/formikSchema';
import PasswordInput from '../../Formik/PasswordInput';
import TextError from '../../Formik/TextError';

// TODO: Formik Auth initial value
const InitialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

// TODO: Formik Register validation schema

const ChangePassword = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  const handleSubmit = async (values: any) => {
    const { oldPassword, newPassword } = values;
    if (!currentUser || !oldPassword) return;

    await changePassword(currentUser, oldPassword, newPassword);
  };

  if (!currentUser?.providerData.some((p) => p.providerId === 'password')) return null;

  return (
    <>
      <div className='mt-10 sm:mt-0' id='password'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-600 dark:text-gray-300'>
                Change Password
              </h3>
              <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                Function only for Google Account or Email/Password.
              </p>
            </div>
          </div>

          <div className='mt-5 overflow-hidden shadow md:mt-0 md:col-span-2 sm:rounded-md'>
            <Formik
              initialValues={InitialValues}
              validationSchema={changePasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, isSubmitting, isValid, dirty }) => (
                <Form className='p-4 bg-white/60 dark:bg-slate-800/30 sm:p-6 dark:text-gray-400'>
                  <PasswordInput
                    label='Old Password'
                    placeholder='Old Password'
                    name='oldPassword'
                    values={values.oldPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='oldPassword' component={TextError} />
                  <PasswordInput
                    label='New Password'
                    placeholder='New Password'
                    name='newPassword'
                    values={values.newPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='newPassword' component={TextError} />
                  <PasswordInput
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    values={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name='confirmPassword' component={TextError} />

                  <PrimaryButton
                    disabled={!(dirty && isValid) || isSubmitting}
                    loading={isSubmitting}
                    label='Change'
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Border />
    </>
  );
};

export default ChangePassword;
