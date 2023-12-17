import { ArrowSmallLeftIcon, BuildingStorefrontIcon, ChartPieIcon, ChevronRightIcon, SunIcon, TagIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import { useSelector } from "react-redux";

const SideBar2 = () => {
    const generalLinks = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: ChartPieIcon,
            current: true,
        },
        {
            name: 'Stores',
            href: '/dashboard/stores',
            icon: BuildingStorefrontIcon,
            current: false,
        },
        {
            name: 'Settings',
            href: '/dashboard/Setting',
            icon: TagIcon,
            current: false,

        }
    ];
    const { logout } = useAuth()
    const colorList = useSelector((state) => state.color.value)
    const colorSidbar = useSelector((state) => state.colorSidbar.value)

    console.log("this is color", colorList)
    const [sidebar, setSidebar] = useState(true);
    const handelSidebar = () => {
        setSidebar((prev) => !prev);
    };
    const [activeIndex, setActiveIndex] = useState();

    
    const handleTabClick = (index) => {
        setActiveIndex(index);
    };
    useEffect(() => {
        // If the location changes, update the active index
        const index = generalLinks.findIndex(link => link.href === location.pathname);
        if (index !== -1 && index !== activeIndex) {
            setActiveIndex(index);
        }
    }, [location.pathname, generalLinks, activeIndex]);

    return (
        <div className={`bg-indigo-100 h-screen relative   bg-${colorSidbar ==='normal' &&'transparent'?'indigo-200 text-black':colorSidbar } border-r   flex flex-col transition-all ${sidebar ? "md:w-64 w-48" : "w-[5rem]"}`}>
            <ChevronRightIcon width={32} onClick={handelSidebar} className={`rounded-full p-1 border absolute -right-3 top-5 z-[60] bg-gray-400 text-white cursor-pointer ${sidebar && "rotate-180"}`} />
            <div className={` space-y-5  flex-1 px-4 pt-[1.1rem] ${sidebar ? "w-52" : "w-20"}`}>
                <div className="flex items-center gap-2">
                <p className={`uppercase transition-all font-extrabold text-3xl text-${colorSidbar === 'normal' ? 'black' : 'white' }${colorSidbar === 'transparent' ? 'black' : ''}`} >AZ.</p>

                </div>
                <p className={`text-gray-500/40 text-sm transition-all font-medium uppercase px-1 ${!sidebar && "opacity-0"}`}>general</p>
                <ul className="flex flex-col gap-6 w-full  ">
                    {generalLinks.map((item, index) => {
                        return (
                            <Link
                                to={item.href}
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className="flex   "
                            >
                                <div className={`flex items-center w-full  py-1 px-2 rounded-md group cursor-pointer transition-all   ${index === activeIndex ? `bg-${colorList} text-white` : ""
                                    }`}>
                                    <SunIcon
                                        icon={item.icon}
                                        width={22}
                                        className={`${sidebar ?"":"  ml-0 pl-0"}`}
                                    />
                                    <p className={`text-xl font-semibold transition-all px-3 text-${colorSidbar === 'normal' ? 'black' : 'white' }${colorSidbar === 'transparent' ? 'black' : ''} ${!sidebar && "opacity-0 hidden px-1"} `}>{item.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </ul>
            </div>
            <Link to="/" onClick={() => logout()} className="w-full border-t p-3 flex items-center gap-3 cursor-pointer hover:bg-black/10 transition-all">
                <ArrowSmallLeftIcon className="h-6 w-6 text-gray-500" />
                <p className={`text-xl font-bold group-hover:pl-2 whitespace-nowrap text-red-700  transition-all flex-1 ${!sidebar && "opacity-0"}`}>Log out</p>
                <ChevronRightIcon width={22} className={`rounded-full p-1 border ${!sidebar && "hidden"}`} />
            </Link>
        </div>

    )
}

export default SideBar2