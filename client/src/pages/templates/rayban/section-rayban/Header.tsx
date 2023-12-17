import { useEffect, useState } from 'react';
import ReadMore from "../components/ReadMore";
import {  useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import useAuth from "../../../../hooks/auth/useAuth"
import HeroRayban from "./HeroRayban";
import Card2 from "../components/Card2";
import { getProductsByStoreSlug } from '../api/getProductsByStoreSlug';
import FormContact from '../components/FormContact';
import SearchForm from '../components/SearchForm';
import { SlArrowDown } from "react-icons/sl";
import SkeletonLoader from '../components/SkeletonLoader';
import SliderProduct from '../components/SliderProduct';
import { Feature } from './Feature';



const Header = () => {
    const [cardsToShow, setCardsToShow] = useState(6);
    const loadMoreCards = () => {
        setCardsToShow(cardsToShow + 3);
    }
    const { auth } = useAuth()
    const { storeSlug } = useParams()
    const { data: productsData, isLoading, isError } = useQuery({ queryKey: ['STORE_PRODUCTS', storeSlug], queryFn: () => getProductsByStoreSlug(storeSlug as string, auth) })

    const initialText = "Discover the complete collection of men's sunglasses available online. Choose from a selection of our most iconic styles, from retro classics like Clubmaster and Nomad to legendary Aviator sunglasses for men. All of our sunglasses come in a range of color combinations with classic G-15, mirror, Evolve or gradient lenses in a choice of soft color tints. For premium lenses, discover our range of Polarized sunglasses specifically designed to block glare and enhance visual clarity while shielding eyes from the sun. You can also customize any style with the frame, lens and temple combination of your choice for a look that's authentically you.";
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term: any) => {
        setSearchTerm(term);
    };
    useEffect(() => {
        const filtered = productsData?.data?.filter((product) =>
            product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered || []);
    }, [searchTerm, productsData]);
    return (
        <>
            <HeroRayban />
            <SliderProduct />
            <section className="py-20  bg-gradient-to-r from-neutral-50 to-neutral-300">
                <div className="container mx-auto   ">
                    <h1 className="text-3xl font-serif mb-10 text-center text-black">Explore Our Products</h1>
                    <div className='max-w-2xl mx-auto my-10'>
                        <SearchForm onSearch={handleSearch} />
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none  md:mx-0">
                        {isLoading ? (
                            Array.from({ length: 6 }).map((_, index) => <SkeletonLoader key={index} />)
                        ) : (
                            filteredProducts.slice(0, cardsToShow).map((product, index) => (
                                <Card2 product={product} index={index} key={index} />
                            ))
                        )}
                    </div>
                    <div>
                        <div className="text-black mt-20   w-96 mx-auto  p-5">
                            <p className="text-center text-lg font-serif">YOU ARE SEEING {productsData?.data?.length} PRODUCTS </p>
                            {productsData?.data && productsData?.data?.length >= 9 && (
                                <button
                                    className="flex items-center gap-2 mx-auto mt-2 bg-slate-300 text-white font-medium py-2 px-4 rounded-xl"
                                    onClick={loadMoreCards}
                                >
                                    View MORE <SlArrowDown className="text-black" />
                                </button>
                            )}
                        </div>
                        {/* <div className="mt-20 w-9/12 p-10 mx-auto">
                            <ReadMore initialText={initialText} />
                        </div> */}
                    </div>
                </div>
            </section>
             
            <FormContact />   
            <Feature/>
        </>
    )
}
export default Header