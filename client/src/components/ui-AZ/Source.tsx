const benefitContent = [
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1043/1043457.png",
        title: "express delivery",
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/7875/7875821.png",
        title: "payment on the spot",
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/614/614664.png",
        title: "24/7 support",
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/7909/7909862.png",
        title: "Guarantee the originality",
    },
];
const Source = () => {
    return (
        <div className="grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto ">
            {benefitContent.map((benefitItem) => {
                return (
                    <div
                        className="col-span-6 lg:col-span-3 flex flex-col items-center "
                        key={benefitItem.title}
                    >
                        <img
                            src={benefitItem.imgSrc}
                            alt={benefitItem.title}
                            className="h-28 w-28"
                        />
                        <p className="py-2 text-lg md:text-xl text-palette-base/90 text-center font-serif">
                            {benefitItem.title}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}
export default Source