import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../../redux/auth/operations";

const ConfirmGoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      dispatch(loginGoogle({ token: code }))
        .unwrap()
        .then(() => {
          navigate("/tracker");
        })
        .catch((error) => {
          console.error("Помилка під час авторизації через Google", error);
        });
    }
  }, [code, dispatch, navigate]);

  return <div>Обробка Google OAuth...</div>;
};

export default ConfirmGoogleAuth;
