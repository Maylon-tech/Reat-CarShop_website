import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'

import AboutMain from '../../assets/images/About_main.png'
import CardInfo from '../../components/CardInfo'

import CarDatas from '../../assets/datas/CarDatas'

const Home = () => {
  const navigate = useNavigate()


  return (
    <main className={styles.homePage}>

      <section id='home' className={styles.home}>
        <div className={styles.left_content}>
          <h1>Carros Novos e Usados</h1>
          <h3>Vem comprar seu carro conosco.</h3>
          <div className={styles.buttons}>
            <button>Veja os Carros</button>
            <button>Sobre a Loja</button>
          </div>
        </div>

        <div className={styles.right_content}>

          <div className={styles.brand_content} onClick={() => navigate('toyota')} >
            <span className={styles.brand}>
              Toyota
            </span>
          </div>

          <div className={styles.brand_content} onClick={() => navigate('honda')} >
            <span className={styles.brand}>
              Honda
            </span>
          </div>
          
          <div className={styles.brand_content} onClick={() => navigate('mitsubishi')} > 
            <span className={styles.brand}>
              Mitsubishi
            </span>
          </div>
        
          <div className={styles.brand_content} onClick={() => navigate('nissan')} >
            <span className={styles.brand}>
              Nissan
            </span>
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