import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getStoreBySlug } from './kawazaki/api/getStoreBySlug'
import useAuth from '../../hooks/auth/useAuth'
import toast, { LoaderIcon } from 'react-hot-toast'
import { useEffect } from 'react'
import Kawazaki from './kawazaki/Kawazaki'
import Rayban from './rayban/Rayban'
import { CustomerSessionProvider } from '../../context/auth/customer'

const TEMPLATES = ['KAWAZAKI', 'RAYBAN'] as const


const renderStorePageTemplate = (slug: string, template: typeof TEMPLATES[number]) => {
    return <Rayban />

}

export default function StoreLayout() {
    const { storeSlug } = useParams()
    const { auth } = useAuth()
    const { isLoading, data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', storeSlug], queryFn: () => getStoreBySlug({ slug: storeSlug as string }) })
   

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


