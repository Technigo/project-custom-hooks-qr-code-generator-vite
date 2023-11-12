import Lottie from "lottie-react";
import QrA from "../assets/animations/QRcode-animation.json";
import LoaderA from "../assets/animations/loader-animation.json";

export const QrAnimation = () => {
    return <Lottie animationData={QrA} />;
};

export const LoadingAnimation = () => {
    return <Lottie animationData={LoaderA} />;
};
