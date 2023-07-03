import QuoteCar from "../components/QuoteCar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function InfoClientPage() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const [quotation, setQuotation] = useState({});

  let currentDate = new Date();
  let navigate = useNavigate();

  useEffect(() => {
    const getQuotation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/vehicle_quotation/${id}/show`
        );
        setQuotation(response.data);
      } catch (error) {
        console.log(error.response.data);
        toast.error("No pudimos obtener la información del vehiculo.");
      }
    };

    getQuotation();
  }, [id]);

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
  }, [quotation.vehicle]);

  let markQuotationAsSold = async (id) => {
    let response = await axios.patch(
      `http://localhost:8000/api/vehicle_quotation/${id}/edit/`,
      {
        sold: true,
        closed_at: currentDate.toISOString(),
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
      toast.info("Se cerró la cotización")
    } else {
      alert("Something went wrong!");
    }
  };

  let markQuotationAsUnsold = async (id) => {
    let response = await axios.patch(
      `http://localhost:8000/api/vehicle_quotation/${id}/edit/`,
      {
        sold: false,
        closed_at: currentDate.toISOString(),
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
      toast.info("Se cerró la cotización")
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-10 mt-40 flex items-center flex-col">
      <div className="border-2 rounded-[50%] p-6 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          viewBox="0 -960 960 960"
          width="100"
          fill="currentColor"
        >
          <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
        </svg>
      </div>
      <div className="flex flex-wrap justify-between w-[35%]"></div>
      <div className="border-2 rounded-xl w-[35%] p-6 mb-4">
        <h2 className="font-bold text-lg text-center mb-3">
          Información de contacto
        </h2>
        <p className="mb-4">
          <span className="font-bold">Nombre: </span> {quotation.client_name}
        </p>
        <p className="mb-4">
          <span className="font-bold">Apellidos: </span>{" "}
          {quotation.client_last_name}
        </p>
        <p className="mb-4">
          <span className="font-bold">Email: </span> {quotation.client_email}
        </p>
        <p className="mb-4">
          <span className="font-bold">Telefono: </span>{" "}
          {quotation.client_telephone}
        </p>
        <p className="mb-4">
          <span className="font-bold">Cedula: </span> {quotation.client_cedula}
        </p>
      </div>

      <QuoteCar
        year={car.year}
        brand={car.brand}
        name={car.name}
        value={car.value}
      />
      <div className="mt-10 mb-10 flex flex-wrap justify-between w-[35%]">
        <Link to="#" onClick={() => markQuotationAsUnsold(quotation.id)}>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            Cerrar cotización sin vender
          </button>
        </Link>
        <Link to="#" onClick={() => markQuotationAsSold(quotation.id)}>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
            Marcar como vendido y cerrar
          </button>
        </Link>
      </div>
    </div>
  );
}
