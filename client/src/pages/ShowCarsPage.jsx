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

  // ------------- SEARCH ----------------
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8000/api/search_vehicle/?search=${searchQuery}`
      );
      setCars(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="px-10 mt-40 text-center">
      <h1 className="font-bold mb-10 text-center text-5xl">
        Catalogo de Carros
      </h1>
      <div className="flex justify-center gap-4 mb-14">
        <form onSubmit={handleSearch}>
          <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
            <input
              type="text"
              className="block w-full flex-1 py-2 px-3 focus:outline-none text-black"
              placeholder="Realiza una búsqueda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="m-1 inline-flex cursor-pointer items-center rounded-md bg-gray-600 px-2 py-2 hover:bg-gray-700"
            >
              <svg
                className="text-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"
                />
              </svg>
            </button>
          </div>
        </form>
        <Link
          to="/add_car"
          className="bg-green-600 rounded p-1 flex justify-center items-center hover:bg-green-700"
          style={{ height: "3.4rem", width: "3rem", fontSize: "1.3rem" }}
        >
          +{" "}
          {/* Ajusta la altura, anchura y tamaño de fuente según tus necesidades */}
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
              className="bg-green-600 rounded p-1 w-[50%] mx-auto block hover:bg-green-700"
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
