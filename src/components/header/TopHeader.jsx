import React from 'react'
import styles from './Header.module.css'

const TopHeader = () => {
  return (
    <header className={styles.TopHeader}>
        <div className={styles.content}>
            <h3>
                <i class="fa-solid fa-phone"></i>
                080 9999 9999
            </h3>
            <h3>
                <i class="fa-solid fa-location-dot"></i>
                Aichi-ken Handa-shi
                
            </h3>
            <h4>
                <i class="fa-solid fa-clock"></i>
                Seg - Sex | 10:00 - 19:00
            </h4>
        </div>
    </header>
  )
}

export default TopHeader