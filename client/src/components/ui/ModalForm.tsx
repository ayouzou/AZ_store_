import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Input from './form-elements/Input'
import { useForm } from 'react-hook-form'
import SelectInput from './form-elements/SelectInput'
import FileUploader from './form-elements/FileUploader'
import TextArea from './form-elements/TextArea'
import Button from './form-elements/Button'
import Radio from './form-elements/Radio'




type FormField = {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    items?: { name: string }[];
    value?: string;
};
const ModalForm = ({ title, isLoading, open, inputs, setOpen, onSubmit, setUploadedFilesSrc }: {
    title: string,
    isLoading?: boolean,
    inputs: FormField[]
    open: boolean,
    setOpen: (open: boolean) => void,
    onSubmit: (data: Record<string, any>) => void,
    setUploadedFilesSrc?: React.Dispatch<React.SetStateAction<string[]>>

}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Record<string, any>>()
    return (
        <div>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        <div className="flex items-center ">{title}</div>
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                        {inputs.map((input) => {
                                            if (input.type === 'select') return (
                                                        <SelectInput
                                                            key={input.label}
                                                            label={input.label}
                                                            name={input.name}
                                                            items={input.items!}
                                                            placeholder={input.placeholder} />
                                            )
                                            if (input.type === 'file') return <FileUploader key={input.label} id={input.name} name={input.name} setUploadedFilesSrc={setUploadedFilesSrc} />
                                            if (input.type === 'radio') return <Radio key={input.label} id={input.name} name={input.name} label={input.label} placeholder={input.placeholder} register={register} validation={{ required: true, }} value={input.value} />
                                            if (input.type === 'textarea') return <TextArea id={input.name} key={input.label} name={input.name} label={input.label} placeholder={input.placeholder} register={register} validation={{ required: true, }} />
                                            return (
                                                <Input type={input.type} id={input.name} key={input.label} name={input.name} label={input.label} placeholder={input.placeholder} register={register} validation={{ required: true, }} />
                                            )
                                        })}
                                        <div className="flex items-center justify-end">
                                            <button type="button" className="text-white inline-flex justify-center rounded-md border border-transparent bg-slate-500 px-4 mr-4 py-2 text-sm font-medium  hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setOpen(false)} >
                                                Cancel
                                            </button>
                                            <Button isLoading={isLoading} type="submit" className="bg-blue-600 inline-flex justify-center rounded-md border border-transparent text-white px-4 py-2   text-sm font-medium  hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >   Confirm</Button >
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

export default ModalForm