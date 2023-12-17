import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import Modal from "../../../components/ui/Modal"
import { useState } from "react"
import useAuth from "../../../hooks/auth/useAuth"
import Layout from "../../../components/layouts/Layout"
import Table from "../../../components/ui/Table"
import { getStoreProducts } from "../../../components/widgets/stores/api/getStoreProducts"
import { Link, useParams } from "react-router-dom"
import { deleteStore } from "../../../components/widgets/stores/api/deleteStore"
import { getStoreInfoById } from "../../../components/widgets/stores/api/getStoreInfoById"
import { getStoreOrders } from "../../../components/widgets/stores/api/getStoreOrders"
import ModalForm from "../../../components/ui/ModalForm"
import { useQuery, useMutation } from '@tanstack/react-query'
import ProductsTable from "../../../components/widgets/products/ProductsTable"
import toast from "react-hot-toast"
import { updateStore } from "../../../components/widgets/stores/api/updateStore"

const inputs = [
    {
        label: 'Store Name',
        name: 'name',
        placeholder: 'Store Name',
        type: 'text',
    },
    {
        label: 'Description',
        name: 'description',
        placeholder: 'Description',
        type: 'textarea',
    },


]
interface Props {
    isLoading: boolean
    headings: Record<string, string> | undefined
    data: Record<string, any>[] | null
    actions?: Action[]
    revalidate: () => void
}

