import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CardInfo.module.css'

const CardInfo = ({ id, name, model, year, img, price }) => {

    const navigate = useNavigate(id)


  return (

    <div className={styles.card}>
        <div className={styles.img}>
            <img src={img} alt="" />
        </div>

        <div className={styles.card_info}>

            <h3 className={styles.info_title}>{name}</h3>
            <div className={styles.underline}></div>
            <div className={styles.info}>
                <h4>{model}</h4>
                <span>Ano: {year}</span>
                <h3 className={styles.price}>{price}</h3>
            </div>
            
        </div>

        <div className={styles.buttons}>
            <button onClick={() => navigate("name.id")}>Mais Detalhes</button>
        </div>
    </div>
  )
}

export default CardInfo