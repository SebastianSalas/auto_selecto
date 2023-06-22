

export default function SignUpPage(){
    return(
        <main className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md my-20">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Registrarse</h2>
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cedula" className="block text-gray-700 font-bold mb-2">
                            Cedula
                        </label>
                        <input
                            type="number"
                            id="cedula"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            min="1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            min="1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="re_password" className="block text-gray-700 font-bold mb-2">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="re_password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 text-gray-700"
                            placeholder="Ingresa tu email"
                            min="1"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        >
                        Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}