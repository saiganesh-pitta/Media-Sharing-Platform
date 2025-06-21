import { useContext, useState } from "react";
import { PostList } from "../Store/Store-posts";
import { useNavigate } from "react-router-dom";


  const Fetching=( )=>{
 
  const navigate = useNavigate()

 const { fetchPost,setEffect} =useContext(PostList)
 
    const fetching=()=>{

         navigate("/");  
          setEffect(true)
       fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data)=>{ fetchPost(data.posts)
                       setEffect(false) })
      }

    return <center> 
        <button  onClick={fetching} type="button" className="btn btn-outline-primary btn-lg fetch">Fetch From API</button> 
        </center>
   }

export default Fetching;