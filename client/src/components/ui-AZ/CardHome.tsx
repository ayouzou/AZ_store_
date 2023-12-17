import React from "react";
import { Link } from "react-router-dom";
import {
    RiShareLine,
    RiShoppingCart2Line,
} from "react-icons/ri";
import { HeartIcon } from "@heroicons/react/24/outline";


interface Props {
    product: IProduct;
}

const CardHome: React.FC<Props> = ({ product }) => {

    return (
        <div className=" shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 sm:w-[25%] rounded-xl  relative ">
            <Link
                to={`/`}
            >
                <a className="flex md:items-center md:flex-col relative w-full">
                    <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none  flex flex-col justify-between items-center">
                        <div className="flex items-center h-full">
                            <img
                                src={`https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fdigital-category.webp&w=256&q=75`}
                                width={200}
                                height={200}
                                alt={product.name}
                                className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
                        <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
                            <h3 className="text-sm sm:text-[12px] md:text-sm text-center  font-serif ">
                                {product.name}
                            </h3>
                            <div className="text-sm sm:text-lg  font-serif m-5">
                                {product.descri}
                            </div>
                        </div>
                        <span className="mt-5 font-serif text-lg text-green-600"> ${product.price}</span>
                    </div>
                </a>
            </Link>
            <div className="w-1/2 md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-2 md:-top-2 md:bottom-auto left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20  ">
                <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
                    <HeartIcon style={{ fontSize: "1.2rem", fill: `${true ? "#ee384e" : ""}` }} />
                </div>
                <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
                    <RiShareLine style={{ fontSize: "1.2rem" }} />
                </div>
                <div className="hover:text-rose-600 active:scale-125 transition-all sm:px-3 md:px-0">
                    <RiShoppingCart2Line style={{ fontSize: "1.2rem" }} />
                </div>
            </div>

       
        </div>
    );
};

export default CardHome;
