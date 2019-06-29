import {Get} from "../../modules/axios-utils"
import {GET_FIND_BANNERS,CHANGE_SCROLL_FLAG,GET_RECO_BANNER,GET_HOME_TICKET,GET_HOEM_DETAIL,GET_HOME_BANNERDETAIL,ADD_HOME_DETAIL,ADD_HOME_SPECIAL1,ADD_HOME_SPECIAL,GET_NAV_INFO,GET_HOME_INFO,CHANGE_ACTIVE_INDEX,ADD_HOME_SPECIALS,GET_ALONE_BANNERS} from "./const"

export default {
    getNavs(callback){//添加头部导航
        return dispatch=>{
         Get({
            url:"/migu/navbar"
        }).then(res=>{
            let navs = res.data.data.object_list
            dispatch({type:GET_NAV_INFO,navs})
            callback && callback()
        })
           }
    },
    getHomeInfo(callback){//添加免费看片的banner
        return dispatch=>{
            Get({
                url:"/migu/home/list",
                data:{
                    limit:6
                }
            }).then(res=>{
                let banners = res.data.data.object_list;
                dispatch({type:GET_HOME_INFO,banners})
                callback && callback()
            })
        }
    },
    addSpecials(){//添加下方的详情
        return dispatch=>{
            Get({
                url:"/migu/index",
                data:{
                    limit:6
                }
            }).then(res=>{
                let specials = res.data.data.object_list;
                dispatch({type:ADD_HOME_SPECIAL,specials})
               
            })
        } 
    },
    addSpecials1(limit,page,callback){//因为详情动画不一样，所以进行两次请求
        return dispatch=>{
            Get({
                url:"/migu/index",
                data:{
                    limit:limit,
                    page:page
                }
            }).then(res=>{
                let specials1 = res.data.data.object_list;
                dispatch({type:ADD_HOME_SPECIAL1,specials1})
                callback && callback()
            })
        } 
    },
    addDetail(id,callback){//请求详情页面
        return dispatch=>{
            Get({
                url:"/migu/detail/"+id,
            }).then(res=>{
                let goodDetail = res.data;
                let personnel = res.data.personnel;
                dispatch({type:ADD_HOME_DETAIL,goodDetail,personnel})
                callback && callback()
            })
        } 
    },
    changeActiveIndex(activeIndex){//设置点击
        return { type: CHANGE_ACTIVE_INDEX,activeIndex}
    },
    addHomeSpecials(callback){
        
        return dispatch=>{
            Get({
               url:"/migu/video"
           }).then(res=>{
               let Specials = res.data.data.object_list
               
               //console.log(navs)
               //派发action
               dispatch({type:ADD_HOME_SPECIALS,Specials})
               callback && callback()
           })
              }
    },
    getAloneBanners(callback){
        return dispatch=>{
         Get({
            url:"/migu/moviebill"
        }).then(res=>{
            let aloneBanners = res.data.data.object_list
            //console.log(navs)
            //派发action
            dispatch({type:GET_ALONE_BANNERS,aloneBanners})
            callback && callback()
        })
     }
    
    },
     //推荐中banners
     getHomeInfobanners(callback){
        return dispatch=>{
            Get({
                url:"/migu/banners"
            }).then(res=>{
                let rebanners = res.data.data.object_list;
                dispatch({type:GET_RECO_BANNER,rebanners})
                callback && callback()
            })
        }
    },
    //推荐中的正在售票
    getTickets(callback){
        return dispatch=>{
            Get({
                url:"/migu/index"
            }).then(res=>{
                let tickets = res.data.data.object_list;
                //console.log(tickets)
                dispatch({type:GET_HOME_TICKET,tickets})
                callback && callback()
            })
        }
    },
    //推荐中正在售票详情
    getTicketsDetails(movieId,callback){
        return dispatch=>{
            Get({
                url:"/migu/detail/" + movieId
            }).then(res=>{
                let ticketsdetails = res.data
               dispatch({type:GET_HOEM_DETAIL,ticketsdetails})
               callback && callback()
            })
        }
    },
    //推荐中banners中的详情
    getBannerDetails(bannerId,callback){
        return dispatch=>{
            Get({
                url:"/migu/bannersdetail/" + bannerId
            }).then(res=>{
                let bannerdetails = res.data
               // console.log(bannerdetails)
                dispatch({type:GET_HOME_BANNERDETAIL,bannerdetails})
                callback && callback()
            })
        }
    },
    //推荐结束
    //发现 页面 信息
    findBannersInfo(callback){
        return dispatch => {
            Get({
                url:"/migu/find/list"
            }).then(res => {
                //请求轮播图数据
                let findbanners = res.data.data.object_list[0].list

                // 请求navbar数据
                let findnavbars = res.data.data.object_list[1].list

                //请求资讯数据
                let findnews = res.data.data.object_list[3].list
                dispatch({type:GET_FIND_BANNERS, findbanners, findnavbars,findnews})
                callback && callback()
            })
        }
    },
    // 发现 返回顶部
    changeScrollFlag(e){
        let sTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(sTop>400){
            return {type:CHANGE_SCROLL_FLAG,scrollFlag:true}
        }else{
            return { type: CHANGE_SCROLL_FLAG, scrollFlag: false }
        }
    }
}