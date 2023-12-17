// import { ArrowTrendingUpIcon, BuildingStorefrontIcon, ClipboardDocumentListIcon, CreditCardIcon } from '@heroicons/react/24/outline'

import CategoryLgBox from "../ui-AZ/CategoryLgBox";
import CategorySmBox from "../ui-AZ/CategorySmBox";

const categorySmContent = [
  {
    bgc: "Digital Products",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Fdigital-category.webp&w=48&q=75",
    categoryTitle: "Digital Products",
    href: "/digital",
  },
  {
    bgc: "fashionCategory",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Ffashion-category.webp&w=48&q=75",
    categoryTitle: "Fashion and clothes",
    href: "/fashion",
  },
  {
    bgc: "beautyCategory",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Fbeauty-category.webp&w=48&q=75",
    categoryTitle: "Cosmetic Products",
    href: "/beauty",
  },
  {
    bgc: "sportCategory",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Fsport-category.webp&w=48&q=75",
    categoryTitle: "Spot and Trip",
    href: "/sport",
  },
  {
    bgc: "houseCategory",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Fhouse-category.webp&w=48&q=75",
    categoryTitle: "Furniture and Kitchen",
    href: "/house",
  },
  {
    bgc: "toyCategory",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-icon%2Ftoy-category.webp&w=48&q=75",
    categoryTitle: "Toys and Baby",
    href: "/toy",
  },
  // {
  //   bgc: "stationeryCategory",
  //   imgSrc: "stationery-category.webp",
  //   categoryTitle: "stationeryCategoryTitle",
  //   href: "/stationery",
  // },
];
 const categoryLgContent = [
  {
    name: "Digital Products",
    title: "Digital Products",
    description: "We offer the newest products at the most competitive prices",
    styles: {
      backgroundColor: "rgb(67.8%,91%,95.7%)",
      flexDirection: "row",
      paddingBlock: "2rem",
      paddingInline: "1rem",
      gridRow: "span 6 / span 6",
      gridColumn: "span 3 / span 3",
    },
    href: "/digital",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fdigital-category.webp&w=256&q=75",
    imgWidth: 190,
    imgHeight: 240,
  },
  {
    name: "Fashion and Clothes",
    title: "Fashion and Clothes",
    description: "The most popular brands with the most reasonable prices",
    styles: {
      backgroundColor: "rgb(255,221,210)",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "unset",
      gridRow: "span 6 / span 6",
      gridColumn: "span 3 / span 3",
    },
    href: "/fashion",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Ffashion-category.webp&w=256&q=75",
    imgWidth: 240,
    imgHeight: 250,
  },
  {
    name: "Cosmetic Products",
    title: "Cosmetic Products",
    description: "Anti-allergy products suitable for all skin types from reputable brands",
    styles: {
      backgroundColor: "rgb(221,217,42)",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "0.5rem",
      gridRow: "span 3 / span 3",
      gridColumn: "span 3 / span 3",
    },
    href: "/beauty",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fbeauty-category.webp&w=256&q=75",
    imgWidth: 170,
    imgHeight: 150,
  },
  {
    name: "sport",
    title: "Sport and Trip",
    description: "High-quality and durable products",
    styles: {
      backgroundColor: "rgb(255,214,10)",
      flexDirection: "row-reverse",
      paddingInline: "unset",
      paddingBlock: "0.5rem",
      gridRow: "span 3 / span 3",
      gridColumn: "span 3 / span 3",
    },
    href: "/sport",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fsport-category.webp&w=256&q=75",
    imgWidth: 130,
    imgHeight: 150,
  },
  {
    name: "house",
    title: "Furniture and kitchen",
    description: "In accordance with the designs of the day",
    styles: {
      backgroundColor: "rgb(80%,83.5%,68.2%)",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "unset",
      gridRow: "span 2 / span 2",
      gridColumn: "span 5 / span 5",
    },
    href: "/house",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fhouse-category.webp&w=384&q=75",
    imgWidth: 320,
    imgHeight: 240,
  },
  {
    name: "toy",
    title: "Toys and Baby",
    description: "A combination of entertainment and creativity",
    styles: {
      backgroundColor: "rgb(204,227,222)",
      flexDirection: "column",
      paddingInline: "0.5rem",
      paddingBlock: "0.5rem",
      textAlign: "center",
      gridRow: "span 2 / span 2",
      gridColumn: "span 2 / span 2",
    },
    href: "/toy",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Ftoy-category.webp&w=256&q=75",
    imgWidth: 130,
    imgHeight: 110,
  },
  {
    name: "stationery",
    title: "Books, Stationery and Art",
    description: "Variety in choice",
    styles: {
      backgroundColor: "rgb(251,177,60)",
      flexDirection: "row",
      paddingInline: "0.75rem",
      paddingBlock: "unset",
      gridRow: "span 2 / span 2",
      gridColumn: "span 2 / span 2",
    },
    href: "/stationery",
    imgSrc: "https://zishop.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fstationery-category.webp&w=256&q=75",
    imgWidth: 70,
    imgHeight: 250,
    imgCustomStyles: { alignSelf: "flex-start" },
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="flex flex-col items-center my-4 md:my-8 p-14"  >
        <h2 className='my-4 md:my-8 lg:mt-10 mx-auto text-3xl font-serif'>Category of Goods</h2>
        <div className="flex flex-wrap justify-around items-center lg:hidden">
          {categorySmContent.map((categoryItem) => {
            return (
              <CategorySmBox
                bgc={categoryItem.bgc}
                imgSrc={categoryItem.imgSrc}
                categoryTitle={categoryItem.categoryTitle}
                href={categoryItem.href}
                key={categoryItem.categoryTitle}
              />
            );
          })}
        </div>
        <div className="hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px]  mx-auto">
          {categoryLgContent.map(
            ({
              name,
              title,
              description,
              styles,
              href,
              imgSrc,
              imgWidth,
              imgHeight,
            }) => {
              return (
                <CategoryLgBox
                  key={name}
                  name={name}
                  title={title}
                  description={description}
                  styles={styles}
                  href={href}
                  imgSrc={imgSrc}
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                />
              );
            }
          )}
        </div>

      </div>

      {/* <div className=" mw-full mt-10 bg-white-400 p-10 flex flex-col justify-center items-center text-xl">
      
           <div className='bg-slate-100 p-2 rounded-xl'>
           <h2 className='mw-full  bg-white-400 flex flex-col justify-center items-center text-xl'>Category of Goods</h2>
            <div className=' flex flex-col md:flex-row mt-8 ml-1'>
                <div className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-xl p-10 m-3 text-lg "><BuildingStorefrontIcon className="h-20 w-16 mx-auto text-gray-100" /><p>1. Configurez votre boutique</p></div>
                <div  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-xl p-10 m-3 text-lg"><ClipboardDocumentListIcon  className="h-20 w-16 mx-auto text-gray-100" /><p>2. Listez vos produits</p></div>
                <div  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-xl p-10 m-3 text-lg"><ArrowTrendingUpIcon  className="h-20 w-16 mx-auto text-gray-100" /><p>3. Générez du trafic et des ventes</p></div>
                <div  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-xl p-10 m-3 text-lg"><CreditCardIcon  className="h-20 w-16 mx-auto text-gray-100" /><p>4. Recevez votre argent</p></div>
            </div>
           </div>
        </div> */}
    </>
  )
}

export default FeaturesSection