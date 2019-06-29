import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/group"
import Swiper from "swiper"
class Banner extends Component{
    componentDidMount(){

        let {banners} = this.props;
        if(banners){//如果redux有数据的话就缓存下来
            this.initSwiper()
            return false;
        }

        this.props.getHomeInfo(()=>{
           this.initSwiper()
        })
    }
    initSwiper(){
        new Swiper(".home-banner",{
            loop:true,
	autoplay:true,
            pagination:{
                el:".swiper-pagination"
            }
        })
    }
    renderSlide(){
        let banners = this.props.banners;
        if(!banners) return ""
        return banners.map(item=>{
            return (
                <div key={item.SRC_CONT_ID} className='swiper-slide'>
                <   img width="100%" src={"http://movie.miguvideo.com/"+item.imgSrcH} alt=""/>
                </div>
                )
        })   
    }
    render(){
        return (
            <div className="home-banner swiper-container">
                <div className="swiper-wrapper">
                {this.renderSlide()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default GroupState(Banner,{
    reducer:"home",
    states:["banners"]
});