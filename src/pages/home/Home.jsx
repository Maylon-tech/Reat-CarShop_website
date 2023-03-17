import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()


  return (
    <main className={styles.homePage}>

      <section id='home' className={styles.home}>
        <h1>Home Section</h1>
      </section>

      <section id='about' className={styles.about}>
        
        <h1>About Section</h1>

        <button
          onClick={() => navigate('/location')}
        >Location</button>

      </section>

      <section id='gallery' className={styles.gallery}>
        <h1>Gallery Section</h1>
      </section>

    </main>
  )
}

export default Home