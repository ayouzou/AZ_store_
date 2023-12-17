import { Button } from '@/components/form-elements/button'
import { StoreForm } from '@/components/widgets/stores/forms/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import StoresList from '@/components/widgets/stores/store-list'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { SessionProvider } from '@/context/auth'
import { ThemeProvider } from '@/components/theme-provider'
import Layout from '@/components/layouts/layout'
import { ScrollArea } from '@/components/ui/scroll-area'




export default function StoresListPage() {
    return (
        <SessionProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Layout>
                    <Card className="w-10/12">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Stores</CardTitle>
                                <CreateStorePopUp />
                            </div>
                            <CardDescription>
                                You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <StoresList />
                        </CardContent>
                    </Card>
                </Layout>
            </ThemeProvider>
        </SessionProvider>
    )
}


const CreateStorePopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Create store
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <ScrollArea className="h-screen w-full">
                <DialogHeader>
                    <DialogTitle>Create a store</DialogTitle>
                    <DialogDescription>
                        Provide details on your store.
                    </DialogDescription>
                </DialogHeader>
                <StoreForm setIsDialogOpen={setIsOpen} />
            </ScrollArea>
        </DialogContent>
    </Dialog>)
}