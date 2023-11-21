import Lottie from "lottie-react";
import Downloadanimation from "/src/assets/animations/DownloadButton.json";
import styled from "styled-components";

const DownloadButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    flex-direction: row;
    padding: 0 20px 0 9px !important;
  }
`;

export const LottieDownload = ({ onClick, children }) => {
  const options = {
    animationData: Downloadanimation,
    style: {
      height: 50,
    },
    autoplay: true,
    loop: true,
  };

  return (
    <DownloadButton onClick={onClick}>
      <Lottie
        animationData={options.animationData}
        style={options.style}
        autoplay={options.autoplay}
        loop={options.loop}
      />
      {children}
    </DownloadButton>
  );
};
