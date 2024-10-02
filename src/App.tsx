import { useState } from 'react'
import './index.css'
import Navbar from './components/navbar';
import Add from './components/add';
import Home from './components/home';
import List from './components/list';

function App() {

  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className={`${currentPage == "home" ? "block" : "hidden"}`}>
        <Home />
      </div>
      <div className={`${currentPage == "list" ? "block" : "hidden"}`}>
        <List />
      </div>
      <div className={`${currentPage == "add" ? "block" : "hidden"}`}>
        <Add />
      </div>
    </>
  )
}

export default App
