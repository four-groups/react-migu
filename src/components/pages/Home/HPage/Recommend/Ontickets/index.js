import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/group"
import Swiper from "swiper"
import {NavLink} from "react-router-dom"
class Ontickets extends Component{
    componentDidMount(){
        let {tickets} = this.props;
        if(tickets){
            this.initSwiper()
            return false;
        }
        this.props.getTickets(()=>{
            this.initSwiper()
        })
    }
    initSwiper(){
        new Swiper(".tickets",{
            loop:true,
            slidesPerView : 3,
            spaceBetween : 15,
        })
    }
    renderSlide(){
        let tickets = this.props.tickets;
        if(!tickets) return ""
        return tickets.map((item,index)=>{
            return (
                <li key={index} className="swiper-slide">
                    <div className="content-pic">
                        <NavLink to={"/reconlist/" + item.SRC_CONT_ID}>
                            <img src={"http://movie.miguvideo.com" + item.imgSrcV} alt=""/>
                        </NavLink>
                    </div>
                    <div className="content-intro">
                        <p className="font-14 grey">{item.name}</p>
                        <p className="font-13 light-grey">{item.LONG_NAME}</p>
                    </div>
            </li> 
            )
        })
    }
    render(){
        //console.log("tickets",this.props.tickets)
        return (
            <div className="module1">
                <div className="module-name">正在售票</div>
                <div className="module-con">
                    <div className="swiper-container tickets">
                        <ul className=" ticket swiper-wrapper vertical-pic clearfix ">
                            {this.renderSlide()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default GroupState(Ontickets,{
    reducer:"home",
    states:["tickets"]
})