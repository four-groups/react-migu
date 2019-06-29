

import {CHECK_USER_INFO} from "./const"
import state from "./state"
import {fromJS} from "immutable"
const reducer = (prevState = fromJS(state),action)=>{ //
    switch (action.type) {
        case CHECK_USER_INFO:
            return prevState.set("userInfo",action.userInfo)
        default:
            return prevState; //immutable对象了！
    }
}

export default reducer;