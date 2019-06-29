import React,{Component} from "react"
import "./index.scss"
import Banner from "./Banner"
import Specials from "./Specials"
import Specials1 from "./Specials1"
class Free extends Component{
    render(){
        return (
            <div className="free" >
                <Banner></Banner>
                <div className="recommend" >
                 <div className="module-name">热门推荐(免费)</div>
                    <Specials></Specials>
                </div>
                <div className="recommend" >
                    <div className="module-name">票房过亿的电影</div>
                    <Specials1 index={{limit:10,page:3}}></Specials1>
                </div> 
             <div className="recommend" >
                 <div className="module-name">豆瓣评分8.0+的电影</div>
                    <Specials></Specials>
            </div>
                <div className="recommend" >
                 <div className="module-name">分分钟赏片</div>
                 <Specials1 index={{limit:5,page:1}}></Specials1>
             </div> 
            <div className="recommend"  >
                 <div  className="module-name">咪咕独播</div>
                    <Specials></Specials>
            </div>
        </div>
        )
    }
}
export default Free