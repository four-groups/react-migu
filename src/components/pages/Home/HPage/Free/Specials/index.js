import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../../../modules/group"
import {NavLink} from "react-router-dom"
class Specials extends Component{
    componentDidMount(){
        this.props.addSpecials()
    }

    renderSlide(){
        let specials = this.props.specials
        if(!specials) return ""
        return specials.map(item=>{
            return (
                <li key={item.SRC_CONT_ID}>
                    <NavLink to={{pathname:"/detail/"+item.SRC_CONT_ID}}>
                    <div className="content-pic">
                        <img className="lazy" src={"http://movie.miguvideo.com/"+item.imgSrcV} alt=""/>
                        <span className="bottom-tag ">{item.miguScore}</span>
                    </div>
                    </NavLink> 
                    <div className="content-intro">
                        <p className="font-14">{item.name}</p>
                        <p className="font-13">{item.LONG_NAME}</p>
                    </div>
                </li>
            )
        })
    }
    render(){
       
        return (
            <div className="module-con">
                <ul className="vertical-pic" >
                    {this.renderSlide()}
                </ul>
            </div>
        )
    }
}
export default GroupState(Specials,{
    reducer:"home",
    states:["specials"]
});