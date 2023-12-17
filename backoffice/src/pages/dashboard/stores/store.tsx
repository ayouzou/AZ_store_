import { Button } from "@/components/form-elements/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker"
import { StoreCard } from "@/components/widgets/stores/store-card"
import useAuth from "@/hooks/auth/useAuth"
import ProductsTable from "@/components/widgets/products/products-table"
import OrdersTable from "@/components/widgets/orders/orders-table"
import Analytics from "@/components/sections/dashboard/analytics"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { ProductForm } from "@/components/widgets/products/forms/form"
import { getStoreBySlug } from "@/components/widgets/stores/api/getStoreBySlug"
import { useParams } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import StoreCardSkeleton from "@/components/widgets/stores/store-card-skeleton"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import CustomersTable from "@/components/widgets/customers/customers-table"
import { SessionProvider } from "@/context/auth"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layouts/layout"
import { getProductsByStoreSlug } from "@/components/widgets/products/api/getProductsByStoreSlug"
import { getCustomersByStoreSlug } from "@/components/widgets/stores/api/getCustomersByStoreSlug"
import { getOrdersByStoreId } from "@/components/widgets/orders/api/getOrdersByStoreId"

const getStoreLink = (template: 'RAYBAN' | 'XMTA', slug: string) => {
    console.log({ template, slug })
    switch (template) {
        case 'RAYBAN':
            return `${import.meta.env.VITE_RAYBAN}/${slug}`
        case 'XMTA':
            return `${import.meta.env.VITE_XMTA}/${slug}`
        default:
            return `https://store.vercel.app/${slug}`
    }
}

function StorePage_() {
    const { auth } = useAuth()
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', slug], queryFn: () => getStoreBySlug({ slug }, auth) })

    const { data: productsData, isLoading, isError } = useQuery({ queryKey: ['STORE_PRODUCTS', slug], queryFn: () => getProductsByStoreSlug(slug, auth) })

    const { data: customers } = useQuery({ queryKey: ['STORE_CUSTOMERS', slug], queryFn: () => getCustomersByStoreSlug(slug, auth) })


    const { data: orders } = useQuery({ queryKey: ['STORE_ORDERS', slug], queryFn: () => getOrdersByStoreId({ storeId: storeInfoData?.storeInfo?.store?._id as string }, auth) })
    return (
        <div className="hidden flex-col md:flex md:w-10/12">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Manage your store</h2>
                    <div className="flex items-center space-x-2">
                        <CalendarDateRangePicker />
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    {storeInfoData ? <StoreCard {...storeInfoData.storeInfo?.store} href={getStoreLink(storeInfoData?.storeInfo?.store.template as 'XMTA' | 'RAYBAN', storeInfoData?.storeInfo?.store.slug as string)} actions={['go', 'edit', 'delete']} /> :
                        <StoreCardSkeleton />}
                    <TabsList>
                        <TabsTrigger value="overview">
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="products">
                            Products
                        </TabsTrigger>
                        <TabsTrigger value="orders">
                            Orders
                        </TabsTrigger>
                        <TabsTrigger value="customers">
                            Customers
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

                            <Card className="col-span-8">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="h-[20vh]">
                                    <Card className="col-span-8">
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium">
                                                         Products
                                                    </CardTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="h-4 w-4 text-muted-foreground"
                                                    >
                                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                    </svg>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">{productsData?.data && productsData?.data?.length}</div>
                                                    <p className="text-xs text-muted-foreground">
                                                        +20.1% from last month
                                                    </p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium">
                                                        Customers
                                                    </CardTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="h-4 w-4 text-muted-foreground"
                                                    >
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                        <circle cx="9" cy="7" r="4" />
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                                    </svg>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">{customers?.data && customers?.data.length}</div>
                                                    <p className="text-xs text-muted-foreground">
                                                        +180.1% from last month
                                                    </p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="h-4 w-4 text-muted-foreground"
                                                    >
                                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                                        <path d="M2 10h20" />
                                                    </svg>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">
                                                        {orders?.data&& orders?.data?.filter(order => order.status === 'DELIVERED').length}
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">
                                                        +19% from last month
                                                    </p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium">
                                                        Active Now
                                                    </CardTitle>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="h-4 w-4 text-muted-foreground"
                                                    >
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                    </svg>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">+573</div>
                                                    <p className="text-xs text-muted-foreground">

                                                        +201 since last hour
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Card>
                                </CardContent>
                                <CardContent className="h-[60vh]">
                                    <Analytics />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="products" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-8">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Products</CardTitle>
                                        <CreateProductPopUp />
                                    </div>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ProductsTable />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="customers" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-8">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <CustomersTable />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="orders" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-8">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <OrdersTable />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default function StorePage() {

    return (<SessionProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout>
                <StorePage_ />
            </Layout>
        </ThemeProvider>
    </SessionProvider>
    )
}

const CreateProductPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Create product
            </Button>
        </DialogTrigger>
        <DialogContent className="py-2 min-w-screen h-fit">
            <ScrollArea className="h-screen w-full">
                <DialogHeader>
                    <DialogTitle>Create a product</DialogTitle>
                    <DialogDescription>
                        Provide details on your product.
                    </DialogDescription>
                </DialogHeader>
                <ProductForm setIsDialogOpen={setIsOpen} />
            </ScrollArea>
        </DialogContent>
    </Dialog>)
}
