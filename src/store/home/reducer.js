//reducer是一个纯函数
import state from "./state"
import {fromJS} from "immutable"
import {GET_FIND_BANNERS, CHANGE_SCROLL_FLAG,GET_RECO_BANNER,GET_HOME_TICKET,GET_HOEM_DETAIL,GET_HOME_BANNERDETAIL,ADD_HOME_DETAIL,ADD_HOME_SPECIAL1,ADD_HOME_SPECIAL,GET_NAV_INFO,GET_HOME_INFO,CHANGE_ACTIVE_INDEX,ADD_HOME_SPECIALS,GET_ALONE_BANNERS} from "./const"
const reducer = (prevState = fromJS(state),action)=>{
    switch (action.type) {
       case GET_NAV_INFO:
           return prevState.set("navs",action.navs)
       case GET_HOME_INFO:
           return prevState.set("banners",action.banners)
        case CHANGE_ACTIVE_INDEX:
            return prevState.set("activeIndex",action.activeIndex)
        case ADD_HOME_SPECIAL:
            return prevState.set("specials",action.specials)
        case ADD_HOME_SPECIAL1:
            return prevState.set("specials1",action.specials1)
        case ADD_HOME_DETAIL:
            return prevState.set("goodDetail",action.goodDetail).set("personnel",action.personnel)
        case ADD_HOME_SPECIALS:
            return prevState.set("Specials",action.Specials)
        case GET_ALONE_BANNERS:
            return prevState.set("aloneBanners",action.aloneBanners)
            case GET_HOME_TICKET:
            return prevState.set("tickets",action.tickets)
        case GET_HOEM_DETAIL:
            return prevState.set("ticketsdetails",action.ticketsdetails)
        case GET_HOME_BANNERDETAIL:
            return prevState.set("bannerdetails",action.bannerdetails)
        case GET_RECO_BANNER:
            return prevState.set("rebanners",action.rebanners)
        
        case GET_FIND_BANNERS:
            return prevState.merge({
                findbanners:action.findbanners,
                findnavbars:action.findnavbars,
                findnews:action.findnews,
            })
        case CHANGE_SCROLL_FLAG:
            return prevState.set("scrollFlag",action.scrollFlag)
        default:
            return prevState;
    }
}
export default reducer;