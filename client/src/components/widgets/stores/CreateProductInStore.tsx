import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import ListBox from '../../ui/ListBox'
import Input from '../../ui/form-elements/Input'
import Button from '../../ui/form-elements/Button'
import Progress from '../../ui/Progress'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import FileUploader from '../../ui/form-elements/FileUploader'

const CreateProductInStore = ({ open, setOpen }: {

    open: boolean,
    setOpen: (open: boolean) => void,
    cancel?: string,
}) => {
    const handleAction = () => {

        setOpen(false)
    }
    const [isLoading, setIsLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm()
    const options = [
        { name: "Option 1" },
        { name: "Option 2" },
        { name: "Option 3" },
    ];
    const options1 = [
        { name: "In Stock" },
        { name: "Out of Stock" },
        { name: "Limited Supply" },
    ];
    const onSubmit = (data: any) => {
        setIsLoading(true);
        console.log(data)
        setTimeout(() => {
            toast.success('Store created successfully', {
                duration: 2000
            });
            setIsLoading(false);
        }, 2000)
    }
    return (
        <div className=''>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-5xl h-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 b"
                                    >
                                        <div className="flex items-center "> <ExclamationCircleIcon className="h-7 w-7 mr-2 bg-red-200 rounded-2xl  text-white" /><div >Create Product</div></div>
                                    </Dialog.Title>
                                    <div className="flex">
                                        <div className="flex flex-col md:flex-row w-full p-5 bg-white rounded-lg shadow-md">
                                            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2">
                                                <div className="w-full">
                                                    <div className="flex items-center flex-nowrap md:space-x-3 mb-5">
                                                        <ListBox
                                                            options={options}
                                                            selected={selectedOption}
                                                            setSelected={setSelectedOption}
                                                            name="Option"
                                                            id="option"
                                                            placeholder="Store AZ"
                                                            label="Select Store"
                                                            errors={errors}
                                                            validation={{ required: true }}
                                                            className="w-full md:w-1/2"
                                                        />
                                                        <ListBox
                                                            options={options}
                                                            selected={selectedOption}
                                                            setSelected={setSelectedOption}
                                                            name="Category"
                                                            id="Category"
                                                            placeholder="Category"
                                                            label="Select an Category"
                                                            errors={errors}
                                                            validation={{ required: true }}
                                                            className="w-full md:w-1/2"
                                                        />
                                                        <ListBox
                                                            options={options1}
                                                            selected={selectedOption}
                                                            setSelected={setSelectedOption}
                                                            name="availability_status"
                                                            id="availability_status"
                                                            placeholder="In stock"
                                                            label="availability_status"
                                                            errors={errors}
                                                            validation={{ required: true }}
                                                            className="w-full md:w-1/2"
                                                        />
                                                    </div>
                                                    <Input
                                                        id="Pname"
                                                        name="name"
                                                        label="Product name"
                                                        placeholder="Iphone."
                                                        register={register}
                                                        errors={errors}
                                                        validation={{ required: true }}
                                                    />
                                                    <div className="flex items-center flex-nowrap md:space-x-3 mb-6">
                                                        <div className="w-full md:w-1/2">
                                                            <Input
                                                                id="Price"
                                                                name="name"
                                                                label="Price"
                                                                placeholder="50$"
                                                                register={register}
                                                                errors={errors}
                                                                validation={{ required: true }}
                                                            />
                                                        </div>
                                                        <div className="w-full md:w-1/2">
                                                            <Input
                                                                id="Quantity"
                                                                name="name"
                                                                label="Quantity"
                                                                placeholder="1000."
                                                                register={register}
                                                                errors={errors}
                                                                validation={{ required: true }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                                        Product Status Active from now?
                                                    </label>
                                                    <div className="flex justify-around mt-2 space-x-4 mb-6">
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" name="isActive" className="text-amber-600" />
                                                            <span className="ml-2">Active</span>
                                                        </label>
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" name="isActive" className="text-amber-600" />
                                                            <span className="ml-2">No-Active</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <Button type="submit" isLoading={isLoading}>Create</Button>
                                            </form>
                                            <div className="mt-14 ml-5 w-full md:w-1/2">
                                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Product Description</label>
                                                <textarea id="description" name="description" className="h-44  p-2 w-full border rounded-md" />
                                                <div className="border-dashed border-2 border-gray-300 p-6 rounded-md">
                                                    <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Images (Drag and Drop)
                                                    </label>
                                                    <FileUploader />
                                                    <p className="text-gray-400 text-sm">Drag and drop images here</p>
                                                </div>
                                            </div>
                                            {isLoading && <Progress />}

                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 justify-end">
                                        <button
                                            type="button"
                                            className="text-white inline-flex justify-center rounded-md border border-transparent bg-slate-500 px-4 mr-4 py-2 text-sm font-medium  hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            CANCEL
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default CreateProductInStore