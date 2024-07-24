import { useState } from "react";
import ImageUploading from "react-images-uploading";
import Iconsvg from "../../../../../Icon";
import styles from "./CustomImageUploading.module.css";

const CustomImageUploading = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
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
          onImageRemove,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
          <div className={styles.uploadImageWrapper}>
            <div className={styles.imagePreview}>
              {imageList.length > 0 ? (
                <div className={styles.imagePreview}>
                  <img src={imageList[0]["data_url"]} alt="Avatar" />
                  <div className={styles.imageItemBtnWrapper}>
                    <button
                      onClick={() => onImageUpdate(0)}
                      className={styles.uploadImageButton}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => onImageRemove(0)}
                      className={styles.uploadImageButton}
                    >
                      Remove
                    </button>
                  </div>{" "}
                </div>
              ) : (
                <div className={styles.uploadImageBox} {...dragProps}>
                  <div className={styles.imagePlaceholder} {...dragProps}></div>
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    className={styles.uploadImageButton}
                    onClick={onImageUpload}
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
