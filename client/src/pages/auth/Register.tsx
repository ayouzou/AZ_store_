import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/auth/useAuth';
import { useEffect, useState } from 'react';
import Button from '../../components/ui/form-elements/Button';
import Input from '../../components/ui/form-elements/Input';
import { storeCookie } from '../../utils/auth';
import Navbar from '../../components/sections/Navbar';
import Lottie from 'lottie-react';
import logimg from '../../assets/Lottie/Login.json'

type Inputs = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    cpassword: string
    // role: string
}

interface ApiResponse {
    message?: string;
    error?: string;
    token?: string;
}
export default function Register() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()
    const { auth } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        setIsLoading(true)
        const { firstName, lastName, username, email, password } = data;
        const API = import.meta.env.VITE_API_URL as string;
        console.log(API)
        try {
            const response = await fetch(`${API}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, username, email, password })
            });

            const data = await response.json() as ApiResponse;

            console.log("response", data);

            if (!response.ok) {
                toast.error(data.message || "Something went wrong", {
                    duration: 2000
                });
                return;
            }
            if (data.token) {
                storeCookie('token', data.token);
                toast.success('Login success', {
                    duration: 2000
                });
            }
            setIsLoading(false)
            window.location.href = `/`;

        } catch (error) {
            toast.error('Something went wrong', {
                duration: 2000
            })
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth.isAuthenticated) window.location.href = "http://localhost:3002/stores"
    }, [auth])
    return (
        <>
            {/* <Navbar /> */}
            <div className="sm:flex gap-3 h-screen  px-6 mt-0  lg:px-8  bg-neutral-100 ">
                <div className="w-1/2 sm:mx-0  mx-auto  lg:pr-20">
                    <Lottie animationData={logimg} loop={true} className='  '/>
                </div>
                <div className="sm:ml-28  h-[85vh] mt-16 shadow-xl bg-white ">
                    <form className="space-y-1 mt-10 p-5" onSubmit={handleSubmit(onSubmit)} >
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <p className="text-center text-3xl font-black text-gray-900 ">AZ.</p> */}
                            <h2 className="text-center text-2xl font-serif leading-9 tracking-tight text-gray-900">
                                Create an account
                            </h2>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-between">
                            <div>
                                <Input
                                    id='firstName'
                                    name='firstName'
                                    label='First name'
                                    placeholder='John'
                                    errors={errors}
                                    register={register}
                                    validation={
                                        {
                                            required: true,
                                        }
                                    }
                                />
                            </div>
                            <div>
                                <Input
                                    id='lastName'
                                    name='lastName'
                                    label='Last name'
                                    placeholder='Doe'
                                    errors={errors}
                                    register={register}
                                    validation={
                                        {
                                            required: true,
                                        }
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <Input
                                id='username'
                                name='username'
                                label='username'
                                placeholder='johndoe'
                                errors={errors}
                                register={register}
                                validation={
                                    {
                                        required: true,
                                        minLength: 6
                                    }
                                }
                            />
                        </div>
                        <div>
                            <Input
                                id='email'
                                name='email'
                                label='Email'
                                placeholder='email@email.com'
                                errors={errors}
                                register={register}
                                validation={
                                    {
                                        required: true,
                                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                    }
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder='********'
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8
                                    })}
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">Password is required</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Password's length must be greater or equals to 8 characters</span> </p>

                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm password
                            </label>

                            <div className="mt-2 mb-6">
                                <input
                                    id="cpassword"
                                    type="password"
                                    placeholder='********'
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register("cpassword", {
                                        required: true,
                                        minLength: 8,
                                        validate: (value) => {
                                            if (watch('password') != value) {
                                                return "Your passwords do no match";
                                            }
                                        }
                                    })}
                                />
                                {errors.cpassword && errors.cpassword.type === "validate" && <p>  <p className="mt-2 text-sm text-red-600 dark:text-red-500">Passwords do not match</p></p>}
                                {errors.password && errors.password.type === "required" && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">Password is required</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Password's length must be greater or equals to 8 characters</span> </p>

                                )}
                            </div>
                        </div>


                        <div className="flex flex-row items-center justify-between gap-2">
                            {/* <div className="w-full flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                <input id="bordered-radio-1" type="radio" value="SELLER" className="!w-fit h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {
                                    ...register("role", {
                                        required: true,
                                    })
                                } />
                                <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-90">Seller</label>
                            </div> */}
                            {/* <div className="w-full flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-2" type="radio" value="CUSTOMER" className="!w-fit h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  {
                                ...register("role", {
                                    required: true,
                                })
                            } />
                            <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-90">Customer</label>
                        </div> */}
                        </div>
                        {/* {errors.role && errors.role.type === "required" && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">A role is required</p>
                        )} */}

                        <div className='ml-32'>
                            <Button type="submit" isLoading={isLoading}>Register</Button>
                        </div>
                        <p className="text-center text-sm text-gray-500">
                        <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Already a member?{' '}
                        </a>
                    </p>
                    </form>
                </div>
            </div>
        </>

    )
}
