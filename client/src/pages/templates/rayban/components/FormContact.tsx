
const FormContact = () => {
    return (
        <div className="  bg-gradient-to-r from-neutral-50 to-neutral-300 ">
            <form className="max-w-3xl mx-auto">
                <div className="">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">
                        Your Email
                    </label>
                    <div className="relative mb-5">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="email-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full ps-10 p-2.5 "
                            placeholder="ayoub@gmail.com"
                        />
                    </div>
                    <div className="my-10">
                        <label htmlFor="message" className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black "
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <button type="submit" className="text-white font-serif bg-black hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send a message</button>
                </div>
            </form>
        </div>
    );

}

export default FormContact