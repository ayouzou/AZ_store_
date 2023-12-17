import { Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SliderHero = () => {
    return (
        <>
        <div className="bg-[url('https://img.freepik.com/photos-premium/abstrait-fond-gris-vide_1258-1855.jpg')] bg-no-repeat bg-cover">
            <div className='px-14 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-12 ">
                      
                        <div className='md:w-1/2 bg-black'>
                            <h1 className='text-5xl font-semibold mb-4 text-gray-600 md:w-3/4'>Fashion and 
                                <span className='text-green-400 leading-snug'>Clothes</span>
                            </h1>
                            <p className='text-gray-500 text-base mb-8'>The most popular brands with the most reasonable prices </p>
                            <button type="button" className="text-white  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                Shop Now
                            </button>
                        </div>
                        <div>
                            <img src="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Ffashion-category.webp&w=256&q=75" alt="" />
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around  gap-12 ">
                        <div>
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ecommerce-4085874-3379671.png" alt="" />
                        </div>
                        <div className='md:w-1/2 bg-black'>
                            <h1 className='text-5xl font-semibold mb-4 text-gray-600 md:w-3/4'>Lessons and insights
                                <span className='text-green-400 leading-snug'>from 8 years</span>
                            </h1>
                            <p className='text-gray-500 text-base mb-8'>where to grow your business as a photographer:site or social media ? </p>
                            <button type="button" className="text-white  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around  gap-12 ">
                        <div>
                            <img src="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fhouse-category.webp&w=384&q=75" alt="" />
                        </div>
                        <div className='md:w-1/2 bg-black'>
                            <h1 className='text-5xl font-semibold mb-4 text-gray-600 md:w-3/4'>Lessons and insights
                                <span className='text-green-400 leading-snug'>from 8 years</span>
                            </h1>
                            <p className='text-gray-500 text-base mb-8'>where to grow your business as a photographer:site or social media ? </p>
                            <button type="button" className="text-white  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>

    </>
    )
}

export default SliderHero