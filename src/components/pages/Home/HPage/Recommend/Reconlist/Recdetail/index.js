import React,{Component} from "react"
import "./index.scss"
import GroupStates from "../../../../../../../modules/group"
import Swiper from "swiper"
class Reconlist extends Component{
    componentDidMount(){
        this.initSwiper()
        this.initSwiper1()
    }
    initSwiper(){
        this.swiper = new Swiper(".detailBox",{
            slidesPerView:"auto"
        })
    }
    initSwiper1(){
        this.swiper = new Swiper(".viedoBox",{
            slidesPerView:"4"
        })
    }
    renderSlide(){
        let detailsObj = this.props.ticketsdetails.personnel
        if(!detailsObj) return ""
        //console.log(detailsObj)
        return detailsObj.map((item,index)=>{
            return(
                <li key={index} className="swiper-slide">
                    <img id="img1" className="img-responsive" src={"http://movie.miguvideo.com/"+item.imgSrc} alt=""/>
                    <div className="text-center">
                        <p className="real-name">{item.name}</p>
                    </div>
                </li> 
            )
        })
    }
    renderSlideViedo(){
        let detailsObj = this.props.ticketsdetails.poster
        if(!detailsObj) return ""
        //console.log(detailsObj)
        return detailsObj.map((item,index)=>{
            return(
                <li key={index} className="swiper-slide">
                    <img id="img" src={"http://movie.miguvideo.com/"+item.bigimg} alt=""/>
                </li> 
            )
        })
    }
    render(){
        return(
            <div className="box">
               <div className="yanzhi">
                    <div className="list-title clearfix">
                        <div className="module-name">演职人员</div>
                        </div>
                    <div className="detailBox swiper-container">
                        <ul className="swiper-wrapper ul-list-wrap clearfix">
                            {this.renderSlide()}
                        </ul>
                    </div>
               </div>
               {/* 视频 */}
               <div className="video1">
                    <div className="list-title clearfix">
                        <div className="module-name">视频和剧照</div>
                    </div>
                    <div className="swiper-container viedoBox">
                        <ul className="swiper-wrapper">
                            {this.renderSlideViedo()}
                        </ul>
                    </div>
               </div>
            </div>
        )
    }
}
export default GroupStates(Reconlist,{
    reducer:"home",
    states:["ticketsdetails"]
})