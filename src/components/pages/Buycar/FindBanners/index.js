import React,{Component} from "react";
import "./index.scss";
import Swiper from "swiper"
import GroupState from "../../../../modules/group";


class Banners extends Component{
    componentDidMount(){

        //当我们发现点击路由多次请求数据
        let {findbanners} = this.props
        if(findbanners){
            this.initSwiper()
            return false
        }
        
        this.props.findBannersInfo( () => {
            
            this.initSwiper()
        });
    }
    componentWillReceiveProps(){
    }
    initSwiper(){
        new Swiper(".find-banners", {
            loop:true,
            autoplay:true
        })
    }
    renderSlide(){
        let {findbanners} = this.props;
        if(!findbanners) return "";
        return findbanners.map((item,index) => {
            return (
                <div key={index} className="find-img swiper-slide">
                      <img width="100%" src={"http://movie.miguvideo.com/publish/i_www/"+item.imgSrc} alt=""/>  
                </div>
            )
        })

    }
    render(){
        return (
            <div className="find-banners swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.renderSlide()
                    }
                </div>
            </div>
        )
    }
}

export default GroupState(Banners,{
    reducer:"home",
    states:["findbanners"]
});