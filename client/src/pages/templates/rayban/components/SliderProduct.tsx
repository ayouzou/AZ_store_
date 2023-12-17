



import { getLatestProductsByStoreSlug } from '../api/getLatestProductsBySlug';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const SliderProduct = () => {
  const { storeSlug } = useParams()
  const { data: productsData, isLoading, isError } = useQuery({ queryKey: ['LATEST_STORE_PRODUCTS', storeSlug], queryFn: () => getLatestProductsByStoreSlug(storeSlug as string) })

  return (
    <>
      <h1 className='text-3xl font-serif  text-center text-black  bg-gradient-to-r from-neutral-50 to-neutral-300'>Recent Arrivals</h1>
      <div className="sm:px-24 px-10 py-10 bg-gradient-to-r from-neutral-50 to-neutral-300 w-full" >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          {
            productsData?.data &&
            productsData?.data.slice(0, 3).map((item, index) => (
              <div key={index} className="col-3 m-5">
                <Link to={item.slug}>
                  <img
                    src={item?.images[0]}
                    alt={`Product ${index + 1}`}
                    className="w-full h-96 group-hover:scale-110 transition duration-300 cursor-pointer shadow-2xl hover:opacity-80"
                  />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default SliderProduct