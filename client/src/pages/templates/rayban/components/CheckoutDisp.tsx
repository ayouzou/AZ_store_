import checkoutfirst from '../../../../assets/images/firstchekout.png'
import checkoutsecond from '../../../../assets/images/secondCheckout.png'
import checkoutthird from '../../../../assets/images/thirdCheckout.png'
import checkoutfour from '../../../../assets/images/fourCheckout.png'

const CheckoutDisp = () => {
    return (
        <div className='flex items-center mx-auto'>
            <div className='shadow-xl p-5'>
                <img src={checkoutfirst} alt="" />
            </div>
            <div>
                <h1>FAST, RELIABLE CHECKOUT</h1>
                <p>The best-converting checkout on the planet</p>
            </div>
        </div>
    )
}

export default CheckoutDisp