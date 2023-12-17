import NavbarRayban from "./components/NavbarRayban"
import { useEffect, useState } from "react"
import ReviewPart from "./section-rayban/ReviewPart";
import { Link, useParams } from "react-router-dom";
import { getProductStoreBySlug } from "./api/getProductStoreBySlug";
import { createReview } from "./api/createReview";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addToCart } from "./redux/cartSlice";
import { useDispatch } from "react-redux";
import useCustomer from "../../../hooks/auth/useCustomer";

import { CustomerSessionProvider } from "../../../context/auth/customer";

const ProductDetails_ = () => {
    const { storeSlug, productSlug } = useParams()

    const { customer } = useCustomer(storeSlug as string)


    const { data: productData, refetch: refetchProducts } = useQuery({ queryKey: ['STORE_PRODUCT', productSlug], queryFn: () => getProductStoreBySlug({ productSlug }) })

    const handleImageHover = (image: string) => {
        setHoveredImage(image);
    };
    const [hoveredImage, setHoveredImage] = useState('');

    useEffect(() => {
        setHoveredImage(productData?.product?.images[0])
    }, [])
    const dispatch = useDispatch()
    const { isPending, mutate } = useMutation({
        mutationFn: async (review: Record<string, any>) => {
            return createReview(review, customer)
        },
        onSettled(res) {
            if (res?.error || !res?.data) toast.error(res?.error as string)
            if (res?.data) {
                toast.success('review created successfully')
            }
        }
    })
    const user_id = customer.user?.id
    const [selectedOptions, setSelectedOptions] = useState({ color: '', size: '' });

    const handleColorChange = (selectedColor) => {
        setSelectedOptions((prevOptions) => ({ ...prevOptions, color: selectedColor }));
    };

    const handleSizeChange = (selectedSize) => {
        setSelectedOptions((prevOptions) => ({ ...prevOptions, size: selectedSize }));
    };

    const order =
    {
        ...productData?.product,
        ...selectedOptions
    }

    const formattedCreationDate = productData?.product?.creation_date
        ? new Date(productData?.product?.creation_date).toLocaleString()
        : '';

    const handleAddToCart = () => {
        dispatch(addToCart({ ...order, storeSlug }));
        toast.success('Item added to cart!');
    };
   
    return (
        <>
            <NavbarRayban />
            <div className=" mt-20 sm:mt-10 bg-gradient-to-r ">
                <div className=" sm:flex p-5 ">
                    <div className=" sm:w-[50%] w-[100%] sm:h-[650px] h-[350px] ">
                        <div className=" sm:w-[60%] w-[80%] h-[70%] m-auto  sm:mt-5 shadow-xl p-10 ">
                            <img src={hoveredImage || productData?.product?.images[0]} className="sm:h-[100%] h-[90%] sm:w-[100%] w-[100%]  object-cover" />
                        </div>
                        <div className="m-5  h-[20%] flex ">
                            {productData && productData?.product?.images.map((data: string, index: number) => {
                                return (
                                    <div key={index} className="flex  cursor-pointer  p-1"
                                        onMouseEnter={() => handleImageHover(data)}
                                        onMouseLeave={() => handleImageHover(productData && productData?.product.images[0])}>
                                        <img src={data} className="w-22 sm:w-40  object-cover " />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ml-1 sm:ml-10 w-[90%] sm:w-[40%] ">
                        <h2 className="text-center m-14 sm:mt-14 mt-4 mb-4 font-serif text-2xl text-black">{productData && productData?.product?.product_name}</h2>
                        <p className="sm:m-1 sm:p-1  text-black text-lg font-serif">
                            {productData && productData?.product?.description}
                        </p>
                        <p className="m-1 mt-5 mb-5 text-xl font-serif">Price:<strong className=" ">${productData && productData?.product?.price}</strong></p>
                        <p className="m-1 mt-5 mb-5 text-black text-xl font-serif">Quantity :<strong className=" font-bold text-2xl">{productData && productData?.product?.quantity_available}</strong></p>
                        {/* <p className="m-10 mt-5 mb-5 text-black text-xl font-serif">Status : <strong className=" font-bold text-2xl">   {productData && productData?.product?.availability_status}</strong></p> */}
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {/* Repeat the SVG icons here */}
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}

                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div className=" items-center gap-16">
                            <div className="flex gap-2 m-1 mb-5 text-black text-xl font-serif">
                                <label htmlFor="colors">Colors:</label>
                                <strong className=" font-serif text-lg">
                                    {productData && (
                                  
                                        <>
                                            <div className="flex gap-5  px-3 py-1 shadow-xl">
                                                {productData?.product?.colors.map((color: string, index: number) => (
                                                    <div key={index} className="relative group ">
                                                        <span
                                                            onClick={() => handleColorChange(color)}
                                                            className={`bg-${color.toLowerCase() === 'black' ? 'black' : color.toLowerCase() + '-600'} text-${color.toLowerCase() === 'black' ? 'white' : 'black'
                                                                } shadow-xl px-3 py-1 cursor-pointer rounded-[50%] border `}
                                                            value={color}
                                                        >
                                                        </span>
                                                        <span className="absolute  bottom-10 flex font-serif items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                            {color}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </strong>
                            </div>
                            <div className="flex gap-5 m-1 mb-5 text-black text-xl font-serif">
                                <label htmlFor="sizes">Sizes:</label>
                                <div className="flex gap-5">
                                    {productData?.product?.sizes.map((size: string, index: number) => (
                                        <span
                                            key={index}
                                            onClick={() => handleSizeChange(size)}
                                            className="border px-3  cursor-pointer"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <p className="m-1  mb-5 text-black text-xl font-serif">Creation date : <strong className=" font-bold text-2xl">{formattedCreationDate}</strong></p> */}

                        <div className="flex  mt-20">
                            <Link to={`/${storeSlug}`} className="mx-2 mt-2 bg-black  text-white font-medium sm:py-4 py-2 sm:px-10 px-10 rounded-xl hover:-translate-y-2 hover:scale-100 hover:bg-zinc-900 duration-1000"

                            >
                                BACK TO SHOP
                            </Link  >
                            <button onClick={handleAddToCart} className="mx-2 mt-2 bg-black  text-white font-medium py-2 sm:px-10 px-10 rounded-xl hover:-translate-y-2 hover:scale-100 hover:bg-zinc-900 duration-1000">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className=" m-10 h-auto">
                    <label className="m-10 mt-5 mb-5 text-black text-xl font-bold">DESCRIPTION : </label>
                    <p className="sm:m-10 sm:p-6 mt-2 mb-5 text-black text-lg font-serif">
                        {productData && productData?.product?.description}
                    </p>
                </div> */}
            </div>
            <div className="relative top-20">
                <ReviewPart onSubmit={(data: Record<string, string>) => mutate({ productId: productData?.product?._id, ...data, user_id })} isLoading={isPending} productId={productData?.product?._id as string} />
            </div>
        </>
    )
}


export default function ProductDetails() {
    const { storeSlug } = useParams()

    return (
            <CustomerSessionProvider storeSlug={storeSlug}>
                <ProductDetails_ />

            </CustomerSessionProvider>
       
    )
}