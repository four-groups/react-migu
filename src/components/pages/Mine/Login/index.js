import React,{Component} from "react"
import "./index.scss"
import {NavBar,Icon} from "antd-mobile";
import LoginTextForm from "./LoginTextForm"
import LoginUserForm from "./LoginUserForm" 
import GroupState from "../../../../modules/group"
import {withRouter}from "react-router-dom"

class Login extends Component{
    constructor(){
        super()
        this.login = this.login.bind(this)
        this.state = {
            LoginType:"text"
        }
    }
    login(){
        this.props.login({
            username:"123",
            password:"456",
            success:data=>{
                alert(data)
                //this.props.location.pathname("/user")
            },
            fail:err=>{
                // alert(err)
            }
        })
    }
    //登录表单的切换
    changeLoginType(){
        let Form = LoginTextForm;
        let {loginType} = this.state;
        let title = "账号密码登录"
        let type = "user"
        if(loginType !== "text"){
            Form = LoginUserForm;
            title = "短信快捷登录"
            type = "text"
        }
        const changeType = ()=>{
            this.setState({
                loginType:type
            })
        }
        return(
            <div className="content">
                    <Form/>
                    <p onClick={changeType} className="change-type">{title}</p>
            </div>
        )
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>this.props.history.replace("/mine/login")}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.state.loginType==="text"?"短信快捷":"账户密码"}登录</NavBar>
                {
                    this.changeLoginType()
                }
            </div>
        )
    }
}
export default withRouter(GroupState(Login,{
    reducer:"commons",
    states:["userInfo"]
}))