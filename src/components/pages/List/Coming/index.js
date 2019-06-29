import React,{Component} from "react"
import "./index.scss"
import GroupStates from "../../../../modules/group"
import {NavLink} from "react-router-dom"
class Coming extends Component {
    componentDidMount(){
        this.props.getItem()
    }
    renderitem(){
        let {movies} = this.props;
        if(!movies) return ""
        return (
            <div>
                {
                    movies.map(item=>{
                        return (
                        // <NavLink to="/moviedetail/1">
                        <div key={item._id} >
                            <NavLink to="/moviedetail/1">
                                <div className="movieitem">
                            <div className="left">             
                            <img src={"http://movie.miguvideo.com" + item.picAddr} alt=""/>
                            </div>
                            <div className="right">
                                <h3 className="h3">{item.filmName}</h3>
                                <p className="p">上映：{item.openingDate}</p>
                                <p className="p">产地：{item.country}</p>
                                <p className="p">导演：{item.director}</p>
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
export default GroupStates(Coming,{
    reducer:"list",
    states: ["movies"]
})