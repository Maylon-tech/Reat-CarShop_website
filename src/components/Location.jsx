import React from 'react'
import styles from './Location.module.css'

import map from '../assets/images/Handa_map.png'

const Location = () => {
  return (
    <div className={styles.container}>
      
        <h1>Location Components Render here.</h1>

        <div className={styles.location_map}>
          <img src={map} alt="location map" />
        </div>
    </div>
  )
}

export default Location