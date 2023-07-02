import { useState } from "react";

export default function AddCar() {

  const [selectedOptionType, setselectedOptionType] = useState("");

  const handleChangeType = (event) => {
    setselectedOptionType(event.target.value);
  };

  let createCar = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:8000/api/staff_member/create/",
      {
        email: e.target.email.value,
        name: e.target.name.value,
        last_name: e.target.last_name.value,
        cedula: e.target.cedula.value,
        telephone: e.target.telephone.value,
        password: e.target.password.value,
        company_position: e.target.company_position.value,
        office: e.target.office.value,
        city: e.target.city.value,
        active: e.target.active.value
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.data;
    console.log("data: ", data);
    if (response.status === 201) {
      let response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      let data = await response.json();
      console.log("data: ", data);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/staff_members");
      toast.success("¡La creación del empleado ha sido exitosa!");
    } else {
      alert("Something went wrong!");
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
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
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
