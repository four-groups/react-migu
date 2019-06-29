import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/group"
import Swiper from "swiper"
import {NavLink} from "react-router-dom"
class Specials1 extends Component{
    componentDidMount(){
        let limit = this.props.index.limit
        let page = this.props.index.page
        this.props.addSpecials1(limit,page,()=>{
            this.initSwiper()
        })
    }

    initSwiper(){
        new Swiper(".movie",{
            loop:true,
 slidesPerView : 3,
            spaceBetween : 15,
        })
    }

    renderSlide(){
        let specials1 = this.props.specials1
        if(!specials1) return ""
        return specials1.map(item=>{
            return (
                <div className="swiper-slide slide"
                   key={item.SRC_CONT_ID}
                 >
                      <NavLink to={{pathname:"/detail/"+item.SRC_CONT_ID}}>
                      <div className="content-pic">
                        <img className="lazy" src={"http://movie.miguvideo.com/"+item.imgSrcV} alt=""/>
                        </div>
                    </NavLink>
                        <div className="content">
                            <p className="font-14">{item.name}</p>
                            <p className="font-13">{item.LONG_NAME}</p>
                        </div> 
                 </div>
            )
        })
    }
    render(){
        return (
            <div className="module-con">
                <div className="movie swiper-container " >
                    <div className="swiper-wrapper" 
                    >
                        {this.renderSlide()}
                    </div>
                </div>
            </div>
        )
    }
}
export default GroupState(Specials1,{
    reducer:"home",
    states:["specials1"]
});