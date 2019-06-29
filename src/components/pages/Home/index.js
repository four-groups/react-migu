import React,{Component} from "react"
import "./index.scss"
import HomeNavBar from "./HomeNavBar"
import {Route} from "react-router-dom"
import Alone from "./HPage/Alone"
import Free from "./HPage/Free"
import Recommended from "./HPage/Recommend"
import Video from "./HPage/Video"
//import Banner from "./Banner"

class Home extends Component{
    render(){
        return (
            <div className="home">
                <HomeNavBar></HomeNavBar>
            <Route path="/home/video" component={Video} />
            <Route path="/home/alone" component={Alone} />
            <Route path="/home/free" component={Free} />
            <Route path="/home/recommended" component={Recommended} />
            </div>
        )
    }
}
export default Home