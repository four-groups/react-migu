import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile'
import GroupState from "../../../modules/group"
import Film from "./Film"
import Cinema from "./Cinema"
import {Route,withRouter} from "react-router-dom"
class List extends Component{
    componentWillMount(){
        let {pathname} = this.props.history;
        if(pathname === "/list/film") return ""
    }
    constructor(){
        super()
        this.state = {
            activeIndex:0
        }
    }
    handleClick= (e)=>{
        let index = e.target.getAttribute("index");
        let {replace} = this.props.history;
        switch (index) {
            case "0":
                replace("/list")
                break;
            case "1":
                replace("/list/film")
        }
        this.setState({
            activeIndex:index*1
        })
    }
    getnavs(){
        let {navs} = this.props;
        let {activeIndex} = this.state;
        return (
            navs.map((item,index)=>{
                return (
                   <div index={index} onClick={this.handleClick} key={item.id} className={"leftbox "+(index===activeIndex?'active':"")}>{item.title}</div>
                )
            })
        )
    }
    render(){
        return (
            <div>
                <NavBar
                className="navbar1"
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>this.props.history.replace("/")}
                >
                    <div className="buttonbox">
                        {this.getnavs()}
                    </div>
                </NavBar>
                <Route path="/list" component={Cinema}></Route>
                <Route path="/list/film" component={Film}></Route>
            </div>
        )
    }
}
List.defaultProps = {
    navs:[
        {id:1,title:"影片"},
        {id:2,title:"影院"}
    ]
}
export default withRouter(GroupState(List,{
    reducer:"list",
    states:[]
}))