import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShowCarsPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/vehicles");
        setCars(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCars();
  }, []);
  return (
    <div className="container px-10 mt-40 text-center">
        <h1 className="font-bold mb-10 text-center text-5xl">
            Catalogo de Carros
        </h1>
        <div className="flex justify-center gap-4 mb-14">
            <input
            type="text"
            className="border w-[30%] border-gray-300 rounded px-4 py-2 text-black"
            placeholder="Buscar carros"
            style={{ height: "2rem" }} // Ajustar la altura según tus necesidades
            />
            <Link
            to="/add_car"
            className="bg-green-600 rounded p-1"
            style={{ height: "2rem", width: "3rem" }}
            >
            {" "}
            {/* Ajustar la altura según tus necesidades */}+
            </Link>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow rounded p-4">
            <img
              src={car.image}
              alt={`${car.brand} ${car.name}`}
              className="mb-3"
              style={{ width: "100%", height: "150px", objectFit: "cover" }} // Ajusta el tamaño de la imagen según tus necesidades
            />
            <p className="text-black mb-3 font-bold">
              {car.brand} {car.name}
            </p>
            <Link
              className="bg-green-600 rounded p-1 w-[50%] mx-auto block"
              to={`/car/${car.id}/show`}
            >
              Ver
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
