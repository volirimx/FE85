import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import User from '../User/User';
import styles from "./Menu.module.css"

interface IMenu {
	isActive: boolean;
	handleButtonClick: () => void;
}

const Menu = ( { isActive, handleButtonClick }:IMenu ) => {

  return (
    <div>
			<div className={styles.container} onClick={ handleButtonClick }>
				<div className={isActive ? styles.menu+ ' ' + styles.active : styles.menu}></div>
			</div>
			<div className={isActive ? styles.show : styles.hide } >
				<User name="Nastya" lastname="Pytliak"/>
			</div>
    </div>
  )
}

export default Menu