import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <ul className={styles.menu}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">Sobre</a>
            </li>
            <li>
                <a href="#gallery">Carros</a>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar