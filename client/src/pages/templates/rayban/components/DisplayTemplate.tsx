import img1 from './../../../../assets/images/heroRayban.png'
import img2 from './../../../../assets/images/imageProducts.png'
import img3 from './../../../../assets/images/CheckoutRayban.png'
import img4 from './../../../../assets/images/LoginRayban.png'
import img5 from './../../../../assets/images/SignUpRayban.png'
import img6 from './../../../../assets/images/dashboard.png'



const DisplayTemplate = () => {
    return (
        <>
            <div className='ml-10'>
                <p className="sm:text-3xl  mt-0">BUILD AN ONLINE STORE</p>
                <h1 className="sm:text-5xl ">Your store ,Your way</h1>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:p-20 p-5">
                <div className='group'>
                    <img
                        className="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-80  group-hover:scale-105 transition duration-300"
                        src={img1}
                        alt=""
                    />
                </div>
                <div  className='group'>
                    <img
                        className="h-full max-w-full rounded-lg cursor-pointer hover:opacity-80  group-hover:scale-105 transition duration-300"
                        src={img2}
                        alt=""
                    />
                </div>
                <div  className='group'>
                    <img
                        className="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-80  group-hover:scale-105 transition duration-300"
                        src={img3}
                        alt=""
                    />
                </div>
                <div  className='group'>
                    <img
                        className="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-80  group-hover:scale-105 transition duration-300"
                        src={img4}
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default DisplayTemplate