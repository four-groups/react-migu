import React,{Component} from "react"
import GroupState from "../../../../modules/group"
import {withRouter} from "react-router-dom"

class LoginUserForm extends Component{
    handleSubmit = (e)=>{
        //进行登录
        this.props.loginByUser({
            username:this.username.value,
            password:this.password.value,
            success:data=>{
                alert(data)
                this.props.history.replace("/user")
                return false;
            },
            fail:err=>{
                alert(err)
                return false;
            }
        })
       
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input ref={el=>this.username=el} type="text" placeholder="用户名"/>
                </div>
                <div className="form-group">
                    <input ref={el=>this.password=el} type="password" placeholder="密码"/>
                </div>
                <button type="submit" className="login">登录</button>
            </form>
        )
    }
}

export default withRouter(GroupState(LoginUserForm,{
    reducer:"commons",
    states:["userInfo"]
}))