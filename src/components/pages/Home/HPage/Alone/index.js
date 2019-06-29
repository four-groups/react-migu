import React,{Component} from "react"
import "./index.scss"
import Banner from "./Banner"
import Specials from "./Specials"
class Alone extends Component{
    render(){
        return (
            <div>
                <div className="alone">
                <Banner></Banner>
                </div>
                <Specials></Specials>
            </div>
        )
    }
}
export default Alone