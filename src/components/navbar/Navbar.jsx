import React from 'react'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <ul className={styles.menu}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar