import {CHECK_USER_INFO} from "./const"
export default {
    loginByText({phone,code,success,fail}){
        return dispatch=>{
            setTimeout(() => {
                if(phone==="178" && code==="456"){
                    let action = {
                        type: CHECK_USER_INFO,
                        userInfo: { username: "翟天临" }
                    }
                    dispatch(action)
                    success && success("手机登录成功！")
                    return false;
                }
                fail && fail("手机登录失败！")
            }, 1000);
        }
    },
    loginByUser({ username, password, success, fail }) {
        return dispatch => {
            setTimeout(() => {
                if (username === "123" && password === "456") {
                    let action = {
                        type: CHECK_USER_INFO,
                        userInfo: { username: "翟天临" }
                    }
                    dispatch(action)
                    success && success("用户登录成功！")
                    return false;
                }
                fail && fail("用户登录失败！")
            }, 1000);
        }
    },
    exit(){
        let action = {
            type: CHECK_USER_INFO,
            userInfo:null
        }
        return action;
    }
}