import React,{Component} from "react"
import GroupState from "../../../../modules/group"
import { NavBar, Icon } from 'antd-mobile'
import {withRouter} from "react-router-dom"
import "./index.scss"
class MovieDetail extends Component{
    render(){
        // console.log(this.props.goodDetail)
        return (
            <div>
               <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>this.props.history.goBack()}
                >阿拉灯的神丁
                </NavBar>
                <div >
                    <img className="img1" width="100%" src="http://img5.imgtn.bdimg.com/it/u=406224933,2816019104&fm=11&gp=0.jpg" alt=""/>
                </div>
                <div className="movbox">
                    <div className="movleft">
                        <img className="movimg" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3297261154,2231661797&fm=27&gp=0.jpg" alt=""/>
                    </div>
                    <div className="movright">
                        <h1>阿拉灯</h1>
                        <p><span>张林 饰 神丁</span>|孙荣|程彩云</p>
                        <p>内地</p>
                        <p>上映时间：2019年7月</p>
                    </div>
                </div>
                <div className="say">
                千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道。他们去到了另外一个诡异世界：一个中世纪的小镇。远处飘...
                </div>
                <div>
                    <img width="100%" src="http://img4.imgtn.bdimg.com/it/u=2474272519,2142557857&fm=11&gp=0.jpg" alt=""/>
                </div>
            </div>
        )
    }
}
export default withRouter(GroupState(MovieDetail,{
    reducer:"list",
    states:["goodDetail"]
}))