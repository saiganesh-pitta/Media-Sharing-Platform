import { createContext, useReducer,useState } from "react";
import photo1 from "../img/sai.png"
import photo2 from "../img/pic.jpg"
import photo3 from "../img/pic2.jpg"
import photo4 from "../img/pic3.jpg"
import photo5 from "../img/pic4.jpg"
import photo6 from "../img/pic5.jpg"
import photo7 from "../img/pic6.jpg"
import photo8 from "../img/pic7.jpg"
import photo9 from "../img/pic8.jpg"
import photo10 from "../img/pic9.jpg"
import photo11 from "../img/pic.jpg"

export const PostList = createContext({
  postList: [],
   effect:[],
  setEffect:[],
  addPost:()=>{},
  fetchPost:()=>{},
  deletePost:()=>{},
});

const PostListReducer = (currPostList, action) => {
   let newPostList=currPostList;
   if(action.type==="DELETE_POST"){
      newPostList = currPostList.filter((items)=> items.id !== action.payload.postid)
   }
   else if(action.type==="FETCH_POST"){
      newPostList = action.payload.posts;
   }
    else if(action.type==="ADD_POST"){
      newPostList = [action.payload, ...currPostList]
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
 
  const [effect,setEffect]= useState(false);
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST
  );

  const addPost=(ID,{UserImg},Matter)=>{
    dispatchPostList({
      type:"ADD_POST",
      payload: { 
    id: Math.floor(Math.random(1)*10),
    title: ID,
    body: Matter,
    likes: Math.floor(Math.random(3)*30),
    img: <img src={UserImg}  /> ,
       },
    })    
  }

  const fetchPost=(posts)=>{
     dispatchPostList({
      type:"FETCH_POST",
   payload: { posts, }, 
        //  likes: Math.floor(Math.random(3)*30),  
  })}

  const deletePost=(postid)=>{
    dispatchPostList({
      type:"DELETE_POST",
      payload: { postid, } , 
    })
  }

  return <PostList.Provider value={{ postList,effect,setEffect,addPost,fetchPost,deletePost}}>{children}</PostList.Provider>;
};

const DEFAULT_POST = [
  {
    id:"01",
    title: "saiganesh_pitta",
    body: "Hard work makes the perfect returns",
    likes: Math.floor(Math.random(3)*30),
    img: <img src={photo1} />,
  },
  { 
    id:"02",
    title: "sunnySky_92",
    body: "Chasing sunsets and good vibes\uD83C\uDF05\u2728",
    likes:Math.floor(Math.random(3)*30),
    img: <img src={photo2} />,
  },
  { 
    id:"03",
    title: "techieTony99",
    body: "Code. Debug. Repeat. \uD83D\uDCBB\u2615 #DevLife",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo3} />,
  },
  { 
    id:"04",
     title: "wanderlust_girl17",
    body: "Lost in the right direction \uD83C\uDF0D\u2708\uFE0F",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo4} />,
  },
  { 
    id:"05",
   title: "chefVibes_27",
    body: "Seasoned with love \uD83C\uDF72❤️#HomeChef",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo5} />,
  },
  { 
    id:"06",
    title: "pixelCraft_08",
    body: "Creating magic one pixel at a time \uD83C\uDFA8\uD83D\uDD8C️",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo6} />,
  },
  { 
    id:"07",
    title: "movieBuff_42",
    body: "Just one more episode… I promise \uD83C\uDFAC\uD83C\uDF7F",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo7} />,
  },
  { 
    id:"08",
    title: "gymCrush_21",
    body: "No pain, no gain \uD83D\uDCAA\uD83D\uDD25 #FitLife",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo8} />,
  },
  { 
    id:"09",
    title: "gamerXtreme_33",
    body: "Respawning in 3...2...1 \uD83C\uDFAE\uD83D\uDDB9 #GG",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo9} />,
  },
  { 
    id:"10",
    title: "plantMama_55",
    body: "Watered my plants and my soul \uD83C\uDFBF\uD83D\uDCA7",
    likes:Math.floor(Math.random(3)*30),
     img: <img src={photo10} />,
  },
   { 
    id:"11",
    title: "midnightWriter_66",
    body: "Inked thoughts under moonlight \uD83D\uDD8B️\uD83C\uDF19",
    likes:Math.floor(Math.random(3)*30),
  },
];

export default PostListProvider;
