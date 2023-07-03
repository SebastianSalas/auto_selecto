import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddCar() {

  const [selectedOptionType, setselectedOptionType] = useState("");

  const handleChangeType = (event) => {
    setselectedOptionType(event.target.value);
  };

  let navigate = useNavigate();

  let createCar = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log("FORMDATA:", formData)
    try {
      const response = await axios.post("http://localhost:8000/api/vehicle/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      console.log("data:", response.data);
      if (response.status === 201) {
        navigate("/show_cars");
        toast.success("¡El vehículo ha sido agregado!");
      }
      // Aquí puedes realizar cualquier acción adicional después de crear el vehículo
      
    } catch (error) {
      console.error("Error:", error);
      // Aquí puedes manejar el error en caso de que la solicitud falle
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md my-20">
        <h2 className="text-black text-center font-bold text-2xl mb-5">
          Agregar Vehículo
        </h2>
        <form onSubmit={createCar}>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-gray-700 font-bold mb-2"
            >
              Marca
            </label>
            <input
              name="brand"
              type="text"
              id="brand"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa la marca del vehículo"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa la marca del vehículo"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Tipo
            </label>
            <select
              className="border border-gray-300 rounded-md  py-2 px-3 text-black"
              value={selectedOptionType}
              onChange={handleChangeType}
              id="type"
              name="type"
            >
              <option value="">Selecciona una opción</option>
              <option value="Eléctrico">Eléctrico</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Gasolina">Gasolina</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-gray-700 font-bold mb-2"
            >
              Año del modelo
            </label>
            <input
              name="year"
              type="text"
              id="year"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Digita el año del modelo"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="value"
              className="block text-gray-700 font-bold mb-2"
            >
              Valor del vehículo
            </label>
            <div className="flex items-center justify-center">
              <label
                className="block text-gray-700 font-bold mb-2"
                style={{ marginRight: "0.5rem" }}
              >
                {" "}
                ${" "}
              </label>
              <input
                name="value"
                type="number"
                id="value"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
                placeholder="Ingresa el valor del vehículo"
                min="1000000"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="hp" className="block text-gray-700 font-bold mb-2">
              Caballos de fuerza
            </label>
            <div className="flex items-center ">
              <input
                name="hp"
                type="number"
                id="hp"
                className="w-60 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
                placeholder="Ingresa los caballos de fuerza"
                min="1"
                required
              />
              <label
                className="block text-gray-700 font-bold mb-2"
                style={{ marginLeft: "0.5rem" }}
              >
                {" "}
                HP{" "}
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="torque"
              className="block text-gray-700 font-bold mb-2"
            >
              Torque
            </label>
            <div className="flex items-center ">
              <input
                name="torque"
                type="number"
                id="torque"
                className="w-60 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
                placeholder="Ingresa el torque"
                min="1"
                required
              />
              <label
                className="block text-gray-700 font-bold mb-2"
                style={{ marginLeft: "0.5rem" }}
              >
                {" "}
                N.M{" "}
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escribe una descripción..."
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Subir imagen
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              name="image"
              type="file"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              Agregar vehículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
