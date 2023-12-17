
import { Fragment } from 'react'
import {
    BriefcaseIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { ArrowTrendingUpIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export function Heading({ title, subTitle, actions }: {
    title: string,
    subTitle: React.ReactNode | string,
    actions: {
        label: string,
        type: 'EDIT' | 'NEW' | 'VIEW',
        onClick: () => void,
    }[]
}) {
    return (
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {title}
                </h2>
                <div className="flex justify-end"> 
                    <div className="hidden md:block">
                        {actions.map((action, key) => {
                            if (action.type === 'EDIT') {
                                return (<span key={key} className="hidden sm:block">
                                    <button
                                        onClick={action.onClick}
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        {action.label}
                                    </button>
                                </span>)
                            }
                            if (action.type === 'NEW') {
                                return (<span
                                    key={key}
                                    className="sm:ml-3">
                                    <button
                                        onClick={action.onClick}
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                        {action.label}

                                    </button>
                                </span>)
                            }

                            return null
                        })}
                    </div>
                </div>

                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 ">
                    <div className="mt-2 flex items-center text-lg font-semibold text-zinc-900 ">
                        <ArrowTrendingUpIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        1M+ views
                    </div>
                </div>
            </div>

            <div className="mt-5 flex lg:ml-4 lg:mt-0 ">
                {/* Dropdown */}
                <Menu as="div" className="relative ml-3 sm:hidden">
                    <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                        More
                        <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {
                                actions.map((action, key) => {
                                    if (action.type === 'NEW') {
                                        return (<Menu.Item key={key}>
                                            {({ active }) => (
                                                <button
                                                    onClick={action.onClick}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'w-full block px-4 py-2 text-sm text-left text-gray-700')}
                                                >
                                                    {action.label}
                                                </button>
                                            )}
                                        </Menu.Item>)
                                    }
                                    if (action.type === 'EDIT') {
                                        return (<Menu.Item key={key}>
                                            {({ active }) => (
                                                <button
                                                    onClick={action.onClick}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'w-full block px-4 py-2 text-sm text-left text-gray-700')}
                                                >
                                                    {action.label}
                                                </button>
                                            )}
                                        </Menu.Item>)
                                    }
                                    return null
                                })
                            }
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
