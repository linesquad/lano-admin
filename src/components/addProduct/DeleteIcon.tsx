import Lottie from "lottie-react";
import DeleteIconAnimation from "../../animation/DeleteIcon.json";
import { StyleErrorAndLoading } from "../../types/Product";

const DeleteIcon = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={DeleteIconAnimation}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default DeleteIcon;
