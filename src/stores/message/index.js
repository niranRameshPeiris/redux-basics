import {createStore} from "redux";

const initialSate ={
    text:''
};

const reducer = (state = initialSate, action) =>{
    console.log('red...',action)

    switch (action.type){
        case 'CHANGE':
            return Object.assign({},state,{text:action.text});
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;