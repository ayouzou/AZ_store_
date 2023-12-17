"use client";
import React, { useEffect, useRef, useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { FieldError, FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { twMerge } from "tailwind-merge";


interface Props {
    name: string
    id?: string
    label?: string
    placeholder?: string
    validation?: RegisterOptions<any, any> | undefined
    defaultValue?: string
    errors?: FieldErrors<Record<string, any>>;
    type?: string
    setUploadedFilesSrc?: React.Dispatch<React.SetStateAction<string[]>>
}



const FileUploader = ({ id, name, placeholder, setUploadedFilesSrc }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [blobs, setBlobs] = useState<string[]>();
    const handleClick = () => {
        ref.current?.click();
    };

    async function uploadImage(file: File) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'craabu0n');

        try {
            setUploadingImg(true);
            const res = await fetch("https://api.cloudinary.com/v1_1/dbtwal7ju/image/upload", {
                method: "post",
                body: data,
            });
            const urlData: Record<string, string> = await res.json();
            setUploadingImg(false);
            console.log('url data', urlData)

            if (setUploadedFilesSrc) {
                setUploadedFilesSrc((prev) => [...(prev ?? []), urlData.secure_url])
            }
            return urlData
        } catch (e) {
            setUploadingImg(false)
            console.log(e)
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.currentTarget.files ?? []);
        setSelectedFiles(files);
        console.log('files, ', e.target.files)
        await Promise.all(files.map(file => uploadImage(file)));
        setBlobs((prev) => [...(prev ?? []), ...files.map(file => URL.createObjectURL(file))]);
    };

    useEffect(() => {
        return () => {
            setUploadedFilesSrc?.([])
            setBlobs?.([])
        }
    }, [])

    return (
        <div>
            <div
                onClick={handleClick}
                className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
                <CloudArrowUpIcon className="w-6 h-6" />
                <span>Choose some files to upload</span>
                <input
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    type="file"
                    ref={ref}
                    className="hidden"
                    onChange={handleChange}

                />
            </div>
            {/* 6. display selected files */}
            {!!selectedFiles.length && (
                <div className="p-4 mt-4 bg-violet-50 overflow-hidden text-ellipsis">
                    <p>Selected Files:</p>
                    {selectedFiles.map((file, i) => {
                        return (
                            <span key={i} className="flex flex-wrap gap-2 text-violet-500 whitespace-nowrap">
                                {blobs?.map((blob, i) => {
                                    return (

                                        <img
                                            key={i}
                                            src={blob}
                                            className={twMerge('w-20 h-20 object-cover rounded-lg', uploadingImg ? 'opacity-50' : 'opacity-100')}
                                        />

                                    )
                                }
                                )}
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FileUploader;