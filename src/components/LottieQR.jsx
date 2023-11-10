import Lottie from "lottie-react";
import QRanimation from "/src/assets/animations/QRanimation.json";

export const LottieQR = () => {
  const style = {
    width: 200,
  };

  return <Lottie animationData={QRanimation} style={style} />;
};
