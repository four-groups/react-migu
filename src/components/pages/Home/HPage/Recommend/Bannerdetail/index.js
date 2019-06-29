import React,{Component} from "react"
import "./index.scss"
import GroupStates from "../../../../../../modules/group"
class Bannerdetail extends Component {
    componentDidMount(){
        let bannerId = this.props.match.params.id
         this.props.getBannerDetails(bannerId)
    }
    renderSlide(){
        let bannerimg = this.props.bannerdetails
            if(!bannerimg) return ""
            //console.log(bannerimg)
            return (
                <div className="box">
                    <section className="modulew">
                        <img width="100%" src={bannerimg.bigimg} alt=""/> 
                        <img width="100%" src={bannerimg.imgSrc} alt=""/> 
                        <img width="100%" src={bannerimg.smallimg} alt=""/> 
                    </section> 
                </div>

            )
     
        } 
        render(){
        return (
            <div id="allBlock">
                {this.renderSlide()}
            </div>
        )
    }
}
export default GroupStates(Bannerdetail,{
    reducer:"home",
    states:["bannerdetails"]
})