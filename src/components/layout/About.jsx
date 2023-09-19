import React from 'react'
import styles from './About.module.css'
import ServicesCard from './ServicesCard'
import AboutMain from '../../assets/images/About_main.png'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()

  return (
    <section id='about' className={styles.about}>
        <div className={styles.image}>
          <img src={AboutMain} alt="" />
        </div>
1
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

       <ServicesCard />

      </section>
  )
}

export default About