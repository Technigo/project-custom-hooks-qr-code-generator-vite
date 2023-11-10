import Lottie from "lottie-react";
import Confettianimation from "/src/assets/animations/Animation-confetti.json";

export const LottieConfetti = () => {
  const options = {
    animationData: Confettianimation,
    style: {
      margin: -100,
      height: 200,
    },
    autoplay: true,
    loop: false,
  };

  return (
    <Lottie
      animationData={options.animationData}
      style={options.style}
      autoplay={options.autoplay}
      loop={options.loop}
    />
  );
};
