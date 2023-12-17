import { useForm } from 'react-hook-form';
import Input from '../../ui/form-elements/Input';
import Button from '../../ui/form-elements/Button';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Progress from '../../ui/Progress';
import ListBox from '../../ui/ListBox';

const CreateProduct = ({ onClose }: { onClose: () => void }) => {
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
        <div className="flex flex-col md:flex-row w-full p-5 h-[80vh] bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold mb-6 text-center">Create product</h1>
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
                    <input type="file" id="images" name="images" accept="image/*" multiple className="hidden" />
                    <p className="text-gray-400 text-sm">Drag and drop images here</p>
                </div>
                <button onClick={onClose} className='p-3 rounded-md text-white m-2 bg-slate-500'>Close</button>
            </div>
            {isLoading && <Progress />}
        </div>
    )
}
export default CreateProduct