import { StoreCard } from './store-card'
import { useQuery } from '@tanstack/react-query'
import { getStoresByUserId } from './api/getStoresByUserId'
import useAuth from '@/hooks/auth/useAuth'
import StoreCardSkeleton from '@/components/widgets/stores/store-card-skeleton'

export default function StoresList() {
    const { auth } = useAuth()
    const { isLoading, data: storesData } = useQuery({ queryKey: ['STORES'], queryFn: () => getStoresByUserId(auth) })
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-center gap-2">
                {!storesData || isLoading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <StoreCardSkeleton key={index} />
                    ))
                ) : (
                    storesData?.stores?.map((store) => (
                        <StoreCard {...store} key={store._id} href={store.slug} actions={['view']} />
                    ))
                )}
            </div>
        </div>
    )
}
