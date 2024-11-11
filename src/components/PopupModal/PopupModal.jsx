import React from 'react'
import "./PopupModal.css"
const PopupModal = ({close}) => {
  return (
    <div className="popup-container">
        <div className="popup-content">
            Hello
            <button onClick={()=>close()}>Close me</button>
        </div>
    </div>
  )
}

export default PopupModal