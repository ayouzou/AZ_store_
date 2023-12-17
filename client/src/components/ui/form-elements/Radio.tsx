import { get } from 'lodash';
import React from 'react'
import { FieldError, FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
    name: string
    id?: string
    label: string
    placeholder?: string
    validation?: RegisterOptions<any, any> | undefined
    value?: string
    register: UseFormRegister<any>;
    errors?: FieldErrors<Record<string, any>>;
    type?: string
}
export default function Radio({ id, name, type, placeholder, validation, register, errors, label, value }: Props) {
    const error = get(errors, name);
    const errorMessage = getErrorMessage(label, error as FieldError);
    return (
        <div className="flex items-center mb-4">
            <input id="default-radio-1" type="radio" {...register(name, validation)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value={value} />
            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            {errors && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorMessage}</p>)}
        </div>)
}

const getErrorMessage = (
    label: string,
    error: FieldError | undefined
) => {
    if (['required', 'custom'].includes(error?.type as string)) {
        return `${label?.charAt(0).toUpperCase() + label?.slice(1)} is required`;
    } else if (error?.type === 'pattern') {
        return `${label?.charAt(0).toUpperCase() + label?.slice(1)} is not valid`;
    } else if (error?.type === 'minLength') {
        return `${label?.charAt(0).toUpperCase() + label?.slice(1)} must be at least ${error.types?.minLength?.toString() || ""} characters`;
    }
    else if (error?.type === 'maxLength') {
        return `${label?.charAt(0).toUpperCase() + label?.slice(1)} must be at smaller ${error.types?.maxLength?.toString() || ""} characters`;
    }
    return '';
};