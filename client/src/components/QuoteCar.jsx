const QuoteCar = (props)=>{
    return(
        <article className="border-2 rounded-xl w-[35%] p-6">
            <h2 className="font-bold text-lg text-center mb-3">Vehiculo a cotizar</h2>
            <p className="mb-4"><span className="font-bold">Marca: </span>{props.brand}</p>
            <p className="mb-4"><span className="font-bold">Modelo: </span>{props.name}</p>
            <p className="mb-4"><span className="font-bold">Año: </span>{props.year}</p>
        </article>
    )
}

export default QuoteCar