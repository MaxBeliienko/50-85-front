import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { loginGoogle } from '../../redux/auth/operations';

import css from './GoogleButtonLogin.module.css';
import toast from 'react-hot-toast';

const GoogleButtonLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const success = async response => {
    const token = response.credential;

    try {
      const result = await dispatch(loginGoogle({ token })).unwrap();
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
      navigate('/host');
    } catch (error) {
      console.error('Invalid Google login:', error);
      toast.error(`Invalid Google login: ${error}`);
    }
  };
  const fail = error => {
    console.error('Invalid Google login:', error);
  };

  return (
    <div className={css.GoogleButtonLogin}>
      <GoogleLogin
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={success}
        onFailure={fail}
      />
    </div>
  );
};

export default GoogleButtonLogin;
