import { useEffect, useState } from 'react'
import Table, { Action } from '../../ui/Table'
import { EyeIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import ModalForm from '../../ui/ModalForm'
import Modal from '../../ui/Modal'
import { useMutation } from '@tanstack/react-query'
import useAuth from '../../../hooks/auth/useAuth'
import { useParams } from 'react-router-dom'
import { createProduct } from './api/createProduct'
import toast from 'react-hot-toast'
import { deleteProductById } from './api/deleteProductById'
import { updateProductById } from './api/updateProductById'
import PaginationTable from './PaginationTable'

interface Props {
    isLoading: boolean
    headings: Record<string, string> | undefined
    data: Record<string, any>[] | null
    actions?: Action[]
    revalidate: () => void
}

export default function ProductsTable({ isLoading, data, headings, revalidate }: Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')
    const [uploadedFilesSrc, setUploadedFilesSrc] = useState<string[]>([]);
    const { auth } = useAuth()
    const { storeId } = useParams<{ storeId: string }>()
console.log(headings)
    const { isPending, mutate } = useMutation({
        mutationFn: (data: Record<string, string | string[]>) => {
            return createProduct(data, auth)
        },
        onSettled(res) {
            if (res?.error || !res?.data) toast.error(res?.error as string)
            if (res?.data) {
                toast.success('Product created successfully')
                revalidate()
                setIsCreateModalOpen(false)
            }
        }
    })
    const { isPending: isDeleting, mutate: deleteProduct } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return deleteProductById(data, auth)
        },
        onSettled(res) {
            console.log('res', res)
            if (res?.error) {
                toast.error(res?.error)
                return
            }
            toast.success('Product deleted successfully')
            revalidate()
            setIsDeleteModalOpen(false)
        }
    })

    const { isPending: isUpdating, mutate: updateProduct } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return updateProductById(data, auth)
        },
        onSettled(res) {
            console.log('res', res)
            if (res?.error) {
                toast.error('Something went wrong')
                return
            }

            toast.success('Product deleted successfully')
            revalidate()
            setIsEditModalOpen(false)
        }
    })
    const actions: Action[] = [
        {
            title: 'Edit',
            icon: <PencilIcon className="h-5 w-5 text-blue-500" />,
            action: (id: string) => {
                setSelectedProduct(id)
                setIsEditModalOpen(true)
            }
        },
        {
            title: 'Delete',
            icon: <TrashIcon className="h-5 w-5 text-red-500" />,
            action: (id: string) => {
                setSelectedProduct(id)
                setIsDeleteModalOpen(true)
            }
        },
        {
            title: 'View',
            icon: <EyeIcon className="h-5 w-5 text-blue-500" />,
            action: (id: string) => {
                setSelectedProduct(id)
                setIsEditModalOpen(true)
            }
        }
    ]
    const inputs = [
        {
            label: 'Product Name',
            name: 'product_name',
            placeholder: 'Product Name',
            type: 'text',
        },
        {
            label: 'Price',
            name: 'price',
            placeholder: 'Price',
            type: 'number',
        },
        {
            label: 'Description',
            name: 'description',
            placeholder: 'Description',
            type: 'textarea',
        },
        {
            label: 'Quantity',
            name: 'quantity_available',
            placeholder: 'Quantity',
            type: 'number',
        },
        {
            label: 'Category',
            name: 'category',
            placeholder: 'Category',
            type: 'select',
            items: [
                {
                    name: 'IT',

                },
                {
                    name: 'Home Decor',

                },
                {
                    name: 'Sports',

                },
            ]
        },
        {
            label: 'Status',
            name: 'status',
            placeholder: 'Status',
            type: 'select',
            items: [
                {
                    name: 'In Stock',

                },
                {
                    name: 'Out of Stock',

                },
                {
                    name: 'Limited Supply',

                },
            ]
        },
        {
            label: 'Images',
            placeholder: 'Images',
            name: 'images',
            type: 'file',
        }
    ]
    useEffect(() => {
        console.log('uploaded files', uploadedFilesSrc)
    }
        , [uploadedFilesSrc])
    return (
        <>
            <div className=" flex gap-2 items-center">
                <MagnifyingGlassIcon className="h-8 w-8 text-gray-500" />
                <input type="search" className='w-full outline-blue-100 p-2 rounded-xl' placeholder='Search Here...'  />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full" onClick={() => setIsCreateModalOpen(true)} >
                    New Product
                </button>
            </div>
            <Table isLoading={isLoading} headings={headings} data={data} actions={actions} />
            <div className="flex justify-center mt-4  p-5  ">
              <PaginationTable/>
            </div>
            <ModalForm
                onSubmit={(data) =>
                    mutate({
                        ...data,
                        store_id: storeId as string,
                        images: uploadedFilesSrc,
                    })
                }
                inputs={inputs}
                title="Create product"
                open={isCreateModalOpen}
                setOpen={setIsCreateModalOpen}
                setUploadedFilesSrc={setUploadedFilesSrc}
            />
            <ModalForm
                onSubmit={(data) => updateProduct({ id: selectedProduct, ...data })}
                inputs={inputs}
                title="Update product"
                isLoading={isUpdating}
                open={isEditModalOpen}
                setOpen={setIsEditModalOpen}
            />
            <Modal
                open={isDeleteModalOpen}
                setOpen={setIsDeleteModalOpen}
                title="Delete product"
                description="Are you sure you want to delete this product?"
                action={() => deleteProduct({ id: selectedProduct })}
                isLoading={isDeleting}
            />
        </>

    )
}
