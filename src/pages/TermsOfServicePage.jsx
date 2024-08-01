import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TermsOfServicePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("description.useTerms.terms")}</h1>
      <p>{t("description.useTerms.t12")}</p>

      <h2>{t("description.useTerms.t13")}</h2>
      <p>
      {t("description.useTerms.t14")}
      </p>

      <h2>{t("description.useTerms.t15")}</h2>
      <p>
      {t("description.useTerms.t16")}
      </p>

      <h2>{t("description.useTerms.t17")}</h2>
      <p>
      {t("description.useTerms.t18")}
      </p>

      <h2>{t("description.useTerms.t19")}</h2>
      <p>
      {t("description.useTerms.t20")}
      </p>

      <h2>{t("description.useTerms.t21")}</h2>
      <p>
      {t("description.useTerms.t22")}
      </p>

      <h2>{t("description.useTerms.t23")}</h2>
      <p>
      {t("description.useTerms.t24")}
      </p>

      <h2>{t("description.useTerms.t25")}</h2>
      <p>
      {t("description.useTerms.t26")}:{" "}
        <Link to="mailto:olenavasylchuk.front@gmail.com">
          olenavasylchuk.front@gmail.com
        </Link>
        .
      </p>
    </div>
  );
};

export default TermsOfServicePage;
