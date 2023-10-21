export default function Vacunas(){
    return (
        <main className="w-full flex flex-col h-screen gap-4">
            <div>
                <h2 className="text-center items-center font-bold text-3xl mt-4 sm:mr-10">
                    Citas
                </h2>
                <p className="text-center font-bold text-xs text-pink-600 mt-4 sm:mr-10">Visualiza y administra el historial de citas de tus pacientes</p>
            </div>

            <div className="p-4 rounded-lg w-1/3">
                <div className="mt-4">
                    <div className="flex items-center bg-blue-200">
                        <div className="p-4 rounded-l">
                            <span className="text-sm font-bold">Buscar paciente</span>
                        </div>
                        <input className="pl-2 w-full sm:w-1/2 border border-blue-400 rounded-md" type="text" placeholder="Nombres y apellidos" />
                        <span className="p-2 text-blue-600 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                <th className="border p-2 border-cyan-600">Edad</th>
                                <th className="border p-2 border-cyan-600">Peso</th>
                                <th className="border p-2 border-cyan-600">Vacuna</th>
                                <th className="border p-2 border-cyan-600">Próxima Visita</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* agregar filas */}
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
        </main>
    )
}