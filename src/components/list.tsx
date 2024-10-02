import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hook'
import { addtoList } from './listSlice'

const List: React.FC<any> = () => {

    const dispatch = useAppDispatch()

    const completeList = useAppSelector((state) => state.list)
    const allUsers = useAppSelector((state) => state.users)

    const getCurrentDate = () => {
        const hoy = new Date();
        const anio = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Meses de 0 a 11
        const dia = String(hoy.getDate()).padStart(2, '0');
        return `${anio}-${mes}-${dia}`
    }

    const [dateInput, setDateInput] = useState<{ start: string; end: string }>({
        start: getCurrentDate(),
        end: ""
    })

    const handleDateChange = (event: any) => {
        console.log(event.target?.value);
        setDateInput({...dateInput, end: event.target?.value})
    }

    function usableDays(rango: any) {
        const { start, end } = rango;
        const fechaInicio = new Date(start);
        const fechaFin = new Date(end);
        const diasHabiles = [];
    
        for (let fecha = fechaInicio; fecha <= fechaFin; fecha.setDate(fecha.getDate() + 1)) {
            const diaSemana = fecha.getDay();
            // 0 = Domingo, 6 = Sábado
            if (diaSemana !== 0 && diaSemana !== 6) {
                diasHabiles.push(new Date(fecha));
            }
        }
    
        return diasHabiles;
    }

    function calculateList() {
        const diasHabiles = usableDays(dateInput);
        const totalNombres = allUsers.length;

        for (let i = 0; i < diasHabiles.length; i++) {
            const fecha = diasHabiles[i];
            const nombre = allUsers[i % totalNombres].name; // Repite nombres si hay más días que nombres
            dispatch(addtoList({username: nombre, date: fecha.toISOString().split('T')[0]}))
        }
    }

    const handleDateSubmit = (e: any) => {
        e.preventDefault();
        calculateList()
    }

    return (
        <div className='flex flex-row p-2'>
            <div className='w-1/2 text-center bg-slate-500 rounded-md me-1 text-white h-[89vh] p-2'>
                <h2 className='text-xl font-bold mb-3'>Lista generada despues de poner las fechas</h2>
                <div className=' max-h-[83vh] overflow-y-auto'>
                    {
                        completeList.map((value) => (
                            <div key={value.username} className='flex flex-row w-[50%] justify-evenly mx-auto mb-2 bg-slate-400 rounded-md p-1'>
                                <p className='w-[50%]'>{value.username}</p>
                                <p className='w-[50%]'>{value.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-1/2 text-center bg-slate-500 rounded-md ms-1 text-white h-[89vh] p-2'>
                <h2 className='text-xl font-bold mb-3'>Aqui seleccinamos la fecha de inicio y la de final para calcular quienes van en cada dia</h2>
                <form onSubmit={(e) => handleDateSubmit(e) } className='w-[40%] mx-auto'>
                    <div className='flex flex-row justify-around'>
                        <input type="date" name="start" id="start" className='rounded-md' min={getCurrentDate()} value={getCurrentDate()} disabled/>
                        <p>-</p>
                        <input type="date" name="end" id="end" className='rounded-md text-black' onChange={handleDateChange} />
                    </div>
                    <input type="submit" value="Calcular" className='bg-slate-300 scale-100 hover:scale-110 transition-all rounded-md w-16 mx-auto mt-2 font-bold cursor-pointer' onChange={() => console.log("prueba")}/>
                </form>
            </div>
        </div>
    )
}

export default List
