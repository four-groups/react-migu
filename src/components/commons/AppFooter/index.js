import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
class AppFooter extends Component{
    renderFooter(){
        let {navs} = this.props;
        return (
            navs.map(item=>{
              return (
                 <NavLink key={item.id} to={item.path} exact={item.exact}>
                  <i className={"fa fa-" + item.icon}></i>
                  <span>{item.title}</span>
                </NavLink>
              )
            })
        )
    }
    render(){
        return (
            <div className="app-footer">
               {this.renderFooter()}
            </div>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        {id:1,path:"/home",icon:"film",exact:false,title:"看片"},
        {id:2,path:"/list",icon:"ticket",exact:false,title:"购票"},
        {id:3,path:"/buycar",icon:"ravelry",exact:false,title:"发现"},
        {id:4,path:"/mine",icon:"user",exact:false,title:"我的"}
    ]
}
export default AppFooter