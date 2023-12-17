import { DataTable } from '@/components/ui/data-table'
import { EyeIcon } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import useAuth from '@/hooks/auth/useAuth'
import { useParams } from '@tanstack/react-router'
import { getStoreBySlug } from '../stores/api/getStoreBySlug'
import { getCustomersByStoreSlug } from '../stores/api/getCustomersByStoreSlug'

type Customer = {
    _id: string;
    email: string;
    storeSlugs: string[];
    username: string;
    password: string;
    active: boolean;
    creation_date: string;
    last_login: string;
    last_update: string;
};

type Customers = Customer[];
export default function CustomersTable() {
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { auth } = useAuth()
    const { isLoading, data: customers } = useQuery({ queryKey: ['STORE_CUSTOMERS', slug], queryFn: () => getCustomersByStoreSlug(slug, auth) })

    const cols: ColumnDef<Customers>[] = [
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "username",
            header: "Username",
        },
        {
            accessorKey: "active",
            header: "Active Status",
            cell: ({ row }) => {
                const isActive = row.getValue("active")

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
            header: "Creation Date",
            cell: ({ row }) => {
                const date = row.getValue("creation_date")
                const formatted = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                }).format(new Date(date as string))

                return <div className="font-medium">{formatted}</div>
            }
        },
        {
            accessorKey: "last_login",
            header: "Last Login",
            cell: ({ row }) => {
                const date = row.getValue("creation_date")
                const formatted = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                }).format(new Date(date as string))

                return <div className="font-medium">{formatted}</div>
            }
        },
        {
            accessorKey: "last_update",
            header: "Last Update",
            cell: ({ row }) => {
                const date = row.getValue("creation_date")
                const formatted = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                }).format(new Date(date as string))

                return <div className="font-medium">{formatted}</div>
            }
        },
        {
            id: "actions",
            cell: () => {
                return (
                    <EyeIcon className='h-4 w-4 cursor-pointer' />
                );
            },
        },
    ];

    if (isLoading) return <div>Loading...</div>
    if (!customers?.data) return <div>No customers found</div>
    return (
        <DataTable columns={cols} data={customers?.data} />
    )
}
