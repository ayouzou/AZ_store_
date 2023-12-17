import Rayban from '../../assets/Lottie/Rayban.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const Slider = () => {


    return (
        <>
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-300">
                <div className='px-14 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>
                    {/* <Carousel className='w-full mx-auto '> */}
                    <div className="py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-12 ">
                        <div className='mt-24'>
                            {/* <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ecommerce-4085874-3379671.png" className='w-[500px] ' alt="" /> */}
                            <Lottie animationData={Rayban} loop={true} className='sm:w-[500px] ' />

                            {/* <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ecommerce-4085874-3379671.png" className='w-[500px] ' alt="" /> */}
                        </div>
                        <div className='md:w-1/2 sm:mt-24'>
                            <h1 className='text-5xl font-serif mb-4 text-gray-600 md:w-3/4'> Digital
                                <span className='text-blue-950 font-bold leading-snug '>  Products</span>
                            </h1>
                            <p className='text-gray-500 text-lg mb-8 font-serif '>The most popular brands with the most reasonable prices </p>
                            <Link to={'#'} type="button" className="text-white  bg-gradient-to-br from-black to-zinc-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    {/* <div className="my-8 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around  gap-12 ">
                            <div>
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ecommerce-4085874-3379671.png" className='w-[500px]' alt="" />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='text-5xl font-semibold mb-4 text-gray-600 md:w-3/4'>Fashion and
                                    <span className='text-green-400 leading-snug'> Clothes</span>
                                </h1>
                                <p className='text-gray-500 text-base mb-8'>We offer the newest products at the most competitive prices </p>
                                <button type="button" className="text-white  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="my-8 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around  gap-12 ">
                            <div>
                                <img src="https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fhouse-category.webp&w=384&q=75" className='w-[500px]' alt="" />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='text-5xl font-serif mb-4 text-gray-600 md:w-3/4'>Chic Comfort.
                                    <span className='text-green-400 leading-snug'>Elevate</span>
                                </h1>
                                <p className='text-gray-500 text-lg mb-8 font-serif'>Upgrade Your Home, Elevate Your Lifestyle. Discover curated home essentials that redefine comfort and style. Transform your space effortlessly.</p>
                                <button type="button" className="text-white  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition-transform hover:scale-105">
                                    Shop Now
                                </button>
                            </div>
                        </div> */}
                    {/* </Carousel> */}
                </div>
            </div>

        </>
    );
};

export default Slider;
