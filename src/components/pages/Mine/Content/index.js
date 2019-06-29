import React,{Component} from "react"
import "./index.scss"
import {Link} from "react-router-dom"


class Content extends Component{
    render(){
        return(
            <div>
                <div className="page-body">
                    <div className="tab-wrap" id="wrap" style={{display:'none'}}>
                        <ul className="tab-list clear">
                            <li>
                                <img width="30%" src="./img/colle.png" alt="" />
                                <p className="margin-top-5">收藏</p>
                            </li>
                            <li>
                                <img width="30%" src="./img/mov-com.png" alt="" />
                                <p className="margin-top-5">影评</p>
                            </li>
                            <li>
                                <img width="30%" src="./img/play-his.png" alt="" />
                                <p className="margin-top-5">播放历史</p>
                            </li>
                        </ul>
                    </div>
                    <div className="list-wrap" id="userOrderPurse">
                        <ul>
                            <li>
                                <div className="my-list clear">
                                    <span className="pull-left">
                                        <img className="img123" src="./img/order.png" alt="" />
                                        <span className="margin-left-5">我的订单</span>
                                    </span>
                                    <span className="pull-right">
                                        <i className="icon-small fa fa-angle-right"></i>
                                    </span>
                                </div>
                            </li>
                            <li>
                            <div className="my-list clear">
                                <span className="pull-left">
                                    <img className="img123" src="./img/wallet.png" alt="" />
                                    <Link to="/money"><span className="margin-left-5">我的钱包</span></Link>
                                </span>
                                <span className="pull-right">
                                    <span className="type-all">电影卡 票券 权益 积分 </span>
                                    <i className="icon-small fa fa-angle-right"></i>
                                </span>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-wrap" id="helpCenter">
                        <ul>
                            <li>
                                <div className="my-list clear">
                                    <span className="pull-left">
                                        <img className="img123" src="./img/question.png" alt="" />
                                        <Link to="/myspecials"><span className="margin-left-5">常见问题</span></Link>
                                    </span>
                                    <span className="pull-right">
                                        <i className="icon-small fa fa-angle-right"></i>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="my-list no-border clear">
                                    <span className="pull-left">
                                        <img className="img123" src="./img/serv-online.png" alt=""/>
                                        <span className="margin-left-5">在线客服</span>
                                    </span>
                                    <span className="pull-right">
                                        <i className="icon-small fa fa-angle-right"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-wrap">
                        <ul>
                            <li>
                                <div className="my-list clear">
                                    <span className="pull-left">
                                        <img  className="img123" src="./img/shopping.png" alt="" />
                                        <span className="margin-left-5">商城</span>
                                    </span>
                                    <span className="pull-right">
                                        <i className="icon-small fa fa-angle-right"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
