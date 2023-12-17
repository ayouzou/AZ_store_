
import { Link, useNavigate, useParams } from "react-router-dom";

import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { deleteAnything } from "../redux/cartSlice";
import { ArrowSmallRightIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCustomer from "../../../../hooks/auth/useCustomer";
import toast from "react-hot-toast";


const Sidebar = ({ setIsOpen, isOpen }) => {
  const { storeSlug } = useParams()
  const { customer } = useCustomer(storeSlug as string)
  const cartList = useSelector((state) => state.cart.value)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const slug = useParams()

  const productsInCart = cartList.filter((item) => item.storeSlug === storeSlug);


  const getTotal = () => {
    let totalCount = 0
    let totalPrice = 0
    productsInCart.forEach(item => {
      totalCount += item.count
      totalPrice += item.price * item.count
    })
    return { totalPrice, totalCount }
  }

  const handleCheckoutClick = () => {
    // Check if the user is authenticated before navigating
    if (customer.isAuthenticated) {
      navigate(`/${slug.storeSlug}/checkout`)
    } else {
      // Handle the case where the user is not authenticated (e.g., show a login modal)
      toast.success('User is not authenticated. Show login modal or take appropriate action.');
    }
  };


  return (
    <div data-te-perfect-scrollbar-init
      className={`${isOpen ? "right-0" : "-right-full"
        } "w-full bg-white rounded-2xl  fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[34vw] transition-all  duration-1000 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-lg font-semibold flex gap-2"><ShoppingBagIcon className="h-7 w-7 text-red-600" /> Shopping Bag <span className="text-red-600">({productsInCart.length})</span>
        </div>
        <div onClick={() => setIsOpen(false)} className="cursor-pointer w-8 h-8 flex justify-center items-center"><ArrowSmallRightIcon className="h-6 w-6 text-gray-500 hover:text-red-600" /></div>
      </div>
      <div className="flex flex-col gap-y-2 h-[460px] md:h-[480px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b scroll-smooth md:scroll-auto ">
        {productsInCart?.map((item, index) => {
          return (
            <>
              <CartItem data={item} index={index} key={index} />
            </>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-5   mt-4 ">
        <div className="flex w-full justify-between items-center ">
          <div className="font-semibold text-xl  ">
            <span className="mr-2 font-bold ">Subtotal:</span> ${" "}
            {getTotal().totalPrice.toFixed(2)}
          </div>
          <div onClick={() => dispatch(deleteAnything())} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl" >
            <FiTrash2 />
          </div>
        </div>

        <div
          onClick={handleCheckoutClick}
          className="bg-black mt-5 rounded-xl cursor-pointer flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
