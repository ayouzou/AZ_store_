import { useParams } from 'react-router-dom'
import { CustomerSessionProvider } from '../../../context/auth/customer'
import WalletOrders from './WalletOrders'

const OrdersCustomer = () => {
    
    const { storeSlug } = useParams()

    return (
        <div>

            <CustomerSessionProvider storeSlug={storeSlug}>
                <WalletOrders />
            </CustomerSessionProvider>

        </div>
    )
}

export default OrdersCustomer