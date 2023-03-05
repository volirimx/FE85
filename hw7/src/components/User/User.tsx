
import styles from './Post.module.css'
import { useJWTContext } from "../../context/authContext"
import { signIn } from "../../api/auth/auth"
import {useEffect, useState} from 'react'
import { user } from '../../user'


const User = () => {
    const [data, setData] = useState({
        id:-1,
        username: '',
        email: ''
    })


    useEffect(() => {
        user().then(response => {setData(response.data)})
    },[])

    return (
        <>
            <div className="styles.id">
                {data.id}
            </div>
            <div className="styles.username">
                {data.username}
            </div>
            <div className="styles.email">
                {data.email}
            </div>
        </>
    )
}


export default User
