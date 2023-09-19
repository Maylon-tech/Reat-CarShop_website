import React from 'react'
import styles from './ServicesCard.module.css'

const ServicesCard = () => {
  return (
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
  )
}

export default ServicesCard