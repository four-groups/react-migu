import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "./actionCreators"
/* export default HomeGroup(Banner,{
    reducer:"home",
    states:["banners"]
}); */

const GroupState = (UIComponent,options)=>{
    return connect(state=>{
        // if(options.states){
        //     let states = options.states;
        // }
        let {reducer,states} = options;//reducer:home
        
       let _state = {};
       states.forEach(item=>{//item="banners"
       _state[item] = state.getIn([reducer, item])
   })
       return _state;//{banners:state.getIn([reducer,item])}
    },dispatch=>{
        return bindActionCreators(actionCreators[options.reducer],dispatch);
    })(UIComponent)
}

export default GroupState;