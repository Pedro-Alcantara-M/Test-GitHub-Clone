import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useStateValue} from '../context/state'
import Styled from 'styled-components'
import Aside from '../components/aside'


const Home = () => {
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState()
  const { avatar_url, name, login, public_repos, followers, following } = state.user

  useEffect(() => {
    axios.get('https://api.github.com/users/Pedro-Alcantara-M')
    .then(res => {
      dispatch({
        type: 'changeUser',
        payload: res.data
      })
      setUser(res.data)
    })
  }, [setUser])

 

  return (
    <Container>
      <Aside
      avatar={avatar_url}
      name={name}
      login={login}
      followers={followers}
      following={following}
      repoStarred="2"

      />
    </Container>  
  )
}


const Container = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  margin-top: 32px;
`;


export default Home





