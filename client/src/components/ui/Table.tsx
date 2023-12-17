import { useState } from 'react'
import toast from 'react-hot-toast';
import Loading from './Loading';
import PaginationTable from '../widgets/products/PaginationTable';

export type Action = {
    title: string,
    icon: React.ReactNode,
    action: (itemId: string) => void
}

const Table = ({ headings, data, isLoading, actions }: {
    headings: Record<string, string> | undefined
    data: Record<string, string | any>[] | null
    isLoading: boolean,
    actions?: Action[]
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [openModel, setOpenModel] = useState(false);
    console.log(headings)
    if (isLoading) return <div className="flex justify-center items-center"><Loading /></div>
    const handleCheckboxChange = (itemId: string) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
            showToast()
        }
    };
    const showToast = () => {
        toast.success(`${selectedItems.length + 1} item(s) selected`, {
            position: "top-center",
        });
    };
    return (
        <div>
            <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                <thead>
                    <tr className="text-left">
                        <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                            <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                                <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline" />
                            </label>
                        </th>
                        {headings && Object.entries(headings).map(([key, value]) => (
                            <th
                                className={`bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider text-left uppercase text-xs ${key}`}
                                key={key}
                            >
                                {value}
                            </th>
                        ))}
                        {actions && <th
                            className={`bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider text-left uppercase text-xs`}
                        >
                            Actions
                        </th>}
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item) => (
                        <tr key={item._id} className="h-16 w-full border-dashed border-t border-gray-200 px-3">

                            <td className="border-dashed border-t border-gray-200 px-5">
                                <input className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline" checked={selectedItems.includes(item._id as string)}
                                    onChange={() => handleCheckboxChange(item._id as string)} type="checkbox" name={item._id} id={item._id} />
                            </td>
                            {headings && Object.keys(headings).map((key) => {
                                return (
                                    <td key={key} className='py-2'>{item[key]}</td>
                                )
                            })}
                            {actions && <td className="my-2 py-2 gap-4 flex items-center">
                                {actions.map((action) => (
                                    <button key={action.title} onClick={() => action.action(item._id as string)}>
                                        {action.icon}
                                    </button>
                                ))}
                            </td>
                            }
                        </tr>
                    )) : null}
                </tbody>
            </table>
       
        </div>
    )
}
export default Table