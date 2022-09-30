import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { profileUpdate } from '../../../redux/reducer/profileReducer';
import Border from '../../Border';
import PrimaryButton from '../../Button/PrimaryButton';
import FormikControl from '../../Formik/FormikControl';
import { profileSchema } from '../../Formik/formikSchema';

const ProfileForm = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const InitialValues = {
    fullName: `${profile?.fullName || ''}`,
    contactEmail: `${profile?.contactEmail || ''}`,
    phone: `${profile?.phone || ''}`,
    website: `${profile?.website || ''}`,
    address: `${profile?.address || ''}`,
    about: `${profile?.about || ''}`,
  };

  const handleSubmit = async (values: any) => {
    const { ...data } = values;

    if (!currentUser) return;
    await dispatch(profileUpdate({ user: currentUser, data }));
  };

  return (
    <>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-600 dark:text-gray-300'>
              Profile
            </h3>
            <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
        </div>

        <div className='mt-5 overflow-hidden shadow md:mt-0 md:col-span-2 sm:rounded-md'>
          <Formik
            initialValues={InitialValues}
            validationSchema={profileSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, isSubmitting, isValid, dirty }) => (
              <Form>
                <div className='col-span-6 bg-white/60 sm:w-full dark:bg-slate-800/30 sm:p-6 dark:text-gray-400'>
                  <FormikControl
                    control='input'
                    label='Full Name'
                    type='text'
                    name='fullName'
                    value={values.fullName}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='input'
                    label='Email'
                    type='email'
                    name='contactEmail'
                    value={values.contactEmail}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='input'
                    label='Address'
                    type='text'
                    name='address'
                    value={values.address}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='input'
                    label='Phone'
                    type='text'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='input'
                    label='Website'
                    type='text'
                    name='website'
                    value={values.website}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='textarea'
                    label='About'
                    type='text'
                    name='about'
                    value={values.about}
                    onChange={handleChange}
                  />

                  <PrimaryButton
                    disabled={!(dirty && isValid) || isSubmitting}
                    loading={isSubmitting}
                    label='Change'
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Border />
    </>
  );
};

export default ProfileForm;
