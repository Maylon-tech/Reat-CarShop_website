import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const BottomHeader = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(true)
  }

  return (
    <header className={styles.BottomHeader}>
        <div className={styles.logo}> 
            <Link to="/">
                <a href="#home"><span>RR</span>Motors</a>
            </Link>
        </div>
        <Navbar />
        <div className={styles.menu}>
            <button onClick={showSidebar}>
              <i class="fa-solid fa-bars menu"></i>
            </button>
        </div>

        { sidebar && <Sidebar onSidebarHandler={showSidebar} /> }
    </header>
  )
}

export default BottomHeader