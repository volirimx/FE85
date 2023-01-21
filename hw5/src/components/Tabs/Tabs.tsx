import react, {useState} from 'react';
import styles from './Tabs.module.css'

interface ITab {
  id: string;
  title: string;
  isDisabled?: boolean;
}

const tabs: Array<ITab>  = [{title:'ann', id: "0"}, {title:'vasya', id: "1"}, {title: 'petya', id: "2", isDisabled:true}]

const Tabs = () => {
  const [isActive, setActive] = useState("0");
  const [isHover, setHover] = useState("-1");
  
  const handleTabClick = (id: string) => setActive(id);
  const handleTabHover = (id: string) => setHover(id);

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => <div className={((tab.id === isActive && !tab.isDisabled) ? styles.active : '') + ' ' + styles.tabs__item + ' ' + ((tab.id === isHover && !tab.isDisabled) ? styles.hover : '') + ' ' + (tab.isDisabled ? styles.disabled : '')}
        onClick={() => handleTabClick((tab.isDisabled ? isActive : tab.id))} onMouseOver={() => handleTabHover(tab.id)} onMouseLeave={() => handleTabHover('-1')}>{tab.title}</div>)}
    </div>
  );
};

export default Tabs;
