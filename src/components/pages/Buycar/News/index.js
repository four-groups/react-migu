import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../modules/group"

class News extends Component{
    componentDidMount(){
        //判断redux里面findnews是否存在，存在就不需要在发送请求了
        let {findnews} = this.props;
        if(findnews){
            return false;
        }
        this.props.findBannersInfo()
    }
    renderModule=()=>{
        let {findnews} = this.props;
        if(!findnews) return false;
        return findnews.map((item, index) => {
            return (
                <div key={index} className="loop-module4">
                <div className="loop-time4">{item.name}</div>
                <div className="module4">
                    <div className="module-name4">{item.picList[0].name}</div>
                    <div className="module-news4">
                        <ul>
                            {
                                item.picList[0].list.map(item => {
                                    return (
                                        <li className="item-li" key={item.SRC_CONT_ID}>
                                            <div className="news-con4">
                                                <a href={"http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/detail/newsDetail.jsp?cid="+item.SRC_CONT_ID}>
                                                    <div className="display new-con4">
                                                        <div className="news-title4">{item.name}</div>
                                                        <div className="news-src4">
                                                            <img src={"http://movie.miguvideo.com"+item.imgSrcH} alt=""/>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="timeWeb">时光网</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            )
        })
    }
    render(){
        return (
            <div className="new">
                <div>
                    {
                        this.renderModule()
                    }
                </div>
            </div>
        )
    }
}

export default GroupState(News,{
    reducer:"home",
    states:["findnews"]
})