//reducer是一个纯函数
import state from "./state"
import {fromJS} from "immutable"
import {GET_NAV_INFO,GET_HOME_INFO,ADD_MY_SPECIALS} from "./const"
const reducer = (prevState = fromJS(state),action)=>{
    switch (action.type) {
       case GET_NAV_INFO:
           return prevState.set("navs",action.navs)
       case GET_HOME_INFO:
           return prevState.set("banners",action.banners)
        case ADD_MY_SPECIALS:
            return prevState.set("myspecials",action.myspecials)
        default:
            return prevState;
    }
}
export default reducer;