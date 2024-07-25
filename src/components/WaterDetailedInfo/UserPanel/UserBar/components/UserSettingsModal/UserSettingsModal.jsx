import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../../Modal";
import CustomImageUploading from "../CustomImageUploading/CustomImageUploading";
import styles from "./UserSettingsModal.module.css";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../../../../redux/user/operations";

const UserSettingsModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.users);

  const [formState, setFormState] = useState({
    gender: user.gender || "",
    name: user.name || "",
    email: user.email || "",
    weight: user.weight || "",
    activityLevel: user.activityLevel || "",
    dailyRequirement: user.dailyRequirement || "",
    photo: user.photo || "",
  });

  useEffect(() => {
    if (showModal) {
      dispatch(getUserProfile());
    }
  }, [dispatch, showModal]);

  useEffect(() => {
    if (user) {
      setFormState({
        gender: user.gender,
        name: user.name,
        email: user.email,
        weight: user.weight,
        activityLevel: user.activityLevel,
        dailyRequirement: user.dailyRequirement,
        photo: user.photo,
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (imageUrl) => {
    setFormState((prevState) => ({
      ...prevState,
      photo: imageUrl,
    }));
  };

  const handleSave = () => {
    const { ...otherData } = formState;
    const payload = {
      ...otherData,
    };

    dispatch(updateUserProfile(payload));
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
        <CustomImageUploading
          imageUrl={formState.photo}
          onImageChange={handleImageChange}
        />
        <div className={styles.settingsForm}>
          <div className={styles.gridItem}>
            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel}>
                Your gender identity:
              </label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    checked={formState.gender === "female"}
                    onChange={handleChange}
                  />
                  Woman
                </label>
                <label>
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    checked={formState.gender === "male"}
                    onChange={handleChange}
                  />
                  Man
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formGroupLabel}>
                Your name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formGroupLabel}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dailyNorma" className={styles.formGroupLabel}>
                My daily norma:
              </label>
              <div className={styles.formGroupDailyNorma}>
                <div>
                  <label htmlFor="dailyNorma">For woman:</label>
                  <p>V=(M*0,03) + (T*0,4)</p>
                </div>
                <div>
                  <label htmlFor="dailyNorma">For man:</label>
                  <p>V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
              <div>
                <p>
                  * V is the volume of the water norm in liters per day, M is
                  your body weight, T is the time of active sports, or another
                  type of activity commensurate in terms of loads (in the
                  absence of these, you must set 0)
                </p>
              </div>
              <p>Active time in hours</p>
            </div>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.formGroup}>
              <label htmlFor="weight" className={styles.formGroupLabel}>
                Your weight in kilograms:
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formState.weight}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="sportsTime" className={styles.formGroupLabel}>
                The time of active participation in sports:
              </label>
              <input
                type="text"
                id="sportsTime"
                name="activityLevel"
                value={formState.activityLevel || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <p>
                The required amount of water in liters per day:{" "}
                <span>1.8 L</span>
              </p>
              <label htmlFor="waterIntake" className={styles.formGroupLabel}>
                Write down how much water you will drink:
              </label>
              <input
                type="text"
                id="waterIntake"
                name="dailyRequirement"
                value={formState.dailyRequirement}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className={styles.saveButton}
          onClick={handleSave}
          disabled={loading}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
