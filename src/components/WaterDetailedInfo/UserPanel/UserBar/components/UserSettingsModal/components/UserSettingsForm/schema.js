// import * as yup from 'yup';

// export const userValidationSchema = yup.object().shape({
//   gender: yup.string().oneOf(['woman', 'man']),
//   name: yup.string().trim().min(1).max(30, 'Name can be max 30 symbols!'),
//   email: yup.string().trim().email('Email must be in valid format').required(),
//   weight: yup.min(0).max(200, 'Max weight is 200'),
//   activityLevel: yup.min(0).max(24),
//   photo: yup.mixed(),
//   dailyRequirement: yup
//     .number()
//     .min(0)
//     .max(5, 'Daily Requirement cannot exceed 5 liters'),
// });

//   yup.object({
//   gender: yup.string().default('female'),
//   name: yup.string(),
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   weight: yup
//     .number()
//     .default(20)
//     .typeError('Weight must be a number')
//     .nullable(),
//   activityLevel: yup
//     .number()
//     .default(0)
//     .typeError('Activity Level must be a number')
//     .nullable(),
//   dailyRequirement: yup
//     .number()
//     .default(1.8)
//     .typeError('Daily Requirement must be a number')
//     .nullable()
//     .max(5000, 'Daily Requirement cannot exceed 5000 liters'),
//   photo: yup.string().url('Invalid URL format').nullable(),
// });

// .notRequired(),
