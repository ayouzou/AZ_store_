import { DataTable } from '@/components/ui/data-table'
import { LucideTrash, Pencil } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/ui/table/column-header'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ColumnDef } from '@tanstack/react-table'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ProductForm } from '@/components/widgets/products/forms/form'
import { getProductsByStoreSlug } from './api/getProductsByStoreSlug'
import { useParams } from '@tanstack/react-router'
import useAuth from '@/hooks/auth/useAuth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { updateProductById } from './api/updateProductById'
import { z } from 'zod'
import { productFormSchema } from './forms/schema'
import { deleteProductById } from './api/deleteProductById'
import { ScrollArea } from '@/components/ui/scroll-area'

type Product = {
    product_name: string;
    price: number;
    availability_status: "In Stock" | "Out of Stock";
    is_active: boolean;
    creation_date: Date;
};
export default function ProductsTable() {
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { auth } = useAuth()
    const { data: productsData, isLoading, isError } = useQuery({ queryKey: ['STORE_PRODUCTS', slug], queryFn: () => getProductsByStoreSlug(slug, auth) })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !productsData || !productsData.data) {
        return <div>Error loading data</div>;
    }
    const cols: ColumnDef<Product>[] = [

        {
            accessorKey: "_id",

        },
        {
            accessorKey: "product_name",
            header: "Name",
        },
        {
            accessorKey: "description",
        },
        {
            accessorKey: "price",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="price" />
            ),
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("price"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)

                return <div className="font-medium">{formatted}</div>
            }

        },
        {
            accessorKey: "quantity_available",
            header: "Quantity",
        },
        {
            accessorKey: "is_active",
            header: "Active",
            cell: ({ row }) => {
                const isActive = row.getValue("is_active")

                return (
                    <div className="flex items-center">
                        <span
                            className={`h-2 w-2 rounded-full mr-2 ${isActive ? "bg-green-500" : "bg-gray-400"
                                }`}
                        />
                        {isActive ? "Yes" : "No"}
                    </div>
                )
            }
        },
        {
            accessorKey: "creation_date",
            header: "Created",
            cell: ({ row }) => {
                const date = new Date(row.getValue("creation_date"))
                const formatted = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })
                return <div className="font-medium">{formatted}</div>

            }
        },
        {
            id: "actions",
            cell: ({ row }) => {

                return (
                    <div className="flex items-center gap-2">
                        <EditProductPopUp productId={row.getValue('_id')} defaultValues={{
                            product_name: row.getValue('product_name'),
                            description: row.getValue('description'),
                            category: '',
                            is_active: row.getValue('is_active'),
                            price: row.getValue('price'),
                            quantity_available: row.getValue('quantity_available'),

                        }} />
                        <DeleteProduct productId={row.getValue('_id')} />
                    </div>
                )
            }
        }
    ]
    return (
        <DataTable columns={cols} data={productsData?.data} />
    )
}

const EditProductPopUp = ({ productId, defaultValues }: { productId: string, defaultValues: z.infer<typeof productFormSchema> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient()
    const { auth } = useAuth()
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { isPending, mutate } = useMutation({
        mutationFn: (data: Record<string, string | string[] | number | boolean>) => {
            return updateProductById(data, auth)
        },
        onSettled(res) {
            if (!res?.error) {
                queryClient.invalidateQueries({ queryKey: ['STORE_PRODUCTS', slug] })
                setIsOpen(false)
            }
        }
    })
    return (<Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Pencil className='cursor-pointer w-4 h-4' />
        </DialogTrigger>
        <DialogContent className="min-w-screen h-fit">
            <ScrollArea className="h-screen w-full">
                <DialogHeader>
                    <DialogTitle>Create a product</DialogTitle>
                    <DialogDescription>
                        Provide details on your product.
                    </DialogDescription>
                </DialogHeader>
                <ProductForm setIsDialogOpen={setIsOpen} btnText='Edit' defaultValues={defaultValues}
                    onEdit={(data) => mutate({
                        ...data,
                        id: productId,

                    })}
                    isLoading={isPending}
                />
            </ScrollArea>
        </DialogContent>
    </Dialog>)
}

const DeleteProduct = ({ productId }: { productId: string }) => {

    const queryClient = useQueryClient()
    const { auth } = useAuth()
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { mutate } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return deleteProductById(data, auth)
        },
        onSettled(res) {
            if (!res?.error) {
                queryClient.invalidateQueries({ queryKey: ['STORE_PRODUCTS', slug] })
            }
        }
    })
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <LucideTrash className='cursor-pointer w-4 h-4' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        product and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-900 text-white hover:bg-red-700' onClick={() => mutate({ id: productId })}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}