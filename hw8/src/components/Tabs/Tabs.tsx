import React from "react";
import styles from "./Tabs.module.css";

interface ITabs {
    title: string;
    index: number;
    activeTab: number;
    setActiveTab: any;
    key: string;
}


const Tabs = ({title, index, setActiveTab, activeTab, key}: ITabs) => {
    return (
        <div className={styles.tabssection}>
            <a onClick={()=> setActiveTab(index)} 
            className={index === activeTab ? styles.tabdisabled : styles.tab}>{title}</a>
        </div>
    );
}

export default Tabs;