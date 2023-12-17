import Layout from '@/components/layouts/layout'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from '@/context/auth'

import { Outlet } from '@tanstack/react-router'

export default function Root() {
    return (
        <SessionProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Layout>
                    <Outlet />
                </Layout>
            </ThemeProvider>
        </SessionProvider>
    )
}
