import Lottie from "lottie-react";
import logimg from '../../../../assets/Lottie/checkout.json'

const PopUp = ({ message }) => {
  return (
    <div className="fixed top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4  w-[50%] h-[50%]">
      <div className="w-96 h-96 sm:mx-auto ml-16">
        <Lottie animationData={logimg} loop={true} />
      </div>
    </div>
  );
};

export default PopUp;