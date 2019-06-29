import React,{Component} from "react"
import "./index.scss"
import Swiper from "swiper"
import GroupState from "../../../../modules/group"
import {withRouter} from "react-router-dom"
class HomeNavBar extends Component{
    componentDidMount(){
       
        let {navs} = this.props;
        if(navs){
            this.initSwiper()
            return false;
        }
        //this.initSwiper()
        this.props.getNavs(()=>{
            this.initSwiper()
        })
    }
    componentWillReceiveProps(props){
        let pathname = props.location.pathname
        let index = 0;
        switch (pathname) {
            case "/home/recommended":
                index = 0
                break;
            case "/home/free":
                index = 1
                break;
            case "/home/alone":
                index = 2
                break;
            case "/home/video":
                index = 3
                break;
            default:
                break;
        }
        this.props.changeActiveIndex(index);
    }
    initSwiper(){
        this.swiper = new Swiper(".home-navbar",{
            slidesPerView:"auto"
        })
    }
    handleClick = (e)=>{
        let index = e.target.getAttribute("index");
        let {replace} = this.props.history;
        switch (index) {
            case "0":
                replace("/home/recommended")
                break;
            case "1":
                replace("/home/free")
                break;
            case "2":
                replace("/home/alone")
                break;
            case "3":
                replace("/home/video")
                break;
            default:
                break;
        }
    }
    renderSlide(){
        let navs = this.props.navs;
        if(!navs) return ""
        let {activeIndex} = this.props;
        return navs.map((item,index)=>{
            return (
                <div key={item._id} index={index} onClick={this.handleClick}  className={"swiper-slide "+(index===activeIndex?'active':"")}>{item.title}</div>
            )
        })
    }

    
    render(){
        return(
            <div className="home-navbar swiper-container">
                <div className="swiper-wrapper">
                    {this.renderSlide()}
                </div>
            </div>
        )
    }
}
export default withRouter(GroupState(HomeNavBar,{
    reducer:"home",
    states:["navs","activeIndex"]
}))