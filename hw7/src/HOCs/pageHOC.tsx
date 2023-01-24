import '../App.css';
import React from "react";
import {IPost} from "../App";

export const pageHOC = (Component: any) => (props: {title: string, postsData?: IPost[], postData?: IPost}) => {
    return <>
        <button style={{"color": "black", "backgroundColor": "inherit", "marginTop": "50px", "fontSize": "20px"}}>Back to home</button>
        <div style={{"color": "black", "marginTop": "10px", "marginBottom": "20px", "fontSize": "40px"}}>{props.title}</div>
        <Component {...props}/>
    </>
}