import React, {useState} from 'react';
import styles from "./FavoriteCard.module.css";
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import { tabs } from '../../utility/posts';
import MediumCard from '../../components/MediumCards/MediumCards';
import { useAppSelector } from '../../redux/hooks';


const FavoriteCard = () => {

    const [activeTab, setActiveTab] = useState(1)
    const favoritePost = useAppSelector(store => store.favorite.cards)

    return (
        <div>
            <div className={styles.container}>
                    <Title
                        title="My Favorite"
                    />
                    <div className="tabs">{tabs.map((tab, index) => (<Tabs
                        title={tab.tab}
                        index={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        path={tab.path}
                        key={index}
                        />))}
                    </div>
                    <div>
                        <div>{favoritePost.filter(post => post.favorite).map((post) => <MediumCard card={post} key={post.id}/>)}</div>
                    </div>
            </div>
        </div>
    )
}

export default FavoriteCard;