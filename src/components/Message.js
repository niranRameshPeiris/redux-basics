import React from 'react';
import {connect} from 'react-redux'

function Message(props){
    return (
        <div>
            <h1>I am mirror!</h1>
            <input value={props.text} type="text" onChange={props.onTextChange} name="text"/>
            <p>{props.text}</p>
        </div>
    )
}

function mapStateToProps(state){
    console.log('here....',state)
    return {
        text: state.text
    }
}

function mapDispatchToProps(dispatch){
    return {
        onTextChange: (evt) =>{
            console.log('clicking')
            const action ={type:'CHANGE',text:evt.target.value};
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);