
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

const Navbar = () => {

  const { auth, logout } = useAuth()
  return (
    <nav className='sm:px-10 py-2 mx-auto  bg-neutral-100'>
      <div className='flex items-center justify-between'>
        <div className='p-4   text-center'>
          <span className="text-xl font-bold text-gray-700 bg-[#d6f0f3] p-2 rounded dark:text-[#19c9e4] dark:bg-[#19c9e4]">
            AZ.
          </span>
        </div>
        <div className='flex gap-1'>
          <Link
            to='/register'
            className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2s'
          >
            Get Started
          </Link>

          {
            auth.isAuthenticated ? <Link
              to='#'
              className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2s'
              onClick={() => logout()}
            >
              Logout
            </Link> :
              <Link
                to='http://localhost:3002/login'
                className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2s'
              >
                Login
              </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
