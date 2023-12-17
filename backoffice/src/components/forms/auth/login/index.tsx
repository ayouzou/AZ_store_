"use client"
import { jwtDecode } from "jwt-decode";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { loginFormSchema } from "./schema"
import { Button } from "@/components/form-elements/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/form-elements/input"
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "@tanstack/react-router";
import useAuth from "@/hooks/auth/useAuth";

function storeCookie(name: string, value: string) {
    // let's extract the days from the token value
    const decodedToken: {
        sub: string; // Subject (typically a user ID)
        iat: number; // Issued at (timestamp)
        exp: number; // Expiration (timestamp)
    } = jwtDecode(value);
    let days = decodedToken.exp - decodedToken.iat;
    days = Math.floor(days / 60 / 60 / 24);
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = ";expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + ";path=/";
}
export function LoginForm() {
    const { toast } = useToast()
    const navigation = useNavigate()
    const { auth } = useAuth()

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const [isLoading, setIsLoading] = useState(false)


    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        setIsLoading(true);
        const { email, password } = values;
        const API = import.meta.env.VITE_API_URL as string;
        try {
            const response = await fetch(`${API}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json() as { token: string, message: string };

            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Your credentials are not valid.",
                })
                setIsLoading(false);
                return;
            }

            if (data.token) {
                storeCookie('token', data.token);
                toast({
                    variant: "default",
                    title: "Login success",
                })
            }
            console.log("response", data);
            navigation({
                from: '/',
                to: '/stores'
            });
            setIsLoading(false);

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Your credentials are not valid.",
            })
            console.log(error);
        }
        console.log(values)
    }

    useEffect(() => {
        console.log(auth)
        if (auth.isAuthenticated) {
            navigation({
                from: '/',
                to: '/stores'
            });
        }
    }, [auth])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} type="password" />
                            </FormControl>
                            <FormDescription>
                                Forgot your password?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading} isLoading={isLoading}>Login</Button>
            </form>
        </Form>
    )
}
