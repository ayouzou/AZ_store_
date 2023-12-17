import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidbar";
import { useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { getStoreBySlug } from "../../kawazaki/api/getStoreBySlug";
import { SlWallet } from "react-icons/sl";
import useCustomer from "../../../../hooks/auth/useCustomer";
import { CiLogout } from "react-icons/ci";
const NavbarRayban = () => {
  const { storeSlug } = useParams()
  const { customer ,logout} = useCustomer(storeSlug as string)

  const cartList = useSelector((state) => state.cart.value)
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  const productsInCart = cartList.filter((item) => item.storeSlug === storeSlug);
  const { isLoading, data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', storeSlug], queryFn: () => getStoreBySlug({ slug: storeSlug as string }) })
  return (
    <>
      <header
        className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
          } fixed w-full z-10 lg:px-8 transition-all top-0`}>
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={`/${storeSlug}`}>
            <div className="w-[40px] flex items-center gap-2 mx-5">
              <img src={storeInfoData?.storeInfo?.store?.logo} alt="" /> {storeInfoData?.storeInfo?.store.name}
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link to={`/${storeSlug}/wallet`}>
              <SlWallet className="h-6 w-6 text-black cursor-pointer" />
            </Link >
            <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
              <ShoppingBagIcon className="h-6 w-6 text-black" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {productsInCart.length}
              </div>
            </div>
            {
              !customer.isAuthenticated ? <div>
                <Link to={`/${storeSlug}/login`} className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  Login
                </Link>
                <Link to={`/${storeSlug}/register`} className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  Register
                </Link>
              </div> : <span onClick={()=>logout()} ><CiLogout className="h-6 w-6 text-black cursor-pointer"/></span> 
            }


          </div>
        </div>
        {isOpen ? <Sidebar  setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
      </header>
    </>
  )
}
export default NavbarRayban