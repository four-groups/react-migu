import {Get} from "../../modules/axios-utils"
import {GETITEM,ADD_SPECIALS} from "./const";
export default {
    getItem(){
        return dispatch=>{
            Get({
                url:"/migu/coming/list"
            }).then(res=>{
                let movies = res.data.data.object_list;
                //console.log(movies)
                dispatch({type:GETITEM,movies})
            })
        }
    },
    // addSpecials(){
    //     return dispatch=>{
    //         Get({
    //             url:"/migu/coming/list",
    //             data:{
    //                 page:2
    //             }
    //         }).then(res=>{
    //             let object_list = res.data.data.object_list;
    //             let movies = [];
    //             object_list.forEach(item => {
    //                 movies = movies.concat(item.object_list)
    //             });
    //             dispatch({type:ADD_SPECIALS,movies})
    //         })
    //     }
    // }
    getItems(){
        return dispatch=>{
            Get({
                url:"/migu/theater/list"
            }).then(res=>{
                let films = res.data.data.object_list;
                dispatch({type:ADD_SPECIALS,films})
            })
        }
    },
//     getGoodDetail(movieid){
//         return dispatch=>{
//             Get({
//                 url:"/migu/coming/list"+movieid
//             }).then(res=>{
//                 let goodDetail = res.data.data.object_list;
//                 console.log(goodDetail)
//                 dispatch({type:MOVIEDETAIL,goodDetail})
//             })
//         }
//     }
}