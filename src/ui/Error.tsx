import Lottie from "lottie-react";
import ErrorDog from "../animation/ErrorDog.json";
import { StyleErrorAndLoading } from "../types/Product";

const Error = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={ErrorDog}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default Error;
