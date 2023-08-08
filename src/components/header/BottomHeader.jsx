import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const BottomHeader = () => {
  return (
    <header className={styles.BottomHeader}>
        <div className={styles.logo}> 
            <Link to="/">
                <a href="#home"><span>RR</span>Motors</a>
            </Link>
        </div>
        <Navbar />
        <div className={styles.menu}>
            <i class="fa-solid fa-bars menu"></i>
        </div>
    </header>
  )
}

export default BottomHeader