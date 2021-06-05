
const userlogin = () => {
  let accountUser = localStorage.getItem('login')

  if (accountUser) {
    return localStorage.getItem('login')
  }
}
 export default userlogin