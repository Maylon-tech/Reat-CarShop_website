import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'

import CardInfo from '../../components/CardInfo'
import LogoHero from '../../assets/images/RR Motors LOGO.jpg'
import CarDatas from '../../assets/datas/CarDatas'

import IconMitsubishi from '../../assets/logo-icons/icons8-mitsubishi-48.png'
import IconToyota from '../../assets/logo-icons/icons8-toyota-48.png'
import IconHonda from '../../assets/logo-icons/icons8-honda-50.png'
import IconSubaru from '../../assets/logo-icons/icons8-subaru-50.png'
import About from '../../components/layout/About'


const Home = () => {
  const navigate = useNavigate()

  return (
    <main className={styles.homePage}>

      <section id='home' className={styles.home}>
        <div className={styles.left_content}>
          <div className={styles.logoImage}>
            <img src={LogoHero} alt="imgLogo" />
          </div>
          <div className={styles.buttons}>
            <button>Veja os Carros</button>
            <button>Sobre a Loja</button>
          </div>
        </div>

        <div className={styles.right_content}>

          <div className={styles.brand_content} onClick={() => navigate('toyota')} >
            <div className={styles.brand_box}>
              <img src={IconToyota} alt="" />
              <span className={styles.brand}>Toyota</span> 
            </div>         

            <div className={styles.brand_box}>
              <img src={IconHonda} alt="" />
              <span className={styles.brand}>Honda</span> 
            </div>                  
          
            <div className={styles.brand_box}>
              <img src={IconSubaru} alt="" />
              <span className={styles.brand}>Subaru</span> 
            </div>
          
            <div className={styles.brand_box}>
              <img src={IconMitsubishi} alt="" />
              <span className={styles.brand}>Mitsubishi</span> 
            </div>
          </div>

        </div>
      </section>

      <About />

      <section id='gallery' className={styles.gallery}>

        <h1>Carros Novos e Usados</h1>

        <div className={styles.galeria_content}>

            <div className={styles.cards}>

              {
                CarDatas.map((item) => {
                  return (
                    <CardInfo 
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      model={item.model}
                      year={item.year}
                      price={item.price}
                    />
                  )
                })
              }
             
            </div>
        </div>

      </section>

    </main>
    
  )
}

export default Home