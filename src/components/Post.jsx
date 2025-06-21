import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../Store/Store-posts";

const Post = ({ posts }) => {
  const [icon, setIcon] = useState();
  const [share, setShare] = useState();
  const {deletePost} = useContext(PostList);

  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0  ">
          <div className="card card-cont ">
            <div className="card-body post-card">
              <h5 className="card-title">{posts.title}</h5>
                <div className="img-card card">{posts.img}</div>
              <p className="card-text">{posts.body}</p>
              <div className="icon-cont">
                <i className="icon-position">
                  {icon === "clicked" ? (
                    <i className="icon-red" onClick={() => setIcon()}>
                      <FaHeart />
                    </i>
                  ) : (
                    <i onClick={() => setIcon("clicked")} className="icon">
                      <CiHeart />
                    </i>
                  )}
                  <div className="likes-no">
                    {icon === "clicked" ? posts.likes + 1 : posts.likes}
                  </div>
                </i>
                <i className="share-icon" onClick={() => setShare("shared")}>
                  <IoShareSocialOutline />
                </i>
                {share === "shared" && "Loading..."}
                <i className="share-icon" onClick={()=>deletePost(posts.id)} >
                  <AiTwotoneDelete />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
