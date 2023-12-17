import React, { useState } from 'react'
// import SideBar from '../ui/SideBar'
import NavbarDas from '../../pages/dashboard/components/NavbarDas'
import SideBar2 from '../ui/SideBar2'
import SideBar from '../ui/SideBar'
// import NavbarDashboard from '../../pages/dashboard/components/NavbarDashboard'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white w-full flex ">
            {/* <div className="w-2/12"><SideBar /></div> */}
            <div className="max-w-full  ">
            <SideBar2 />
            {/* <SideBar /> */}
            </div>
            <div className="w-full">
                <div className="">
                    <NavbarDas />
                    {/* <NavbarDashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> */}
                </div>
                {children}

            </div>
        </div >

    )
}
