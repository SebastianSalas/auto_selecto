import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditStaffMember() {
  let { cities, companyPositions, offices } = useContext(AuthContext);
  const { id } = useParams();
  const [staffMember, setStaffMember] = useState([]);
  let navigate = useNavigate();

  // ------------ GET STAFF_MEMBER DATA -------------
  useEffect(() => {
    const fetchStaffMember = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/staff_member/${id}/edit`
        );
        setStaffMember(response.data);
        setSelectedOptionPosition(response.data.company_position);
        setSelectedOptionActive(response.data.active);
      } catch (error) {
        console.log(error.response.data)
        toast.error("No pudimos obtener la información del empleado.");
      }
    };

    fetchStaffMember();
  }, [id]);

  // ----------- UPDATE STAFF_MEMBER DATA ------------

  let updateStaffMember = async (e) => {
    e.preventDefault();
    console.log("data", e.target.email.value, e.target.name.value,e.target.last_name.value,e.target.cedula.value,e.target.telephone.value,e.target.company_position.value,e.target.office.value,e.target.city.value,e.target.active.value,);
    let response = await axios.patch(
      `http://localhost:8000/api/staff_member/${id}/edit`,
      {
        email: e.target.email.value,
        name: e.target.name.value,
        last_name: e.target.last_name.value,
        cedula: e.target.cedula.value,
        telephone: e.target.telephone.value,
        company_position: e.target.company_position.value,
        office: e.target.office.value,
        city: e.target.city.value,
        active: e.target.active.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.data;
    console.log("data: ", data);
    if (response.status === 200) {
      navigate("/staff_members");
      toast.success("Se ha editado exitosamente el perfil del empleado");
    } else {
      alert("Something went wrong!");
    }
  };

  const [selectedOptionPosition, setSelectedOptionPosition] = useState("");
  const [selectedOptionOfficie, setSelectedOptionOfficie] = useState("");
  const [selectedOptionActive, setSelectedOptionActive] = useState("");
  const [selectedOptionCity, setSelectedOptionCity] = useState("");
  const [filteredOffices, setFilteredOffices] = useState([]);

  const handleChangePosition = (event) => {
    setSelectedOptionPosition(event.target.value);
  };

  const handleChangeOfficie = (event) => {
    setSelectedOptionOfficie(event.target.value);
  };

  const handleChangeActive = (event) => {
    setSelectedOptionActive(event.target.value);
  };

  const handleChangeCity = (event) => {
    const selectedCityId = event.target.value;
    setSelectedOptionCity(selectedCityId);

    console.log(selectedCityId);

    console.log(offices);
    // Filtrar las oficinas por el ID de la ciudad seleccionada
    const filteredOffices = offices.filter(
      (office) => parseInt(office.city) === parseInt(selectedCityId)
    );

    setFilteredOffices(filteredOffices);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md my-20">
        <h2 className="text-black text-center font-bold text-2xl mb-5">
          Actualizar Información
        </h2>
        <form onSubmit={updateStaffMember}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              name="email"
              value={staffMember.email}
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa tu email"
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
              value={staffMember.name}
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Apellidos
            </label>
            <input
              name="last_name"
              value={staffMember.last_name}
              type="text"
              id="last_name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa tus apellidos"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telephone"
              className="block text-gray-700 font-bold mb-2"
            >
              Telefono
            </label>
            <input
              name="telephone"
              value={staffMember.telephone}
              type="number"
              id="telephone"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa tu numero de telefono"
              min="1"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cedula"
              className="block text-gray-700 font-bold mb-2"
            >
              Cedula
            </label>
            <input
              name="cedula"
              value={staffMember.cedula}
              type="text"
              id="cedula"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
              placeholder="Ingresa tus apellidos"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="company_position"
              className="block text-gray-700 font-bold mb-2"
            >
              Cargo en la empresa
            </label>
            <select
              name="company_position"
              className="border border-gray-300 rounded-md py-2 px-3 text-black"
              value={selectedOptionPosition}
              onChange={handleChangePosition}
              id="company_position"
            >
              <option value="">Selecciona una opción</option>
              {companyPositions.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              Ciudad
            </label>
            <select
              name="city"
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
          <div className="mb-6">
            <label
              htmlFor="office"
              className="block text-gray-700 font-bold mb-2"
            >
              Oficina
            </label>
            <select
              name="office"
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
          <div className="mb-6">
            <label
              htmlFor="active"
              className="block text-gray-700 font-bold mb-2"
            >
              Estado
            </label>
            <select
              name="active"
              className="border border-gray-300 rounded-md  py-2 px-3 text-black"
              value={selectedOptionActive}
              onChange={handleChangeActive}
              id="active"
            >
              <option value="">Selecciona una opción</option>
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              Actualizar la información
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
