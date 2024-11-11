import React, { useState } from 'react'
import Weather from './components/Weather'
import "./App.css"
import PopupModal from './components/PopupModal/PopupModal'
function App() {
  const [isModalOpen,setIsModalOpen]=useState(false);
  const handleClick=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
  }
  return (
    // <Weather/>
    <div className="app-container">
      <button onClick={handleClick}>See Modal</button>
    {
      isModalOpen && <PopupModal close={closeModal}/>
    }
    </div>
  )
}

export default App