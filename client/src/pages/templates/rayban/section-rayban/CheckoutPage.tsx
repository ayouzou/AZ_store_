import { useParams } from "react-router-dom"
import { CustomerSessionProvider } from "../../../../context/auth/customer"
import NavbarRayban from "../components/NavbarRayban"
import Stepper from "../components/Stepper"


const CheckoutPage = () => {

    const { storeSlug } = useParams()

    console.log(storeSlug)
    return (
   
            <CustomerSessionProvider storeSlug={storeSlug}>
                <NavbarRayban />
                <Stepper />
            </CustomerSessionProvider>
       
    )
}

export default CheckoutPage