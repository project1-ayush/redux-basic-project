import React from 'react';
import {connect} from 'react-redux';
class Child extends React.Component
{
    handleBtn=()=>{
        this.props.dispatch({
            type:'Citychange',
            payload:'Mumbai'
        })
    }
    render()
    {
        console.log("render");
        return(
        <div>
             <h2>{this.props.state.city}</h2>
             <button onClick={this.handleBtn}>Click</button>
        </div>)  
    }
}

function mapStateToProps(state)
{
    console.log("mstp");
    console.log(state);

   // const {city}=state;//destructuring

    return {state:state}
}
export default connect(mapStateToProps)(Child);