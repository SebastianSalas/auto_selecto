import { useState } from 'react'

export default function EditStaffMember(){
    const [selectedOptionPosition, setSelectedOptionPosition] = useState('')
    const [selectedOptionOfficie, setSelectedOptionOfficie] = useState('')
    const [selectedOptionActive, setSelectedOptionActive] = useState('')
    
    const handleChangePosition = (event) => {
        setSelectedOptionPosition(event.target.value);
    }

    const handleChangeOfficie = (event) => {
      setSelectedOptionOfficie(event.target.value);
    }

    const handleChangeActive = (event) => {
        setSelectedOptionActive(event.target.value);
      }

    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md my-20">
                <h2 className="text-black text-center font-bold text-2xl mb-5">Actualizar Información</h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            name="email"
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
                            type="email"
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
                        <select className='border border-gray-300 rounded-md  py-2 px-3 text-black' value={selectedOptionPosition} onChange={handleChangePosition} id='company_position'>
                            <option value="">Selecciona una opción</option>
                            <option value={1}>Manager</option>
                            <option value={2}>Vendedor</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="office"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Oficina
                        </label>
                        <select className='border border-gray-300 rounded-md  py-2 px-3 text-black' value={selectedOptionOfficie} onChange={handleChangeOfficie} id='office'>
                            <option value="">Selecciona una opción</option>
                            <option value={1}>Auto Selecto Cali</option>
                            <option value={2}>Auto Selecto Bogota</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="active"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Estado
                        </label>
                        <select className='border border-gray-300 rounded-md  py-2 px-3 text-black' value={selectedOptionActive} onChange={handleChangeActive} id='active'>
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
    )
}