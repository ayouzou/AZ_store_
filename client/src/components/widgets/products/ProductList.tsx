import { ArrowSmallDownIcon, DocumentDuplicateIcon, EyeIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import ModalUpdateProduct from "../../ui/ModalForm";
import Table from "../../ui/Table";
const ProductList = () => {
    // const [products, setProducts] = useState<Record<string, string>[]>([])
    const [open, setOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [openModel2, setOpenModel2] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false)
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const headings = [
        { key: 'Images', value: 'images' },
        { key: 'Name', value: 'name' },
        { key: 'Description', value: 'Description' },
        { key: 'Price', value: 'Price' },
        { key: 'Status', value: 'Status' },
        { key: 'Active', value: 'Active' },
        { key: 'Action', value: 'Action' },
    ];

    function getAvailabilityStatusColor(status: string) {
        if (status === 'In Stock') {
            return 'text-green-500  ';
        } else if (status === 'Out of Stock') {
            return 'text-orange-500';
        } else if (status === 'Limited Supply') {
            return 'text-red-700';
        } else {
            return '';
        }
    }
    const handleCheckboxChange = (itemId: string) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
            //   showToast()
        } else {
            setSelectedItems([...selectedItems, itemId]);
            showToast()
        }
    };
    const showToast = () => {
        toast.success(`${selectedItems.length} item(s) selected`, {
            position: "top-center",
        });
    };

    return (
        <>
            <div className="bg-white container mx-auto py-6 px-4">
                <div className="mb-4 flex justify-between items-center">
                    <div className="flex-1 pr-4">
                        <div className="relative md:w-1/3">
                            <input type="search" className="bg-white w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium " placeholder="Search..." />
                            <div className=" absolute top-0 left-0 inline-flex items-center p-2">
                                <MagnifyingGlassIcon className='w-6 h-6 stroke-gray-400 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="shadow rounded-lg flex">
                            <div className="relative">
                                <button onClick={() => setOpen(!open)} className="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4">
                                    <EyeIcon className="w-6 h-6 md:hidden text-gray-400" />
                                    <span className="hidden md:block">Display</span>
                                    <ArrowSmallDownIcon className="h-6 w-6 text-gray-500" />
                                </button>
                                <div className={`${open ? 'block' : 'hidden'} z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden`}>
                                    
                                    {/* {headings.map((heading) => (
                                        <label className="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2" key={heading.key}>
                                            <div className="text-teal-600 mr-3">
                                                <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline" />
                                            </div>
                                            <div className="select-none text-gray-700">{heading.value}</div>
                                        </label>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative" style={{ height: '60vh' }} >
                    <Table headings={headings}  />
                </div> */}
            </div>
            <Modal open={openModel} setOpen={setOpenModel} title="Alert" description="Are you sure you want to delete this Product?" action={() => console.log("deleted")} cancel="Cancel" />
            <Modal open={openModel2} setOpen={setOpenModel2} title="News" description="Are you sure you want to visit the store to see the product" action={() => console.log("visit")} cancel="Cancel" />
            {/* <ModalUpdateProduct openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} action={() => console.log("update product")} /> */}

        </>
    );
};

export default ProductList;
