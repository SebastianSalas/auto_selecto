import React, {useContext} from "react"
import AuthContext from "../context/AuthContext"

export default function LoginPage(){

    let {loginUser} = useContext(AuthContext)

    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Iniciar sesión</h2>
                    <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                        </label>
                        <input
                        name="email"
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Ingresa tu email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Contraseña
                        </label>
                        <input
                        name="password"
                        type="password"
                        id="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-black"
                        placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        >
                        Ingresar
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )

}