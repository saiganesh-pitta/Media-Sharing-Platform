import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import LeftSideBar from "./components/Leftsidebar";
import PostListProvider from "./Store/Store-posts";
import { Outlet } from "react-router-dom";


function App() {
   
  
  return (
    <PostListProvider>
    <div className="display"  >  
       <div className="left-container">
           <LeftSideBar></LeftSideBar>
       </div>   
       <div id="rigth-cont" className="right-container">
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
      </div>
    </div>  
    </PostListProvider>
  )
}
export default App;
