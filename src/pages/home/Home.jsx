import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'

import AboutMain from '../../assets/images/About_main.png'
import CardInfo from '../../components/CardInfo'
import LogoHero from '../../assets/images/RR Motors LOGO.jpg'
import CarDatas from '../../assets/datas/CarDatas'

import IconMitsubishi from '../../assets/logo-icons/icons8-mitsubishi-48.png'
import IconToyota from '../../assets/logo-icons/icons8-toyota-48.png'
import IconHonda from '../../assets/logo-icons/icons8-honda-50.png'
import IconSubaru from '../../assets/logo-icons/icons8-subaru-50.png'

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

      <section id='about' className={styles.about}>
        <div className={styles.image}>
          <img src={AboutMain} alt="" />
        </div>

        <div className={styles.content_info}>

          <h1>Sobre a Loja</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam consectetur hic porro non harum! Modi odit placeat, facere suscipit
             quod voluptate veritatis itaque iusto quas, id consectetur voluptatem praesentium!
          </p>

          <div className={styles.social_links}>
            <ol>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-whatsapp"></i>
              </li>
            </ol>
          </div>

          <div className={styles.buttons}>
            <button onClick={() => navigate('/location')}>Localizacao</button>
            <button onClick={() => navigate('/contato')}>Contatos</button>
          </div>
        </div>

        <div className={styles.services}>
          <div>
            <i class="fa-solid fa-check-to-slot"></i>
            <p>
              Financiamento de fácil aprovação
            </p>
          </div>
          <div>
            <i class="fa-solid fa-check-to-slot"></i>
            <p>
              Sem visto permanente | Sem Hoshonin
            </p>
          </div>
          <div>
            <i class="fa-solid fa-check-to-slot"></i>
            <p>
              Carros novos | semi novos | usados
            </p>
          </div>
        </div>

      </section>

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