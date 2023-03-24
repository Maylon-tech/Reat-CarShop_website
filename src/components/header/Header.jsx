import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import styles from './Header.module.css'
import TopHeader from './TopHeader'


const Header = () => {
  return (
    <>
    <header className={styles.header}>
    <TopHeader />
        <div className={styles.logo}> 
        <Link to="/">
            <a href="#home"><span>RR</span>Motors</a>
        </Link>
            
        </div>

        <Navbar />
        <i class="fa-solid fa-bars menu"></i>
    </header>
    </>
  )
}

export default Header