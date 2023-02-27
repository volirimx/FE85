import React, { useState, useContext } from "react";
import styles from "./AllPosts.module.css";
import Title from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import MediumCard from "../../components/MediumCards/MediumCards";
import SmallCard from "../../components/SmallCards/SmallCards";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { tabs } from "../../utility/posts";
import { useAppSelector } from "../../redux/hooks";


const AllPosts = () => {
    const [activeTab, setActiveTab] = useState(0)
    const posts = useAppSelector((store) => store.favorite.cards )

    return (
        <div>
            <div>
                <div className={styles.container}>
                    <Title
                        title="Blog"
                    />
                    <button className={styles.button}><a className={styles.link} href="/search">Search</a></button>
                    <div className="tabs">{tabs.map((tab, index) => (<Tabs
                        title={tab.tab}
                        index={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        path={tab.path}
                        key={index}
                        />))}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content}>
                        <div>
                            {posts.map((post) => <MediumCard
                                card={post}
                                key={post.id}
                            />)}
                        </div>
                        <div>
                            {posts.map((post) => <MediumCard
                                card={post}
                                key={post.id}
                            />)}
                        </div>
                    </div>
                    <div>
                        <div>
                            {posts.map((post) => <SmallCard
                                card={post}
                                key={post.id}
                            />)}
                        </div>
                        <div>
                            {posts.map((post) => <SmallCard
                                card={post}
                                key={post.id}
                            />)}
                        </div>
                    </div>
                </div>
                <div>
                    <ButtonPagination/>
                </div>
            </div>
        </div>
    )
}

export default AllPosts;