import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchClient } from "../context/AuthContext";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

export default function VehicleQuotation() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const [selectedOptionCity, setSelectedOptionCity] = useState("");
  const [selectedOptionOfficie, setSelectedOptionOfficie] = useState("");
  const [filteredOffices, setFilteredOffices] = useState([]);
  const [client, setClient] = useState([]);
  

  let { cities, offices, user } = useContext(AuthContext);

  let navigate = useNavigate();

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

  const handleChangeCity = (event) => {
    const selectedCityId = event.target.value;
    setSelectedOptionCity(selectedCityId);

    console.log(selectedCityId);

    console.log(offices);
    const filteredOffices = offices.filter(
      (office) => parseInt(office.city) === parseInt(selectedCityId)
    );

    setFilteredOffices(filteredOffices);
  };
  const handleChangeOfficie = (event) => {
    setSelectedOptionOfficie(event.target.value);
  };

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

  let createQuotation = async (e) => {
    e.preventDefault();
    console.log(selectedOptionOfficie);
    console.log(selectedOptionCity);
    console.log(car.id);
    let response = await axios.post(
      "http://localhost:8000/api/vehicle_quotation/create",
      {
        office: selectedOptionOfficie,
        city: selectedOptionCity,
        vehicle: car.id,
        client: client.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("data:", response.data);
    if (response.status === 201) {
      navigate("/show_cars");
      toast.success(
        "¡La cotización se ha realizado con éxito, un vendedor se pondrá en contacto contigo!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md my-20">
        <h2 className="text-black text-center font-bold text-2xl mb-5">
          Cotización para {car.brand} {car.name}
        </h2>
        <form onSubmit={createQuotation}>
          <div className="mb-6 text-center">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              ¿En qué ciudad te encuentras?
            </label>
            <select
              className="border border-gray-300 rounded-md py-2 px-3 text-black"
              value={selectedOptionCity}
              onChange={handleChangeCity}
              id="city"
            >
              <option value="">Selecciona una opción</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          {selectedOptionCity && (
            <div className="mb-6 text-center">
              <label
                htmlFor="office"
                className="block text-gray-700 font-bold mb-2"
              >
                Escoge una de nuestras oficinas
              </label>
              <select
                className="border border-gray-300 rounded-md py-2 px-3 text-black"
                value={selectedOptionOfficie}
                onChange={handleChangeOfficie}
                id="office"
              >
                <option value="">Selecciona una opción</option>
                {filteredOffices.map((office) => (
                  <option key={office.id} value={office.id}>
                    {office.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              ¡Cotizar ahora!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
