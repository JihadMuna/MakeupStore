import React from 'react'
import styles from './styles/Home.module.css'
import LogoImage from './assests/logo.png'
import { ImHeart } from "react-icons/im";
import Footer from './Footer';

function Home() {
  return (
<>
    <div className={styles.Home}>
      <img src={LogoImage} alt="logo-image"/>
      <div className={styles.description}>
      <p>
      Welcome to our makeup haven! <ImHeart style={{color:"red"}}/><br /> At our store, we take pride in being more than just a shopping destination — we're a beauty experience curated by passionate and professional makeup artists. Here, you're not merely browsing through products; you're embarking on a journey of self-expression and discovery. Our carefully selected range of cosmetics is a testament to quality and innovation. What sets us apart is the ability to customize your beauty experience. Whether you're seeking the perfect shade, a unique formulation, or personalized advice, our team is dedicated to helping you find the ideal product that complements your individual style. Step into a world where makeup isn't just about enhancing features; it's about celebrating your distinct beauty. Welcome to a makeup store that's as unique as you are!
      </p>
      </div>
    </div>

    </>
  )
}

export default Home
