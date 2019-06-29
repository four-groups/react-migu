import React,{Component} from "react"
import "./index.scss"
import { Player } from 'video-react';
import GroupState from "../../../../../../modules/group"
import qs from "querystring"
class Speciallist extends Component{
    render(){
        let paramObj = qs.parse(this.props.location.search.replace("?",""));
        return(
            <div className="play">
                 
                 <Player poster={paramObj.imgsrc} autoPlay={false} ref="player" videoId="video-1">
                    <source src={paramObj.videosrc} />
                </Player>
                <p className="title">{paramObj.title}</p>
            </div>
        )
    }
}

export default GroupState(Speciallist,{
    reducer:"home",
    states:["aloneBanners"]
})