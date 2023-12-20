import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <div id='contact-me' className={styles.contactme}>
      <div className={styles.socialicons}>
        <div className={`${styles.socialicon} ${styles.facebook}`}>
          <a href='https://www.facebook.com/jojo.muna.92/'>
            <FaFacebook />
          </a>
        </div>
        <div className={`${styles.socialicon} ${styles.github}`}>
          <a href='https://github.com/JihadMuna'>
            <FaGithub />
          </a>
        </div>
        <div className={`${styles.socialicon} ${styles.instagram}`}>
          <a href='https://www.instagram.com/jojo_muna'>
            <FaInstagram />
          </a>
        </div>
        <div className={`${styles.socialicon} ${styles.linkedin}`}>
          <a href='YOUR_LINKEDIN_PROFILE_URL'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
