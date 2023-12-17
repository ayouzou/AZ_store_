import UserComment from '../components/UserComment'
import { useForm } from 'react-hook-form'
import { getReviewsProduct } from '../api/getreviewsByProduct'
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'

const ReviewPart = ({ isLoading, onSubmit, productId }: {
  isLoading?: boolean,
  onSubmit: (data: Record<string, any>) => void,
  productId: string
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, any>>()

  const { productSlug } = useParams()

  const { data: productData } = useQuery({ queryKey: ['REVIEW_ID_PRODUCT', productSlug], queryFn: () => getReviewsProduct({ productSlug }) })

  return (
    <div className="max-w-full sm:m-10 p-4  ">
      <form onSubmit={handleSubmit(onSubmit)} className=' '>
        <div className="w-full flex gap-1 items-center ">
          <input
            type="text"
            name="comment"
            placeholder="You can write something here..."
            {...register('comment', { required: true })}
            className="w-[96%] max-w-220px h-12 p-3 rounded-lg border-1.5 border-solid border-lightgray outline-none transition duration-300 ease-in-out focus:border-gray-300 hover:border-2 hover:border-lightgray active:transform active:scale-95"

          />
          {/* {errors.comment && <span className='text-red-600 m-5'>This field is required</span>} */}

          <button className=' bg-black text-white py-3 px-8 rounded-lg'>
            Send
          </button>
        </div>

      </form>
      <div className="mb-10 mt-12 h-[70vh] overflow-y-auto">
        {productData?.review && <UserComment data={productData} />}
      </div>
    </div>
  )
}

export default ReviewPart
