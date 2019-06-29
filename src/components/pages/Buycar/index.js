import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import FindBanners from "./FindBanners"
import FindNavbar from "./FindNavBar"
import Store from "./Store"
import News from "./News"
import GroupState from "../../../modules/group"

class Buycar extends Component{
    backtop = ()=>{
        window.scrollTo(0,0)
    }
    componentDidMount(){
        this.initEvent()
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollFlag)
    }
    initEvent(){
        window.addEventListener("scroll", this.props.changeScrollFlag)
    }
    render(){
        let {scrollFlag} = this.props;
        return (
            <div className="Buycar">
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '3px' }} />,
                    ]}
                    >发现
                </NavBar>
                <FindBanners></FindBanners>
                <FindNavbar></FindNavbar>
                <Store></Store>
                <News></News>
                {
                    scrollFlag ? 
                        <div onClick={this.backtop} className="back-top">
                            <i className="fa  fa-arrow-up"></i>
                        </div>
                        :
                        ""
                }
            </div>
        )
    }
}
export default GroupState(Buycar,{
    reducer:"home",
    states:["scrollFlag"]
});
