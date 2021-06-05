const userlogin = () => {
  let accountUser = localStorage.getItem('login');

  if (!accountUser) {
    return false;
  }

  return true;
}

const userLogout = (dispatch, setLogout) => {
  localStorage.removeItem('login');
 
  dispatch({ type: 'ChangeUser', payload: {} });
  dispatch({ type: "Repository", payload: [] });
  dispatch({ type: "Starred", payload: [] });

  setLogout(true);
}
 
export { userlogin, userLogout };