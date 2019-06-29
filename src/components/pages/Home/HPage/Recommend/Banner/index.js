import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from "../../../../../../modules/group"
import {NavLink} from "react-router-dom"
class Banner extends Component{
    //请求数据
    componentDidMount(){
        let {rebanners} = this.props;
        if(rebanners){  //如果redux数据存在的话，就缓存一下
            this.initSwiper()
            return false;
        } 
        this.props.getHomeInfobanners(()=>{
            this.initSwiper()
        })
    }
    initSwiper(){
        new Swiper(".banner-wrap",{
            loop:true,
             effect: 'coverflow',
             grabCursor: true,
             centeredSlides: true,
             slidesPerView: '3',
             coverflowEffect: {
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows : true,
         }
         })
    }

    renderSlide(){
        let rebanners = this.props.rebanners;
       //console.log(banners)
        if(!rebanners) return ""
        return rebanners.map((item)=>{
            return (
                    <div key={item._id} className="swiper-slide">
                        <NavLink to={"/bannerdetail/" + item.longId}>
                            <img width="100%" style={{height:240}} src={item.imgSrc} alt=""/>
                        </NavLink>
                        <div className="swiper-slide-shadow-left"></div>
                        <div className="swiper-slide-shadow-right"></div>
                    </div>
                )
        })
    }
    
    /* //shouldComponentUpdate这个钩子函数处理
    //在这个钩子函数里面只需要出现关于banners数据的判断即可
    shouldComponentUpdate(props,state){
        if(props.banners !== this.props.banners){
            return true;
        }
        return false;
    } */

    render(){
       // console.log("banners",this)
        return (
            <section className="module">
                <div className="blur"></div>
                <div className="banner-wrap swiper-container scoll-Pic">
                    <div className="swiper-wrapper">
                        {this.renderSlide()}
                    </div>
                </div>
          </section>

        )
    }
}
export default GroupState(Banner,{
    reducer:"home",
    states:["rebanners"]
})