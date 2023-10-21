'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logos/logonormal.jpg"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MenuPrincipal() {
    const router = useRouter();

    const logout = () => {
        signOut({ redirect: false });
        router.push("/");
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Encabezado */}
            <div className="py-6 text-2xl font-bold leadi sm:text-2xl text-slate-900 flex flex-row gap-2 items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <Image src={Logo} className="w-12 h-12 mr-4 ml-4 rounded-xl" alt="logo" />
                    Bienestar Nic
                </div>
                <button onClick={logout} className="border border-red-500 text-red-600 text-lg p-2 rounded-xl mr-2 ml-2 hover:shadow-md hover:bg-gray-100/40 hover:bg-red-500 hover:text-white">
                    Cerrar Sesión
                </button>
            </div>
            <div className=" text-center p-4">
                <div className="py-6 text-2xl font-bold leadi sm:text-5xl bg-slate-50 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Menú</div>
                <div className="text-xl">Gestiona los datos importantes de tus pacientes</div>
            </div>


            {/* Botones */}
            <div className="flex-1 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Botón de Emergencia */}
                    <Link href="emergencia" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Emergencia
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-20 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                            <path d="M6 10h4m-2 -2v4"></path>
                        </svg>
                    </Link>

                    <Link href="Admisiones" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Adminisiones
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-20 w-20 ml-4"><path d="M27.59 22.19 26 21V5.3A3.3 3.3 0 0 0 22.7 2H10.3A3.3 3.3 0 0 0 7 5.3V11H5a1 1 0 0 0-1 1v15.07A2.94 2.94 0 0 0 6.93 30h18.14A2.94 2.94 0 0 0 28 27.07V23a1 1 0 0 0-.41-.81zM9 5.3A1.3 1.3 0 0 1 10.3 4h12.4A1.3 1.3 0 0 1 24 5.3v14.26l-11.41-8.37A1 1 0 0 0 12 11H9zm17 21.77a.93.93 0 0 1-.93.93H6.93a.93.93 0 0 1-.93-.93V13h5.67L26 23.51zM12 8a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1zm9 3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" /></svg>

                    </Link>

                    <Link href="consultaexterna" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Consulta<br />Externa
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-20 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.110 -.006h4.471z" strokeWidth="0" fill="currentColor"></path>
                            <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004"></path>
                        </svg>
                    </Link>


                    <Link href="historiales" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Historiales
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-20 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 8l0 4l2 2"></path>
                                    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
                        </svg>
                    </Link> 

                    <Link href="actualizar" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Actualizar
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit w-20 h-20 sm:ml-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                            <path d="M16 5l3 3"></path>
                        </svg>
                    </Link>

                    <Link href="vacunas" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Vacunas
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vaccine-bottle w-16 h-16 sm:ml-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M10 6v.98c0 .877 -.634 1.626 -1.5 1.77c-.866 .144 -1.5 .893 -1.5 1.77v8.48a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-8.48c0 -.877 -.634 -1.626 -1.5 -1.77a1.795 1.795 0 0 1 -1.5 -1.77v-.98"></path>
                            <path d="M7 12h10"></path>
                            <path d="M7 18h10"></path>
                            <path d="M11 15h2"></path>
                        </svg>
                    </Link>

                    <Link href="laboratorios" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Laboratorios
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cell w-16 h-16 sm:ml-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 4l-4 2v5l4 2l4 -2v-5z"></path>
                            <path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2"></path>
                            <path d="M8 13v5l4 2l4 -2v-5"></path>
                        </svg>
                    </Link>

                    <Link href="consultas" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Consultas
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-time w-16 h-16 sm:ml-6 sm:mb-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M15 3v4"></path>
                            <path d="M7 3v4"></path>
                            <path d="M3 11h16"></path>
                            <path d="M18 16.496v1.504l1 1"></path>
                        </svg>
                    </Link>

                    <Link href="Expedientes" className="text-center border-cyan-600 border p-2 rounded w-32 flex flex-col gap-2 hover:shadow-md hover:bg-gray-100/40">
                        <div className="font-bold text-sky-800">
                            Expedientes
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-files w-16 h-16 sm:ml-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                            <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};
