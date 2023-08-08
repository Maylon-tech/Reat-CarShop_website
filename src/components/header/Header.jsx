import React from 'react'
import styles from './Header.module.css'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'


const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <TopHeader />
      <BottomHeader />
    </header>
    </>
  )
}

export default Header