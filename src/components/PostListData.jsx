import { useContext, useState } from "react";
import Post from "./Post";
import {PostList} from "../Store/Store-posts";
import Loader from "./Loader"

const PostListData =()=>{
    
  const {postList,effect}= useContext(PostList);
    
    return <>
    
      {effect &&  <Loader></Loader>}  
    {postList.map((posts)=>(<Post key={posts.id} posts={posts} ></Post>))}
    </>
 } 

 export default PostListData;