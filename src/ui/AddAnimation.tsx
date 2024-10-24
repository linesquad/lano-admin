import Lottie from "lottie-react";
import AddAnimationJSON from "../animation/AddAnimation.json";
import { StyleErrorAndLoading } from "../types/Product";

export const AddAnimation = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={AddAnimationJSON}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};
