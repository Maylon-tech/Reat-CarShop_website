import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}> 
        <Link to="/">
            <a href="#home">LOGO</a>
        </Link>
            
        </div>

        <Navbar />

    </header>
  )
}

export default Header