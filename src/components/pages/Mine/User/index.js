import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../modules/group"
import Content from "../Content"

class User extends Component{
    constructor(){
        super()
        this.exit = this.exit.bind(this)
    }
    exit(){
        this.props.exit();
        this.props.history.replace("/login")
    }
    render(){
        return (
            <div>
                {/* <p><button onClick={this.exit}>退出</button></p>
                <p>用户为：{this.props.userInfo&&this.props.userInfo.username}</p> */}

                <div className="page_title">
                    <span>我的</span>
                    <i className="pull_right fa fa-cog"></i>
                </div>
                <div className="page_head clear">
                    <div className="userPhone1">
                        <img src="../../../assets/defaultPhoto.png"  alt=""/>
                    </div>
                    <p className="font_16">ID:{this.props.userInfo&&this.props.userInfo.username}</p>
                    <div className="past1">
                        <p className="pastFont1">退出</p>
                    </div>
                </div>
                <Content/>
            </div>
        )
    }
}
export default GroupState(User,{
    reducer:"commons",
    states:["userInfo"]
})