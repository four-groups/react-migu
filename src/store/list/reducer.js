
//分支的reducer必须是一个纯函数
//固定的输入必须要有固定的输出  不能更改之前的状态  不能有返回值不确定的数据(Math.random new Date())
//内部只能进行同步操作！！  新状态的地址与之前状态的地址如果不一样的话，才是认为返回新的状态（深拷贝才可以）
import state from "./state"
import {fromJS} from "immutable"
import {GETITEM,ADD_SPECIALS} from "./const"
const reducer = (prevState = fromJS(state),action)=>{
    switch (action.type) {
        case GETITEM:
            return prevState.set("movies",action.movies)
        case ADD_SPECIALS:
            return prevState.set("films",action.films)
        // case MOVIEDETAIL:
        //     return prevState.set("goodDetail",action.goodDetail)
        default:
            return prevState;
    }
}
export default reducer;