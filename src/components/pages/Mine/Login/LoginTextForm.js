import React,{Component} from "react"
import GroupState from "../../../../modules/group"
import {withRouter} from "react-router-dom"
import {Toast} from "antd-mobile";
class LoginTextForm extends Component{
    handleSubmit = (e)=>{
        //进行登录
        this.props.loginByText({
            phone:this.phone.value,
            code:this.code.value,
            success:data=>{
                Toast.success(data,3);
                this.props.history.replace("/user")
            },
            fail:err=>{
                Toast.fail(err,3,()=>{
                    this.code.value=""
                    this.code.focus()
                })
            }
        })
        //e.preventDefault()
    }
    render(){
        return(
            <form 
            onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input ref={el=>this.phone=el} type="text" placeholder="手机号"/>
                </div>
                <div className="form-group">
                    <input ref={el=>this.code=el} type="password" placeholder="验证码"/>
                </div>
                <button type="submit" className="login">登录</button>
            </form>
        )
    }
}

export default  withRouter(GroupState(LoginTextForm,{
    reducer:"commons",
    states:["userInfo"]
}))