import Lottie from "lottie-react";
import QRanimation from "/src/assets/animations/QRanimation-slow.json";

export const LottieQR = () => {
  const style = {
    width: 250,
    speed: 0.5,
  };

  return <Lottie animationData={QRanimation} style={style} />;
};
