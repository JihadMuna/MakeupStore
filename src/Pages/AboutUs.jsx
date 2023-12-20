import React from 'react';
import styles from './styles/AboutUs.module.css';
import Footer from './Footer';

function AboutUs() {
  return (
    <>
      <div className={styles.aboutcont}>
        <div className={styles.cont}>
          <p>
            Embark on a journey into the heart of my passion, where makeup artistry and coding seamlessly intertwine.
            <br />
            As a certified makeup artist, I've always found joy in the transformative power of cosmetics. The ability to enhance beauty and boost confidence fascinated me, leading me to pursue a certification in makeup.
            <br />
            However, my story doesn't end there. Alongside my love for makeup, I discovered another passion – coding.
            <br />
            The world of programming intrigued me, and I couldn't resist the allure of creating something unique that could blend both my interests.
            <br />
            This site is the manifestation of that fusion, a canvas where my love for makeup meets my coding creativity.
            <br />
            It's more than just a platform; it's a reflection of my dedication to providing the best for my clients.
            <br />
            Welcome to a space where beauty and technology converge, a place where passion becomes an experience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
