import { useState } from 'react';
import Button from '../../ui/form-elements/Button';
import Input from '../../ui/form-elements/Input';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Progress from '../../ui/Progress';
import useAuth from '../../../hooks/auth/useAuth';
import { createStore } from './api/createStore';

type Inputs = {
  name: string
  description: string

}
const CreateStore = ({ action }: {
  action: () => void,
}) => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Inputs>()
  const [isLoading, setIsLoading] = useState(false)
  const { auth } = useAuth()

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    console.log(data)
    const { error } = await createStore(data, auth)
    if (error) {
      toast.error(error)
      setIsLoading(false)
    } else {
      toast.success('Store created successfully')
      setIsLoading(false)
      action()
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-auto w-4/12 mx-auto bg-white p-4   rounded-3xl shadow-2xl mb-4  items-center">
        <div className="mx-auto w-96">
          <div className=" w-80 mx-auto   ">
            <Input
              id='Store'
              name='name'
              label='Store name'
              placeholder='AZ'
              register={register}
              errors={errors}
              validation={{ required: true }}
            />
          </div>
          <div className=" w-80 mx-auto  ">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("description", { required: true })}
            />
            {errors.description && <span className="text-red-500">The description field is required</span>}
          </div>

          <div className='w-52 mx-auto '>
            <Button type='submit' isLoading={isLoading}>Create</Button>
          </div>
        </div>
      </form>

      {/* progress modal */}
      {isLoading && (
        <Progress />
      )}

    </>
  )
}

export default CreateStore