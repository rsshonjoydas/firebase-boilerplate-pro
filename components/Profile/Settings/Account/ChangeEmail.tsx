/* eslint-disable consistent-return */
import { ErrorMessage, Form, Formik } from 'formik';
import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { ILogin } from '../../../../interface/authType';
import { changeEmail } from '../../../../redux/action/accountAction';
import { useAppSelector } from '../../../../redux/hook';
import PrimaryButton from '../../../Button/PrimaryButton';
import FormikControl from '../../../Formik/FormikControl';
import { emailSchema, passwordSchema } from '../../../Formik/formikSchema';
import PasswordInput from '../../../Formik/PasswordInput';
import TextError from '../../../Formik/TextError';

const ChangeEmail = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router: NextRouter = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);

  const InitialValues = {
    email: `${currentUser?.email || ''}`,
    password: '',
  };

  const handleSubmit = async (values: ILogin) => {
    const { email, password } = values;

    if (!currentUser || !email?.trim()) return;
    if (email === currentUser?.email) return;

    const provider = currentUser.providerData.some((p) => p.providerId === 'password');

    if (provider && !password) return setShowPassword(true);

    await changeEmail(currentUser, email, password, router);
  };

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={showPassword ? passwordSchema : emailSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, isSubmitting, isValid, dirty }) => (
        <Form>
          <div className='col-span-6 sm:w-full'>
            <FormikControl
              control='input'
              label='Email'
              className='label-required'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
            />

            {showPassword && (
              <>
                <PasswordInput
                  name='password'
                  label='password'
                  placeholder='Password'
                  values={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name='password' component={TextError} />
              </>
            )}
            <PrimaryButton
              disabled={!(dirty && isValid) || isSubmitting}
              loading={isSubmitting}
              label='Change'
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ChangeEmail;
