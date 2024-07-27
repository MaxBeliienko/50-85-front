import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { userValidationSchema } from "./schema";
import Modal from "../../../../../Modal";
import CustomImageUploading from "../CustomImageUploading/CustomImageUploading";
import styles from "./UserSettingsModal.module.css";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../../../../redux/user/operations";
import {
  selectUserProfile,
  selectIsLoading,
} from "../../../../../../redux/user/selectors";
import { useTranslation } from "react-i18next";
import LocalizationSwitcher from "../../../../../LocalizationSwitcher/LocalizationSwitcher";

const UserSettingsModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (showModal) {
      dispatch(getUserProfile());
    }
  }, [dispatch, showModal]);

  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values));
  };

  const { t } = useTranslation();
  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      buttonTop={40}
      buttonRight={40}
      title="Settings"
    >
      <div className={styles.settingsModal}>
        <p className={styles.settingsModalTitle}>
          {t("description.settings.title")}
        </p>
        <Formik
          initialValues={{
            gender: user.gender || t("description.settings.female"),
            name: user.name || "",
            email: user.email || "",
            weight: user.weight || "",
            activityLevel: user.activityLevel || "",
            dailyRequirement: user.dailyRequirement || 2000,
            dailyWaterIntake: user.dailyWaterIntake || "",
            photo: user.photo || "",
          }}
          validationSchema={userValidationSchema}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <CustomImageUploading
                initialPhoto={values.photo}
                onImageChange={(imageUrl) => setFieldValue("photo", imageUrl)}
              />
              <div className={styles.settingsForm}>
                <div className={styles.gridItem}>
                  <div className={styles.formGroup}>
                    <label className={styles.formGroupLabel}>
                      {t("description.settings.language")}
                    </label>
                    <LocalizationSwitcher isSettings={true} />
                    <label className={styles.formGroupLabel}>
                      {t("description.settings.gender")}
                    </label>
                    <div className={styles.radioGroup}>
                      <label>
                        <Field
                          type="radio"
                          value="female"
                          name="gender"
                          as="input"
                        />
                        {t("description.settings.woman")}
                      </label>
                      <label>
                        <Field
                          type="radio"
                          value="male"
                          name="gender"
                          as="input"
                        />
                        {t("description.settings.man")}
                      </label>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formGroupLabel}>
                      {t("description.settings.name")}
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={styles.formControl}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formGroupLabel}>
                      {t("description.settings.email")}
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.formControl}
                    />
                  </div>

                  <div className={styles.formGroupDailyNorma}>
                    <label
                      htmlFor="dailyNorma"
                      className={styles.formGroupLabel}
                    >
                      {t("description.settings.requirement")}
                    </label>
                    <div className={styles.dailyNormaGroup}>
                      <div>
                        <label htmlFor="dailyNorma">
                          {t("description.settings.forWoman")}
                        </label>
                        <p>{t("description.settings.womanFormula")}</p>
                      </div>

                      <div>
                        <label htmlFor="dailyNorma">
                          {t("description.settings.forMan")}
                        </label>
                        <p>{t("description.settings.manFormula")}</p>
                      </div>
                    </div>
                    <p>
                      <span>*</span>{" "}
                      {t("description.settings.formulaExplanation")}
                    </p>
                    <p>
                      {" "}
                      <span>!</span> {t("description.settings.activeTimeHour")}
                    </p>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.formGroup}>
                    <label htmlFor="weight" className={styles.formGroupLabel}>
                      {t("description.settings.weight")}
                    </label>
                    <Field
                      type="number"
                      id="weight"
                      name="weight"
                      className={styles.formControl}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label
                      htmlFor="activityLevel"
                      className={styles.formGroupLabel}
                    >
                      {t("description.settings.activeTime")}
                    </label>
                    <Field
                      type="text"
                      id="activityLevel"
                      name="activityLevel"
                      className={styles.formControl}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <p>
                      {t("description.settings.requiredWater")}{" "}
                      <span>
                        {user.dailyWaterIntake}{" "}
                        {t("description.settings.liter")}
                      </span>
                    </p>
                    <label
                      htmlFor="dailyRequirement"
                      className={styles.formGroupLabel}
                    >
                      {t("description.settings.waterToDrink")}
                    </label>
                    <Field
                      type="text"
                      id="dailyRequirement"
                      name="dailyRequirement"
                      className={styles.formControl}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={styles.saveButton}
                disabled={loading}
              >
                {t("description.settings.save")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
