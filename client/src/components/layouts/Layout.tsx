import React, { useEffect } from 'react'
import useAuth from '../../hooks/auth/useAuth'
import DashboardLayout from './DashboardLayout'
import DefaultLayout from './DefaultLayout'
import { useLocation, useParams } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { auth } = useAuth()
    const { pathname } = useLocation()
    const {storeId} = useParams()
    useEffect(() => {
        // console.log(pathname)
    }, [pathname])
    if (auth.isAuthenticated && auth.user && auth?.user.role === 'SELLER') {
        if (pathname === '/dashboard' || pathname=== '/dashboard/stores'   ||pathname ==="/dashboard/settings" ||pathname===`/dashboard/stores/${storeId}`) {
            return (
                <>
                    <DashboardLayout>
                        {children}
                    </DashboardLayout>
                </>
            )
        } else {
            <>
                <DefaultLayout>
                    {children}
                </DefaultLayout>
            </>
        }

    }
    if (auth.isAuthenticated && auth.user && auth?.user.role === 'CUSTOMER') {
        return (
            <>
                <DefaultLayout >
                    {children}
                </DefaultLayout>
            </>
        )
    }
    return (
        <DefaultLayout>{children}</DefaultLayout>
    )

}
