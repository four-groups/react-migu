import React,{Component} from "react"
import "./index.scss"
import LazyLoad from 'react-lazyload';
import GroupState from "../../../../../../modules/group"
import {withRouter} from "react-router-dom"
import {NavLink} from "react-router-dom"
class Specials extends Component{
    componentDidMount(){
        this.props.addHomeSpecials()
        //判断redux里面navs是否存在，存在就不需要在发送请求了
        let {Specials} = this.props;

        if(Specials){
            return false;
        }

    }
    renderVideo(){
        let Specials = this.props.Specials;
        if(!Specials) return ""
        return Specials.map((item)=>{
            return(
                <div key={item.id} className="specialsMain">
                 <NavLink 
                    to={{
                        pathname:"/speciallist/",
                        search:"title="+item.title+"&videosrc="+item.videoSrc+"&imgsrc="+item.imgSrc
                    }}
                >
                    <LazyLoad>
                    <img width="100%" height="235px" alt="" src={item.imgSrc} />
                    </LazyLoad>
                </NavLink>
                    <span className="title">{item.title}</span>
                </div>
            )
        })
    }
    render(){
        
        return (
            <div className="specials">
                
                    {this.renderVideo()}
                
               
              
            </div>
            
        )
    }
}
export default withRouter(GroupState(Specials,{
    reducer:"home",
    states:["Specials"]
}))