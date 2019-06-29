import React,{Component} from "react"
import "./index.scss"
import {withRouter} from "react-router-dom"
import GroupState from "../../../../modules/group"
import {Link} from "react-router-dom"


class MySpecials extends Component{
    componentDidMount(){
        this.props.addMySpecials()
        let {myspecials} = this.props;
        if(myspecials){
            return false;
        }
    }
    renderHelp(){
        // console.log("specials",this.props.specials)
        let {myspecials} = this.props;
        if(!myspecials) return ""
    return myspecials.map((item,index)=>{

        return(
            <div className="item_list" key={index}>
                <ul className="top_list" >
                    <li className="title">{item.coluKngName}</li>
                    {/* <li className="title">{item.coluKngName}</li> */}
                </ul>
            </div>
        )
    })
}

render(){

    return(
        <div>
            <div className="mineapp">
                   <div className="index">
                        <div className="main">
                            <div style={{touchAction:'none',userSelect:'none',color:'rgba(0,0,0,0)'}}>
                                <div className="header" style={{background:'rgba(255,255,255)'}}>
                                    <Link to="/mine"><i className="left_icon fa fa-angle-left"></i></Link>
                                    <p className="title_text">帮助与客服</p>
                                    <i className="tel_icon fa fa-phone"></i>
                                </div>
                                <img width="100%" src="http://kf.migu.cn:80/png/2018-09/goodAfternoon1536852748265.png" alt=""></img>
                            </div>
                            <div className="content">
                                <ul className="ul">
                                    <li className="item">
                                        {this.renderHelp()}
                                    </li>
                                </ul>
                            </div>
                            <div className="connect-bt" style={{color:'rgba(255,82,102)'}}>
                                <span className="text oneText" style={{color:'rgba(255,82,102)'}}>联系客服</span>
                            </div>

                        </div>
                   </div>
                </div>
        </div>
    )
}
}




export default withRouter(GroupState(MySpecials,{
        reducer:"mine",
        states:["myspecials"]
    }))
