import Navbar from '../ui/Navbar'



export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-white w-full h-full'>
            {/* <Navbar/> */}
            {children}
        </div>
    )
}
