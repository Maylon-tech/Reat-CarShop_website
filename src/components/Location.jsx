import React from 'react'
import styles from './Location.module.css'

const Location = () => {
  return (
    <div className={styles.container}>
      
        <h1>Location Components Render here.</h1>

        <div className={styles.location_map}>
          Google map render here..
        </div>
    </div>
  )
}

export default Location