import React, { useState } from 'react';
import styles from "./Search.module.css";
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import { title } from 'process';
import SmallCard from '../../components/SmallCards/SmallCards';
import MediumCard from '../../components/MediumCards/MediumCards';
import ButtonPagination from '../../components/ButtonPagination/ButtonPagination';


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


const Search = () => {

    const [value, setSearch] = useState("")


    const titlePost = posts.filter (title => {
        return title.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={styles.container}>
            <div>
                <div >
                    <input className={styles.input} type="search" onChange={(e) => 
                        setSearch(e.target.value)}/>
                    <button className={styles.button}>🔍</button>
                </div>
            </div>
            <div>
                <Title
                    title="Search results"
                />
            </div>
            <div>
            <div className={styles.content}>
                    <div className={styles.content}>
                        <div>
                            {titlePost.map((post) => <MediumCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                                id={post.id}
                            />)}
                        </div>
                        <div>
                            {titlePost.map((post) => <MediumCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                                id={post.id}
                            />)}
                        </div>
                    </div>
                    <div>
                        <div>
                            {titlePost.map((post) => <SmallCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                                id={post.id}
                            />)}
                        </div>
                        <div>
                            {titlePost.map((post) => <SmallCard
                                title={post.title}
                                data={post.date}
                                image={post.image}
                                key={post.id}
                                id={post.id}
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

export default Search;