import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4 bg-gradient-to-r from-pink-700 via-cyan-600 to-cyan-500 md:to-opacity-0 22% h-auto">
      <nav className='flex flex-col md:flex-row justify-between text-white p-2 items-center'>
        <h1 className="text-2xl text-center md:text-left">Bienestar Nic</h1>
        <div className='flex flex-row gap-6'>
          <Link href='/aplicacion' className="hover:text-gray-600 transition duration-150">Aplicación</Link>
          <Link href='/acerca' className="hover:text-gray-600 transition duration-150">Acerca de</Link>
          <Link href='/contacto' className="hover:text-gray-600 transition duration-150">Contacto</Link>
        </div>
      </nav>

      <div className='flex flex-col md:flex-row items-center justify-center md:h-screen w-full gap-2'>
        <div className="w-full md:w-2/3 p-2 text-center md:text-left">
          <h1 className='mt-4 leading-8 text-3xl md:text-5xl font-medium text-white'>
            Gestiona y administra<br />información de manera <br />rápida y segura
          </h1>
          <p className="my-4 text-white text-sm">
            Bienvenido a los servicios administrativos de Bienestar Nic, aquí podrás gestionar y administrar la información de manera rápida y segura.
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center my-2">
            <Link href='/login' className="bg-[#E91E5A] text-white px-4 py-2 rounded-full">Iniciar sesión</Link>
            <Link href='/acerca' className="bg-transparent border-white border text-white px-4 py-2 rounded-full">Ver más</Link>
          </div>
        </div>
        <div className="w-1/3"></div>
        <img src="./logos/Logoclear.png" alt="" className="mx-auto w-1/2 max-w-full" />
      </div>
    </main>
  );
}
