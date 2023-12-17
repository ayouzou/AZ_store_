import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import {
    useQuery,
    useMutation,
} from '@tanstack/react-query'
import { deleteReview } from '../api/deletereview'
import useAuth from '../../../../hooks/auth/useAuth'
import toast from 'react-hot-toast'
import { Rating } from 'flowbite-react'
import useCustomer from '../../../../hooks/auth/useCustomer'
import { useParams } from 'react-router-dom'
interface data {
    comments: string,
}
const UserComment = ({ data, refetchProducts }: data) => {
    const {storeSlug} =useParams()
    const {customer} =useCustomer(storeSlug as string)
    const auth = useAuth()
    const { isPending: isDeleting, mutate: deleteReviewMutation } = useMutation({
        mutationFn: (data: Record<string, string>) => {


            return deleteReview(data, customer)
        },
        onSettled(res) {
            if (res?.error) {
                return toast.error('Error while deleting review')
            }
            toast.success('review deleted successfully')
        }
    })
    const formatDate = (mongooseDate) => {
        const date = new Date(mongooseDate);
        return date.toLocaleString(); // Adjust the format as per your requirements
      };
    return (
        <>
            {
                data && data?.review.map((item, index) => {
                    return (

                        <>
                            <div className='border-l-8 border-black mb-4'>
                                <strong className="text-black font-serif">-date:{formatDate(item.created_at)}</strong>
                                <div key={index} className=" flex  items-center justify-between mb-2 p-4">
                                    <div className="flex  items-center  w-full  ">
                                        {/* <img src={item.images} className="h-10 w-10 rounded-[50%]" alt="" /> */}
                                        <p className='font-serif  text-xl sm:ml-5 flex sm:gap-1'><span className='text-indigo-800 font-serif'>comment:</span>{item.comment}</p>
                                    </div>
                                    <div className="sm:flex">
                                        <button >
                                            <TrashIcon className="h-6 w-6 mr-2 hover:text-gray-500" onClick={() => deleteReviewMutation({ id: item._id })} />
                                        </button>
                                    </div>
                                </div>
                                <div className='flex w-32 h-22 text-yellow-200'>
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                </div>
                            </div>

                        </>
                    )
                })
            }



        </>
    )
}
export default UserComment