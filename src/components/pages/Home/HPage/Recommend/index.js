import React,{Component} from "react"
import "./index.scss"
import Banner from "./Banner"
import Ontickets from "./Ontickets"
//import GroupState from "../../../../modules/group"
class Recommend extends Component{
    render(){
        return(
            <div>
                 <Banner></Banner>
                 <Ontickets></Ontickets>
            </div>
        )
    }
}
export default Recommend