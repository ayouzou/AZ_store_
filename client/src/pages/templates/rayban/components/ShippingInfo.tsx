
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteAnything, deleteFromCart } from "../redux/cartSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";



const ShippingInfo = () => {
    const dispatch = useDispatch()
    const { storeSlug } = useParams()
    const orderInfo = useSelector((state) => state.cart.value);
    console.log("orderInfo", orderInfo)
    let overallTotal = 0;
    const productsInCart = orderInfo.filter((item) => item.storeSlug === storeSlug);

    console.log(productsInCart)
    return (
        <>
            <div className="h-auto  sm:w-[70%]">
                <h1 className="font-serif text-center text-4xl p-5 mt-5">Confirm and pay</h1>
                <table className="border-collapse w-full p-5 ">
                    <thead>
                        <tr>
                            <th className="border font-serif text-sm sm:text-xl">Image</th>
                            <th className="border font-serif text-sm sm:text-xl">Name</th>
                            <th className="border font-serif text-sm sm:text-xl">Price</th>
                            <th className="border font-serif text-sm sm:text-xl">Color</th>
                            <th className="border font-serif text-sm sm:text-xl">Size</th>
                            <th className="border font-serif text-sm sm:text-xl">Quantity</th>
                            <th className="border font-serif text-sm sm:text-xl">Total</th>
                            <th className="border font-serif text-sm sm:text-xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsInCart.map((order, index: number) => {
                            const productTotal = parseFloat(order.price) * parseInt(order.count);
                            overallTotal += productTotal;

                            return (
                                <tr key={index} className="border">
                                    <td className="border">
                                        <img src={order.images[0]} alt={order.product_name} className="w-16 h-full sm:w-32 mx-auto sm:h-full object-cover rounded" />
                                    </td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{order.product_name}</td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{order.price}$</td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{order.color}</td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{order.size}</td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{order.count}</td>
                                    <td className="border text-center font-serif text-sm sm:text-2xl">{productTotal}$</td>
                                    <td className="border text-center font-serif text-xl cursor-pointer" onClick={() => dispatch(deleteFromCart(order._id))}>
                                        {/* Assuming XMarkIcon is a component */}
                                        <XMarkIcon className="h-6 mx-auto w-6 text-gray-500 hover:text-red-500 transition" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>









                <p className="ml-3 font-serif text-center m-10">Overall Total: {overallTotal.toFixed(2)}$</p>
            </div>
        </>
    );
};

export default ShippingInfo;
