import React from "react";
import styles from "./PageTemplate.module.css";

interface PageTemplate {
  children: React.ReactNode;
  title: string;
  linkName: string;
}

const PageTemplate = ({ children, title, linkName }: PageTemplate) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.link}>{linkName}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default PageTemplate;
