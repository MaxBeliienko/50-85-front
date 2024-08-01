import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../redux/auth/operations";
import { useTranslation } from "react-i18next";

const ConfirmGoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const { t } = useTranslation();

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

  return <div>{t("description.useTerms.message")}</div>;
};

export default ConfirmGoogleAuth;
