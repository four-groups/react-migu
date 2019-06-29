import React,{Component} from "react"
import "./index.scss"
import {Route} from "react-router-dom"
import Login from "./Login"
import User from "./User"
import {Link} from "react-router-dom"
import Content from "./Content"
import GroupState from "../../../modules/group"


class Mine extends Component{

    componentDidMount(){
        this.checkUserInfo()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userInfo !== this.props.userInfo){
            this.checkUserInfo(nextProps)
        }
    
}
    checkUserInfo(props){ //跳转的方法
        let {userInfo,history} =props || this.props;
        if(userInfo){ //说明用户已经登录
            history.replace("/mine/user")
        }else{
            history.replace("/mine/login")
        }
    }
    render(){
        //console.log("MINE",this.props)
       return(
       
            <div>
               
               <Route path="/login" component={Login} replace/>
                <Route path="/user" component={User} />

                <div className="page-title">
                    <span>我的</span>
                    <i className="pull-right fa fa-cog"></i>
                </div>
                <div className="page-head clear">
                    <div className="userPhone">
                        <img className="img1" src="./img/defaultPhoto.png" alt=""/>
                    </div>
                        <Link to="/login" replace><p className="font-16">
                        点击登录</p></Link>
                    <div className="past">
                        <i className="icon-small fa fa-angle-right"></i>
                    </div>
                </div>
                <Content></Content>
            
            </div>
        )
       
    }
}
export default GroupState(Mine,{
    reducer:"commons",
    states:["userInfo"]
})