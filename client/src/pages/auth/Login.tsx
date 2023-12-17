import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { storeCookie } from '../../utils/auth';
import Button from '../../components/ui/form-elements/Button';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/auth/useAuth';
import Input from '../../components/ui/form-elements/Input';

type Inputs = {
    email: string
    password: string
}

interface ApiResponse {
    message?: string;
    error?: string;
    token?: string;
}
export default function Login() {
    const { auth } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        setIsLoading(true);
        const { email, password } = data;
        const API = import.meta.env.VITE_API_URL as string;
        try {
            const response = await fetch(`${API}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json() as ApiResponse;

            console.log("response", data);

            if (!response.ok) {
                toast.error(data.message || "Something went wrong", {
                    duration: 2000
                });
                setIsLoading(false);
                return;
            }

            if (data.token) {
                storeCookie('token', data.token);
                toast.success('Login success', {
                    duration: 2000
                });
            }
            console.log("response", data);
            // window.location.href = '/';
            setIsLoading(false);

        } catch (error) {
            toast.error('Something went wrong', {
                duration: 2000
            })
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth.isAuthenticated) window.location.href = "/"
    }, [auth])
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p className="text-center text-4xl font-black text-gray-900 ">AZ.</p>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    <Input
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='********'
                        errors={errors} register={register} validation={
                            {
                                required: true,
                                minLength: 8
                            }
                        }
                    />
                    <Button type="submit" isLoading={isLoading}>Login</Button>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register for free
                    </a>
                </p>
            </div>
        </div>
    )
}
