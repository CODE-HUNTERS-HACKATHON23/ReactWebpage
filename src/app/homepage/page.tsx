import './hmStyle.css'
import Link from 'next/link'

export default function Homepage() {
    return (
        <html lang="en">
        <head>
            <title>HomePage</title>
        </head>
            <body>
                <div>
                    <div className='navbar'>
                        <h3>Bienestar Nic</h3> 
                        <nav>
                            <ul>
                                <li className='nav-item'>
                                    <Link href='/aboutUs'>Sobre nosotros</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/application'>Aplicación</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/about'>Acerca de</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/contact'>Contacto</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className='content'>
                        <h1>Gestiona y administra informacion de manera rápida y segura.</h1>
                        <h6> Bienvenido a los servicios administrativos de Bienestar Nic, gracias por elegirnos para cuidar la salud de tus pacientes,
                            por favor inicia sesión para manejar tus datos.</h6>
                    </div>

                    <Link href='/login' className='linkButton'>Iniciar sesión</Link>
                </div>
        </body>
        </html>
    )
}
