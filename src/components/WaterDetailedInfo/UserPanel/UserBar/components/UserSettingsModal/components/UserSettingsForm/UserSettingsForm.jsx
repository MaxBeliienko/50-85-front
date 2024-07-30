import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomImageUploading from './components/CustomImageUploading/CustomImageUploading';
import styles from './UserSettingsForm.module.css';
import { userValidationSchema } from './schema';
import { updateUserProfile } from '../../../../../../../../redux/auth/operations';
import { selectUserProfile } from '../../../../../../../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Iconsvg from '../../../../../../../Icon';

const UserSettingsForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      gender: user.gender || t('description.settings.female'),
      name: user.name || '',
      email: user.email || '',
      weight: user.weight || '',
      activityLevel: user.activityLevel || '',
      dailyRequirement: user.dailyRequirement || 2000,
      photo: user.photo || '',
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        gender: user.gender || t('description.settings.female'),
        name: user.name || '',
        email: user.email || '',
        weight: user.weight || '',
        activityLevel: user.activityLevel || '',
        dailyRequirement: user.dailyRequirement || 2000,
        photo: user.photo || '',
      });
    }
  }, [user, reset, t]);

  const onSubmit = data => {
    const cleanedData = {
      ...data,
      weight: Number(data.weight),
      dailyRequirement: Number(data.dailyRequirement),
    };
    dispatch(updateUserProfile(cleanedData))
      .then(() => {
        reset(cleanedData);
        closeModal();
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  const handleImageChange = async imageBlobUrl => {
    try {
      // Отримуємо blob за URL
      const response = await fetch(imageBlobUrl);
      const blob = await response.blob();

      // Створюємо файл з blob
      const imageFile = new File([blob], 'image.jpg', { type: blob.type });

      // Створюємо FormData для завантаження на Cloudinary
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'ml_default');

      // Надсилаємо файл на Cloudinary
      const uploadResponse = await fetch(
        'https://api.cloudinary.com/v1_1/dcyohn4j5/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await uploadResponse.json();

      if (data.secure_url) {
        // Зберігаємо URL зображення в полі форми
        setValue('photo', data.secure_url);
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomImageUploading
          initialPhoto={user.photo}
          onImageChange={handleImageChange}
        />
        <div className={styles.settingsForm}>
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
                <span>
                  {user.dailyWaterIntake} {t('description.settings.liter')}
                </span>
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
