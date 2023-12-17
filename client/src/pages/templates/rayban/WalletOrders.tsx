import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrdersUserByStore } from "./api/getOrdersUserbyStore";
import SkeletonLoader from "./components/SkeletonLoader";
import useCustomer from "../../../hooks/auth/useCustomer";
import NavbarRayban from "./components/NavbarRayban";
import { Card } from "flowbite-react";

const WalletOrders = () => {
    const { storeSlug } = useParams();
    const { customer } = useCustomer(storeSlug as string);

    const { data: ordersUser, isLoading } = useQuery({
        queryKey: ["ORDERS_INFO", storeSlug],
        queryFn: () => getOrdersUserByStore({ storeSlug }, customer),
    });
    console.log(ordersUser)
    return (
        <div>
            <NavbarRayban />
            <div className=" mt-20">
                <h2 className="m-10 text-center font-serif text-xl">
                    Your orders in this store: {storeSlug}
                </h2>
                {customer && (
                    <Card className="w-96 h-48 p-20 mx-auto ">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                alt="Bonnie image"
                                height="96"
                                src="https://img.freepik.com/vecteurs-premium/profil-avatar-illustration-coloree-2_549209-82.jpg?w=740"
                                width="96"
                                className="mb-3 rounded-full shadow-lg "
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{customer.user?.username}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{customer.user?.email}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{customer.user?.role}</span>

                        </div>
                    </Card>
                )}

                <div className="sm:mx-52 ">
                    {isLoading ? (
                        Array.from({ length: 12 }).map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))
                    ) : (
                        ordersUser?.data &&
                        ordersUser.data.map((order) =>
                            order.products ? (
                                order.products.map((product) => (
                                    <Link
                                        to={`/${storeSlug}/${product.product_name}`}
                                        key={product.id}
                                        className="flex  items-center justify-between h-32 bg-white m-5 border border-gray-200 rounded-lg shadow"
                                    >
                                        <div className="flex items-center gap-5">
                                            <a href="#">
                                                <img src={product?.images[0]} className=" w-40 h-28 rounded-t-lg" alt="product image" />
                                            </a>
                                            <a href="#">
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.product_name}</h5>
                                            </a>
                                        </div>

                                        <div className="px-5 pb-5">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
                                            <div className="flex items-center justify-between">
                                                {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                                                <p className={`font-bold ${order.status === 'PENDING' ? 'text-orange-600' :
                                                    order.status === 'CONFIRMED' ? 'text-blue-600' :
                                                        order.status === 'DELIVERING' ? 'text-green-600' :
                                                            order.status === 'DELIVERED' ? 'text-purple-600' : ''
                                                    }`}>
                                                    {order.status}
                                                </p>
                                            </div>
                                          
                                        </div>
                                    </Link>
                                ))
                            ) : null
                        )
                    )}
                </div>






                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">

                </div>
            </div>
        </div>
    );
};

export default WalletOrders;
