import React,{Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import GroupState from "../../../../../../modules/group"
class Detail extends Component{
    componentDidMount(){
        this.props.addDetail(this.props.match.params.id)
    }
    renderDetail(){
        let goodDetail = this.props.goodDetail
        if(!goodDetail) return ""
        return (
            <div >
                {
                    <div>
                    <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{goodDetail.name}</NavBar>
                <div className="img-box">
                    <img className="img"  src={'http://movie.miguvideo.com/'+goodDetail.imgSrc1} alt=""/>
                </div>
                <div className="movie-info">
                    <div className="pull-left">
                        <img src={'http://movie.miguvideo.com/'+goodDetail.imgSrc} alt=""/>
                    </div>
                    <div className="movie-info-list">
                        <div className="actor-title">
                            {goodDetail.name}
                        </div>
                        <div className="left">
                            <p className="movie-text-list a">{goodDetail.DetailType}</p>
                            <p className="movie-text-list d">{goodDetail.region}</p>
                            <p className="movie-text-list c">{goodDetail.time}</p>
                        </div>
                    </div>
                </div>
                    <div className="describe">{goodDetail.describe}</div>
                    <p className="list-title clearfix">
                            <span>演职人员</span>
                        </p> 
                </div>
                
                }
            </div>
        )
    }
    renderActor(){
        let personnel = this.props.personnel
        if(!personnel)return ""
        return(
            <div>
                {
                    personnel.map(item=>{
                        return (
                            <div className="actor"
                        key={item.starid} > 
                    <img  src={'http://movie.miguvideo.com/'+item.imgSrc} alt=""/>
                    <p className="name">{item.name}</p>
                    </div>  
                        )
                    })
                }
            </div>
        )
    }
    render(){
        return (
            <div className="moviedetail">
                {this.renderDetail()}
                {this.renderActor()}
            </div>
        )
    }
}

export default GroupState(Detail,{
    reducer:"home",
    states:["goodDetail","personnel"]
});