import styles from "./Tabs.module.css";
import {useReducer} from "react";

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

    function reducer (state: IInitialState, action: IAction) {
        switch (action.type) {
            case 'SET-TAB':
                return {...state, tabs: initialState.tabs.map(tab => (tab.id === action.id) ? {...tab, isSelected: true} : {...tab, isSelected: false})}
            default:
                return initialState
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getTabs = () => {
        return state.tabs.map((tab: ITab) => <button onClick={() => dispatch({type: 'SET-TAB', id: tab.id})} className={tab.isSelected ? styles.active : styles.tab}>{tab.name}</button>)
    }

    return (
        <div className={styles.wrapper}>{getTabs()}</div>
    )
}

export default Tabs;

