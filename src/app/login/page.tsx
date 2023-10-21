'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface ThisFormElements extends HTMLFormElement {
   readonly elements: FormElements
}
export default function Login() {
    const [error, setError] = useState('');
    const router = useRouter();

    const submit = async (e: React.FormEvent<ThisFormElements>) => {
        e.preventDefault();

        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;

        const data = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });


        if (data?.error) {
            setError(data.error);
        }

        if(data && data.ok) {
            router.push('/medico/menu')
        }
        
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gradient-to-r from-pink-700 to-blue-500 md:to-opacity-0">
            <div className="w-full max-w-md px-4 py-12 bg-slate-50 rounded-lg sm:px-6 md:px-8 lg:px-10">
                <div className="bg-cyan-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                    <img
                        src="./logos/logochiquito.png"
                        alt="Logo Bienestar Nic"
                        className="h-auto w-auto max-h-12 max-w-12 rounded-full"
                    />
                </div>
                <div className="text-center text-xl font-light text-gray-600 sm:text-2xl dark:text-black">
                    <h2 className="font-bold mt-4">Bienestar Nic</h2>
                </div>
                <div className="text-center text-sm font-light text-gray-600 sm:text-base dark:text-black">
                    <h2 className="font-bold mt-4">Iniciar Sesión</h2>
                </div>
                <div className="mt-8">
                    {error.length > 0 && (
                        <div className="text-red-500 mb-4 text-center">{error}</div>
                    )}
                    <form onSubmit={submit}>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative">
                                <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg
                                        width="15"
                                        height="15"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                         <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>

                                    <input
                                    type="text"
                                    id="email"
                                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Tu correo"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative">
                                <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg
                                        width="15"
                                        height="15"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                    <input
                                    type="password"
                                    id="password"
                                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Tu contraseña"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <div className="flex relative">
                                <Link href="/forgetpassword" className='text-blue-800 text-xs'>Has olvidado tu contraseña?</Link>
                            </div>
                        </div>
                        <div className="flex w-full justify-center sm:justify-start">
                            <button
                                type="submit"
                                className="py-2 px-4 sm:px-20 rounded-lg overflow-hidden bg-pink-500 p-4 ml-0 sm:ml-12 text-slate-50"
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}