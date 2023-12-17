import React from 'react'
import HomeImage from './assests/makeupstore.png';
import styles from './styles/Home.module.css'

function Home() {
  return (

    <div className={styles.Home}>
      <img src={HomeImage} alt="Home-image"/>
      <div className={styles.description}>
      <p>
      Indulge in a beauty transformation at our makeup store! 
Our expert team delivers stunning makeovers, personalized skincare guidance, and top-quality products. 
Elevate your beauty game with us and leave feeling confident, informed, and absolutely gorgeous.
 Discover a world of beauty at our makeup shop, where every visit is an extraordinary journey!
      </p>
      </div>
    </div>
  )
}

export default Home
