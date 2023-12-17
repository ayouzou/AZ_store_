import React from 'react'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/form-elements/button'
import { Copy, EyeIcon } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { editOrderStatus } from './api/editOrderStatus'
import useAuth from '@/hooks/auth/useAuth'
import { useParams } from '@tanstack/react-router'
import { getStoreBySlug } from '../stores/api/getStoreBySlug'
import { getOrdersByStoreId } from './api/getOrdersByStoreId'

type UserInformation = {
    first_name: string;
    last_name: string;
    customer_id: string;
    email: string;
    tele: string;
    address: string;
};

type Product = {
    product_id: string;
    product_name: string;
    price: number;
    quantity: number;
};

type Order = {
    _id: string;
    user_info: UserInformation;
    products: Product[];
    store_id: string;
    status: "PENDING" | "CONFIRMED" | "DELIVERING" | "DELIVERED";
};
export default function OrdersTable() {
    const { slug } = useParams({
        from: '/store/$slug'
    })

    const { auth } = useAuth()
    const { data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', slug], queryFn: () => getStoreBySlug({ slug }, auth) })

    const { isLoading, data: orders } = useQuery({ queryKey: ['STORE_ORDERS', slug], queryFn: () => getOrdersByStoreId({ storeId: storeInfoData?.storeInfo?.store?._id as string }, auth) })

    const cols: ColumnDef<Order>[] = [
        {
            accessorKey: "user_info.email",
            header: "Email",
        },
        {
            accessorKey: "user_info.tele",
            header: "Telephone",
        },
        {
            accessorKey: "user_info.address",
            header: "Address",
        },
        {
            accessorKey: "products",
            header: "Products",
            cell: ({ row }) => {
                const products: Product[] = row.getValue("products");
                return (
                    <div>
                        <OrderProductsDetailsDialog products={products} />
                    </div>
                );
            },
        },
        {
            accessorKey: "store_id",
            header: "Store ID",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const order = row.original;
                console.log('first', order)
                return (
                    <ViewOrderDetailsDialog order={order} />
                );
            },
        },
    ];

    if (isLoading) return <div>Loading...</div>
    return (
        <DataTable columns={cols} data={orders?.data} />
    )
}

const OrderProductsDetailsDialog = ({ products }: { products: Product[] }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <EyeIcon className="cursor-pointer w-4 h-4" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Product Details</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    {products.map((product, index) => (
                        <div key={index}>
                            <p>Product Name: {product.product_name}</p>
                            <p>Price: {product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                        </div>
                    ))}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

const ViewOrderDetailsDialog = ({ order }: { order: Order }) => {
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const [isShown, setIsShown] = React.useState(false);
    const [orderStatus, setOrderStatus] = React.useState<string>(order.status);
    const { auth } = useAuth()
    const queryClient = useQueryClient()
    const { isPending, mutate: editStatus } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return editOrderStatus(data, auth)
        },
        onSettled(res) {
            if (!res?.error) {
                queryClient.invalidateQueries({ queryKey: ['STORE_ORDERS', slug] })
            }
        }
    })

    const handleConfirm = () => {
        editStatus({ orderId: order._id, status: orderStatus })
    }
    return (
        <Dialog open={isShown} onOpenChange={setIsShown}>
            <DialogTrigger>
                <EyeIcon className="cursor-pointer w-4 h-4" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Control the order from this panel.</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <Card>
                        <CardHeader>
                            <CardDescription>Order details:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <div className='flex flex-col gap-4'>
                                            <h2>User Information</h2>
                                            <p>Customer name: {order.user_info.first_name} {order.user_info.last_name}</p>
                                            <div className="flex items-center justify-between gap-2">
                                                <p>Email: {order.user_info.email}</p>
                                                <Button type="submit" size="sm" className="px-3" onClick={() => navigator.clipboard.writeText(order.user_info.email)}>
                                                    <span className="sr-only">Copy</span>
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between space-x-2">
                                                <p>Telephone: {order.user_info.tele}</p>
                                                <Button type="button" size="sm" className="px-3" onClick={() => navigator.clipboard.writeText(order.user_info.tele)}>
                                                    <span className="sr-only">Copy</span>
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            <p>Address: {order.user_info.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">Framework</Label>
                                        <Select value={orderStatus} onValueChange={(status) => setOrderStatus(status)}>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="PENDING">Pending</SelectItem>
                                                <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                                                <SelectItem value="DELIVERING">Delivering</SelectItem>
                                                <SelectItem value="DELIVERED">Delivered</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button onClick={() => handleConfirm()} isLoading={isPending}>Confirm</Button>
                        </CardFooter>
                    </Card>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

