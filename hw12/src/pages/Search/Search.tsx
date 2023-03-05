import React, { useState } from 'react';
import styles from "./Search.module.css";
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import { title } from 'process';
import SmallCard from '../../components/SmallCards/SmallCards';
import MediumCard from '../../components/MediumCards/MediumCards';
import ButtonPagination from '../../components/ButtonPagination/ButtonPagination';
import { useAppSelector } from '../../redux/hooks';


const Search = () => {

    const [value, setSearch] = useState("")

    const posts = useAppSelector((store) => store.modal.cards)


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
                                card={post}
                            />)}
                        </div>
                        <div>
                            {titlePost.map((post) => <MediumCard
                                card={post}
                            />)}
                        </div>
                    </div>
                    <div>
                        <div>
                            {titlePost.map((post) => <SmallCard
                                card={post}
                            />)}
                        </div>
                        <div>
                            {titlePost.map((post) => <SmallCard
                                card={post}
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