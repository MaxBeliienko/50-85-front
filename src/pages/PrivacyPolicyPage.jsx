import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("description.useTerms.policy")}</h1>
      <p>
      {t("description.useTerms.t1")}
      </p>

      <h2>{t("description.useTerms.t2")}</h2>
      <p>
      {t("description.useTerms.t3")}
      </p>

      <h2>{t("description.useTerms.t4")}</h2>
      <p>
      {t("description.useTerms.t5")}
      </p>

      <h2>{t("description.useTerms.t6")}</h2>
      <p>
      {t("description.useTerms.t7")}
      </p>

      <h2>{t("description.useTerms.t8")}</h2>
      <p>
      {t("description.useTerms.t9")}
      </p>

      <h2>{t("description.useTerms.t10")}</h2>
      <p>
      {t("description.useTerms.t11")}
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
