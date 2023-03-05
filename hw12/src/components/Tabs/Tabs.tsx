import React from "react";
import styles from "./Tabs.module.css";
import { Link } from "react-router-dom";

interface ITabs {
    title: string;
    index: number;
    activeTab: number;
    setActiveTab: any;
    path: string;
}


const Tabs = ({title, index, setActiveTab, activeTab, path}: ITabs) => {
    return (
        <div className={styles.tabssection}>
            <Link to={path} onClick={()=> setActiveTab(index)} 
            className={index === activeTab ? styles.tabdisabled : styles.tab}>{title}</Link>
        </div>
    );
}

export default Tabs;