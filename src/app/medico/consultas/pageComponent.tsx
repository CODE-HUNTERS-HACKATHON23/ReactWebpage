'use client';

import { Client } from "@/lib/rest/client";
import { components } from "@/lib/rest/schema";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageComponent(props: {
    data: components["schemas"]["ConsultasInPacienteDTO"][] | null | undefined,
}) {
    const router = useRouter();
    const [nombre, setNombre] = useState<string>('')

    const makeRequest = async () => {
        const nombres = nombre.split(' ').slice(0, 2).join(' ')
        const apellidos = nombre.split(' ').slice(2).join(' ')

        router.push(`/medico/consultas?nombres=${nombres}&apellidos=${apellidos}`)
    }

    return (
        <main className="w-full flex flex-col h-screen gap-4 p-4">
        <div>
            <h2 className="text-center items-center font-bold text-3xl mt-4 sm:mr-10">
                Consultas
            </h2>
            <p className="text-center font-bold text-xs text-pink-600 mt-4 sm:mr-10">Visualiza y administra el historial de consulta de tus pacientes</p>
        </div>

        <div className="p-4 rounded-lg w-2/3 lg:w-1/3">
            <div className="mt-4">
                <div className="flex items-center bg-blue-200">
                    <div className="p-4 rounded-l">
                        <span className="text-sm font-bold">Buscar paciente</span>
                    </div>
                    <input className="pl-2 w-full sm:w-full border border-blue-400 rounded-md" type="text" placeholder="Nombres y apellidos" onChange={(e) => setNombre(e.target.value)} />
                    <span className="p-2 text-blue-600 rounded-r-md cursor-pointer" onClick={makeRequest}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>

            <div className="flex flex-col items-center justify-end mt-4">
                <table className="w-full overflow-x-auto border border-collapse border-cyan-600">
                    <thead>
                        <tr>
                            <th className="border p-2 border-cyan-600">Fecha</th>
                            <th className="border p-2 border-cyan-600">Evaluación</th>
                            <th className="border p-2 border-cyan-600">Planes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data?.map((consulta, index) => (
                            <tr key={index} className="bg-gray-100">
                                <td className="border p-2 border-cyan-600 text-center">{new Date(consulta.fecha).toUTCString()}</td>
                                <td className="border p-2 border-cyan-600 text-center">{consulta.evaluacion}</td>
                                <td className="border p-2 border-cyan-600 text-center">{consulta.planes}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
    </main>
    )
}