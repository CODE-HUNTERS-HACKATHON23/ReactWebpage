 export default function HistorialClinico() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <p className="text-xs">Bienestar Nic</p>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-center font-bold text-xl mt-4 sm:mr-10">Historial Clínico</h2>
                <p className="text-center font-bold text-xs text-pink-600 mt-4 sm:mr-10">Visualiza y administra clinico de tus pacientes</p>
            </div>

            <div className="p-4 rounded-t-sm bg-blue-200 w-1/4 ml-2">
                <span className="text-sm font-bold ml-20">Buscar paciente</span>
            </div>

            <div className="flex items-center w-1/4 rounded-b-md ml-2 bg-blue-200">
                <input className="pl-2 w-full sm:w-1/2 border border-blue-400 rounded-r ml-14 mb-8" type="text" placeholder="Nombres y apellidos" />
                <span className="p-2 text-blue-600 rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search mb-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                </span>
            </div>

            <div className="flex justify-end">
                <span className="mr-4">Nombre del paciente</span>
            </div>
        </div>
    )
}