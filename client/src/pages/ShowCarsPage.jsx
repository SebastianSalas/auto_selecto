export default function ShowCarsPage(){
    const cars = [
        { id: 1, brand: 'Toyota', model: 'Corolla', img: ''},
        { id: 2, brand: 'Honda', model: 'Civic', img: ''},
        { id: 3, brand: 'Ford', model: 'Mustang', img: ''},
        { id: 4, brand: 'Chevrolet', model: 'Camaro', img: ''},
      ];

    return(
        <div className="container px-10 mt-40 text-center">
            <h1 className="font-bold mb-10 text-center text-5xl">Catalogo de Carros</h1>
            <input
                type="text"
                className="border w-[30%] border-gray-300 rounded px-4 py-2 mb-10 text-black"
                placeholder="Buscar carros"
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cars.map((car) => (
                <li
                    key={car.id}
                    className="bg-white shadow rounded p-4"
                >
                    <p className="text-lg font-bold">{car.brand}</p>
                    <p className="text-gray-500">{car.model}</p>
                </li>
                ))}
            </ul>
    </div>
    )
}