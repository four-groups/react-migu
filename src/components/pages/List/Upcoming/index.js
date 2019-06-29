import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../modules/group"
import {NavLink} from "react-router-dom"
class Upcoming extends Component {
    componentDidMount(){
        this.props.getItems()
    }
    renderitem(){
        let {films} = this.props;
        if(!films) return ""
        return (
            <div>
                {
                    films.map(item=>{
                        return (
                            
                        <div key={item._id}>
                            <NavLink to="/moviedetail/1">
                            <div className="movieitem">
                            <div className="left">             
                            <img src={"http://movie.miguvideo.com" + item.picAddr} alt=""/>
                            </div>
                            <div className="right">
                                <h3>{item.filmName}</h3>
                                <p>上映：{item.openingDate}</p>
                                <p>产地：{item.country}</p>
                                <p>导演：{item.director}</p>
                            </div>
                            </div>
                            </NavLink>
                        </div>
                       
                        )
                    })
                }
                <p>没有更多数据...</p>
            </div>
        )
    }
    render(){
        // console.log("movies",this.props.movies)
        
        return (
            <div>
                <div className="item">
                    {this.renderitem()}
                </div>
            </div>
        )
    }
}
export default GroupState(Upcoming,{
    reducer:"list",
    states:["films"]
})