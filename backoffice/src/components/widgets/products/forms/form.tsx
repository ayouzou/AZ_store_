"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { productFormSchema } from "./schema"
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
import FileUpload from "../../../form-elements/file-upload"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { createProduct } from "../api/createProduct"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import useAuth from "@/hooks/auth/useAuth"
import { useParams } from "@tanstack/react-router"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ProductForm({ defaultValues, btnText, onEdit, isLoading, setIsDialogOpen }: { defaultValues?: z.infer<typeof productFormSchema>, onEdit?: (values: z.infer<typeof productFormSchema>) => void, isLoading?: boolean, btnText?: string, setIsDialogOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [uploadedAssets, setUploadedAssets] = useState<string[]>([])
    const form = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: defaultValues ?? {
            product_name: "",
            description: "",
            category: "",
            is_active: false,
            price: 0,
            quantity_available: 0,
        },
    })
    const { auth } = useAuth()
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const queryClient = useQueryClient()
    const { isPending, mutate } = useMutation({
        mutationFn: (data: Record<string, string | string[] | number | boolean>) => {
            return createProduct(data, auth)
        },
        onSettled(res) {
            if (!res?.error) {
                setIsDialogOpen && setIsDialogOpen(false)
                queryClient.invalidateQueries({ queryKey: ['STORE_PRODUCTS', slug] })
            }
        }
    })

    function onSubmit(values: z.infer<typeof productFormSchema>) {
        if (!onEdit) {
            return mutate({
                ...values,
                images: uploadedAssets,
                store_slug: slug
            })
        }
        onEdit(values)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                <div className="flex flex-col items-center gap-2 w-full">
                    <FormField
                        control={form.control}
                        name="product_name"
                        render={({ field }) => (
                            <FormItem className="w-full"
                            >
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Name of your store.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="What does your product do?"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Your product description
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category......." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="TECH">Tech</SelectItem>
                                        <SelectItem value="HOME">Home</SelectItem>
                                        <SelectItem value="FOOD">Food</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="w-full"
                            >
                                <FormLabel>Price</FormLabel>
                                <FormControl >
                                    <Input {...field} type="number" />
                                </FormControl>
                                <FormDescription>
                                    Price in USD
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col items-center gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="quantity_available"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Quantity available</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" />
                                    </FormControl>
                                    <FormDescription>
                                        The available quantity of your product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="is_active"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Activate product.
                                        </FormLabel>
                                    </div>

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="colors"
                            render={({ field }) => {
                                const { onChange } = field
                                return (
                                    <FormItem className="w-full flex flex-col items-start space-x-3 space-y-3 rounded-md border p-4">
                                        <FormLabel>Colors:</FormLabel>
                                        <FormControl>
                                            <ToggleGroup type="multiple" variant="outline" {...field} onValueChange={onChange}>
                                                <ToggleGroupItem value="WHITE" aria-label="Toggle White">
                                                    White
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="BLACK" aria-label="Toggle Black">
                                                    Black
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="BLUE" aria-label="Toggle Blue">
                                                    Blue
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="RED" aria-label="Toggle Red">
                                                    Red
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="GREEN" aria-label="Toggle Green">
                                                    Green
                                                </ToggleGroupItem>
                                            </ToggleGroup>
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="sizes"
                            render={({ field }) => {
                                const { onChange } = field
                                return (
                                    <FormItem className="w-full flex flex-col items-start space-x-3 space-y-3 rounded-md border p-4">
                                        <FormLabel>Sizes</FormLabel>
                                        <FormControl>
                                            <ToggleGroup type="multiple" variant="outline" {...field} onValueChange={onChange}>
                                                <ToggleGroupItem value="XS" aria-label="Toggle XS">
                                                    XS
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="S" aria-label="Toggle S">
                                                    S
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="M" aria-label="Toggle M">
                                                    M
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="L" aria-label="Toggle L">
                                                    L
                                                </ToggleGroupItem>
                                                <ToggleGroupItem value="XL" aria-label="Toggle XL">
                                                    XL
                                                </ToggleGroupItem>
                                            </ToggleGroup>
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />
                    </div>

                </div>
                <FileUpload label="Images" setUploadedAssets={setUploadedAssets} name="logo" multiple={true} />
                <Button className="w-full" type="submit" isLoading={isPending || isLoading}>{btnText ?? 'Create'}</Button>
            </form>
        </Form>
    )
}


