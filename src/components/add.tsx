import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hook'
import { addUser, deleteUser } from './userSlice';

const Add: React.FC<any> = () => {

    const [addUserName, setAddUserName] = useState<string>("");
    const allUsers = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const createUser = (e: Event) => {
        e.preventDefault();
        dispatch(addUser(addUserName))
        setAddUserName("")
    }

    return (
        <div className='flex flex-row p-2'>
            <div className='w-1/2 text-center bg-slate-500 rounded-md me-1 text-white h-[89vh] p-2'>
                <h2 className='font-bold text-xl'>Lista de usuarios existentes</h2>
                {
                    allUsers.map((value) => (
                        <div key={value.name} className='flex flex-row w-[50%] justify-evenly mx-auto mb-2 bg-slate-400 rounded-md p-1'>
                            <button onClick={() => dispatch(deleteUser(value.name))} className=' text-red-600 scale-100 hover:scale-110 transition-all font-bold'>X</button>
                            <p>{value.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className='w-1/2 text-center bg-slate-500 rounded-md ms-1 h-[89vh] p-2'>
                <h2 className='font-bold text-xl text-white'>Formulario para añadir a nuevos usuarios</h2>
                <form onSubmit={(e) =>createUser(e)} className='flex flex-col '>
                    <label htmlFor="name" className='text-white'>Nombre</label>
                    <input type="text" name="name" id="name" value={addUserName} onChange={(e) => setAddUserName(e.target.value)} className='w-36 mx-auto rounded-md mt-1' />
                    <input type="submit" value="Crear" className='bg-slate-300 scale-100 hover:scale-110 transition-all rounded-md w-12 mx-auto mt-2 font-bold cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default Add