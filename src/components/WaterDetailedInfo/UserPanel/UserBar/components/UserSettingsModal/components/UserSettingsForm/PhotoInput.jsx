import { useState } from 'react';
import css from './PhotoInput.module.css';
import defaultAvatar from '../../../../../../../../public/images/defaultAvatar.png';
import Iconsvg from '../../../../../../../Icon';

const PhotoInput = ({ user, setSelectedFile, register }) => {
  const [photoUrl, setPhotoUrl] = useState(user.photo || defaultAvatar);

  const handlePhotoChange = event => {
    const file = event.target.files[0];
    if (file) {
      setPhotoUrl(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.img} src={photoUrl} alt="photo"></img>
      </div>
      <label className={css.label} htmlFor={'photo'}>
        <Iconsvg width={21} height={20} iconName={'log-out'} styles={css.svg} />
        Upload a photo
      </label>
      <input
        className={css.input}
        id={'photo'}
        type="file"
        {...register('photo')}
        onChange={handlePhotoChange}
      />
      {/* {errors.photo && <p className={css.errorText}>{css.photo.message}</p>} */}
    </div>
  );
};

export default PhotoInput;
