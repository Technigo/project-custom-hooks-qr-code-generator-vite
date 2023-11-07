import Lottie from "lottie-react";
import qrFall from "./animations/Animation - 1699300585012.json";

export const NotALottieComponent = () => {
  const style = {
    width: 300,
  };
  return <Lottie animationData={qrFall} style={style} />;
};
