import Header from "./section-rayban/Header"
import NavbarRayban from "./components/NavbarRayban"
import FooterRayban from "./section-rayban/FooterRayban"
import { useParams } from "react-router-dom"
import { CustomerSessionProvider } from "../../../context/auth/customer"
const Rayban = () => {
    const { storeSlug } = useParams()


    return (
        <CustomerSessionProvider storeSlug={storeSlug}>
            <NavbarRayban />
            <Header />
            <FooterRayban />
        </CustomerSessionProvider>
    )
}

export default Rayban