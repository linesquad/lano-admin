import Lottie from "lottie-react";
import LoadingCat from "../animation/LoadingCat.json";
import { StyleErrorAndLoading } from "../types/Product";

const Loading = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={LoadingCat}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default Loading;
