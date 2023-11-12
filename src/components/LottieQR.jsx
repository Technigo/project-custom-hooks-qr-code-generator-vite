import Lottie from 'lottie-react';
import animationData from '../../public/resources/lottieQR.json';

export const MyLottieAnimation = () => {
    return (
        <div className='lottie-animation'>
            <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: '200px', height: '200px' }}
            />
        </div >
    );
};