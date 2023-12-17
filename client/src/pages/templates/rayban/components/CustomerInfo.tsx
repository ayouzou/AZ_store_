interface CustomerInfoProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setErrorsEmail: React.Dispatch<React.SetStateAction<string>>;
    errorsEmail: string;
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    telephone: string;
    setTelephone: React.Dispatch<React.SetStateAction<string>>;
    setErrorsTele: React.Dispatch<React.SetStateAction<string>>;
    errorsTele: string;
    errorsAddress: string;
    setErrorsAddress: React.Dispatch<React.SetStateAction<string>>;
}
const CustomerInfo: React.FC<CustomerInfoProps> = ({ email, setEmail, setErrorsEmail, errorsEmail, address, setAddress, telephone, setTelephone, setErrorsTele, errorsTele, errorsAddress, setErrorsAddress }) => {

    return (
        <>
            <div className='h-auto mt-10  w-4/12 p-5'>
                <div className='flex flex-col gap-4 mt-5'>
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="rounded-xl"
                        placeholder="xwyz@gmail.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value), setErrorsEmail('') }}
                    />
                    <p className='text-red-600'>{errorsEmail ? errorsEmail : ""}</p>
                    <div className="flex">
                        <div>
                            <label htmlFor="firstname" className="font-bold">firstname:</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="rounded-xl"
                                placeholder="jhon"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="font-bold">lastname:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="rounded-xl"
                                placeholder="doe"
                            />
                        </div>
                    </div>
                    <label htmlFor="address" className="font-bold">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="rounded-xl"
                        placeholder="New York City"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value), setErrorsAddress('') }}
                    />
                    <p className="text-red-600">{errorsAddress ? errorsAddress : ""}</p>
                    <label htmlFor="telephone" className="font-bold">Telephone:</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="rounded-xl"
                        placeholder="+212945729899"
                        value={telephone}
                        onChange={(e) => {
                            setTelephone(e.target.value), setErrorsTele('')
                        }
                        }
                    />
                    <p className='text-red-600'>{errorsTele ? errorsTele : ""}</p>
                </div>
            </div>
        </>
    )
}

export default CustomerInfo