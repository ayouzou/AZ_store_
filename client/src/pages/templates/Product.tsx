import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getStoreBySlug } from './kawazaki/api/getStoreBySlug'
import toast, { LoaderIcon } from 'react-hot-toast'
import ProductDetails from './rayban/ProductDetails'
import { CustomerSessionProvider } from '../../context/auth/customer'

const TEMPLATES = ['XMTA', 'RAYBAN'] as const


const renderStorePageTemplate = (slug: string, template: typeof TEMPLATES[number]) => {
    switch (template) {
        case 'XMTA':
            return (<CustomerSessionProvider storeSlug={slug}>
                <ProductDetails />
            </CustomerSessionProvider>)
        case 'RAYBAN':
            return <h1>Kawazaki coming soon...</h1>
        default:
            return <div>Default</div>
    }
}


export default function ProductPage() {

    const { storeSlug } = useParams()
    const { data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', storeSlug], queryFn: () => getStoreBySlug({ slug: storeSlug as string }) })

    useEffect(() => {
        if (storeInfoData?.error) {
            window.location.href = '/'
            toast.error('Store not found')
        }
    }, [storeInfoData])

    if (!storeInfoData) return <LoaderIcon />
    return (
        <>
            {renderStorePageTemplate(storeInfoData?.storeInfo?.store?.slug as string, storeInfoData?.storeInfo?.store?.template as typeof TEMPLATES[number])}
        </>
    )
}
