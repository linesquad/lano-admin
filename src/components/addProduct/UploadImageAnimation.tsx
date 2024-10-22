import Lottie from "lottie-react";
import UploadImage from "../../animation/UploadImage.json";
import { StyleErrorAndLoading } from "../../types/Product";

const UploadImageAnimation = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={UploadImage}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default UploadImageAnimation;
