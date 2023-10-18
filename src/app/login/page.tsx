import './loginStyle.css'


export default function Login() {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Inicio de Sesión</title>
        </head>
        <body>
                <div className="login-container">
                    <h1>Iniciar sesión</h1>
                    <form>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input type="text" id="username" name="username" required/>

                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required/>

                        <button className="login-button">Iniciar sesión</button>
                    </form>
                </div>

        </body>
        </html>
    )
}

