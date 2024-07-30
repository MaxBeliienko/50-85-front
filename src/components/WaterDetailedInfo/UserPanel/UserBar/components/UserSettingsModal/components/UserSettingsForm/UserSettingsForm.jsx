import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './UserSettingsForm.module.css';
import { userValidationSchema } from './schema';
import { updateUserProfile } from '../../../../../../../../redux/auth/operations';
import { selectUserProfile } from '../../../../../../../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Iconsvg from '../../../../../../../Icon';
import PhotoInput from './PhotoInput';

const UserSettingsForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      gender: user.gender || t('description.settings.female'),
      name: user.name,
      email: user.email,
      weight: user.weight,
      activityLevel: user.activityLevel,
      dailyRequirement: user.dailyRequirement || 2000,
      photo: user.photo,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        gender: user.gender || t('description.settings.female'),
        name: user.name,
        email: user.email,
        weight: user.weight,
        activityLevel: user.activityLevel,
        dailyRequirement: user.dailyRequirement || 2000,
        photo: user.photo,
      });
    }
  }, [user, reset, t]);

  // const onSubmit = data => {
  //   const cleanedData = {
  //     ...data,
  //     weight: Number(data.weight),
  //     dailyRequirement: Number(data.dailyRequirement),
  //   };

  //   dispatch(updateUserProfile(cleanedData))
  //     .then(() => {
  //       reset(cleanedData);
  //       closeModal();
  //     })
  //     .catch(error => {
  //       console.error('Error updating profile:', error);
  //     });
  // };

  const onSubmit = data => {
    const cleanedData = {
      ...data,
      weight: Number(data.weight),
      dailyRequirement: Number(data.dailyRequirement) * 1000,
    };
    const formData = new FormData();
    Object.keys(cleanedData).forEach(key => {
      formData.append(key, cleanedData[key]);
    });
    if (selectedFile) {
      formData.append('photo', selectedFile); // Додавання файлу до formData
    }
    dispatch(updateUserProfile(formData));
    closeModal();
  };

  // function dailyNormaOnline(gender, activityLevel, weight) {
  //   if (gender === 'female') {
  //     return weight * 0.03 + activityLevel * 0.04;
  //   }
  //   if (gender === 'male') {
  //     return weight * 0.04 + activityLevel * 0.06;
  //   }
  // }
  const [dailyNorma, setDailyNorma] = useState(1.8);

  const weight = watch('weight');
  const activityLevel = watch('activityLevel');
  const gender = watch('gender');

  useEffect(() => {
    if (weight >= 1 && activityLevel >= 0) {
      if (gender === 'female') {
        const result = weight * 0.03 + activityLevel * 0.04;
        setDailyNorma(result.toFixed(1));
      }
      if (gender === 'male') {
        const result = weight * 0.04 + activityLevel * 0.06;
        setDailyNorma(result.toFixed(1));
      }
    }
  }, [weight, activityLevel, gender]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.settingsForm}>
          <PhotoInput
            setSelectedFile={setSelectedFile}
            user={user}
            register={register}
          />
          <div className={styles.gridItem}>
            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel}>
                {t('description.settings.gender')}
              </label>
              <div className={styles.radioGroup}>
                <label>
                  <input type="radio" value="female" {...register('gender')} />
                  {t('description.settings.woman')}
                </label>
                <label>
                  <input type="radio" value="male" {...register('gender')} />
                  {t('description.settings.man')}
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formGroupLabel}>
                {t('description.settings.name')}
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={styles.formControl}
              />
              {errors.name && (
                <p className={styles.errorMessage}>{errors.name.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formGroupLabel}>
                {t('description.settings.email')}
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={styles.formControl}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.formGroupDailyNorma}>
              <label htmlFor="dailyNorma" className={styles.formGroupLabel}>
                {t('description.settings.requirement')}
              </label>
              <div className={styles.dailyNormaGroup}>
                <div>
                  <label htmlFor="dailyNorma">
                    {t('description.settings.forWoman')}
                  </label>
                  <p>{t('description.settings.womanFormula')}</p>
                </div>

                <div>
                  <label htmlFor="dailyNorma">
                    {t('description.settings.forMan')}
                  </label>
                  <p>{t('description.settings.manFormula')}</p>
                </div>
              </div>
              <p
                style={{
                  border: '1px solid rgba(47, 47, 47, 0.15)',
                  borderRadius: '15px',
                  padding: '16px',
                  color: '#2F2F2F',
                  fontWeight: '400',
                }}
              >
                <span>*</span> {t('description.settings.formulaExplanation')}
              </p>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Iconsvg width={22} height={22} iconName={'exclamation'} />
                {t('description.settings.activeTimeHour')}
              </p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.formGroup}>
              <label
                htmlFor="weight"
                className={classNames(styles.formGroupLabel, styles.light)}
              >
                {t('description.settings.weight')}
              </label>
              <input
                type="number"
                id="weight"
                {...register('weight')}
                className={styles.formControl}
              />
              {errors.weight && (
                <p className={styles.errorMessage}>{errors.weight.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label
                htmlFor="activityLevel"
                className={classNames(styles.formGroupLabel, styles.light)}
              >
                {t('description.settings.activeTime')}
              </label>
              <input
                type="text"
                id="activityLevel"
                {...register('activityLevel')}
                className={styles.formControl}
              />
              {errors.activityLevel && (
                <p className={styles.errorMessage}>
                  {errors.activityLevel.message}
                </p>
              )}
            </div>
            <div className={styles.formGroup}>
              <p>
                {t('description.settings.requiredWater')}{' '}
                <span>{`${dailyNorma} L`}</span>
              </p>
              <label
                htmlFor="dailyRequirement"
                className={styles.formGroupLabel}
              >
                {t('description.settings.waterToDrink')}
              </label>
              <input
                type="text"
                id="dailyRequirement"
                {...register('dailyRequirement')}
                className={styles.formControl}
                placeholder="Please enter volume (Liters)"
              />
              {errors.dailyRequirement && (
                <p className={styles.errorMessage}>
                  {errors.dailyRequirement.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className={styles.saveButton}>
          {t('description.settings.save')}
        </button>
      </form>
    </>
  );
};

export default UserSettingsForm;
