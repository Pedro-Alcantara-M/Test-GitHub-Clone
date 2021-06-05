import axios from 'axios';

const loadUser = (dispatch) => {
  let user = localStorage.getItem('login');

  getUserData(user, dispatch);
  getUserRepos(user, dispatch);
  getUserStarred(user, dispatch);
}

const getUserData = (user, dispatch) => {
  axios.get('https://api.github.com/users/' + user)
    .then(res => {
      dispatch({ type: 'ChangeUser', payload: res.data });
    }) 
}

const getUserRepos = (user, dispatch) => {
  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(res =>{
      dispatch({ type: "Repository", payload: res.data });
    })
}

const getUserStarred = (user, dispatch) => {
  axios.get(`https://api.github.com/users/${user}/starred`)
    .then(res =>{
      dispatch({ type: "Starred", payload: res.data });
    })
}

export default loadUser;