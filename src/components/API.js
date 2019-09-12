import axios from 'axios'

function getRepos(dispatch,query){
    fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        dispatch({type:'SEARCH',repos:data.items})
    })
}

function getReposAxios(dispatch,query){
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
    .then(function(response){
        dispatch({type:'SEARCH',repos:response.data.items})
    })
}

export default{
    getRepos,getReposAxios
}