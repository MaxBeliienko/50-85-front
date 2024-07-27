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

  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      buttonTop={40}
      buttonRight={40}
      title="Settings"
    >
      <div className={styles.settingsModal}>
        <p className={styles.settingsModalTitle}>Settings</p>
        <Formik
          initialValues={{
            gender: user.gender || "female",
            name: user.name || "",
            email: user.email || "",
            weight: user.weight || "",
            activityLevel: user.activityLevel || "",
            dailyRequirement: user.dailyRequirement || 2000,
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
                      Your gender identity:
                    </label>
                    <div className={styles.radioGroup}>
                      <label>
                        <Field
                          type="radio"
                          value="female"
                          name="gender"
                          as="input"
                        />
                        Woman
                      </label>
                      <label>
                        <Field
                          type="radio"
                          value="male"
                          name="gender"
                          as="input"
                        />
                        Man
                      </label>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formGroupLabel}>
                      Your name:
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
                      Email:
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
                      My daily norma
                    </label>
                    <div className={styles.dailyNormaGroup}>
                      <div>
                        <label htmlFor="dailyNorma">For woman:</label>
                        <p>V=(M*0,03) + (T*0,4)</p>
                      </div>

                      <div>
                        <label htmlFor="dailyNorma">For man:</label>
                        <p>V=(M*0,04) + (T*0,6)</p>
                      </div>
                    </div>
                    <p>
                      <span>*</span> V is the volume of the water norm in liters
                      per day, M is your body weight, T is the time of active
                      sports, or another type of activity commensurate in terms
                      of loads (in the absence of these, you must set 0)
                    </p>
                    <p>
                      {" "}
                      <span>!</span> Active time in hours
                    </p>
                  </div>
                </div>

                <div className={styles.gridItem}>
                  <div className={styles.formGroup}>
                    <label htmlFor="weight" className={styles.formGroupLabel}>
                      Your weight in kilograms:
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
                      The time of active participation in sports:
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
                      The required amount of water in liters per day:{" "}
                      <span>1.8 L</span>
                    </p>
                    <label
                      htmlFor="dailyRequirement"
                      className={styles.formGroupLabel}
                    >
                      Write down how much water you will drink:
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
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
