import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/group"
import {withRouter} from "react-router-dom"

import Swiper from "swiper"
class Banner extends Component{
    componentDidMount(){
       
        let {aloneBanners} = this.props;
        if(aloneBanners){
            this.initSwiper()
            return false;
        }
        //this.initSwiper()
        this.props.getAloneBanners(()=>{
            this.initSwiper()
        })
    }
    initSwiper(){
        this.swiper = new Swiper(".alone-banner",{
            slidesPerView:"auto",
            loop: true,
	autoplay:true,
            pagination: {
                el: ".swiper-pagination"
            }
        })
    }
    renderSlide(){
        let aloneBanners = this.props.aloneBanners;
        if(!aloneBanners) return ""
        return aloneBanners.map((item)=>{
            return (
                <div key={item.id} className="swiper-slide">
                    <img width="100%" src={item.imgSrc} alt="" />
                </div>
            )
        })
    }

    render(){
        return (
            <div className="alone alone-banner swiper-container">
               <div className="swiper-wrapper">
                     {this.renderSlide()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default withRouter(GroupState(Banner,{
    reducer:"home",
    states:["aloneBanners"]
}))