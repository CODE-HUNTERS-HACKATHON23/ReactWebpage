'use client';

import Link from "next/link"
import Logo from "../../../../public/logos/logonormal.jpg"
import Image from "next/image";

export default function Pacientes() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="min-h-screen flex flex-col">
                <div className="py-6 text-2xl font-bold leadi sm:text-2xl text-slate-900 flex flex-row gap-2 items-center justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={Logo} className="w-12 h-12 mr-4 ml-4 rounded-xl" alt="logo" />
                        Bienestar Nic
                    </div>
                </div>
            <div className=" text-center p-4">
                <div className="py-6 text-2xl font-bold leadi sm:text-5xl bg-slate-50 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Pacientes</div>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-20 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>

                <div className="flex-1 flex justify-center items-center my-11">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                   </div>
                </div>
            </div>
        </div>
        
    )
}