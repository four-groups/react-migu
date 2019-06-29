import React,{Component} from 'react';
 import {
  Home,Buycar, List, Mine
} from "./components/pages"
import Detail from "./components/pages/Home/HPage/Free/Detail"
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"
import Speciallist from "./components/pages/Home/HPage/Video/Speciallist";
import Reconlist from "./components/pages/Home/HPage/Recommend/Reconlist"
import Bannerdetail from "./components/pages/Home/HPage/Recommend/Bannerdetail"
import MovieDetail from './components/pages/List/movieDetail';
import Login from './components/pages/Mine/Login';
import User from './components/pages/Mine/User';
import MySpecials from "./components/pages/Mine/MySpecials";
class App extends Component{

  componentWillReceiveProps(props){
    let pathname = props.location.pathname;
    let {replace} = props.history;
    if(pathname==="/home"){
      replace("/home/recommended")
    }
    if(pathname==="/list"){
      replace("/list/cinema/coming")
    }
  }

  renderNavs(){
    let {navs} = this.props;
    return (
        <Switch>
          {
            navs.map(item=>{
              return (
                <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
              )
            })
          }
          <Redirect to="/home/recommended"/>
        </Switch>
    )
  }
  renderFooter(){
    let {pathname} = this.props.location;
    if(pathname === "/login") return "";
    if(/detail/.test(pathname)) return "";
    if(/speciallist/.test(pathname)) return "";
    if(/reconlist/.test(pathname)) return ""
    if(/bannerdetail/.test(pathname)) return ""
    if(/moviedetail/.test(pathname)) return ""
    if(pathname==="/myspecials") return "";
    return <AppFooter />
  }
  render(){
    return (
      <div>
       {this.renderNavs()}
       {this.renderFooter()}
      </div>
    )
  }
}
App.defaultProps = {
  navs:[
    {id:1,path:"/home",component:Home,exact:false},
    {id:2,path:"/list",component:List,exact:false},
    {id:3,path:"/buycar",component:Buycar,exact:false},
    {id:4,path:"/mine",component:Mine,exact:false},
    {id:5,path:"/detail/:id",component:Detail,exact:false},
    { id: 6, path: "/speciallist", component: Speciallist, exact: false },
    {id:7,path:"/Reconlist/:id",component:Reconlist,exact:false},
    {id:8,path:"/bannerdetail/:id", component:Bannerdetail,exact:false},
    {id:9,path:"/moviedetail/:id",component:MovieDetail,exact:false},
    {id:10,path:"/mine",component:Mine,exact:false},
    {id:11,path:"/login",component:Login,exact:false},
    {id:12,path:"/user",component:User,exact:false},
    {id:13,path:"/myspecials",component:MySpecials,exact:false},
  ]
}
export default withRouter(App);
