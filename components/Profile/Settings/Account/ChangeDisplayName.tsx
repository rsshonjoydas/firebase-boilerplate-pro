/* eslint-disable react/jsx-no-duplicate-props */
import { Form, Formik } from 'formik';
import { changeDisplayName } from '../../../../redux/action/accountAction';
import { useAppSelector } from '../../../../redux/hook';
import PrimaryButton from '../../../Button/PrimaryButton';
import FormikControl from '../../../Formik/FormikControl';
import { nameSchema } from '../../../Formik/formikSchema';

const ChangeDisplayName = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  const InitialValues = {
    name: `${currentUser?.displayName || ''}`,
  };

  const handleSubmit = async (values: any) => {
    const { name } = values;
    if (!currentUser || !name?.trim()) return;
    if (name === currentUser?.displayName) return;

    await changeDisplayName(currentUser, name);
  };

  return (
    <Formik initialValues={InitialValues} validationSchema={nameSchema} onSubmit={handleSubmit}>
      {({ values, handleChange, isSubmitting, isValid, dirty }) => (
        <Form>
          <div className='col-span-6 sm:w-full'>
            <FormikControl
              control='input'
              label='Display Name'
              className='label-required'
              type='text'
              name='name'
              value={values.name}
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
  );
};

export default ChangeDisplayName;
