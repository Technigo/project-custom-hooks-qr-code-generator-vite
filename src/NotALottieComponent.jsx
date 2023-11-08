import Lottie from "lottie-react";
import qrPhone from "./animations/Animation - 1699300585012.json";
import qrLoading from "./animations/Animation - 1699468198789.json"

export const NotALottieComponent = () => {
  const style = {
    width: 300,
  };
  return <Lottie animationData={qrPhone} style={style} />;
};

export const NotAnotherLottieComponent = () => {
  const style = {
    width: 200,
  };
  return <Lottie animationData={qrLoading} style={style} />;
}