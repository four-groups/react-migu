import React,{Component} from "react"
import "./index.scss"
import Specials from "./Specials"
class Video extends Component{
    render(){
        return (
            <div className="video" >
             <Specials></Specials>
            </div>
        )
    }
}
export default Video