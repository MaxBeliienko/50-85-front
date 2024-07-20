import { useId } from 'react';
import styles from './SignInForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const SignInForm = () => {
  const emailFieldId = useId();
  const pwdFieldId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <p className={styles.mainText}>Sign In</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor={emailFieldId} className={styles.labelText}>
            Email
          </label>
          <input
            id={emailFieldId}
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className={`${styles.inputField} ${
              errors.email ? 'loginError' : ''
            }`}
          />
          {errors.email && (
            <div className={styles.error}>{errors.email.message}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={pwdFieldId} className={styles.labelText}>
            Password
          </label>
          <input
            id={pwdFieldId}
            {...register('password')}
            type="password"
            placeholder="Enter your password"
            className={`${styles.inputField} ${
              errors.password ? 'loginError' : ''
            }`}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
        </div>
        <button type="submit" className={styles.submitBtn}>
          Sign In
        </button>
      </form>
      <p className={styles.dontHaveAcc}>
        Don`t have an account?{' '}
        <NavLink className={styles.navigate}>Sign Up</NavLink>
      </p>
    </>
  );
};

export default SignInForm;
