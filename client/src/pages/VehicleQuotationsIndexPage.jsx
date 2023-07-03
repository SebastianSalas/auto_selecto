import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchStaffMember } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function VehicleQuotationsIndexPage() {
  let { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [staffMember, setStaffMember] = useState([]);
  const [quotationsAssigned, setQuotations] = useState([]);
  const [vehicleQuotations, setVehicleQuotations] = useState([]);
  const handleFetchStaffMember = async (id) => {
    try {
      const fetchedStaffMember = await fetchStaffMember(id);
      console.log(fetchedStaffMember);
      setStaffMember(fetchedStaffMember);
    } catch (error) {}
  };

  useEffect(() => {
    if (user) {
      handleFetchStaffMember(user.staff_member_id);
    }
  }, [user]);

  let updateVehicleQuotation = async (id) => {
    let response = await axios.patch(
      `http://localhost:8000/api/vehicle_quotation/${id}/edit/`,
      {
        vendor: staffMember.id,
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
      navigate("/vehicle_quotations");
      location.reload();
    } else {
      alert("Something went wrong!");
    }
  };
  const getVehicleQuotationsAssigned = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/vehicle_quotations/vendor/${id}/`
      );
      setQuotations(response.data);
      navigate("/vehicle_quotations");
    } catch (error) {
      console.log(error.response.data);
      toast.error("No pudimos obtener la información de tus cotizaciones.");
    }
  };

  useEffect(() => {
    const fetchVehicleQuotations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/vehicle_quotations"
        );
        setVehicleQuotations(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehicleQuotations();
  }, []);

  useEffect(() => {
    if (staffMember && staffMember.id) {
      getVehicleQuotationsAssigned(staffMember.id);
    }
  }, [staffMember]);

  return (
    <div>
      <div
        className="bg-gray-50 mt-40 mx-8 rounded p-2"
        style={{ padding: "2rem" }}
      >
        <div className=" h-10 flex justify-between items-center mb-10">
          <h2 className="text-gray-900 font-bold">Cotizaciones abiertas</h2>
        </div>
        <div className="overflow-y-auto max-h-40">
          <table className=" min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Cliente
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Oficina
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Ciudad
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Fecha de Creación
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicleQuotations
                .sort((a, b) => a.id - b.id)
                .map((quotation) => (
                  <tr key={quotation.id}>
                    <td className="px-6 py-4 text-center">
                      <p className=" w-full text-sm leading-5 font-medium text-gray-900">
                        {quotation.id}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className=" w-full text-sm leading-5 font-medium text-gray-900">
                        {quotation.client_name}
                        {quotation.client_last_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.office_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.city_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.created_at}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-center">
                      <Link
                        to="#"
                        onClick={() => updateVehicleQuotation(quotation.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Asignarmelo a mi!
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="bg-gray-50 mt-10 mx-8 rounded p-2"
        style={{ padding: "2rem" }}
      >
        <div className=" h-10 flex justify-between items-center mb-10">
          <h2 className="text-gray-900 font-bold">Cotizaciones asignadas</h2>
        </div>
        <div className="overflow-y-auto max-h-40">
          <table className=" min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Cliente
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Oficina
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Ciudad
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Fecha de Creación
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quotationsAssigned
                .sort((a, b) => a.id - b.id)
                .map((quotation) => (
                  <tr key={quotation.id}>
                    <td className="px-6 py-4 text-center">
                      <p className=" w-full text-sm leading-5 font-medium text-gray-900">
                        {quotation.id}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className=" w-full text-sm leading-5 font-medium text-gray-900">
                        {quotation.client_name}
                        {quotation.client_last_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.office_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.city_name}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center">
                      <p className="text-sm leading-5 text-gray-900">
                        {quotation.created_at}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-center">
                      <Link
                        to={`/quotation/${quotation.id}/show`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
