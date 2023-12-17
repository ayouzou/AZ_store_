import {Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode ,Pagination} from 'swiper/modules' 
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'
import { getLatestProductsByStoreSlug } from '../../pages/templates/rayban/api/getLatestProductsBySlug'
import useAuth from '../../hooks/auth/useAuth'
import { useParams } from 'react-router-dom'
import SkeletonLoader from '../../pages/templates/rayban/components/SkeletonLoader'




const CarouselProducts = () => {
    const { auth } = useAuth()
    const { storeSlug } = useParams()
    const { data: productsData, isLoading, isError } = useQuery({ queryKey: ['LATEST_STORE_PRODUCTS', storeSlug], queryFn: () => getLatestProductsByStoreSlug(storeSlug as string, auth) })
        console.log("emm",isError)
        console.log("emm",productsData)

  return (
    <div className='flex items-center justify-center flex-col '>
             <h2 className='my-4 md:my-8 lg:mt-10 mx-auto text-3xl font-serif'>Latest Products</h2>
        <Swiper
            breakpoints={{
                340:{
                    slidesPerView:2,
                    spaceBetween:15,
                },
                700:{
                    slidesPerView:3,
                    spaceBetween:15
                }
            }}
            freeMode={true}
            pagination={{
                clickable:true
            }}
            modules={[FreeMode,Pagination]}
            className='max-w-[90%] lg:max-w-[80%] bg-slate-500'
        >   
         {
              
              productsData?.data && productsData?.data?.map((item,index)=>(
                    <SwiperSlide key={index}>
                            <div className="flex flex-col mb-20 group relative shadow-lg text-black bg-black rounded-xl px-6 py-8 h-[250px] lg:h-[350px]  sm:w-[215px] lg:w-[350px]  overflow-hidden cursor-pointer">
                                {/* <div className="absolute inset-0 bg-contain bg-no-repeat bg-center w-44 sm:w-full " style={{backgroundImage:`url(${item?.images})`}}>
                                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70">
                                        <div className="relative flex flex-col gap-7 p-5 ">
                                                <h1 className='text-xl lg:text-2xl'>{item.product_name}</h1>
                                                <p className='lg:text-[18px] '>{item.description}.</p>
                                        </div>
                                        <ArrowRightIcon className="absolute  bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                                    </div>
                                </div> */}

                                <div className='absolute inset-0 bg-contain bg-no-repeat bg-center w-44 sm:w-full ' style={{backgroundImage:`url(${item?.images})`}}>
                                    hello
                                </div>
                            </div>
                    </SwiperSlide>
                ))
            }
          
        </Swiper>
    </div>
  )
}

export default CarouselProducts