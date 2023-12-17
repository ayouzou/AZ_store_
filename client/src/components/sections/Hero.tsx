import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import logimg from '../../assets/Lottie/landing.json'
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <>
            <section id='hero' className="h-screen bg-neutral-100">
                {/* Flex Container */}
                <div className='container flex flex-col-reverse items-center px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row'>
                    {/* Left Item */}
                    <div className='flex flex-col items-center mb-32 space-y-12 md:w-1/2 sm:pl-10 mt-24'>
                        <h1 className='max-w-md text-4xl font-serif text-center md:text-4xl md:text-left '>
                            All in <mark className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">ONE</mark> e-com platform
                        </h1>
                        <p className='max-w-sm text-center text-lg text-darkGrayishBlue md:text-left font-serif '>
                            Build stores for your clients, manage your clients, sell and ship your products all in one place.
                        </p>
                        <Button className=' lg:w-[20vw] md:w-1/2 w-1/2 bg-gradient-to-r text-center from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 '>
                            <Link
                                to='#'
                                className="text-center"
                            >
                                Get Started
                            </Link>
                        </Button>
                    </div>
                    {/* Image */}
                    <div className='md:w-1/2'>
                        {/* <img src="https://tailwind-landing-page-danielkim2711.vercel.app/static/media/illustration-intro.cb9a8a9551ca99f99a125230d38a2c36.svg" alt='' /> */}
                        <Lottie animationData={logimg} loop={true} className='  ' />
                    </div>
                </div>
            </section>

        </>

    )
}
