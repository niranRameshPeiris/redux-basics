import React from 'react';
import {connect} from 'react-redux'
import Api from './API'

function RepoSearch(props){
    return (
        <div>
        <form onSubmit={(evt) => props.handelSubmit(evt,props.text)}>
            <h1>search</h1>
            <input value={props.text} type="text" onChange={props.onTextChange} name="text"/>
            <ul>{props.repos.map((repo)=>{
                return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
            })}</ul>
        </form>
        </div>
    )
}

function mapStateToProps(state){
    console.log('here....',state)
    return {
        text: state.text,
        repos:state.repos
    }
}

function mapDispatchToProps(dispatch){
    return {
        onTextChange: (evt) =>{
            console.log('clicking')
            const action ={type:'CHANGE',text:evt.target.value};
            dispatch(action)
        },
        handelSubmit:(evt,query)=>{
            evt.preventDefault();
            //using fetch
            //Api.getRepos(dispatch,query)
            //from axios
            Api.getReposAxios(dispatch,query)
            console.log('submitted')
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RepoSearch);