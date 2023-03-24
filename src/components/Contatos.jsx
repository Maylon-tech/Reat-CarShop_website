import React from 'react'
import styles from './Contatos.module.css'

const Contatos = () => {
  return (
    <div className={styles.contato}>

        <form action="">
        <h1>Pagina de Contato  -  formulario</h1>
        
            <div className={styles.names}>
              <input type="text" placeholder='nome' />
              <input type="text" placeholder='sobrenome' />
            </div>

            <div className={styles.email_phone}>
              <input type="email" name="email" placeholder='Email'/>
              <input type="number" name="phone" placeholder='Tel' />
            </div>

            <div className={styles.description}>
              <label htmlFor="">Qual a sua opiniao sobre o Site?</label>
              <textarea name="text"></textarea>
            </div>
        </form>
    </div>
  )
}

export default Contatos