import axios from "axios";
import fs from "querystring"
let data = {
    "client_id": 180100031051,
    "channel_id": 0,
    "webp": 1,
    "product_id": 2192000018,
    "province_id": 2,
    "city_id": 36,
    "district_id": 377,
    "area_id": 377017
    }
axios.post("/xm/v1/miproduct/estDelivery",fs.stringify(data)).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log("err=>",err)
})