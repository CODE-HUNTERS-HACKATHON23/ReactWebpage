export default function Emergencia() {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Emergencia</title>
            </head>
            <body>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center font-bold text-xl mt-4 sm:mr-10">Emergencia</h2>
                </div>

                <div className="p-4 rounded-lg">
                    <div className="mt-4">
                        <div className="flex items-center bg-blue-200">
                            <div className="p-4 rounded-l">
                                <span className="text-sm font-bold">Buscar paciente</span>
                            </div>
                            <input className="pl-2 w-full sm:w-1/2 border border-blue-400 rounded-r" type="text" placeholder="Nombres y apellidos" />
                            <span className="p-2 text-blue-600 rounded-r-md">
                               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                <path d="M21 21l-6 -6"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="mt-4 sm:flex items-center">
                            <div className="sm:ml-4">
                                <span className="font-bold text-sm">Establecimiento de salud:</span>
                            </div>
                            <input className="sm:ml-2 sm:w-1/2 border border-blue-400 rounded" type="text" />
                            <div className="ml-20">
                                <span className="font-bold text-sm ml-20">SILAIS:</span>
                            </div>
                            <input className="ml-2 sm:w-1/2 border border-blue-400 rounded" />
                        </div>

                        <div className="flex flex-col items-center ">
                            <h3 className="font-bold text-xl mt-8 sm:mr-20">Evolución y tratamiento</h3>
                            <table className="w-full overflow-x-auto border border-collapse border-pink-500">
                                <thead>
                                    <tr>
                                        <th className="border p-2 text-pink-600">Fecha y hora</th>
                                        <th className="border p-2 text-pink-600">Evolución</th>
                                        <th className="border p-2 text-pink-600">Planes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* agregar filas */}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center mt-8">
                            <span className="text-pink-600 max-w-6">Fecha de egreso</span>
                            <span className="ml-4 text-pink-600 sm:ml-40">Hora de egreso</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-pink-600">Diagnóstico general</span>
                            <span className="text-pink-600 sm:ml-40 max-w-5">Responsable que retira al usuario</span>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
