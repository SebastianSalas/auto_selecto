import { Link } from "react-router-dom";
import carsData from '../scripts/carsData';


export default function ShowCarsPage(){

    return(
        <div className="container px-10 mt-40 text-center">
            <h1 className="font-bold mb-10 text-center text-5xl">Catalogo de Carros</h1>
            <input
                type="text"
                className="border w-[30%] border-gray-300 rounded px-4 py-2 mb-10 text-black"
                placeholder="Buscar carros"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {carsData.map((car) => (
                    <div
                        key={car.id}
                        className="bg-white shadow rounded p-4"
                    >
                        <p className="text-black mb-3 font-bold">{car.brand} {car.model}</p>
                        <Link className="bg-green-600 rounded p-1 w-[50%] mx-auto block" to={`/car/${car.id}`} >Ver</Link>
                    </div>
                ))}
            </div>
    </div>
    )
}