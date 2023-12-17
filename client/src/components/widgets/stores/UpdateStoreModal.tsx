import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect } from 'react'
import Input from '../../ui/form-elements/Input'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/auth/useAuth'
import { updateStore } from './api/updateStore'

type Inputs = {
    name: string
    description: string
}
const UpdateStoreModal = ({ storeId, storeName, storeDescription, openUpdate, setOpenUpdate }: {
    storeId: string;
    storeName: string | undefined;
    storeDescription: string | undefined;
    openUpdate: boolean,
    setOpenUpdate: (openUpdate: boolean) => void,
}) => {
    const { auth } = useAuth()
    const {
        register,
        handleSubmit
    } = useForm<Inputs>()

    const onSubmit = async (data: Inputs) => {
        console.log(data)
        await updateStore({
            ...data,
            id: storeId
        }, auth)
        setOpenUpdate(false)
    }
    useEffect
    return (
        <div>
            <Transition appear show={openUpdate} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpenUpdate(false)}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        <div className="flex items-center "> <ExclamationCircleIcon className="h-7 w-7 mr-2 bg-red-200 rounded-2xl  text-white" />Update</div>
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mt-2 ml-9">
                                            <Input id='Store' name='name' label='Store Name:' placeholder='Store Name' register={register}
                                                validation={{ required: true, }}
                                                defaultValue={storeName}
                                            />
                                        </div>
                                        <div className="mt-2 ml-9">
                                            <Input id='desc' name='description' label='description :' placeholder='write here description...' register={register}
                                                validation={{ required: true, }}
                                                defaultValue={storeDescription}
                                            />
                                        </div>
                                        <div className="flex items-center mt-7 justify-end">
                                            <button type="button" className="text-white inline-flex justify-center rounded-md border border-transparent bg-slate-500 px-4 mr-4 py-2 text-sm font-medium  hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setOpenUpdate(false)} > Cancel</button>
                                            <button type="submit" className="bg-red-600 inline-flex justify-center rounded-md border border-transparent text-white px-4 py-2   text-sm font-medium  hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" >Confirm</button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default UpdateStoreModal