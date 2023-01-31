import React, { useState } from "react";
import styles from "./AllPosts.module.css";
import Title from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import MediumCard from "../../components/MediumCards/MediumCards";
import SmallCard from "../../components/SmallCards/SmallCards";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";

const posts = [
    {
        "id": 10,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
        "text": "my sisters cat",
        "date": "2021-10-08",
        "lesson_num": 49,
        "title": "Cat Niira",
        "description": "She also has a black muzzle with long white whiskers. Her legs and paws are white. Matilda has big eyes. Her eyes are light green, but they become yellow in bright sunlight. She has got big black ears and a small pink nose.As any other cat Matilda loves sleeping, eating and playing. Her favourite places are an armchair in the living room and a windowsill in my parents’ bedroom. Matilda also likes lying on my desk and especially on the computer keyboard!",
        "author": 123
    },
    {
        "id": 12,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/1473613140_zlye-volki.jpeg",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio voluptates aut molestiae, corporis consequatur assumenda corrupti quasi vitae architecto perspiciatis deleniti dolorem, reiciendis quidem nulla natus nobis ducimus omnis?",
        "date": "2021-10-10",
        "lesson_num": 12,
        "title": "Woolf",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 133
    },
    {
        "id": 16,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/siba.jpg",
        "text": "cute dog",
        "date": "2021-10-10",
        "lesson_num": 49,
        "title": "DOGGE",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 123
    }
]


const tabs = ['All', 'My Favorite', 'Popular']



const AllPosts = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            <div>
                <div className={styles.container}>
                    <Title
                        title="Blog"
                    />
                    <div className="tabs">{tabs.map((tab, index) => (<Tabs
                        title={tab}
                        index={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        key={tab}
                        />))}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content}>
                        <div>
                            {posts.map((post) => <MediumCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                            />)}
                        </div>
                        <div>
                            {posts.map((post) => <MediumCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                            />)}
                        </div>
                    </div>
                    <div>
                        <div>
                            {posts.map((post) => <SmallCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                            />)}
                        </div>
                        <div>
                            {posts.map((post) => <SmallCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
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