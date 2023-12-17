import {  ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, BuildingStorefrontIcon, ChartPieIcon, CheckIcon, Cog6ToothIcon,  CubeIcon, IdentificationIcon, KeyIcon, PresentationChartBarIcon, TagIcon } from "@heroicons/react/24/outline";
import  { ForwardRefExoticComponent, RefAttributes, SVGProps, useState } from "react";
import { Link } from "react-router-dom";


const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartPieIcon,
    current: true,
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: CheckIcon,
    current: false,
  },
  {
    name: 'Products',
    href: '/dashboard/products',
    icon: CubeIcon,
    current: false,
  }, {
    name: 'Stores',
    href: '/dashboard/stores',
    icon: BuildingStorefrontIcon,
    current: false,
  },
  {
    name: 'Category',
    href: '/dashboard/category',
    icon: PresentationChartBarIcon,
    current: false,
  },
  {
    name: 'Review',
    href: '/dashboard/review',
    icon: TagIcon,
    current: false,
    
  }
]

const SideBar = () => {
  const [click ,setClick] =useState(true)
  const toggleSidebar = () => {
    setClick(!click);
  };
  return (
    <>
      <div className={`max-w-full min-h-screen flex flex-col gap-4 p-4 bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 ${click ? '' : ''}`}>
       <div className="flex justify-between	 ">
       <div className="p-4 flex flex-shrink-0 items-center">
          <span className='text-dark font-extrabold text-white'>AZ.</span>
        </div>
        <div className="p-4 flex flex-shrink-0 items-center">
          <span className='text-dark font-extrabold text-white'>{click ?<ArrowLeftOnRectangleIcon onClick={toggleSidebar}className="w-5 h-5  cursor-pointer"/>:<ArrowRightOnRectangleIcon onClick={toggleSidebar} className="w-5 h-5 text-slate-500  cursor-pointer"/>}</span>
        </div>
       </div>
        <div className="">
          {
            navigation.map((item,index) => (
              <SideBarItem item={item} key={index}  />
            ))
          }
        </div>
      </div>
    </>
  );
}
export default SideBar;
const SideBarItem = ({ item  }: {
  item: {
    name: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>,
    current: boolean,
    subItems?: {
      name: string,
      href: string,
      icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>,
      current: boolean,
    }[]
  }
 
}) => {
  const [opened, setOpened] = useState(false)
  const toggleSubItems=()=>{
    setOpened(!opened)
  }
 
  return (
    <>
      <div className="flex items-center justify-start ">
        <Link to={item.href}  onClick={toggleSubItems} className="w-full group rounded flex items-center justify-start gap-2 pl-2 pr-6 py-3 cursor-pointer hover:bg-indigo-900 hover:text-white">
          <item.icon className="w-6 h-6 text-white text-opacity-70 font-medium hover:text-opacity-100 group-hover:stroke-white" />
          <span className="text-white text-opacity-70 hover:text-opacity-100 font-medium group-hover:text-white">{item.name}</span>
        </Link>
      </div>
      {opened && item.subItems && (
        <div className="ml-3">
          {item.subItems.map((subItem) => (
            <div key={subItem.name} className="flex items-center justify-start">
              <span  className="group rounded flex items-center justify-start gap-2 pl-2 pr-6 py-3 cursor-pointer hover:bg-indigo-900 hover:text-white">
                <subItem.icon className="w-6 h-6 text-white text-opacity-70 font-medium hover:text-opacity-100 group-hover:stroke-white" />
                <Link to={subItem.href} className="text-white text-opacity-70 hover:text-opacity-100 font-medium group-hover:text-white">{subItem.name}</Link>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}