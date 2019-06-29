import React,{Component} from "react";
import "./index.scss";
import GruopState from "../../../../modules/group"

class NavBar extends Component{
    componentDidMount(){
        let {findnavbars} = this.props;
        if(findnavbars){
            return false;
        }
        this.props.findBannersInfo()
    }
    renderItem(){
        let {findnavbars} = this.props;
        if(!findnavbars) return "";
        return findnavbars.map(item => {
                return (
                    <div key={item.enter_id} className="item">
                        <img src={"http://movie.miguvideo.com/publish/i_www/"+item.imgSrc} alt=""/>
                        <span>{item.name}</span>
                    </div>
                )
            })
        
    }
    render(){
        return(
            <div className="findnavbar">
                <div className="navbar">
                    {
                        this.renderItem()
                    }
                </div>
            </div>
        )
    }
}

export default GruopState(NavBar,{
    reducer:"home",
    states:["findnavbars"]
});