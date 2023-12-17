import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';


const Herotwo = () => {
  const imageUrls = [
    'https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="header-content w-full flex flex-col justify-center items-center sm:mt-10  ">
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/2 p-10">
            <h1 className="sm:text-5xl text-3xl font-xl font-serif mb-5">Selling online has never been easier</h1>
            <p className="text-zinc-800 mb-6">
              Set up your online store in a few clicks and benefit from all the essential tools to succeed in e-commerce.</p>
            <div className='text-zinc-700 font-serif'>
              <ul>
                <li className="flex items-center mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                  Easy and intuitive configuration of your site
                </li>
                <li className="flex items-center mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                  No sales, no fees
                </li>
                <li className="flex items-center mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                  All the e-commerce tools you need in one place
                </li>
              </ul>
            </div>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ml-3 mt-10 transition-transform hover:scale-105">Start right now</button>

          </div>

          {/* Right side for the image */}
          <div className="md:w-1/2 p-12 ">
            <img
              src={imageUrls[currentImageIndex]}
              alt="Image Description"
              className="w-full h-80 rounded-xl cursor-pointer transition-transform  duration-1000 "
            />
            <div className=' mx-auto flex flex-row justify-between sm:flex-row mt-8 ml-1 font-serif p-1   '>
              <div className='sm:ml-6 ' >
                <strong>+150K</strong>
                <p>Boutiques actives</p>
              </div>
              <div className='sm:ml-20 ml-10'>
                <strong>+20</strong>
                <p>Pays</p>
              </div>
              <div className='sm:ml-24 ml-10'>
                <strong>+20%</strong>
                <p>Taux de conversion</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Herotwo