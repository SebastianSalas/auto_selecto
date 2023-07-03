import BarChart from "../components/BarChart";

export default function ReportPage(){
    const vehiculosCotizados = [5, 8, 4, 9, 10, 3, 5, 7, 3, 9, 10, 6]
    const vehiculosVendidos = [10, 4, 8, 5, 7, 3, 8, 5, 10, 15, 12, 7]
    const vehiculosReparacion = [2, 3, 6, 5, 8, 0, 1, 3, 8, 1, 3, 2]
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const cotizadosData = {
        labels: meses,
        datasets: [
            {
                label: 'Vehiculos Cotizados',
                data: vehiculosCotizados,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                poinRadius: 5,
                pointBorderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)'
            }
        ]
    }

    const vendidosData = {
        labels: meses,
        datasets: [
            {
                label: 'Vehiculos Vendidos',
                data: vehiculosVendidos,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(99, 255, 132)',
                backgroundColor: 'rgba(99, 255, 132, 0.5)',
                poinRadius: 5,
                pointBorderColor: 'rgb(99, 255, 132)',
                pointBackgroundColor: 'rgb(99, 255, 132)'
            }
        ]
    }

    const reparacionData = {
        labels: meses,
        datasets: [
            {
                label: 'Vehiculos en Reparacion',
                data: vehiculosReparacion,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(99, 132, 255)',
                backgroundColor: 'rgba(99, 132, 255, 0.5)',
                poinRadius: 5,
                pointBorderColor: 'rgb(99, 132, 255)',
                pointBackgroundColor: 'rgb(99, 132, 255)'
            }
        ]
    }

    const myOptions = {
        responsive: true,
        scales:{
            y:{
                min: 0
            }
        }
    }

    return(
        <div className="px-10 mt-40 text-center">
            <h1 className="text-5xl font-bold mb-10">Reportes</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <div className="bg-white rounded p-8">
                    <BarChart data={cotizadosData} option={myOptions}/>
                </div>
                <div className="bg-white rounded p-8">
                    <BarChart data={vendidosData} option={myOptions}/>
                </div>
                <div className="bg-white rounded p-8">
                    <BarChart data={reparacionData} option={myOptions}/>
                </div>
            </div>
        </div>
    )
}