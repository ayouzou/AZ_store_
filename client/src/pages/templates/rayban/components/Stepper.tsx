import { useEffect, useState } from 'react'
import './Stepper.css'
import Payment from './Payment';
import ShippingInfo from './ShippingInfo';
import { createOrder } from "../api/createOrder";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { z } from 'zod';
import Input from '../../../../components/ui/form-elements/Input';
import { useForm } from 'react-hook-form';

import useCustomer from '../../../../hooks/auth/useCustomer';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteAnything } from '../redux/cartSlice';
import PopUp from './PopUp';

const stepperSchema = z.object({
    email: z.string().email(),
    address: z.string(),
    tele: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    // credictCardNumber: z.string(),
    // expires: z.string(),
    // cvc: z.string(),
})

const Stepper = () => {
    const dispatch = useDispatch()
    const { storeSlug } = useParams()
    const { customer } = useCustomer(storeSlug as string)
    console.log("glovo", customer)
    const steps = ['Customer Info', 'Shipping Info', 'Payment']
    const [currentStep, setCurrentStep] = useState(1);

    const [isPopUpVisible, setPopUpVisible] = useState(false);


    const [complete, setComplete] = useState(false)
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidTelephone = (telephone: string) => {
        const telephoneRegex = /^\+\d{1,3}\d{5,14}$/;
        return telephoneRegex.test(telephone);
    };
    const orderInfo = useSelector((state) => state.cart.value);
    const productsInCart = orderInfo.filter((item) => item.storeSlug === storeSlug);
    const navigate = useNavigate();


    const { isPending, mutate } = useMutation({
        mutationFn: async (review: Record<string, any>) => {
            return createOrder(review, customer)
        },
        onSettled(res) {
            if (res?.error || !res?.data) toast.error(res?.error as string)
            if (res?.data) { 
                // toast.success('order created successfully')
                // dispatch(deleteAnything())
                setPopUpVisible(true);
                setTimeout(() => {
                    setPopUpVisible(false);
                //  window.location.href = `/${storeSlug as string}`
                navigate(`/${storeSlug as string}`)
                }, 3000)
            }
        }
    })
    const customer_id = customer.user?.id

    const products: any = []
    // const infoUser = { email, address, tele, first_name, last_name }
    let store_id: string;
    productsInCart.forEach(item => {
        console.log(item)
        const { product_name, price, count, images } = item;
        const quantity = count
        const product_id = item._id
        store_id = item.store_id
        
        const productObject = { product_id, product_name, price, quantity, images };
        console.log(productObject)
        products.push(productObject);
        console.log(products)
    });
    const handleNext = () => {
        const isStepNotValid = currentStep === 1 && !isValidEmail(watch('email')) || !watch('first_name') || !watch('last_name') || !isValidTelephone(watch('tele'))

        if (isStepNotValid) return;

        setCurrentStep((prev) => prev + 1);
    };
    const handlePrevious = () => {
        setCurrentStep((prev) => prev - 1)
    }

    const { register, formState: { errors }, handleSubmit, watch } = useForm<Record<string, string>>()
    const onSubmit_ = (data: Record<string, any>) => {
        setComplete(true);
        if (customer.isAuthenticated) {
            mutate({ ...data, store_id, products, customer_id })
        } else {
            toast.error("Please login to confirm")
            navigate(`/${storeSlug}/login`)
        }

        // console.log('refactore state', data, errors)
    }
    useEffect(() => {

    }, [errors])

    return (

        <div className='shadow-lg mt-20 h-auto p-5 '>
            <div className="flex justify-center items-center mt-0 gap-5">
                {
                    steps?.map((step, i) => (
                        <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                            <div className='step'>{
                                (i + 1 < currentStep || complete) ?
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="10" height="10" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" ></path>
                                    </svg>
                                    : i + 1
                            }</div>
                            <p className="text-gray-500">{step}</p>
                        </div>
                    ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit_)}>
                <div className='flex justify-center items-center'>
                    {currentStep === 1 && (
                        <div className='h-auto mt-10  sm:w-4/12 p-5'>
                            <div className='flex flex-col gap-4 mt-5'>
                                <Input type="text" id="email" name="email" placeholder="xwyz@gmail.com" label='Email' errors={errors} register={register} validation={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Email is not valid"
                                    }
                                }}
                                />
                                <div className="flex sm:gap-10 gap-2">
                                    <div className='w-full'>
                                        <Input type="text" id="first_name" name="first_name" placeholder="jhon" label='First name' register={register}
                                            validation={{
                                                required: "First name is required",

                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Input type="text" id="last_name" name="last_name" placeholder="doe"
                                            register={register}
                                            label='Last name' validation={{
                                                required: "Last name is required",
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                                <Input type="tel" id="telephone" name="tele" placeholder="+212945729899" label='Phone number' register={register} validation={{
                                    required: "Telephone is required",
                                    pattern: {
                                        value: /^\+\d{1,3}\d{5,14}$/,
                                        message: "Telephone is not valid"
                                    }
                                }}
                                    errors={errors} />
                                <Input type="text" id="address" name="address" placeholder="+IMM 420 APT 69" label='Enter your address' register={register} validation={{
                                    required: "Address is required",
                                }}

                                    errors={errors} />
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    {currentStep === 2 && (
                        <ShippingInfo />
                    )}
                    {currentStep === 3 && (
                        <Payment register={register} errors={errors} />
                    )}
                </div>
                <div className='flex justify-center items-center gap-4  m-5 '>
                    {
                        currentStep === 1 ? "" :
                            <button className='px-10 py-2 bg-black text-white rounded-xl hover:bg-slate-900' type='button' onClick={handlePrevious}>
                                Prev
                            </button>
                    }
                    {
                        steps.length === currentStep ?
                            <button className='px-10 py-2 bg-black text-white rounded-xl hover:bg-slate-900' type='submit'>
                                Confirm
                            </button> :
                            <button className='px-10 py-2 bg-black text-white rounded-xl hover:bg-slate-900' type='button' onClick={handleNext}>
                                Next
                            </button>
                    }
                </div>
            </form>
            {isPopUpVisible && (
                <PopUp
                    message="Your order has been created successfully!"
                />
            )}
        </div>
    )
}

export default Stepper