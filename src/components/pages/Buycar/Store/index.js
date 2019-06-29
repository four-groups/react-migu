import React,{Component} from "react"
import "./index.scss"

class Store extends Component{
    componentDidMount(){
        //判断redux里面findnews是否存在，存在就不需要在发送请求了
        let {findstores} = this.props;
        if(findstores){
            return false;
        }
    }
    render(){
        let {findstores} = this.props
        return (
            <div className="store">
                <a href="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/find/mall.jsp?nodeId=70023246">
                    <div className="store-top">
                        <span>商城</span>
                        <p className="fa fa-chevron-right"></p>
                    </div>
                </a>
                <div className="storeInfo">
                    <div className="storeItem">
                        {
                            findstores.map(item => {
                                return (
                                    <li key={item.id}>
                                        <img width="100%" src={item.imgSrc} alt=""/>
                                        <p>{item.title}</p>
                                        <span>{item.desc}</span>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Store.defaultProps = {
    findstores:[
        {id:1, title:"30元电影卡", desc:"￥30", imgSrc:"http://movie.miguvideo.com/publish/i_www/image/70/118/554.png"},
        {id:2, title:"50元电影卡", desc:"￥50", imgSrc:"http://movie.miguvideo.com/publish/i_www/image/70/174/209.jpg"}
    ]
}

export default Store;