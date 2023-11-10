import Lottie from "lottie-react";
import QRanimation from "/src/assets/animations/QRanimation-slow.json";

export const LottieQR = () => {
  const style = {
    width: 250,
  };

  const options = {
    speed: 0.3,
  };

  return <Lottie animationData={QRanimation} style={style} options={options} />;
};
