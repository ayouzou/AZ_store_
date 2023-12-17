import { Link, useParams } from "react-router-dom";
import { decrementCount, deleteFromCart, incrementCount } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLongRightIcon, MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";




const CartItem = ({ data, index }) => {
    const dispatch = useDispatch()
        const{storeSlug} =useParams()
    const { _id,images, product_name, price,count } = data;
   
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500" key={index}>
            <div className="w-full min-h-[150px] flex items-center gap-x-10">
                <Link to={`/${storeSlug}/${data.slug}`}>
                    <img className="max-w-[80px]" src={images[0]} alt="" />
                </Link>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                        <Link  to={`/${data.slug}`}  className="text-nd uppercase font-medium max-w-[240px] text-primary hover:underline hover:text-red-300">
                            {product_name}
                        </Link>
                        <div>
                            {data.color}/{data.size}
                        </div>
                        <div   onClick={() =>dispatch(deleteFromCart(_id))} className="text-xl cursor-pointer">
                            <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-red-500 transition" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        <div className="flex flex-1 max-w-[130px] items-center h-full border text-black font-bold">
                            <div  onClick={()=>dispatch(decrementCount(_id)) }
                                className="h-full flex-1 flex justify-center items-center cursor-pointer">
                                <MinusIcon className="h-4 w-4 text-red-500 hover:text-red-800" />
                            </div>
                            <div className="h-full flex justify-center items-center px-2 font-serif">
                                {count}
                            </div>
                            <div onClick={()=>dispatch(incrementCount(_id))}className="h-full flex flex-1 justify-center items-center cursor-pointer">
                                <PlusIcon className="h-4 w-4  text-red-500 hover:text-red-800"/> 
                            </div>
                        </div>
                        <div className="flex flex-1 justify-around items-center text-xl font-serif">
                            $ {price}
                        </div>
                        <div className="flex flex-1 justify-end items-center text-primary font-serif text-lg">
                            {`$ ${parseFloat(price * count).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default CartItem;
