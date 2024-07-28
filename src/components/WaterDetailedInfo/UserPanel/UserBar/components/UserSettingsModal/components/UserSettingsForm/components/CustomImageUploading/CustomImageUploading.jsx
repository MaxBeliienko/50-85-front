import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import Iconsvg from "../../../../../../../../../Icon";
import styles from "./CustomImageUploading.module.css";

const CustomImageUploading = ({ onImageChange, initialPhoto }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  useEffect(() => {
    if (initialPhoto) {
      setImages([{ data_url: initialPhoto }]);
    }
  }, [initialPhoto]);

  const onChange = (imageList) => {
    setImages(imageList);

    if (imageList.length > 0) {
      const imageFile = imageList[0].file;
      const imageUrl = URL.createObjectURL(imageFile);
      onImageChange(imageUrl, imageFile);
    } else {
      onImageChange("");
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
