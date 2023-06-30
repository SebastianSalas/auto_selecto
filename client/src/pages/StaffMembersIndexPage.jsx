import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function StaffMembersIndexPage(){

    let { staffMembers } = useContext(AuthContext);


    const usuarios = [
        {
            id: 1,
            nombre: "Juan Perez",
            cedula: "123456789",
            cargo: 'Vendedor',
            fechaCreacion: "2023-06-25",
            estado: true,

        },
        {
            id: 2,
            nombre: "Pepito Perez",
            cedula: "4367356784",
            cargo: 'Vendedor',
            fechaCreacion: "2023-06-25",
            estado: true,
          },
        //Agregar mas usuarios
      ];

    return (
        
        <div className="bg-gray-50 mt-40 mx-8 rounded p-2" style={{ padding: '2rem' }}>
            <div className=" h-10 flex justify-between items-center mb-10">
                <h2 className="text-gray-900 font-bold">Tabla de empleados</h2>
                <Link to='#' className="bg-green-600 rounded p-1">Agregar empleado</Link>
            </div>
            <table className=" min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Nombre
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Cédula
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Cargo
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Fecha de Creación
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Estado
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                        Acciones
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {staffMembers.map((staff) => (
                    <tr key={staff.id}>
                        <td className="px-6 py-4 text-center">
                            <p className=" w-full text-sm leading-5 font-medium text-gray-900">
                                    {staff.name}
                            </p> 
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center">
                            <p className="text-sm leading-5 text-gray-900">
                                {staff.cedula}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center">
                            <p className="text-sm leading-5 text-gray-900">
                                {staff.company_position_name}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center">
                            <p className="text-sm leading-5 text-gray-900">
                                {staff.created_at}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center">
                            {staff.active ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Activo </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"> Inactivo </span> }   
                            
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-center">
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                            >
                                Editar
                            </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}