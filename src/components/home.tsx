import '../index.css'
import React from 'react'
import { useAppSelector} from '../hook'

const Home: React.FC<any> = () => {

    const allUsers = useAppSelector((state) => state.users)
    const completeList = useAppSelector((state) => state.list)
    
    return (
        <div className='flex flex-row p-2 '>
            <div className='w-1/2 text-center bg-slate-500 rounded-md me-1 text-white h-[89vh] p-2'>
                <h2 className='font-bold text-xl mb-2'>Aqui estan todos los usuarios</h2>
                    {
                        allUsers.map((value) => (
                            <div key={value.name}>
                                <p>{value.name}</p>
                            </div>
                        ))
                    }
            </div>
            <div className='w-1/2 text-center bg-slate-500 rounded-md ms-1 text-white h-[89vh] p-2'>
                <h2 className='font-bold text-xl mb-2'>Aqui esta la lista de los dias a los que les toca a cada uno</h2>
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
        </div>
    )
}

export default Home