import React from 'react'
import TeamSwitcher from '@/components/team-switcher'
import { MainNav } from '@/components/main-nav'
import { Search } from '@/components/search'
import { ModeToggle } from '@/components/mode-toggle'
import { UserNav } from '@/components/user-nav'
import { Sidebar } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from '@/context/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Toaster />
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <TeamSwitcher />
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <ModeToggle />
                        <UserNav />
                    </div>
                </div>
            </div>
            <div className="flex p-4">
                <Sidebar />
                {children}
            </div>
            <Toaster />
        </SessionProvider>
    )
}
