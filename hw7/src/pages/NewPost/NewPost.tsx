import React, { useState } from "react"
import { sendPost } from "../../api/auth/sendPost"
import styles from './NewPost.module.css'


type IPostData = {
    title: string
    text: string
    lesson_num: number
    image: string
    description: string
}

const NewPost = () => {
    const [postData, setPostData] = useState<IPostData>({
        title: '',
        text: '',
        lesson_num: 0,
        image: '',
        description: ''
    })
    async function handleSubmitButtonClick (e: any) {
        e.preventDefault()
        // const response = await sendPost(postData)
        // console.log(response);
    }
    return (
        <div className={styles.container}>
            <form action="https://studapi.teachmeskills.by/blog/posts/" method="POST">
                <div>Title: <input type='text' name="title" onChange={(e) => setPostData({...postData, title: e.target.value})} /></div>
                <div>Text: <input type='text' name="text" onChange={(e) => setPostData({...postData, text: e.target.value})}/></div>
                <div>Lesson Num: <input type='number' name="lesson_num" onChange={(e) => setPostData({...postData, lesson_num: parseInt(e.target.value)})}/></div>
                <div>Description: <input type='text' name='description' onChange={(e) => setPostData({...postData, description: e.target.value})}/></div>
                <div>Image: <input type='text' name="image" onChange={(e) => setPostData({...postData, image: e.target.value})}/></div>
                <button type="submit" onSubmit={(e) => handleSubmitButtonClick(e)}>Confirm</button>
            </form>
        </div>
    )
}

export default NewPost