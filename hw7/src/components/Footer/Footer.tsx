import React from 'react';
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2022 BlogPosts</div>
      <div>All rights reserved</div>
    </div>
  )
}

export default Footer;
