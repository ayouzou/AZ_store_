import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import colorSlice, { addToColor } from '../../redux/colorSlice';
import { addToColorSidebar } from '../../redux/sidebarSlice';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modaldash: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  const dispatch = useDispatch()
  const colorList = useSelector((state) => state.color.value)
  const colorListSidbar = useSelector((state) => state.colorSidbar.value)

  const [color, setColor] = React.useState("white")

  return (
    <div className={`fixed inset-0  overflow-hidden z-50 ${isOpen ? 'overflow-x-hidden' : ''}`}>
      <div className="flex items-end justify-end  pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div
          className={`fixed right-2 top-20 h-[80vh] w-96 bg-white rounded-3xl shadow-2xl overflow-y-auto transform transition-transform ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Your modal content goes here */}
          </div>
          <div className="px-4 py-3 sm:px-6 justify-between sm:flex sm:flex-row">
            <div className={`text-black `}>
              <h1 className='text-xl font-bold'>Dashboard Configurator</h1>
              <h1 className='text-start'>See our dashboard options.</h1>
            </div>
            <XMarkIcon onClick={onClose} className="h-6 w-6 hover:bg-slate-200 rounded-2xl p-1 cursor-pointer " />
          </div>

          <div className={` text-black px-4 py-3 mt-8 `} >
            <h1 className='font-bold text-start'>Sidenav Colors</h1>
            <div className="flex items-center mt-3 gap-8">
              <span className='text-black bg-zinc-800 p-2 rounded-bl-full h-7 w-7  cursor-pointer' onClick={() => dispatch(addToColor('zinc-800'))}></span>
              <span className=' bg-yellow-500 p-2 rounded-bl-full h-7 w-7 cursor-pointer' onClick={() => dispatch(addToColor('yellow-500'))}></span>
              <span className='text-white bg-green-700 p-2 rounded-bl-full h-7 w-7 cursor-pointer' onClick={() => dispatch(addToColor('green-700'))}></span>
              <span className='text-white bg-sky-700 p-2 rounded-bl-full h-7 w-7 cursor-pointer' onClick={() => dispatch(addToColor('sky-700'))}></span>
              <span className='text-white bg-lime-600 p-2 rounded-bl-full h-7 w-7 cursor-pointer' onClick={() => dispatch(addToColor('lime-600'))}></span>
              <span className='text-white bg-slate-200 p-2 rounded-bl-full h-7 w-7 cursor-pointer' onClick={() => dispatch(addToColor('slate-200'))}></span>
            </div>
          </div>
          <div className={` text-black px-4 py-3 mt-8 mb-10`}>
            <h1 className='text-xl font-bold text-left'>Dashboard Configurator</h1>
            <h1 className='text-start mt-2'>Choose between 3 different sidenav types.</h1>
            <div className='flex gap-2 mt-4'>
              <button className="bg-gray-950 hover:bg-gray-950 text-white font-bold py-2 px-6 rounded-full" onClick={()=>dispatch(addToColorSidebar("zinc-800 "))}>
                dark
              </button>
              <button className="bg-transparent  text-black font-bold py-2  border rounded-full px-12" onClick={()=>dispatch(addToColorSidebar("transparent"))}>
                transparent
              </button>
              <button className="bg-indigo-100  text-black border font-bold py-2 px-4 rounded-full" onClick={()=>dispatch(addToColorSidebar("normal"))}>
                white
              </button>
            </div>
          </div>

          <hr />
          <div className='flex justify-around mt-5'>
            <h1 className='text-xl font-bold'>Navbar Fixed</h1>
            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modaldash;
