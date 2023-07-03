import QuoteCar from "../components/QuoteCar";

export default function InfoClientPage(){
    return(
        <div className="px-10 mt-40 flex items-center flex-col">
            <h1 className="font-bold text-5xl mb-10">Perfil del Cliente</h1>
            <div className="border-2 rounded-[50%] p-6 mb-10">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="200"
                        viewBox="0 -960 960 960"
                        width="200"
                        fill="currentColor"
                >
                        <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
                </svg>
            </div>
            <div className="border-2 rounded-xl w-[35%] p-6 mb-4">
                <p className="mb-4"><span className="font-bold">Nombre: </span></p>
                <p className="mb-4"><span className="font-bold">Apellidos: </span></p>
                <p className="mb-4"><span className="font-bold">Email: </span></p>
                <p className="mb-4"><span className="font-bold">Telefono: </span></p>
                <p className="mb-4"><span className="font-bold">Cedula: </span></p>
            </div>
            <QuoteCar year='2023' brand='Chevrolet' name='Camaro'/>
        </div>
    )
}