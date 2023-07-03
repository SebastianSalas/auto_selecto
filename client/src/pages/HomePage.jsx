import { Link } from "react-router-dom";
import VideoInical from "../assets/videos/video-inicial.webm";

export default function HomePage() {
  return (
    <>
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
                <Link to='/show_cars' className="border-2 border-white bg-white/5 backdrop-blur-3xl text-sm rounded font-medium px-6 py-2 inline-block">
                  Ver vehiculos disponibles
                </Link>
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
      </main>
    </>
  );
}
