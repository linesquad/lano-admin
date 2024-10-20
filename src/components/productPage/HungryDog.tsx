import Lottie from "lottie-react";
import HungryDogAnimation from "../../animation/HungryDog.json";
import { StyleErrorAndLoading } from "../../types/Product";

const HungryDog = ({ width, height }: StyleErrorAndLoading) => {
  return (
    <Lottie
      animationData={HungryDogAnimation}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default HungryDog;
