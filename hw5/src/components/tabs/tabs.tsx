import React, {useState} from "react";
import styles from "./tabs.module.css";

interface ITab {
    tab1: string;
    tab2: string;
    tab3: string;
}


const Tabs = ({tab1, tab2, tab3}: ITab) => {
    const [tabs1,  setTab1] = useState(false);
    const [tabs2,  setTab2] = useState(false);
    const [tabs3,  setTab3] = useState(false);
    return (
        <div className={styles.tabssection}>
            <a onClick={() => setTab1(!tabs1)} className={tabs1 ? styles.tabdisabled1 : styles.tab1}>{tab1}</a>
            <a onClick={() => setTab2(!tabs2)} className={tabs2 ? styles.tabdisabled2 : styles.tab2}>{tab2}</a>
            <a onClick={() => setTab3(!tabs3)} className={tabs3 ? styles.tabdisabled3 : styles.tab3}>{tab3}</a>
        </div>
    );
}

export default Tabs;