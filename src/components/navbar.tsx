import * as React from 'react'
import '../index.css'

const Navbar: React.FC<any> = ( props: {setCurrentPage: Function}) => {
    function swapPage (newPage: string) {
        console.log(newPage)
        props.setCurrentPage(newPage)
    }
    
    return (
        <div className='flex flex-row justify-center bg-slate-500 h-16'>
            <button className={`bg-slate-400 scale-100 hover:scale-110 rounded-md transition-all mx-5 h-[50%] my-auto p-2 text-white font-bold text-justify`} onClick={() => swapPage("home")}>Home</button>
            <button className={`bg-slate-400 scale-100 hover:scale-110 rounded-md transition-all mx-5 h-[50%] my-auto p-2 text-white font-bold text-justify`} onClick={() => swapPage("list")}>Lista</button>
            <button className={`bg-slate-400 scale-100 hover:scale-110 rounded-md transition-all mx-5 h-[50%] my-auto p-2 text-white font-bold text-justify`} onClick={() => swapPage("add")}>Añadir</button>
        </div>
    )
}
export default Navbar