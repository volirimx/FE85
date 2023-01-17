import styles from "./Tabs.module.css";
import {useReducer, useState} from "react";

const Tabs = () => {

    interface ITab {
        id: number;
        name: string;
        isSelected: boolean;
    }

    interface IInitialState {
        tabs: ITab[]
    }

    interface IAction {
        type: string;
        id: number;
    }

    const initialState: IInitialState = {
        tabs: [
            {
                id:1,
                name: 'All',
                isSelected: true
            },
            {
                id:2,
                name: 'My favorites',
                isSelected: false
            },
            {
                id:3,
                name: 'Popular',
                isSelected: false
            },
        ]
    }

    const [tabs, setTabs] = useState(initialState)

    const setActiveTab = (tab: ITab) => {
        let tabs = {...initialState, tabs: initialState.tabs.map(tabId => (tabId.id === tab.id) ? {...tabId, isSelected: true} : {...tabId, isSelected: false})}
        return setTabs(tabs)
    }


    const getTabs = () => {
        return tabs.tabs.map((tab: ITab) => <button onClick={() =>setActiveTab(tab)} className={tab.isSelected ? styles.active : styles.tab}>{tab.name}</button>)
    }

    return (
        <div className={styles.wrapper}>{getTabs()}</div>
    )
}

export default Tabs;

