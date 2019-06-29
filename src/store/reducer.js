//这是一个合并的reducer
import {combineReducers} from "redux-immutable"
import commons from "./commons/reducer"
import home from "./home/reducer"
import list from "./list/reducer"
import mine from "./mine/reducer"
const reducer = combineReducers({
    commons,
    home,
    list,
    mine
})
export default reducer;