import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, ChevronDownIcon, Cog8ToothIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import useAuth from '../../../hooks/auth/useAuth'
import Modaldash from './ui-dash/Modaldash'
import { Link } from 'react-router-dom'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const NavbarDas = () => {
    const { auth, logout } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);



    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <nav className="w-full bg-white text-gray p-4 flex items-center shadow-sm border-b-2 border-gray-200">
                <div className="w-full flex items-center justify-start px-4">
                    <MagnifyingGlassIcon className='w-6 h-6 stroke-gray-400' />
                    <input type="text" placeholder="Type to Search..." className="w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
                </div>
                <div className='flex items-center'>
                    <BellIcon className="h-16 w-16 justify-end" aria-hidden="true" />

                    <Menu as="div" className="w-full relative">
                        <div className='flex items-center justify-end'>
                            <Disclosure as={Fragment}>
                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </Menu.Button>

                            </Disclosure>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded- bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            onClick={() => logout()}
                                        >
                                            <span>{auth.user?.username}</span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>

                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            onClick={() => logout()}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <button onClick={() => setIsModalOpen(!isModalOpen)} >
                        <Cog8ToothIcon className='h-10 w-10 text-gray-500 cursor-pointer' />
                    </button>

                </div>
            </nav>
            {
                isModalOpen ? <Modaldash isOpen={isModalOpen} onClose={handleCloseModal} /> : ""
            }


        </>
    )
}

export default NavbarDas