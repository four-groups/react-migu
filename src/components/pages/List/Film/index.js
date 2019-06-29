import React,{Component} from "react"
import GroupState from "../../../../modules/group"
class Film extends Component {
    render(){
        return (
            <div>
               <div className="filmbox">
                   <img width="100%" src="https://wapx.cmvideo.cn/publish/clt/image/70/752/473.jpg" alt=""/>
               </div>
            </div>
        )
    }
}
export default GroupState(Film,{
    reducer:"list",
    states:[]
})