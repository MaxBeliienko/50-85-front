import styles from './SignUpForm.module.css';
import { useState } from 'react';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.jsx';
import Iconsvg from '../../Icon.jsx';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import LocalizationSwitcher from '../../LocalizationSwitcher/LocalizationSwitcher.jsx';
import GoogleAuth from '../GoogleAuth/GoogleAuth.jsx';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const emailFieldId = useId();
  const pwdFieldId = useId();
  const pwdCheckId = useId();

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck((prevState) => !prevState);
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
      passwordCheck: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await dispatch(registerUser({ email, password }));

      if (response.error) {
        toast.error(
          response.payload.response.data.message || 'Registration failed'
        );
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
      <div className={styles.signUpWrapper}>
        <p className={styles.mainText}>{t('description.signUp.MainHeader')}</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor={emailFieldId} className={styles.labelText}>
              {t('description.signUp.EmailLabel')}
            </label>
            <input
              id={emailFieldId}
              {...register('email')}
              type="email"
              placeholder={t('description.signUp.EmailPlaceholder')}
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
              {t('description.signUp.PwdLabel')}
            </label>
            <input
              id={pwdFieldId}
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder={t('description.signUp.PwdPlaceholder')}
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
          <div className={styles.formGroup}>
            <label htmlFor={pwdCheckId} className={styles.labelText}>
              {t('description.signUp.PwdLabel')}
            </label>
            <input
              id={pwdCheckId}
              {...register('passwordCheck')}
              type={showPasswordCheck ? 'text' : 'password'}
              placeholder={t('description.signUp.RepeatPwdPlaceholder')}
              className={`${styles.inputField} ${
                errors.passwordCheck ? 'loginError' : ''
              }`}
            />
            <Iconsvg
              width={20}
              height={20}
              iconName={showPasswordCheck ? 'eye-on' : 'eye-off'}
              styles={styles.eyeIcon}
              onClick={togglePasswordCheckVisibility}
            />
            {errors.passwordCheck && (
              <div className={styles.error}>{errors.passwordCheck.message}</div>
            )}
          </div>
          <button type="submit" className={styles.submitBtn}>
            {t('description.signUp.MainButton')}
          </button>

          <p className={styles.dontHaveAcc}>
            {t('description.signUp.AllreadyHaveAcc')}
            <NavLink to="/signin" className={styles.navigate}>
              {t('description.signUp.SignInLink')}
            </NavLink>
          </p>
        </form>

        <GoogleAuth />
      </div>
    </>
  );
};

export default SignUpForm;
