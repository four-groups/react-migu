import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import GroupStates from "../../../../../../modules/group"
import Recdetail from "./Recdetail"
class Reconlist extends Component{
    componentDidMount(){
        let movieId = this.props.match.params.id
       
       this.props.getTicketsDetails(movieId)
    }
    render(){
       let detailsObj = this.props.ticketsdetails
       if(!detailsObj) return ""
       //console.log(detailsObj)
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.replace("/")}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >{detailsObj.belongToName}</NavBar>
                <div className="page-head clearfix">
                    <div className="movie-pic-wrap">
                        <img  width="100%" src={"http://movie.miguvideo.com/" + detailsObj.imgSrc1} alt=""/>
                        <div className="shadow-box-one"></div>
                   </div>
                    <div className="movie-info-wrap">
                        <div className="movie-info clearfix">
                            <div className="pull-left1">
                                <img className="miguvideo" src={"http://movie.miguvideo.com/" + detailsObj.imgSrc} alt=""/>
                            </div>
                            <div className="mivie-info-list width-60">
                                <div className="paddingTop">{/*  style={height:75,paddingTop: 20} */}
                                    <p className="mov-name">{detailsObj.belongToName}</p>
                                    <p className="icon-star-wrap">
                                        <span id="thisMovScore">{detailsObj.score}</span>
                                    </p>
                                </div>
                                <div className="height68">{/*  style={height:60} */}
                                    <p className="movie-text-list margin-top-5">{detailsObj.DetailType}</p>
                                    <p className="movie-text-list margin-top-5">{detailsObj.region}</p>
                                    <p className="movie-text-list margin-top-5">
                                        <span className="span">{detailsObj.time}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="movie-desc">{detailsObj.describe}</p>
                    </div>
                </div>
                <Recdetail></Recdetail>
            </div>
        )
    }
}
export default GroupStates(Reconlist,{
    reducer:"home",
    states:["ticketsdetails"]
})