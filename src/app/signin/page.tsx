"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png"
import HumanPic from "../../../public/HumanPic.png"
import React, { useEffect, useState, useRef } from 'react'
import Sidebar from "@/components/Sidebar";
// import { useState } from 'react';
import Papa from 'papaparse';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

    const [csvData, setCsvData] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [fileUploaded, setFileUploaded] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedValues, setSelectedValues] = useState(Array(csvData.length).fill(''));

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, rowIndex: number) => {
        const updatedSelectedValues = [...selectedValues];
        updatedSelectedValues[rowIndex] = event.target.value;
        setSelectedValues(updatedSelectedValues);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (fileUploaded) {
                toast.error('Please remove the existing file before adding a new one.');
            } else {
                //setFileUploaded(true);
                parseCSV(file);
            }
        }
    };

    const parseCSV = (file: File) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                if (results.errors.length > 0) {
                    setErrorMessage('Error parsing CSV file');
                } else {
                    setErrorMessage('');
                    setCsvData(results.data);
                    setFileUploaded(true);
                    toast.success('File uploaded successfully!');
                }
            },
            error: (error) => {
                setErrorMessage('Error parsing CSV file');
                console.error('CSV parsing error:', error);
            },
        });
    };

    const removeFile = () => {
        setCsvData([]);
        setFileUploaded(false);
        setErrorMessage('');
    };

    useEffect(() => {

    }, [setCsvData])

    console.log(csvData[0]?.name)
    const handleUploadButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const url = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div className="flex flex-row h-screen">
            <div className="w-[218px] bg-[#fff] px-5 py-9">
                {/* <div className="flex flex-row gap-3 items-center justify-center pb-5">
                    <Image src={Logo} alt="Logo Image" width={42} height={42} />
                    <h1 className="text-[24px] font-semibold text-[#000]">Base</h1>
                </div> */}
                    <Sidebar />
            </div>
            <div className="bg-[#FAFAFB] w-full px-5 py-9">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-[#000] font-semibold text-[24px]">Upload CSV</h3>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" fill="currentColor" className="bi bi-bell-fill text-[#000]" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                        </div>
                        <Image src={HumanPic} height={30} width={30} alt="small pic" />
                    </div>
                </div>

                <div className="flex items-center justify-center py-10">
                    <div className="relative bg-[#fff] flex flex-col p-4 text-gray-400 h-[360px] w-[596px] rounded-[8px]">
                        <div className="relative mb-4 justify-center flex flex-col text-gray-400 border border-gray-200 border-dashed rounded h-[85%] cursor-pointer">
                            <input
                                ref={fileInputRef}
                                accept=".csv"
                                type="file"
                                onChange={handleFileChange}
                                disabled={fileUploaded}
                                className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                            />
                            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="30"
                                    height="28"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#169154"
                                        d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"
                                    ></path>
                                    <path
                                        fill="#18482a"
                                        d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"
                                    ></path>
                                    <path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path>
                                    <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                                    <g>
                                        <path
                                            fill="#29c27f"
                                            d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"
                                        ></path>
                                        <path
                                            fill="#27663f"
                                            d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"
                                        ></path>
                                        <path
                                            fill="#19ac65"
                                            d="M29 15.003H44V24.005000000000003H29z"
                                        ></path>
                                        <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                                    </g>
                                    <path
                                        fill="#0c7238"
                                        d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"
                                    ></path>
                                </svg>
                                <p className="m-0">{fileUploaded ? csvData[0]?.name : "Drop your CSV file here or browse"}</p>
                            </div>
                            {fileUploaded && (
                                <div className="flex items-center justify-center">
                                    <h4 className="text-[10px] text-red-500 bg-black">{fileUploaded ? csvData[0]?.name : 'hi'}</h4>
                                    <button
                                        onClick={removeFile}
                                        className="text-red-500">
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            onClick={handleUploadButtonClick}
                            className="w-full text-white bg-[#605bff] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
                        >
                            Upload
                        </button>
                    </div>

                    <Toaster
                        toastOptions={{
                            success: {
                                duration: 4000,
                            },
                            error: {
                                duration: 3000,
                            },
                        }}
                    />
                </div>
                {
                    fileUploaded ? (
                        <div className="font-semibold text-[24px] text-[#000] mb-4">
                            Uploads
                        </div>
                    ) : ''
                }
                <div className="overflow-y-auto h-[400px]">
                    {csvData.length > 0 && (
                        <div className="rounded-[8px] bg-[#F5F5F5] p-3 ">
                            {/* <h3 className="text-lg font-bold mb-2">CSV Data</h3> */}
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr>
                                            {Object.keys(csvData[0]).map((key, index) => (
                                                <th className='text-[14px] text-center font-semibold text-[#000] pb-3' key={index}>{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {csvData.map((row:any, rowIndex:number) => (
                                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white rounded-[8px] h-[58px]' : 'h-[58px]'}>
                                                {Object.values(row).map((value:any, columnIndex:number) => (
                                                    <td key={columnIndex} className="px-4 py-2 text-[14px] font-normal">
                                                        {columnIndex === 3 ? (
                                                            <select value={selectedValues[rowIndex]} onChange={(e) => handleSelectChange(e, rowIndex)} 
                                                            className="text-[#000] w-[132px] h-[32px] rounded-sm outline-none">
                                                                <option value="" hidden className="flex items-center justify-center">Select Tags</option>
                                                                {value.split(',').map((element:string, index:number) => (
                                                                    <option className="bg-[#f2f2f2]" key={index} value={element.trim()}>
                                                                        {element.trim()}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        ) : columnIndex === 1 ? (
                                                            <span className="text-[#5B93FF] text-[14px] underline">{value}</span>
                                                        ) : columnIndex === 4 ? (
                                                            <span className="text-[#000] text-[14px]">{selectedValues[rowIndex]}</span>
                                                        ) : (
                                                            <span className="text-[#000] text-[14px]">{value}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                        {/* <td>{selectedValues[rowIndex]}</td> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}