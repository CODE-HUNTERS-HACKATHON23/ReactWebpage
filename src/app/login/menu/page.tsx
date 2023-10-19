import Link from "next/link";

const MenuPage: React.FC = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
            {/* Encabezado */}
            <div className="bg-blue-500 text-white text-center p-4">
                <div className="text-2xl">Bienestar Nic</div>
                <div className="text-lg">Menu</div>
                <div className="text-lg">Gestiona los datos importantes de tus pacientes</div>
            </div>

            {/* Botones */}
            <div className="flex-1 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-6">
                    {/* Botón de Emergencia */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Emergencia</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-20 h-20 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                <path d="M6 10h4m-2 -2v4"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Botón de Admisiones */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Admisiones</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
                                <path d="M8 8l4 0"></path>
                                <path d="M8 12l4 0"></path>
                                <path d="M8 16l4 0"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Botón de Consultas Externas */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Consultas Externas</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" stroke-width="0" fill="currentColor"></path>
                                <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" stroke-width="0" fill="currentColor"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Botón de Cirugías */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Cirugías</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-hospital" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21l18 0"></path>
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                <path d="M10 9l4 0"></path>
                                <path d="M12 7l0 4"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Botón de Pacientes */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Pacientes</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Botón de Historiales */}
                    <div className="text-center">
                        <Link href="#">
                            <div>Historiales</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-history" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 8l0 4l2 2"></path>
                                <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
