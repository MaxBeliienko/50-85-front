import * as yup from 'yup';

export const userValidationSchema = yup.object({
  gender: yup.string().default('female'),
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  weight: yup
    .number()
    .typeError('Weight must be a number')
    .nullable()
    .notRequired(),
  activityLevel: yup
    .number()
    .typeError('Activity Level must be a number')
    .nullable()
    .notRequired(),
  dailyRequirement: yup
    .number()
    .typeError('Daily Requirement must be a number')
    .nullable()
    .notRequired(),
  photo: yup.string().url('Invalid URL format').nullable(),
});