const Store = () => {
    const { isLoading, data: storeInfoData, refetch, } = useQuery({ queryKey: ['STORE_INFO'], queryFn: () => getStoreInfoById({ storeId }, auth) })
    const { data: productsData, refetch: refetchProducts } = useQuery({ queryKey: ['STORE_PRODUCTS'], queryFn: () => getStoreProducts({ storeId }, auth) })
    const { data: storeOrdersData } = useQuery({ queryKey: ['STORE_ORDERS'], queryFn: () => getStoreOrders({ storeId }, auth) })
    const { storeId } = useParams()
    const [openUpdate, setOpenUpdate] = useState(false)
    const { auth } = useAuth()
    const [selectedValue, setSelectedValue] = useState('Products');

    const [isDeleteModalOpen, setIsDeletetModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const { isPending: isDeleting, mutate: deleteStoreMutation } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return deleteStore(data, auth)
        },
        onSettled(res) {
            if (res?.error) {
                return toast.error('Error while deleting store')
            }
            toast.success('Store deleted successfully')
            history.go(-1)
        }
    })
    const { isPending: isUpdating, mutate: updateStoreMutation } = useMutation({
        mutationFn: (data: Record<string, string>) => {
            return updateStore(data, auth)
        },
        async onSettled(res) {
            if (res?.error) {
                return toast.error('Error while updating store')
            }
            toast.success('Store updated successfully')
            setIsUpdateModalOpen(false)
            await refetch()
        }
    })
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const actions: Action[] = [
        {
            title: 'Edit',
            icon: <PencilIcon className="h-5 w-5 text-blue-500" />,
            action: (id: string) => {
                // setSelectedProduct(id)
                // setIsEditModalOpen(true)
            }
        },
        {
            title: 'Delete',
            icon: <TrashIcon className="h-5 w-5 text-red-500" />,
            action: (id: string) => {
                // setSelectedProduct(id)
                // setIsDeleteModalOpen(true)
            }
        },
        {
            title: 'View',
            icon: <PencilIcon className="h-5 w-5 text-blue-500" />,
            action: (id: string) => {
                // setSelectedProduct(id)
                // setIsEditModalOpen(true)
            }
        }
    ]

    return (
        <Layout>
            <div className=" pt-24 bg-zinc-900/90 h-52 m-5 rounded-xl ">
                <div className=" bg-white shadow-xl rounded-xl shadow-slate-400  m-5 h-auto ">
                    <div className="flex items-center justify-between p-1  ">
                        <div className="flex gap-5">
                            <img src={storeInfoData ? storeInfoData.storeInfo?.store.logo : ""} className="h-28 w-28 object-fill p-3" />
                            <div className="mt-3">
                                <p className='text-black font-bold text-xl'>{storeInfoData ? storeInfoData.storeInfo?.store.name : ""}</p>
                                <h1 className="text-black font-semibold text-lg mt-2">CEO / Co-Founder</h1>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 bg-slate-200 p-1 shadow-lg rounded-lg ">
                            <button className="flex items-center bg-white p-2 rounded-xl text-xl font-medium hover:-translate-y-1 hover:scale-60 hover:bg-indigo-200 duration-500" onClick={() => setIsUpdateModalOpen(!openUpdate)}><PencilIcon className="h-6 w-6 text-indigo-900 mr-3 " />Edit</button>
                            <button className="flex items-center bg-white p-2 rounded-xl text-xl font-medium hover:-translate-y-1 hover:scale-60 hover:bg-indigo-200 duration-500" onClick={() => setIsDeletetModalOpen(!isDeleteModalOpen)}><TrashIcon className="h-6 w-6 text-red-900 mr-3 " />Delete</button>
                            <Link className="flex items-center bg-white p-2 rounded-xl text-xl font-medium hover:-translate-y-1 hover:scale-60 hover:bg-indigo-200 duration-500" to={`/homeRayban/rayban?storeId=${storeId}`} ><EyeIcon className="h-6 w-6 text-orange-600 mr-3 " />Visite</Link>
                        </div>
                    </div>
                    <div className="m-5 p-5 flex justify-between items-center">
                        <div className="">
                            <h1 className="text-black font-bold text-lg ">Store  Information</h1>
                            <div className='flex w-full items-center gap-5 mt-4'>
                                <p className='text-gray-600'>Description :</p>
                                <p className='text-blue-500'>{storeInfoData ? storeInfoData.storeInfo?.store.description : ""}</p>
                            </div>
                            <div className='flex w-full items-center gap-5 mt-4'>
                                <p className='text-gray-600'>Template :</p>
                                <p className='text-blue-500'>{storeInfoData ? storeInfoData.storeInfo?.store.template : ""}</p>
                            </div>
                            <h1 className="text-black font-bold text-lg ">Your  Information</h1>
                            <div className='flex w-full items-center gap-5 mt-4'>
                                <p className='text-gray-600'>E-mail :</p>
                                <p className='text-blue-500'>{auth ? auth.user?.email : ""}</p>
                            </div>
                            <div className='flex w-full items-center gap-5 mt-4'>
                                <p className='text-gray-600'>Username :</p>
                                <p className='text-blue-500'>{auth ? auth.user?.username : ""}</p>
                            </div>
                            <div className='flex w-full items-center gap-5 mt-4'>
                                <p className='text-gray-600'>Telephone:</p>
                                <p className='text-blue-500'>+212-645503428</p>
                            </div>
                        </div>
                        <div className="gap-5 mt-4 ">
                            <div className='flex w-full items-center  gap-5 mt-4 '>
                                <h1 className='text-xl font-bold'>Active :</h1>
                                <div>
                                    <input
                                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-between gap-5 mt-4 '>
                                <p className='text-gray-600'>Last Update :</p>
                                <p className='text-blue-500'> {storeInfoData ? storeInfoData.storeInfo?.store.updated_at : ""}</p>
                            </div>
                            <div className='flex w-full items-center gap-5 mt-4 '>
                                <p className='text-gray-600'> Created at :</p>
                                <p className='text-blue-500'> {storeInfoData ? storeInfoData.storeInfo?.store.created_at : ""}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-indigo-100 shadow-xl m-5 p-5 rounded-md">
                    <div className="ml-16"><p className="text-center font-bold text-xl m-10">Display and manage your Product on your store</p></div>
                    <div className="ml-5 mb-5  flex">
                        <label className="font-bold text-lg">Select an option :</label>
                        <select value={selectedValue} onChange={handleSelectChange} className="w-28 border text-xl text-black font-normal">
                            <option value="Products">Products</option>
                            <option value="Orders">Orders</option>
                        </select>
                    </div>
                    {selectedValue === 'Products' && productsData && <ProductsTable isLoading={isLoading} revalidate={refetchProducts} headings={productsData.headings} data={productsData.products} />}
                    {selectedValue === 'Orders' && storeOrdersData && <Table isLoading={isLoading} headings={storeOrdersData.headings} data={storeOrdersData.storeOrders} actions={actions} />}
                </div>
            </div>

            <Modal open={isDeleteModalOpen} setOpen={setIsDeletetModalOpen} title="Delete Store" description="Are you sure you want to delete this store ?" isLoading={isDeleting} action={() => deleteStoreMutation({ id: storeId as string })} />
            <ModalForm title="Update Store" open={isUpdateModalOpen} setOpen={setIsUpdateModalOpen} inputs={inputs} onSubmit={(data: Record<string, string>) => updateStoreMutation({ id: storeId as string, ...data })} isLoading={isUpdating} />













            {/* <div className='flex h-auto w-full flex-col gap-4 rounded bg-neutral-900 p-14 '>
                <Modal open={isDeleteModalOpen} setOpen={setIsDeletetModalOpen} title="Delete Store" description="Are you sure you want to delete this store ?" isLoading={isDeleting} action={() => deleteStoreMutation({ id: storeId as string })} />
                <ModalForm title="Update Store" open={isUpdateModalOpen} setOpen={setIsUpdateModalOpen} inputs={inputs} onSubmit={(data: Record<string, string>) => updateStoreMutation({ id: storeId as string, ...data })} isLoading={isUpdating} />
                <div className='flex w-full '>
                    <div className="w-full flex justify-end">
                        <button onClick={() => setIsUpdateModalOpen(!openUpdate)}><PencilIcon className="h-6 w-6 text-gray-500 mr-3" /></button>
                        <button onClick={() => setIsDeletetModalOpen(!isDeleteModalOpen)}><TrashIcon className="h-6 w-6 text-gray-500 mr-3" /></button>
                        <Link to={`/homeRayban/rayban?storeId=${storeId}`} ><EyeIcon className="h-6 w-6 text-gray-500" /></Link>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-2 flex flex-col items-center justify-center gap-4 rounded border border-gray-300 p-4'>
                        <p className='text-blue-500'>{storeInfoData ? storeInfoData.storeInfo?.store.name : ""}</p>
                        <img src={storeInfoData ? storeInfoData.storeInfo?.store.logo : ""} />
                    </div>
                    <div className='col-span-5 flex flex-col items-center gap-4 rounded border border-gray-300 p-4'>
                        <div className='flex w-full items-center justify-between'>
                            <p className='text-gray-600'>Description</p>
                            <p className='text-blue-500'>{storeInfoData ? storeInfoData.storeInfo?.store.description : ""}</p>
                        </div>
                        <div className='flex w-full items-center justify-between'>
                            <p className='text-gray-600'> created_at</p>
                            <p className='text-blue-500'> {storeInfoData ? storeInfoData.storeInfo?.store.created_at : ""}</p>
                        </div>
                    </div>
                    <div className='col-span-5 flex flex-col items-center  gap-4 rounded border border-gray-300 p-4'>
                        <div className='flex w-full items-center justify-between'>
                            <p className='text-gray-600'>Disponibilité</p>
                            <p className='text-blue-500'> {storeInfoData ? storeInfoData.storeInfo?.store.isActive : ""}</p>
                        </div>
                        <div className='flex w-full items-center justify-between'>
                            <p className='text-gray-600'>Last_Update</p>
                            <p className='text-blue-500'> {storeInfoData ? storeInfoData.storeInfo?.store.updated_at : ""}</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="ml-16"><p className="text-center mb-4">Display and manage your Product on your store</p></div>
            <div className="ml-10 mb-5 ">
                <label className="block">Select an option:</label>
                <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="Products">Products</option>
                    <option value="Orders">Orders</option>
                </select>

            </div> */}
            {/* {selectedValue === 'Products' && productsData && <ProductsTable isLoading={isLoading} revalidate={refetchProducts} headings={productsData.headings} data={productsData.products} />}
            {selectedValue === 'Orders' && storeOrdersData && <Table isLoading={isLoading} headings={storeOrdersData.headings} data={storeOrdersData.storeOrders}  actions={actions}/>}
            <Modal open={isDeleteModalOpen} setOpen={setIsDeleteModalOpen} title="Delete product" description='Are you sure you want to delete this product?'  isLoading={isDeleting} /> */}

        </Layout>
    )
}
export default Store