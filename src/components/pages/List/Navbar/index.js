import React,{Component} from "react"
import "./index.scss"
import Coming from "../Coming"
import Upcoming from "../Upcoming"
import {Route,withRouter} from "react-router-dom"
class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            actives:0
        }
    }
    componentWillReceiveProps(props){
        let pathname = props.location.pathname
        let index = 0;
        switch (pathname) {
            case "/list/cinema/coming":
                index = 0
                break;
            case "/list/cinema/upcoming":
                index = 1
                break;
        }
        
    }
    handleClick= (e)=>{
        let index = e.target.getAttribute("index");
        let {replace} = this.props.history;
        console.log(index)
        switch (index) {
            case "0":
                replace("/list/cinema/coming")
                break;
            case "1":
                replace("/list/cinema/upcoming")
            default:
                break;
        }
        this.setState({
            actives:index*1
        })
    }
    changeBtn(){
        let {buttons} = this.props;
        let {actives} = this.state;
        return (
            buttons.map((item,index)=>{
                return(
                    <span className={index===actives?"active":""} index={index} onClick={this.handleClick} key={item.id}>{item.title}</span>
                )
            })
        )
    }
    render(){
        return (
            <div>
               <div className="nav">
                    {this.changeBtn()}
                </div>
                <Route path="/list/cinema/coming" component={Coming}></Route>
                <Route path="/list/cinema/upcoming" component={Upcoming}></Route>
            </div>
        )
    }
}
Navbar.defaultProps = {
    buttons:[
        {id:1,title:"正在上映"},
        {id:2,title:"即将上映"}
    ]
}
export default withRouter(Navbar)