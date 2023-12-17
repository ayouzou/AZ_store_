import React, { useState } from 'react'
import Input from '../../../../components/ui/form-elements/Input';
import SelectInput from '../../../../components/ui/form-elements/SelectInput';
import paypal from '../../../../assets/Lottie/paypal.json'
import Lottie from "lottie-react";
import visa from '../../../../assets/Lottie/visa.json'

const Payment = ({ register, errors }) => {
    const items = [
        "maroc",
        'america',
        'canada'
    ]
    const [type, setType] = useState("card");
    return (
        <div className="w-[34rem] mx-auto mt-4 p-4  border rounded-xl shadow-md">
            <div className="grid place-items-center">
                <div className="mb-2 h-20   text-white">
                    {type === "card" ? (
                        // <img alt="paypal " className="w-34  h-14 "  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwJ6Ntg0HOzSADGhyDYw6hO5TedHddyub4715zwtAPoF9ICbOaBiNTnnx7Tt94p9N3w&usqp=CAU' />
                        <Lottie animationData={visa} loop={true}  className='  w-28'/>


                    ) : (
                        // <img alt="paypal" className="w-14"  src="data:image/png;base64,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"/>
                        <Lottie animationData={paypal} loop={true}  className='  w-28'/>

                    )}
                </div>
            </div>
            <div>
                <div className="flex justify-center  space-x-4 ">
                    <span
                        className={`${type === "card" ? "bg-black rounded-xl text-white" : "bg-gray-200"} px-4 py-2 rounded cursor-pointer `}
                        onClick={() => setType("card")}>Pay with Card</span>
                    <span
                        className={`${type === "paypal" ? "bg-black rounded-xl text-white" : "bg-gray-200"
                            } px-4 py-2 rounded cursor-pointer`} onClick={() => setType("paypal")}>
                        Pay with PayPal
                    </span>
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-4">
                        {type === "card" && (
                            <React.Fragment>
                                <Input type="tel" id="creditCardNumber" name="creditCardNumber" placeholder='0000 0000 0000 0000' label='Credit card nummber' register={register} validation={{
                                    required: "Credit card number is required",
                                    pattern: {
                                        value: /^[0-9]{16}$/,
                                        message: "Credit card number is not valid"
                                    }
                                }}
                                    errors={errors}
                                />
                                <Input type="tel" id="expires" name="expires" placeholder='09/29' label='Expires in' register={register} validation={{
                                    required: "Expires is required",
                                    pattern: {
                                        value: /^[0-9]{2}\/[0-9]{2}$/,
                                        message: "Expires is not valid"
                                    }
                                }}
                                    errors={errors}
                                />
                                <div className='flex '>
                                    <div>
                                        <Input type="tel" id="cvc" name="CVC" placeholder='123'
                                            label='CVC' register={register} validation={{
                                                required: "CVC is required",
                                                pattern: {
                                                    value: /^[0-9]{3}$/,
                                                    message: "CVC is not valid"
                                                }
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        {type === "paypal" && (
                            <React.Fragment>
                                <div>
                                    <Input type="text" id="email" name="email" placeholder="xwyz@gmail.com" label='Email' errors={errors} register={register} validation={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Email is not valid"
                                        }
                                    }} />
                                    <div className=''>
                                        <h1 className='m-6 text-xl font-serif'>Billing Address</h1>
                                        <SelectInput
                                            key='em'
                                            label="Select a country"
                                            name='country'
                                            items={items}
                                            placeholder='country' />
                                    </div>
                                    <div className='mt-10'>
                                        <Input type="tel" id="cvc" name="CVC" placeholder='123'
                                            label='Code postal' register={register} validation={{
                                                required: "CVC is required",
                                                pattern: {
                                                    value: /^[0-9]{3}$/,
                                                    message: "CVC is not valid"
                                                }
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                </div>

                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment