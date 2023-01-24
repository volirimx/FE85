import React from "react"
import styles from "./User.module.css"

interface IUser {
  name: string;
  lastname: string;
}

const User = ({ name, lastname }: IUser) => {
  const username = `${name} ${lastname}`;

  return (
    <div className={styles.item}>
      <div className={styles.box}>{name[0]}{lastname[0]}</div>
      {username}
    </div>
  )
}

export default User