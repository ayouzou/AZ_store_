import React from 'react'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
interface Props {
    name: string
    id?: string
    label: string
    placeholder?: string
    validation?: RegisterOptions<any, any> | undefined
    defaultValue?: string
    register: UseFormRegister<any>;
    errors?: FieldErrors<Record<string, any>>;
}
export default function TextArea({ id, name, placeholder, validation, defaultValue, register, errors, label }: Props) {
    return (
        <div className=''>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <textarea rows={4} id={id}
                placeholder={placeholder} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register(name, validation)}
                defaultValue={defaultValue}></textarea>

        </div>
    )
}
