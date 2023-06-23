import VideoInical from "../assets/videos/video-inicial.webm";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>
        <img className="h-12" src="#" alt="Concesionario de Autos" />
      </div>

      <nav>
        <ul className="flex text-sm text-white [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#vehiculos">Vehículos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex text-sm text-white [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <Link to="/login">Iniciar Sesion</Link>
          </li>
          <li>
            <a href="#vehiculos">Registrarse</a>
          </li>
        </ul>
      </nav>

      <main className="relative w-full h-screen overflow-auto">
        <section className="text-center h-screen w-screen relative overflow-hidden">
          <div className="z-30 relative h-full flex flex-col ">
            <header>
              <h2 className="text-white pt-40 text-4xl font-medium mb-3">
                Bienvenido a AUTO SELECTO
              </h2>
              <p className="text-white text-sm">
                Tenemos una amplia selección de vehículos de calidad.
              </p>
            </header>

            <footer className="flex flex-col flex-grow justify-end pb-24">
              <div>
                <a
                  className="border-2 border-white bg-white/5 backdrop-blur-3xl text-sm rounded font-medium px-6 py-2 inline-block"
                  href="#"
                >
                  Ver Vehículos Disponibles
                </a>
              </div>
            </footer>
          </div>

          <div className="absolute top-0 bottom-0 z-10 opacity-50 h-full w-full">
            <video
              loop
              muted
              autoPlay
              className="object-cover object-center h-full w-full"
            >
              <source src={VideoInical} />
            </video>
          </div>
        </section>
        <section id="vehiculos">
          <h2 className="text-2xl font-bold mb-4">Nuestros Vehículos</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-2">Vehículo 1</h3>
              <p className="text-gray-600">Descripción del vehículo.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-2">Vehículo 2</h3>
              <p className="text-gray-600">Descripción del vehículo.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-2">Vehículo 3</h3>
              <p className="text-gray-600">Descripción del vehículo.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
