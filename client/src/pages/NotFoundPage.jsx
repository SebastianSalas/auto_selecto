import { Link } from "react-router-dom"
function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-8">¡Error 404!</h1>
      <p className="text-2xl mb-8 text-gray-600">La página que estás buscando no se encuentra.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Volver a la página principal
      </Link>
    </div>
  )
}

export default NotFoundPage