export function StoreCard({ id, name, description, logo }: Readonly<{
    id: string,
    name: string,
    description: string
    logo: string,
}>) {
    return (
        <li className="flex  gap-x-6 py-5 mb-4 gap-3 ">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50 object-cover" src={logo} alt="" />
            <div className="flex w-full gap-x-4 rounded-tl-3xl p-5 bg-indigo-300 shadow-2xl  hover:-translate-y-1 hover:scale-60 hover:bg-indigo-200 duration-500">
                <div className="min-w-0 flex-auto ">
                    <p className="text-sm font-bold leading-6 text-gray-900">{name}</p>
                    <p className="mt-1 truncate text-sm font-normal leading-5 text-zinc-800">{description}</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-lg leading-6 text-gray-900">20K visits/1 day</p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-sm leading-5 text-gray-500">Active</p>
                    </div>
                </div>
            </div>

        </li>
    );
}