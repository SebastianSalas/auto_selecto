import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CarDetail() {
  const { id } = useParams();
  //const car = carsData.find((car) => car.id == id);
  const [car, setCar] = useState({});

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/vehicle/${id}/show`
        );
        setCar(response.data);
      } catch (error) {
        console.log(error.response.data);
        toast.error("No pudimos obtener la información del vehiculo.");
      }
    };

    fetchCar();
  }, [id]);

  console.log(car.image);
  let imgCar = "";

  return (
    <div className="w=[80%] px-6 py-2 flex shadow-md my-20 justify-between items-center h-screen animate-fade-right animate-once animate-duration-[1500ms] animate-delay-0">
      <div className="w-[50%]">
        <img src={car.image} alt="Imagen del carro" />
      </div>
      <div className="w-[40%] bg-white rounded flex flex-col p-6">
        <div className="flex-grow">
          <h2 className="text-black font-bold text-center text-2xl mb-3">
            Vehiculo
          </h2>
          <h3 className="text-black font-semibold text-lg mb-3">
            {car.brand} {car.name} {car.year}
          </h3>
          <p className="text-black mb-3">
            <span className="font-semibold">Marca: </span> {car.brand}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Modelo: </span>
            {car.name}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Año: </span> {car.year}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Caballos de fuerza: </span>
            {car.hp} HP
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Torque: </span>
            {car.torque} N.M
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Tipo de motor: </span>
            {car.type}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold">Descripcion: </span>
            Nuevo Tesla Model 3, con su diseño deportivo y una velocidad única. Adquierelo ahora mismo!
          </p>
          <button className="bg-green-600 rounded p-2 w-[50%] mx-auto block">
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
}
