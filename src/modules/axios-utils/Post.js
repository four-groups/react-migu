import axios from "axios";
import qs from "querystring"

export default ({url,data})=>{
    return axios.post(url,qs.stringify(data))
}

/* Post({
    url:"/xm/v1/miproduct/estDelivery",
    data:{
        a:100
    }
}).then(res=>{

}) */