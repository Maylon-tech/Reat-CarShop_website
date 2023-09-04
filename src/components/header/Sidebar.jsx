import React from 'react'
import './Sidebar.css'

const Sidebar = ({ onSidebarHandler }) => {
  return (
    <div onClick={() => onSidebarHandler(false)} className="wrapper-sidebar">
        <div className='sidebar-content'>
            <h1>Sidebar Menu</h1>
        </div>
    </div>
  )
}

export default Sidebar