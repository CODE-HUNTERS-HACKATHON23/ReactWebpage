import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-pink-500">Acerca de nosotros</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equipo de Desarrollo de Bienestar Nic</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                El equipo de desarrollo detrás de Bienestar Nic es un conjunto altamente calificado de profesionales comprometidos con la creación de una aplicación que promueve el bienestar y la salud en Nicaragua.
                                <p className="mt-6 text-xl leading-8 text-gray-700"></p>
                                <p>Con una combinación única de experiencia en desarrollo de software, diseño de interfaces, y conocimientos en salud, este equipo se ha dedicado a proporcionar a la comunidad nicaragüense una solución innovadora y confiable para mejorar su calidad de vida.</p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:ml-12 lg:mt-12 p-12 lg:top-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="w-full max-w-[48rem] sm:max-w-[57rem] mx-auto">
                        <img
                            className="w-full h-auto rounded-xl bg-cyan-500 shadow-xl ring-1 ring-neutral-900"
                            src="./renders/render.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="lg:ml-12 lg:mt-12 p-12 lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:overflow-hidden">
                    <div className="w-full max-w-[48rem] sm:max-w-[57rem] mx-auto">
                        <img
                            className="w-full h-auto rounded-xl bg-cyan-500 shadow-xl ring-1 ring-neutral-900"
                            src="./renders/render2.jpg"
                            alt=""
                        />
                    </div>
                </div>

  


                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:mb-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Nuestro equipo se destaca por su pasión por el bienestar y la salud, así como por su profundo conocimiento de las necesidades y desafíos que enfrenta la población de Nicaragua en estos aspectos. Esto se refleja en cada aspecto de la aplicación Bienestar Nic, desde su diseño intuitivo y amigable hasta sus funciones específicas diseñadas para abordar las preocupaciones de salud y bienestar de la región.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-pink-500" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Actualizaciones y mejora continua.</strong>  Nuestro equipo se compromete a mantener la aplicación al día, incorporando constantemente nuevas características y funcionalidades basadas en las necesidades cambiantes de la comunidad.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-pink-500" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Seguridad y confianza.</strong> En Bienestar Nic, valoramos la seguridad y la confianza de nuestros usuarios. Nos comprometemos a proteger tus datos personales y a ofrecerte una experiencia confiable y libre de preocupaciones. Utilizamos las mejores prácticas de seguridad de datos y cifrado para garantizar que tu información esté siempre protegida.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-pink-500" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Acceso en la nube .</strong> Te ofrecemos la capacidad de acceder y gestionar tus expedientes de salud de manera segura y conveniente. Mantén un registro organizado de tu historial médico y datos relevantes para tu bienestar.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Valoramos el feedback de nuestros usuarios y estamos dispuestos a trabajar de cerca con la comunidad para mejorar la aplicación constantemente.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Necesita algo? No hay problema.</h2>
                            <p className="mt-6">
                                Nuestro equipo de desarrollo se distingue por su experiencia, compromiso y enfoque en las necesidades específicas de la población nicaragüense. Puedes confiar en nosotros y en nuestra aplicación, Bienestar Nic, para brindarte las herramientas necesarias para mejorar tu salud y bienestar, así como para promover una vida más saludable en Nicaragua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}