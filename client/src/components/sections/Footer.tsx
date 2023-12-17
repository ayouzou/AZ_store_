
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <>
      <div className='bg-veryDarkBlue'>
        {/* Flex Container */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
          {/* Logo and social links container */}
          <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
            <div className='mx-auto my-6 text-center text-white md:hidden'>
              Copyright © 2022, All Rights Reserved
            </div>
            {/* Logo */}
            <div>
              <span className="text-xl font-bold text-gray-700 bg-[#d6f0f3] p-2 rounded dark:text-[#19c9e4] dark:bg-[#19c9e4]">
                AZ.
              </span>
            </div>
            {/* Social Links Container */}
            <div className='flex justify-center space-x-4'>
              {/* Link 1 */}
              <Link to='#'>
                {/* <img src={facebookLogo} className='h-8' alt='' /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#1877f2" d="M22 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.67v-7.35h-2.83v-2.88h2.83V9.21c0-2.82 1.73-4.37 4.24-4.37 1.22 0 2.54.22 2.54.22v2.8h-1.43c-1.41 0-1.85.87-1.85 1.77v2.13h3l-.47 2.88h-2.53V22H22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                </svg>
              </Link>
              {/* Link 2 */}
              <Link to='#'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#1da1f2" d="M23.94 4.75c-.89.38-1.83.63-2.83.75 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.02.97-3.15 1.2-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.78.12 1.16-4.1-.2-7.74-2.17-10.18-5.16-.43.74-.68 1.6-.68 2.53 0 1.75.89 3.3 2.24 4.21-.82 0-1.58-.22-2.24-.54v.06c0 2.44 1.73 4.48 4.02 4.94-.42.12-.86.18-1.32.18-.32 0-.63-.03-.94-.08.63 1.96 2.45 3.38 4.6 3.42-1.68 1.32-3.81 2.1-6.1 2.1-.4 0-.78-.02-1.17-.07 2.18 1.4 4.76 2.2 7.56 2.2 9.07 0 14-7.52 14-14 0-.21 0-.42-.02-.63.97-.7 1.81-1.57 2.47-2.56z" />
                </svg>
              </Link>
              {/* Link 3 */}
              <Link to='#'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <rect fill="#3f729b" x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path fill="#fff" d="M12 7.58c-1.8 0-3.25 1.45-3.25 3.25s1.45 3.25 3.25 3.25 3.25-1.45 3.25-3.25-1.45-3.25-3.25-3.25zm0 5.84c-1.08 0-1.95-.87-1.95-1.95s.87-1.95 1.95-1.95 1.95.87 1.95 1.95-.87 1.95-1.95 1.95zm5.45-5.05c0 .74-.6 1.34-1.34 1.34s-1.34-.6-1.34-1.34.6-1.34 1.34-1.34 1.34.6 1.34 1.34z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* List Container */}
          <div className='flex justify-around space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <Link to='#' className='hover:text-brightRed'>
                Home
              </Link>
              <Link to='#' className='hover:text-brightRed'>
                Pricing
              </Link>
              <Link to='#' className='hover:text-brightRed'>
                Products
              </Link>
              <Link to='#' className='hover:text-brightRed'>
                About
              </Link>
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <Link to='#' className='hover:text-brightRed'>
                Careers
              </Link>
              <Link to='#' className='hover:text-brightRed'>
                Community
              </Link>
              <Link to='#' className='hover:text-brightRed'>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Input Container */}
          <div className='flex flex-col justify-between'>
            <form>
              <div className='flex space-x-3'>
                <input
                  type='text'
                  className='flex-1 px-4 rounded-full focus:outline-none'
                  placeholder='Updated in your inbox'
                />
                <button className='px-6 py-2 text-white rounded-full px-4 py-2 text-white rounded-full md:py-1                   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  text-center me-2 mb-2'>
                  Go
                </button>
              </div>
            </form>
            <div className='hidden text-white md:block'>
              Copyright © 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
