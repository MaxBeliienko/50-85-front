import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import Iconsvg from "../../../../../Icon";
import styles from "./CustomImageUploading.module.css";
import axios from "axios";

const CustomImageUploading = ({ onImageChange, initialPhoto }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  useEffect(() => {
    if (initialPhoto) {
      setImages([{ data_url: initialPhoto }]);
    }
  }, [initialPhoto]);

  const onChange = async (imageList) => {
    setImages(imageList);

    if (imageList.length > 0) {
      const imageFile = imageList[0].file;
      try {
        const imageUrl = await uploadImageToCloudinary(imageFile);
        onImageChange(imageUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary", error);
      }
    } else {
      onImageChange("");
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/CLOUD_NAME/image/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data.secure_url;
    } catch (error) {
      throw new Error("Failed to upload image.");
    }
  };

  return (
    <div className={styles.customImageUploading}>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
          <div className={styles.uploadImageWrapper}>
            <div className={styles.imagePreview}>
              {imageList.length > 0 ? (
                <div className={styles.uploadImageBox}>
                  <img
                    className={styles.avatar}
                    src={imageList[0]["data_url"]}
                    alt="Avatar"
                  />
                  <button
                    className={styles.uploadImageButton}
                    onClick={() => onImageUpdate(0)}
                  >
                    <Iconsvg width={16} height={16} iconName={"log-out"} />
                    Update a photo
                  </button>
                </div>
              ) : (
                <div
                  className={styles.uploadImageBox}
                  {...dragProps}
                  onClick={onImageUpload}
                >
                  <div className={styles.imagePlaceholder} {...dragProps}></div>
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    className={styles.uploadImageButton}
                  >
                    <Iconsvg width={16} height={16} iconName={"log-out"} />
                    Upload a photo
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default CustomImageUploading;
