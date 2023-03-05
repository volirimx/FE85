import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import { GetPostResponce, getPosts, Post } from "../../api/post/post";
// import { CardTablet } from "../../components/CardTablet/CardTablet";
// import Tab from "../../components/Tab/Tab";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { getAllPosts } from "../../redux/slices/cardSlice";
// import { preparePostsResponce } from "../../utils/utils";
// import PageTemplate from "../PageTemplate/PageTemplate";
// import styles from "./Posts.module.css"


// export const Posts = () => {
// const [tab, setTab] = useState(0)

// const tabs = [
//   {
//     id: 0,
//     title: 'All',
//     IsDisabled: false
//   },
//   {
//     id: 1,
//     title: 'My favorites',
//     IsDisabled: false
//   },
//   {
//     id: 2,
//     title: 'Popular',
//     IsDisabled: false
//   }
// ]

// // const cards = useAppSelector((store) => store.cards.cards)
// const [posts, setPosts] = useState<GetPostResponce>()
// const [inputValue, setInputValue] = useState('')
// const [orderValue, setOrderValue] = useState('')
// const dispatch = useAppDispatch()

//   useEffect (() =>  {
//     (async () => {
//       const postsResponseData = await getPosts(undefined, inputValue, orderValue)
//       setPosts(() => preparePostsResponce(postsResponseData))
//     })()
//   }, [inputValue, orderValue])

//   const buttonClick = async (link: string | null | undefined) => {
//     if (!link) return
//     const postsResponseData = await getPosts(link)
//     setPosts(() => preparePostsResponce(postsResponseData))
//   } 
  

//   return (
//     <div className={styles.wrapper}>
//       <PageTemplate title={"Blog"} linkName={''}>
//         <div className={styles.prev}>
//           <select name="" id="" onChange={((e) => setOrderValue(e.target.value))}>
//             <option value={"title"} label="dafault" />
//             <option value={"title"} label="title"  /> 
//             <option value={"text"} label="text"  /> 
//             <option value={"description"} label="description"/>
//           </select>
//         </div>
//         <input placeholder="Search..."
//         onChange={(e) => setInputValue(() => e.target.value)} />
//         {/* <Tab item={tabs} tab={tab} setTab={setTab} /> */}
//           <div className={styles.container}>
//             {posts?.results.map((card) => ( <CardTablet card={card} key={card.id} /> ))}
//           </div>
//           <div className={styles.prev}>
//               <button onClick={(() => buttonClick(posts?.previous))}>Prev</button>
//               <button onClick={(() => buttonClick(posts?.next))}>Next</button>
//           </div>
//       </PageTemplate>
//     </div>
//   );
// };
