import { EyeIcon } from "@heroicons/react/20/solid";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useSelector } from "react-redux";


type props = {
  amount: string,
  label: string,
  percentage: string
}
const Card = ({ amount, label, percentage }: props) => {
  const colorList = useSelector((state) => state.color.value)
  // console.log("from card",colorList)
  useEffect(()=>{
   console.log("from card",colorList)

  },[])
  return (
    <div className={`rounded-sm border border-stroke py-6 px-7.5 shadow-default bg-${colorList ?colorList:'indigo-100'} px-5 shadow-2xl rounded-xl`}>
      <div className="flex h-11 w-11 items-center justify-center  bg-black shadow-xl rounded-xl">
        <EyeIcon className="fill-white h-10 w-10"  />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className={`text-title-md font-bold text-${colorList ==='zinc-800'?'white':'black '} `}>
            {amount}
          </h4>
          <span className={`text-base font-medium text-${colorList ==='zinc-800'?'white':'black '} `}>{label}</span>
        </div>

        <span className={`flex items-center gap-1 text-sm font-medium text-meta-3 text-${colorList ==='zinc-800'?'white':'black '} `}>
          {percentage}
          <ArrowLongUpIcon className="h-6 w-6 text-primary" />

        </span>
      </div>
    </div>
  );
};

export default Card;
