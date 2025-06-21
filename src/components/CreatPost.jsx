import { useContext, useRef, useState } from "react";
import { PostList } from "../Store/Store-posts";
import { useNavigate } from "react-router-dom";


const CreatePost=()=> {
    const navigate = useNavigate()
    const {addPost}=useContext(PostList)  
  const UserID= useRef();
  const [UserImg,setUserImg]= useState();
  const UserDes= useRef();
  
  const handleimg=(event)=>{
    setUserImg(URL.createObjectURL(event.target.files[0]))
    console.log(event.target.files[0])
  }
 
   const handlesubmit=(event)=>{
    event.preventDefault()
    const ID= UserID.current.value;
    const Matter= UserDes.current.value;

    {ID.length,Matter.length >1 &&  addPost(ID,{UserImg},Matter)  (navigate("/"))};  
      UserID.current.value= "";
      UserDes.current.value= "";
       
   }

    return <>
     <form className="input-form" onSubmit={handlesubmit} >
  <div className="mb-3">
    <input type="username" ref={UserID} placeholder="User ID" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
  </div>
   <div className="preview-btn">
    <input  type="file" onChange={handleimg}  accept="image/*" />
       { UserImg && <img className="preview-img" src={UserImg} alt="Uploaded preview" />}
   </div>
  <div className="mb-3"> 
    <textarea  type="text" ref={UserDes} className="form-control" id="example" placeholder="description" />
  </div>
  <button type="submit" className="btn btn-primary">Upload</button>
  </form>
    </>
};

export default CreatePost;
