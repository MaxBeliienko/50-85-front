import { useState } from 'react';
import { useId } from 'react';
import styles from './SignInForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.jsx';
import Iconsvg from '../../Icon.jsx';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import LocalizationSwitcher from '../../LocalizationSwitcher/LocalizationSwitcher.jsx';
import GoogleAuth from '../GoogleAuth/GoogleAuth.jsx';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const SignInForm = () => {
  const emailFieldId = useId();
  const pwdFieldId = useId();

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

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

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const response = await dispatch(logIn({ email, password }));

      if (response.error) {
        toast.error(response.payload.response.data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.signInHeader}>
        <Logo />
        <LocalizationSwitcher />
      </div>
      <div className={styles.signinWrapper}>
        <p className={styles.mainText}>{t('description.signIn.MainHeader')}</p>
        <div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor={emailFieldId} className={styles.labelText}>
                {t('description.signIn.EmailLabel')}
              </label>
              <input
                id={emailFieldId}
                {...register('email')}
                type="email"
                placeholder={t('description.signIn.EmailPlaceholder')}
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
                {t('description.signIn.PwdLabel')}
              </label>
              <input
                id={pwdFieldId}
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder={t('description.signIn.PwdPlaceholder')}
                className={`${styles.inputField} ${
                  errors.password ? 'loginError' : ''
                }`}
              />
              <Iconsvg
                width={20}
                height={20}
                iconName={showPassword ? 'eye-on' : 'eye-off'}
                styles={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              />
              {errors.password && (
                <div className={styles.error}>{errors.password.message}</div>
              )}
            </div>
            <button type="submit" className={styles.submitBtn}>
              {t('description.signIn.MainButton')}
            </button>
          </form>
          <p className={styles.dontHaveAcc}>
            {t('description.signIn.AllreadyHaveAcc')}
            <NavLink to="/signup" className={styles.navigate}>
              {t('description.signIn.SignInLink')}
            </NavLink>
          </p>
        </div>
        <GoogleAuth operationType={"SignIn"} />
      </div>
    </>
  );
};

export default SignInForm;
