import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import numeral from "numeral";
import { fetchClient } from "../context/AuthContext";
import AuthContext from "../context/AuthContext";

export default function CarDetail() {
  let { user } = useContext(AuthContext);
  const { id } = useParams();
  const [car, setCar] = useState({});

  const [client, setClient] = useState([]);
  const handleFetchClient = async (id) => {
    try {
      if (id) {
        const fetchedClient = await fetchClient(id);
        setClient(fetchedClient);
        console.log(fetchedClient);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user) {
      handleFetchClient(user.client_id);
    }
  }, [user]);

  console.log("user", user);
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

  console.log("cliente", client);

  return (
    <div className="w=[80%] px-6 py-2 flex shadow-md my-20 justify-between items-center h-screen animate-fade-right animate-once animate-duration-[1500ms] animate-delay-0">
      <div className="w-[50%]">
        <img src={car.image} alt="Imagen del carro" />
      </div>
      <div className="w-[40%] bg-white rounded flex flex-col p-6">
        <div className="flex-grow">
          <h3 className="text-black font-semibold text-4xl mb-3">
            {car.brand} {car.name} {car.year}
          </h3>

          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Marca:</span> {car.brand}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Modelo:</span> {car.name}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Año:</span> {car.year}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Caballos de fuerza:</span>{" "}
            {car.hp} HP
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Torque:</span> {car.torque}{" "}
            N.M
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Tipo de motor:</span>{" "}
            {car.type}
          </p>
          <p className="text-black mb-3">
            <span className="font-semibold text-lg">Descripción:</span>{" "}
            {car.description}
          </p>

          <p className="text-black mb-3">
            <span className="font-semibold text-xl">Precio:</span>
            <br />
            <span className="font-bold text-2xl">
              $ {numeral(car.value).format("0,0")}
            </span>
          </p>
          {!user || (Array.isArray(client) && client.length > 0) ? (
            <Link to="/sign_up">
              <button
                className="bg-green-600 rounded p-2 w-[50%] mx-auto block"
                onClick={() =>
                  toast.info("Debes registrarte para poder cotizar")
                }
              >
                Cotizar
              </button>
            </Link>
          ) : Object.keys(client).length > 0 ? (
            <Link to={`/vehicle_quotation/${car.id}`}>
              <button className="bg-green-600 rounded p-2 w-[50%] mx-auto block">
                Cotizar
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
