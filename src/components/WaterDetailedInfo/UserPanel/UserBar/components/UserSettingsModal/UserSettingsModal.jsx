import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../../../../Modal";
import CustomImageUploading from "../CustomImageUploading/CustomImageUploading";
import styles from "./UserSettingsModal.module.css";
import { userValidationSchema } from "./schema";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../../../../redux/user/operations";
import { selectUserProfile } from "../../../../../../redux/user/selectors";
import { useTranslation } from "react-i18next";
import LocalizationSwitcher from "../../../../../LocalizationSwitcher/LocalizationSwitcher";

const UserSettingsModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const { t } = useTranslation();

  const { register, handleSubmit, setValue, reset } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      gender: t("description.settings.female"),
      name: "",
      email: "",
      weight: "",
      activityLevel: "",
      dailyRequirement: 2000,
      photo: "",
    },
  });

  useEffect(() => {
    if (showModal) {
      dispatch(getUserProfile());
    }
  }, [dispatch, showModal]);

  useEffect(() => {
    if (user) {
      const { ...cleanedUser } = user;
      reset(cleanedUser);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const { ...cleanedData } = data;
    console.log("Cleaned Data: ", cleanedData);
    dispatch(updateUserProfile(cleanedData));
  };

  const handleImageChange = (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset");
    fetch("https://api.cloudinary.com/v1_1/dg0i4l440/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.secure_url;
        setValue("photo", imageUrl);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomImageUploading
            initialPhoto={user.photo}
            onImageChange={handleImageChange}
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
                    <input
                      type="radio"
                      value="female"
                      {...register("gender")}
                    />
                    {t("description.settings.woman")}
                  </label>
                  <label>
                    <input type="radio" value="male" {...register("gender")} />
                    {t("description.settings.man")}
                  </label>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formGroupLabel}>
                  {t("description.settings.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={styles.formControl}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formGroupLabel}>
                  {t("description.settings.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={styles.formControl}
                />
              </div>

              <div className={styles.formGroupDailyNorma}>
                <label htmlFor="dailyNorma" className={styles.formGroupLabel}>
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
                  <span>*</span> {t("description.settings.formulaExplanation")}
                </p>
                <p>
                  <span>!</span> {t("description.settings.activeTimeHour")}
                </p>
              </div>
            </div>

            <div className={styles.gridItem}>
              <div className={styles.formGroup}>
                <label htmlFor="weight" className={styles.formGroupLabel}>
                  {t("description.settings.weight")}
                </label>
                <input
                  type="number"
                  id="weight"
                  {...register("weight")}
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
                <input
                  type="text"
                  id="activityLevel"
                  {...register("activityLevel")}
                  className={styles.formControl}
                />
              </div>
              <div className={styles.formGroup}>
                <p>
                  {t("description.settings.requiredWater")}{" "}
                  <span>
                    {user.dailyWaterIntake} {t("description.settings.liter")}
                  </span>
                </p>
                <label
                  htmlFor="dailyRequirement"
                  className={styles.formGroupLabel}
                >
                  {t("description.settings.waterToDrink")}
                </label>
                <input
                  type="text"
                  id="dailyRequirement"
                  {...register("dailyRequirement")}
                  className={styles.formControl}
                />
              </div>
            </div>
          </div>
          <button type="submit" className={styles.saveButton}>
            {t("description.settings.save")}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
