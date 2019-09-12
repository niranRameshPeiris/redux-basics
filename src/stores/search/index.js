import {createStore} from "redux";

const initialSate ={
    repos:[],
    text:''
};

const reducer = (state = initialSate, action) =>{
    console.log('red...',action)

    switch (action.type){
        case 'CHANGE':
            return Object.assign({},state,{text:action.text});
        case 'SEARCH':
            return Object.assign({},state,{repos:action.repos});
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;