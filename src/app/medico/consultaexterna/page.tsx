export default function ConsultaExterna() {
    return (
        <div className="flex flex-col justify-center">
            <div>
                <h2 className="text-center font-bold text-xl mt-4 sm:mr-10">
                    Consulta Externa
                </h2>
                <p className="text-center font-bold text-xs text-pink-600 mt-4 sm:mr-10">Administra y visualiza tus pacientes que han pasado por consulta externa</p>
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
                <div className="mb-2 sm:mr-2">
                    <span className="text-sm font-bold">Nombre del centro hospitalario:</span>
                     <span className="p-2 text-blue-600 rounded-r-md">
                               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                <path d="M21 21l-6 -6"></path>
                                </svg>
                            </span>
                </div>
                <div className="mb-2 sm:flex-1">
                    <input
                        className="pl-2 w-full border border-blue-400 rounded-r"
                        type="text"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center mt-4">
                <table className="w-full overflow-x-auto border border-collapse border-cyan-600">
                    <thead>
                        <tr>
                            <th className="border p-2 border-cyan-600">Fecha</th>
                            <th className="border p-2 border-cyan-600">Nombre Paciente</th>
                            <th className="border p-2 border-cyan-600">Edad</th>
                            <th className="border p-2 border-cyan-600">Sexo</th>
                            <th className="border p-2 border-cyan-600">1' vez o subsecuente</th>
                            <th className="border p-2 border-cyan-600">Diagnóstico Clínico</th>
                            <th className="border p-2 border-cyan-600">Firma Paciente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* agregar filas */}
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
