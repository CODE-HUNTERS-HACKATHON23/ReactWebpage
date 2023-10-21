

function Apppage() {
    return (
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text sm:text-3xl">
        Descarga ya nuestra App
      </h2>

      <p className="max-w-md mx-auto mt-4 text-neutral-900">
      Con Bienestar Nic disfruta de una experiencia única para tu bienestar y comodidad. Podrás acceder a una amplia gama de servicios y recursos diseñados para mejorar tu calidad de vida. Desde consejos de salud hasta herramientas de seguimiento de tu bienestar, nuestra app tiene todo lo que necesitas. ¡No esperes más, mejora tu bienestar hoy mismo descargando nuestra app!"
      </p>
    </header>

    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="./rendersPNG/render1.png"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Android 
            </h3>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="./rendersPNG/render3.png"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Tablets
            </h3>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="./rendersPNG/render2.png"
            alt=""
            width="200"
            height="300" 
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              iOS
            </h3>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="./rendersPNG/render4.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Web
            </h3>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
    )

}

export default Apppage;