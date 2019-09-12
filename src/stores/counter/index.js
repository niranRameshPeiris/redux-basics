import {createStore} from "redux";

const initialSate ={
    count:8
};

const reducer = (state = initialSate, action) =>{
    console.log('red...',action)

    switch (action.type){
        case 'INCREMENT':
            return Object.assign({},state,{count:state.count+1});
        case 'DECREMENT':
            return Object.assign({},state,{count:state.count-1});
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;