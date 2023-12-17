import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Button from './form-elements/Button'
const Modal = ({ open, setOpen, title, description, action, isLoading }: {
    open: boolean,
    setOpen: (open: boolean) => void,
    title: string,
    description: string,
    action?: () => void,
    isLoading?: boolean
}) => {
    const handleAction = () => {
        action()
    }
    return (
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    <div className="flex items-center "> <ExclamationCircleIcon className="h-7 w-7 mr-2 bg-red-200 rounded-2xl  text-white" /><div >{title}</div></div>
                                </Dialog.Title>
                                <div className="mt-2 ml-9">
                                    <p className="text-sm text-gray-500">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex items-center mt-7 justify-end">

                                    <button
                                        type="button"
                                        className="text-white inline-flex justify-center rounded-md border border-transparent bg-slate-500 px-4 mr-4 py-2 text-sm font-medium  hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <Button
                                        type="button"
                                        className="bg-red-600 inline-flex justify-center rounded-md border border-transparent text-white px-4 py-2   text-sm font-medium  hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => handleAction()}
                                        isLoading={isLoading}
                                    >
                                        Confirm
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
export default Modal;