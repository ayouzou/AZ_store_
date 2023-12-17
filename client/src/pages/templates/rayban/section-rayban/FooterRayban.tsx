import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import useCustomer from '../../../../hooks/auth/useCustomer';
import { getStoreBySlug } from '../../kawazaki/api/getStoreBySlug';
import { useQuery } from '@tanstack/react-query';

const FooterRayban = () => {
    const {storeSlug } =useParams()
        const {customer} =  useCustomer(storeSlug as string )

        const { isLoading, data: storeInfoData } = useQuery({ queryKey: ['STORE_INFO', storeSlug], queryFn: () => getStoreBySlug({ slug: storeSlug as string }) })

            console.log()

    return (
        <Footer container>
            <div className="w-full bg-gray-50 shadow-2xl rou rounded-xl p-10 ">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/"
                            src={storeInfoData?.storeInfo?.store.logo}
                         
                            name={storeInfoData?.storeInfo?.store.name}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3  sm:gap-6 mb-10">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">AZ Store Builder</Footer.Link>
                                <Footer.Link href="#">Ark </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between p-10">
                    <Footer.Copyright href="#" by={storeInfoData?.storeInfo?.store.name} year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>


        // <div className=" h-60 p-5  bg-slate-900 text-white">
        //     <div className="m-10 mt-2 flex-wrap justify-between items-center sm:flex">
        //         <div className="" >
        //             <label className="text-white" >You're shipping to:</label>
        //             <button className="mx-2 mt-2 bg-transparent border-solid border-2 border-sky-500  text-white font-medium py-2 px-4 rounded">
        //                 <span className="bg-white w-5 h-5">kkk</span>  REST OF WORLD
        //             </button>
        //         </div>
        //         <div className="flex mt-6  gap-5 text-white ">
        //             <a href="#">PRIVACY POLICY</a>
        //             <a href="#">SITEMAP</a>
        //             <a href="#">STORE LOCATOR</a>
        //             <a href="#">REPORT FAKES</a>
        //         </div>
        //     </div>
        //     <div className="mx-10">
        //         <p>
        //             Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843.
        //             <a className="border-b-2">Copyright ©2023 Luxottica Group S.p.A. - All Rights Reserved Other sites of the Group</a>
        //         </p>
        //     </div>
        // </div>
    )
}

export default FooterRayban