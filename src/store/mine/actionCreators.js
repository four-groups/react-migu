import {Get} from "../../modules/axios-utils"
import {ADD_MY_SPECIALS} from "./const"

export default{
    //个人中心数据
    addMySpecials(callback){
        return dispatch=>{
            Get({
                url:"/migu/login"
            }).then(res=>{
                //获取数据
                let myspecials = res.data.data.object_list
                dispatch({type:ADD_MY_SPECIALS,myspecials})
                callback&&callback()
            })
        }
    }
}