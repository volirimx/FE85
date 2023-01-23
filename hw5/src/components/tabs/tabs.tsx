import { tab } from "@testing-library/user-event/dist/tab";
import React, {Dispatch, useState} from "react";
import styles from "./tabs.module.css";

interface ITab {
    title: string;
    index: number;
    activeTab: number;
    setActiveTab: any;
}


const Tabs = ({title, index, setActiveTab, activeTab}: ITab) => {
    return (
        <div className={styles.tabssection}>
            <a onClick={()=> setActiveTab(index)} 
            className={index === activeTab ? styles.tabdisabled : styles.tab}>{title}</a>
        </div>
    );
}

export default Tabs;