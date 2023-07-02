import { useParams } from 'react-router-dom';
import carsData from '../scripts/carsData';
import corolla from '../assets/imgs/corolla.png'
import civic from '../assets/imgs/civic.png'
import camaro from '../assets/imgs/camaro.png'
import mustang from '../assets/imgs/mustang.png'

export default function CarDetail(){
    const { id } = useParams();
    const car = carsData.find((car) => car.id == id);
    
    let imgCar = ''
    switch(car.model){

        case 'Civic':
            imgCar = civic
            break

        case 'Mustang':
            imgCar = mustang
            break

        case 'Corolla':
            imgCar = corolla
            break

        case 'Camaro':
            imgCar = camaro
            break
    }

    

    return(
    
            <div className='w=[80%] px-6 py-8 flex shadow-md my-20 justify-between items-center h-screen animate-fade-right animate-once animate-duration-[1500ms] animate-delay-0'>
                <div className='w-[50%]'>
                    <img src={imgCar} alt="Imagen del carro"/>
                </div>
                <div className='w-[40%] bg-white rounded h-[50%] flex flex-col p-6'>
                    <div className='flex-grow'>
                        <h2 className='text-black font-bold text-center text-2xl mb-3'>Vehiculo cotizados</h2>
                        <h3 className='text-black font-semibold text-lg mb-3'>{car.brand} {car.model}</h3>
                        <p className='text-black mb-3'><span className='font-semibold'>Propietario: </span></p>
                        <p className='text-black mb-3'><span className='font-semibold'>Correo Electronico: </span></p>
                        <p className='text-black mb-3'><span className='font-semibold'>Identificacion: </span></p>
                        <p className='text-black mb-3'><span className='font-semibold'>Descripcion: </span>{car.description}</p>
                    </div>
                    <button className='bg-green-600 rounded p-2 w-[50%] mx-auto block'>Cotizar</button>
                </div>
            </div>
       
        
    )
}