import React from 'react';
import styles from './PageTemplate.module.scss'


interface IPageTemplate {
  children: React.ReactNode;
  title: string;
  linkName?: string;
}


const PageTemplate = ({ children, title, linkName }: IPageTemplate) => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.link} href='#'>{linkName}</a>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default PageTemplate;
